<template>
<v-stepper v-model="stepStage" :alt-labels="!isMobile" :vertical="isMobile" v-resize="handleResize" >
  <div v-show="!isMobile">
      <v-stepper-header>
        <template v-for="(item,index) in steps">
          <v-stepper-step
            :complete="isStepComplete(index)"
            :key="`${index}-step`"
            :step="index+1"   
            :editable="item.nonLinear && !isPersisted()"           
          >{{ item.label }}
          </v-stepper-step>
          <v-divider
            v-if="!isMobile && index !== steps.length"
            :key="index"
          ></v-divider>          
        </template>
      </v-stepper-header>
      <v-container v-for="(item,index) in steps" :key="index"  v-show="currentStep==index && !isMobile">
            <v-flex><portal-target :name="`portal-desk-${index}`" :key="index" slim></portal-target></v-flex>
      </v-container>      
      <v-layout :style="{backgroundColor:theme.actionBarBgColor}" :justify-space-between="!currentStepOptions.hidePrevious" justify-end>        
          <v-btn outline round :color="theme.backButtonBgColor" v-if="!currentStepOptions.hidePrevious" flat @click="backStep()">{{currentStepOptions.previousStepLabel || labelDefaults.previousStepLabel}}</v-btn>
          <v-btn round v-if="!currentStepOptions.hideNext" @click="nextStep()" :color="theme.nextButtonBgColor">{{currentStepOptions.nextStepLabel || labelDefaults.nextStepLabel}}</v-btn>
      </v-layout>
  </div>
  <div v-show="isMobile">
    <template v-for="(item,index) in steps">
      <v-stepper-step
            :complete="isStepComplete(index)"
            :key="`${index}-step-mobile`"
            :step="index+1"       
            :editable="item.nonLinear && !isPersisted()"         
      >{{ item.label }}
      </v-stepper-step>
      <v-container :key="`${index}-stepContent-mobile`" v-show="currentStep==index && isMobile">
          <portal-target :name="`portal-mobile-${index}`" :key="index" slim></portal-target>
      </v-container>      
      <v-layout v-show="isMobile && currentStep==index" color="actionBarBgColor" :key="`${index}-stepActions-mobile`" :justify-space-between="!getStepOptions(index).hidePrevious" justify-end>        
          <v-btn outline round :color="theme.backButtonBgColor" v-if="!getStepOptions(index).hidePrevious" flat @click="backStep()">{{getStepOptions(index).previousStepLabel || labelDefaults.previousStepLabel}}</v-btn>
          <v-btn round v-if="!getStepOptions(index).hideNext" @click="nextStep()" :color="theme.nextButtonBgColor">{{getStepOptions(index).nextStepLabel || labelDefaults.nextStepLabel}}</v-btn>
      </v-layout>      
      <v-divider v-if="index !== steps.length" :key="index"></v-divider>  
    </template>
  </div>  
  <template v-for="(item, index) in steps">
    <portal :to="portalName(index)" :key="index">
      <slot :name="item.slot"></slot>
    </portal>
  </template>
</v-stepper>
</template>

<script>
export default {
    name: 'vuetify-simple-wizard',
    props: {
      labelDefaults: {
        type: Object,
        default: () => {
          return {
            previousStepLabel: 'Back',
            nextStepLabel: 'Next'
          }
        }
      },
      steps: {},
      onNext: {},
      onBack: {},
      isPersisted: {
        type: Function,
        default: () => {return false;}
      },
      mobileBreakpoint: {default: 960},
      theme: {
        type: Object,
        default: () => {
          return {
            actionBarBgColor: '#E0E0E0',
            nextButtonBgColor: 'primary',
            backButtonBgColor: ''
            }
        }
      },
      developer: {
        type: Object,
        default: () => {
          return {verboseLogging:false,logger:null}
        }
      }
    },
    data () {
      return {       
        stepStage:0, 
        currentStep: 0,
        isMobile:false,
        currentStepOptions: {}
      }
    },
    computed: {
      portalName() {
        return (index) => {
          const section = this.isMobile ? 'mobile' : 'desk';
          return `portal-${section}-${index}` 
        }
      }
    },
    watch: {
      stepStage: function() {
        this.currentStep = this.stepStage-1;
      },
      currentStep: function() {
        this.currentStepOptions = this.steps[this.currentStep].options || {};
      }
    },
    mounted() {
      this.currentStepOptions = this.steps[this.currentStep].options || {};
      this.isMobile = this.isMobileCheck();
      const userDefinedTheme = this.$vuetify.theme;
      this.theme.actionBarBgColor = userDefinedTheme.actionbar || this.theme.actionBarBgColor;
      this.theme.nextButtonBgColor = userDefinedTheme.nextbuttonBackground || this.theme.nextButtonBgColor;
      this.theme.backButtonBgColor = userDefinedTheme.backbuttonBackground || this.theme.backButtonBgColor;
      this.log('theme values:'+this.theme);
      this.$forceUpdate();
    },
    methods: {
      getStepOptions(stepIndex) {
        const options = this.steps[stepIndex].options || {};
        return options;
      },
      nextStep (skipFunction) {
        if (!skipFunction && typeof this.onNext == 'function'){
          if(!this.onNext(this.currentStep)) {
            //returned false. don't do anything
            return;
          }
        }
        if (this.currentStep < this.steps.length-1) {
          this.currentStep++;
          this.stepStage++;
        }
      },  
      backStep (skipFunction) {
        if (!skipFunction && typeof this.onBack == 'function'){
          if(!this.onBack(this.currentStep)) {
            //returned false. don't do anything
            return;
          }
        }
        if (this.currentStep > 0) {
          this.currentStep--;
          this.stepStage--;
        }
      },
      handleResize() {
        this.log('resizing...');
        this.isMobile = this.isMobileCheck();
        this.stepStage = this.currentStep+1;
        this.$forceUpdate();
        this.log('resize stepstage:'+this.stepStage)
      },
      isMobileCheck() {
        // if(/Android|webOS|iPhone||iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        //   this.log('useragent : '+navigator.userAgent)
        //   return true
        // } 
        // else 
        if(window.innerWidth < 960){
          return true
        }
        else {
          return false
        }
      },
      isStepComplete(stepIndex) {
        const currentStep = this.steps[stepIndex];
        return (currentStep.isStepComplete && currentStep.isStepComplete()) 
        || (!currentStep.isStepComplete && this.currentStep > stepIndex);
      },
      log(message) {
        if(this.developer.verboseLogging) {
          if(this.developer.logger && typeof this.developer.logger == 'function') 
            this.developer.logger(message);
          else
            console.log(message);
        }
      }
 
    }
  }
</script>

<style>

</style>
