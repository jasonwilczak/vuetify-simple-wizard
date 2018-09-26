/**
 * vuetify-simple-table v1.0.0
 * https://github.com/jasonwilczak/vuetify-simple-wizard
 * Released under the MIT License.
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.vuetifySimpleWizard = {})));
}(this, (function (exports) { 'use strict';

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " div.v-stepper__step--active > div.v-stepper__label { display:block !important; margin-left: 1rem; } /* .step-header-mobile { display:block !important; } .v-stepper__label { display:block !important; } */ ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var SimpleWizard = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('v-stepper', { attrs: { "alt-labels": !_vm.isMobile }, model: { value: _vm.stepStage, callback: function ($$v) {
          _vm.stepStage = $$v;
        }, expression: "stepStage" } }, [_c('v-stepper-header', [_vm._l(_vm.steps, function (item, index) {
      return [_c('v-stepper-step', { directives: [{ name: "show", rawName: "v-show", value: !_vm.isMobile || _vm.isMobile && _vm.stepStage === index + 1, expression: "!isMobile || (isMobile && stepStage === index+1)" }], key: (index + "-step"), ref: "stepHeaders", refInFor: true, attrs: { "complete": _vm.stepStage > index + 1, "step": index + 1 } }, [_vm._v(_vm._s(item.label) + " ")]), _vm._v(" "), !_vm.isMobile && index !== _vm.steps.length ? _c('v-divider', { key: index }) : _vm._e()];
    })], 2), _vm._v(" "), _c('v-stepper-items', _vm._l(_vm.steps, function (item, index) {
      return _c('v-stepper-content', { key: index, attrs: { "step": index + 1 } }, [_vm._t(item.slot)], 2);
    })), _vm._v(" "), _c('v-layout', [!_vm.currentStepOptions.hidePrevious ? _c('v-btn', { attrs: { "flat": "" }, on: { "click": function ($event) {
          _vm.backStep();
        } } }, [_vm._v(_vm._s(_vm.currentStepOptions.previousStepLabel || _vm.previousStepLabel))]) : _vm._e(), _vm._v(" "), !_vm.currentStepOptions.hideNext ? _c('v-btn', { attrs: { "color": "primary" }, on: { "click": function ($event) {
          _vm.nextStep();
        } } }, [_vm._v(_vm._s(_vm.currentStepOptions.nextStepLabel || _vm.nextStepLabel))]) : _vm._e()], 1)], 1);
  }, staticRenderFns: [],
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
      stepHeaders: [],
      currentStepOptions: {},
      mobileBreakpoint: 960
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
  },
  mounted: function mounted() {
    this.currentStepOptions = this.steps[this.currentStep].options || {};
    console.log(this.currentStep + ':' + JSON.stringify(this.currentStepOptions));
    console.log(this.steps);
    this.isMobile = window.innerWidth < this.mobileBreakpoint;
    window.addEventListener('resize', this.handleResize);
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
    },
    handleResize: function handleResize() {
      console.log('resizing...');
      this.isMobile = window.innerWidth < this.mobileBreakpoint;
      console.log('ismobile:' + this.isMobile);
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

exports['default'] = SimpleWizardPlugin;
exports.SimpleWizard = SimpleWizard;

Object.defineProperty(exports, '__esModule', { value: true });

})));
