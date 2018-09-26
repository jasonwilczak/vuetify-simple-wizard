<template>
<v-stepper v-model="stepStage" :alt-labels="!isMobile" >
      <v-stepper-header>
        <template v-for="(item,index) in steps">
          <v-stepper-step
            ref="stepHeaders"
            :complete="stepStage > index+1"
            :key="`${index}-step`"
            :step="index+1"   
            v-show="!isMobile || (isMobile && stepStage === index+1)"            
          >{{ item.label }}
          </v-stepper-step>
          <v-divider
            v-if="!isMobile && index !== steps.length"
            :key="index"
          ></v-divider>          
        </template>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content v-for="(item,index) in steps" :key="index" :step="index+1">
          <slot :name="item.slot"></slot>
        </v-stepper-content>
      </v-stepper-items>
      <v-layout>        
          <v-btn v-if="!currentStepOptions.hidePrevious" flat @click="backStep()">{{currentStepOptions.previousStepLabel || previousStepLabel}}</v-btn>
          <v-btn v-if="!currentStepOptions.hideNext" @click="nextStep()" color="primary">{{currentStepOptions.nextStepLabel || nextStepLabel}}</v-btn>
      </v-layout>
    </v-stepper>
</template>

<script>
export default {
    name: 'vuetify-simple-wizard',
    props: {
      completeStep: {
        type: Object,
        default: () => {
          return {has:false,showButton:false,label:'Done'};
        }
      },
      previousStepLabel: {default: 'Back'},
      nextStepLabel: {default: 'Next'},
      steps: {},
      onNext: {},
      onBack: {}
    },
    data () {
      return {        
        stepStage:1,
        currentStep: 0,
        isMounted: false,
        resizer: null,
        isMobile:false,
        stepHeaders:[],
        currentStepOptions: {},
        mobileBreakpoint: 960
      }
    },
    computed: {
      currentSlot() {
        debugger;
        var slot = this.steps[this.currentStep].slot;
        console.log('current label:'+slot.label)
        return slot;
      }
    },
    watch: {
      stepStage: function() {
        this.currentStep = this.stepStage-1;
      },
      currentStep: function() {
        debugger;
        console.log('current step:'+this.currentStep);
        console.log(this.steps[this.currentStep]);
        this.currentStepOptions = this.steps[this.currentStep].options || {};
      }
    },
    mounted() {
      this.currentStepOptions = this.steps[this.currentStep].options || {};
      console.log(this.currentStep+':'+JSON.stringify(this.currentStepOptions));
      console.log(this.steps);
      this.isMobile = window.innerWidth < this.mobileBreakpoint;
      window.addEventListener('resize', this.handleResize)
    },
    methods: {
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
        debugger;
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
        console.log('resizing...');
        this.isMobile = window.innerWidth < this.mobileBreakpoint;
        console.log('ismobile:'+this.isMobile);
      }
    }
  }

//   computed: {
//     wizardStepStyle() {
//       if (this.isMobile) {
//         return {
//           width: '100%',
//         };
//       }

//       return {
//         width: `${100/this.steps.length}%`,
//       };
//     },
//     mobileArrowPosition() {
//       return 'calc(50% - 14px)';
//     },
//     arrowPosition() {
//       if (this.isMobile) {
//         return this.mobileArrowPosition;
//       }
//       var stepSize = 100/this.steps.length;
//       var currentStepStart = stepSize * this.currentStep;
//       var currentStepMiddle = currentStepStart + (stepSize/2);
//       if(this.steps.length == 1)
//         return 'calc('+currentStepMiddle+'%)'
//       else
//         return 'calc('+currentStepMiddle+'% - 14px)'
//     },
//   },

//     handleResize() {
//       console.log('handle resize')
//       if (this.resizer) {
//         clearTimeout(this.resizer);
//       }
//       this.resizer = setTimeout(() => {
//         console.log('resizing...');
//         this.isMobile = this.$refs['wizard-body'].clientWidth < 620;
//       }, 100);
//     },

//   },
//   mounted() {
//     this.isMobile = this.$refs['wizard-body'].clientWidth < 620;
//     window.addEventListener('resize', this.handleResize)
//   },
//   beforeDestroy() {
//     window.removeEventListener('resize', this.handleResize)
//   }
// };
</script>

<style>
div.v-stepper__step--active > div.v-stepper__label {
  display:block !important;
  margin-left: 1rem;
}
/* .step-header-mobile {
  display:block !important;
}
.v-stepper__label {
  display:block !important;
} */
</style>
