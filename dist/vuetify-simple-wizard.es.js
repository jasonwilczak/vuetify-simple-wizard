/**
 * vuetify-simple-table v1.0.0
 * https://github.com/jasonwilczak/vuetify-simple-wizard
 * Released under the MIT License.
 */

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " /* Utilities *******************************/ .pull-left[data-v-94fcd566]{ float: left !important; } .pull-right[data-v-94fcd566]{ float: right !important; } .clearfix[data-v-94fcd566]::after { display: block; content: \"\"; clear: both; } /* Header Steps *******************************/ .wizard[data-v-94fcd566] { position: relative; width: 100%; } .wizard__steps[data-v-94fcd566]{ list-style-type: none; text-align: justify; -ms-text-justify: distribute-all-lines; text-justify: distribute-all-lines; padding: 0; height: 70px; position: relative; } .stretch[data-v-94fcd566] { width: 100%; display: inline-block; font-size: 0; line-height: 0 } .wizard__step[data-v-94fcd566]{ height: 70px; vertical-align: bottom; display: inline-block; text-align: center; position: relative; } .wizard__step:not(:first-child) .wizard__step__line[data-v-94fcd566]{ position: absolute; width: 100%; left: -50%; bottom: 12px; height: 3px; background-color: #b9c7d2; } .wizard__step__indicator[data-v-94fcd566]{ box-sizing: content-box; display: block; width: 16px; height: 16px; background-color: #51abe4; border-radius: 50%; border: 3px solid #fff; position: absolute; left: 50%; margin-left: -10px; bottom: 2px; z-index: 1; } .wizard__step.active .wizard__step__indicator[data-v-94fcd566]{ background-color: #6eb165; } .wizard__step.active:not(:first-child) .wizard__step__line[data-v-94fcd566]{ background-color: #6eb165; /* green */ } .wizard__step__label[data-v-94fcd566]{ color: #98a4af; font-weight: bold; } /* Wizard body *******************************/ .wizard__body[data-v-94fcd566]{ margin-top: 30px; min-height: 400px; margin-left: 50px; margin-right: 50px; border: 1px solid #aebac4; background-color: #fff; position: relative; border-radius: 5px; padding-bottom: 50px; } .wizard__body__step[data-v-94fcd566]{ padding: 16px; } .wizard__arrow[data-v-94fcd566]{ position: absolute; display: block; width: 30px; height: 30px; border: 1px solid #aebac4; top: 85px; /* height of step + body margin -15 */ border-top-right-radius: 5px; background-color: #fff; border-left: none; border-bottom: none; transform: rotate(-45deg); z-index: 2; -webkit-transition: left 0.3s; -o-transition: left 0.3s; transition: left 0.3s; } /* Wizard body *******************************/ .wizard__body__actions[data-v-94fcd566]{ position: absolute; bottom: 0px; height: 50px; width: 100%; border-top: 1px solid #aebac4; background-color: #b9c7d2; } .wizard__body__actions a[data-v-94fcd566]{ width: 120px; height: 100%; display: block; background-color: #51abe4; color: white; font-weight: bold; text-align: center; line-height: 50px; cursor: pointer; -webkit-transition: background-color 0.3s; -o-transition: background-color 0.3s; transition: background-color 0.3s; } .wizard__body__actions a.disabled[data-v-94fcd566]{ cursor: not-allowed; -webkit-touch-callout: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; opacity: 0.5; } .wizard__body__actions a>.vgw-icon[data-v-94fcd566], .wizard__body__actions a>span[data-v-94fcd566]{ display: inline-block; vertical-align: middle; position: relative; } .wizard__body__actions .vgw-icon[data-v-94fcd566]::after{ position: absolute; content: \"\"; transform: rotate(-45deg); width: 8px; height: 8px; top: 50%; margin-top: -5px; } .vgw-icon.vgw-next[data-v-94fcd566]::after{ border-bottom: 2px solid white; border-right: 2px solid white; } .vgw-icon.vgw-prev[data-v-94fcd566]::after{ border-top: 2px solid white; border-left: 2px solid white; left: -10px; } .wizard__body__actions a[data-v-94fcd566]:hover{ background-color: #357fae; } .wizard__body__actions a.final-step[data-v-94fcd566]{ background-color: #6eb165; } .wizard__body__actions a.complete-step[data-v-94fcd566]{ background-color: #2C7520; } /* mobile */ .wizard__body.vgw-mobile[data-v-94fcd566]{ margin-left: 10px; margin-right: 10px; } .wizard__step.vgw-mobile[data-v-94fcd566]{ display: none; } .wizard__step .wizard__step__line.vgw-mobile[data-v-94fcd566]{ display: none; } .wizard__step.active.vgw-mobile[data-v-94fcd566]{ display: inline-block; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var SimpleWizard = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('v-stepper', { attrs: { "alt-labels": "" }, model: { value: _vm.stepStage, callback: function ($$v) {
          _vm.stepStage = $$v;
        }, expression: "stepStage" } }, [_c('v-stepper-header', [_vm._l(_vm.steps, function (item, index) {
      return [_c('v-stepper-step', { key: (index + "-step"), attrs: { "complete": _vm.stepStage > index + 1, "step": index + 1 } }, [_vm._v(_vm._s(item.label))]), _vm._v(" "), index !== _vm.steps.length ? _c('v-divider', { key: index }) : _vm._e()];
    })], 2), _vm._v(" "), _c('v-stepper-items', _vm._l(_vm.steps, function (item, index) {
      return _c('v-stepper-content', { key: index, attrs: { "step": index + 1 } }, [_vm._t(item.slot)], 2);
    })), _vm._v(" "), _c('v-layout', [!_vm.currentStepOptions.hidePrevious ? _c('v-btn', { attrs: { "flat": "" }, on: { "click": function ($event) {
          _vm.backStep();
        } } }, [_vm._v(_vm._s(_vm.currentStepOptions.previousStepLabel || _vm.previousStepLabel))]) : _vm._e(), _vm._v(" "), !_vm.currentStepOptions.hideNext ? _c('v-btn', { attrs: { "color": "primary" }, on: { "click": function ($event) {
          _vm.nextStep();
        } } }, [_vm._v(_vm._s(_vm.currentStepOptions.nextStepLabel || _vm.nextStepLabel))]) : _vm._e()], 1)], 1);
  }, staticRenderFns: [], _scopeId: 'data-v-94fcd566',
  name: 'vuetify-simple-wizard',
  props: {
    completeStep: {
      type: Object,
      default: function () {
        return { has: false, showButton: false, label: 'Done' };
      }
    },
    previousStepLabel: { default: 'Back' },
    nextStepLabel: { default: 'Next' },
    steps: {},
    onNext: {},
    onBack: {}
  },
  data: function data() {
    return {
      stepStage: 1,
      currentStep: 0,
      isMounted: false,
      resizer: null,
      isMobile: false,
      currentStepOptions: {}
    };
  },
  computed: {
    currentSlot: function currentSlot() {
      debugger;
      var slot = this.steps[this.currentStep].slot;
      console.log('current label:' + slot.label);
      return slot;
    }
  },
  watch: {
    stepStage: function () {
      this.currentStep = this.stepStage - 1;
    },
    currentStep: function () {
      debugger;
      console.log('current step:' + this.currentStep);
      console.log(this.steps[this.currentStep]);
      this.currentStepOptions = this.steps[this.currentStep].options || {};
    }
    // steps: {
    //   handler() {
    //     this.parseOptions();
    //   },
    //   immediate: true,
    // }
  },
  mounted: function mounted() {
    this.currentStepOptions = this.steps[this.currentStep].options || {};
    console.log(this.currentStep + ':' + JSON.stringify(this.currentStepOptions));
    console.log(this.steps);
    // this.isMobile = this.$refs['wizard-body'].clientWidth < 620;
    // window.addEventListener('resize', this.handleResize)
  },
  methods: {
    nextStep: function nextStep(skipFunction) {
      if (!skipFunction && typeof this.onNext == 'function') {
        if (!this.onNext(this.currentStep)) {
          //returned false. don't do anything
          return;
        }
      }
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
        this.stepStage++;
      }
    },
    backStep: function backStep(skipFunction) {
      debugger;
      if (!skipFunction && typeof this.onBack == 'function') {
        if (!this.onBack(this.currentStep)) {
          //returned false. don't do anything
          return;
        }
      }
      if (this.currentStep > 0) {
        this.currentStep--;
        this.stepStage--;
      }
    }
  }
  // export default {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-stepper',{attrs:{"alt-labels":""},model:{value:(_vm.stepStage),callback:function ($$v) {_vm.stepStage=$$v},expression:"stepStage"}},[_c('v-stepper-header',[_vm._l((_vm.steps),function(item,index){return [_c('v-stepper-step',{key:`${index}-step`,attrs:{"complete":_vm.stepStage > index+1,"step":index+1}},[_vm._v(_vm._s(item.label))]),_vm._v(" "),(index !== _vm.steps.length)?_c('v-divider',{key:index}):_vm._e()]})],2),_vm._v(" "),_c('v-stepper-items',_vm._l((_vm.steps),function(item,index){return _c('v-stepper-content',{key:index,attrs:{"step":index+1}},[_vm._t(item.slot)],2)})),_vm._v(" "),_c('v-layout',[(!_vm.currentStepOptions.hidePrevious)?_c('v-btn',{attrs:{"flat":""},on:{"click":function($event){_vm.backStep()}}},[_vm._v(_vm._s(_vm.currentStepOptions.previousStepLabel || _vm.previousStepLabel))]):_vm._e(),_vm._v(" "),(!_vm.currentStepOptions.hideNext)?_c('v-btn',{attrs:{"color":"primary"},on:{"click":function($event){_vm.nextStep()}}},[_vm._v(_vm._s(_vm.currentStepOptions.nextStepLabel || _vm.nextStepLabel))]):_vm._e()],1)],1)},staticRenderFns: [],_scopeId: 'data-v-94fcd566',

  //   name: 'vuetify-simple-wizard',

  //   props: {
  //     completeStep: {default:{has:false,showButton:false,label:'Done'}},
  //     steps: {},
  //     previousStepLabel: {default: 'Back'},
  //     nextStepLabel: {default: 'Next'},
  //     finalStepLabel: {default: 'Save'},
  //     onNext: {},
  //     onBack: {},
  //   },

  //   watch: {
  //     steps: {
  //       handler() {
  //         this.parseOptions();
  //       },
  //       immediate: true,
  //     }
  //   },

  //   data () {
  //     return {
  //       currentStep: 0,
  //       isMounted: false,
  //       resizer: null,
  //       isMobile: false,
  //       options: [],
  //       theme: {}
  //     };
  //   },
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
  //     currentSlot() {
  //       return this.steps[this.currentStep].slot;
  //     },
  //     backEnabled() {
  //       return this.currentStep != 0 && !this.isCompleteStep();
  //     }
  //   },
  //   methods: {
  //     goNext (skipFunction) {
  //       if (!skipFunction && typeof this.onNext == 'function'){
  //         if(!this.onNext(this.currentStep)) {
  //           //returned false. don't do anything
  //           return;
  //         }
  //       }
  //       if (this.currentStep < this.steps.length-1) {
  //         this.currentStep++;
  //       }
  //     },
  //     goBack (skipFunction) {
  //       if (!skipFunction && typeof this.onBack == 'function'){
  //         if(!this.onBack(this.currentStep)) {
  //           //returned false. don't do anything
  //           return;
  //         }
  //       }
  //       if (this.currentStep > 0) {
  //         this.currentStep--;
  //       }
  //     },

  //     goTo(step) {
  //       if (Number.isInteger(step)
  //         && step < this.steps.length
  //         && step >= 0) {
  //         this.currentStep = step;
  //       } 
  //     },

  //     parseOptions() {
  //       this.options = [];
  //       for(let i = 0; i < this.steps.length; i++) {
  //         this.options.push(this.steps[i].options ? this.steps[i].options : {});
  //       } 
  //     },

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
  //     isWizardStep() {
  //       const lastStepValue = this.completeStep.has ? this.steps.length - 2 : this.steps.length -1;
  //       if(lastStepValue < 0) console.log('Last step value was: '+lastStepValue);
  //       return this.currentStep <= lastStepValue;
  //     },
  //     isFinalStep() {
  //       const lastStepValue = this.completeStep.has ? this.steps.length - 2 : this.steps.length -1;
  //       if(lastStepValue < 0) console.log('Last step value was: '+lastStepValue);
  //       return this.currentStep == lastStepValue;
  //     },
  //     isCompleteStep() {
  //       const isCompleteStep = this.completeStep.has && this.currentStep ==this.steps.length - 1;
  //       console.log('checking for final step:'+isCompleteStep);
  //       return isCompleteStep;
  //     } 
  //   },
  //   mounted() {
  //     this.isMobile = this.$refs['wizard-body'].clientWidth < 620;
  //     window.addEventListener('resize', this.handleResize)
  //   },
  //   beforeDestroy() {
  //     window.removeEventListener('resize', this.handleResize)
  //   }
  // };

};

var SimpleWizardPlugin = {
  install: function (Vue, options) {
    Vue.component(SimpleWizard.name, SimpleWizard);
  }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(SimpleWizardPlugin);
}

export { SimpleWizard };
export default SimpleWizardPlugin;
