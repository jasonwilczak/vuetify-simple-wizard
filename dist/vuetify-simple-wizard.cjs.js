/**
 * vuetify-simple-table v1.0.0
 * https://github.com/jasonwilczak/vuetify-simple-wizard
 * Released under the MIT License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " /*# sourceMappingURL=SimpleWizard.vue.map */";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var SimpleWizard = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('v-stepper', { attrs: { "alt-labels": !_vm.isMobile, "vertical": _vm.isMobile }, model: { value: _vm.stepStage, callback: function ($$v) {
          _vm.stepStage = $$v;
        }, expression: "stepStage" } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: !_vm.isMobile, expression: "!isMobile" }] }, [_c('v-stepper-header', [_vm._l(_vm.steps, function (item, index) {
      return [_c('v-stepper-step', { key: (index + "-step"), attrs: { "complete": _vm.currentStep > index, "step": index + 1 } }, [_vm._v(_vm._s(item.label) + " ")]), _vm._v(" "), !_vm.isMobile && index !== _vm.steps.length ? _c('v-divider', { key: index }) : _vm._e()];
    })], 2), _vm._v(" "), _c('v-stepper-items', _vm._l(_vm.steps, function (item, index) {
      return _c('v-stepper-content', { key: index, attrs: { "step": index + 1 } }, [[_vm._t(item.slot)]], 2);
    })), _vm._v(" "), _c('v-layout', { class: _vm.theme.actionBarBgColor, attrs: { "justify-space-between": !_vm.currentStepOptions.hidePrevious, "justify-end": "" } }, [!_vm.currentStepOptions.hidePrevious ? _c('v-btn', { attrs: { "flat": "" }, on: { "click": function ($event) {
          _vm.backStep();
        } } }, [_vm._v(_vm._s(_vm.currentStepOptions.previousStepLabel || _vm.previousStepLabel))]) : _vm._e(), _vm._v(" "), !_vm.currentStepOptions.hideNext ? _c('v-btn', { attrs: { "color": "primary" }, on: { "click": function ($event) {
          _vm.nextStep();
        } } }, [_vm._v(_vm._s(_vm.currentStepOptions.nextStepLabel || _vm.nextStepLabel))]) : _vm._e()], 1)], 1), _vm._v(" "), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.isMobile, expression: "isMobile" }] }, [_vm._l(_vm.steps, function (item, index) {
      return [_c('v-stepper-step', { key: (index + "-step-mobile"), attrs: { "complete": _vm.currentStep > index, "step": index + 1 } }, [_vm._v(_vm._s(item.label) + " ")]), _vm._v(" "), _c('v-stepper-content', { key: (index + "-stepContent-mobile"), attrs: { "step": index + 1 } }, [[_vm._t(item.slot)]], 2), _vm._v(" "), _c('v-layout', { key: (index + "-stepActions-mobile"), class: _vm.theme.actionBarBgColor, attrs: { "justify-space-between": !_vm.getStepOptions(index).hidePrevious, "justify-end": "" } }, [!_vm.getStepOptions(index).hidePrevious ? _c('v-btn', { attrs: { "flat": "" }, on: { "click": function ($event) {
            _vm.backStep();
          } } }, [_vm._v(_vm._s(_vm.getStepOptions(index).previousStepLabel || _vm.previousStepLabel))]) : _vm._e(), _vm._v(" "), !_vm.getStepOptions(index).hideNext ? _c('v-btn', { attrs: { "color": "primary" }, on: { "click": function ($event) {
            _vm.nextStep();
          } } }, [_vm._v(_vm._s(_vm.getStepOptions(index).nextStepLabel || _vm.nextStepLabel))]) : _vm._e()], 1), _vm._v(" "), index !== _vm.steps.length ? _c('v-divider', { key: index }) : _vm._e()];
    })], 2)]);
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
    onBack: {},
    mobileBreakpoint: { default: 960 },
    theme: {
      type: Object,
      default: function () {
        return { actionBarBgColor: 'grey lighten-2' };
      }
    }
  },
  data: function data() {
    return {
      stepStage: 0,
      currentStep: 0,
      isMounted: false,
      resizer: null,
      isMobile: false,
      stepHeaders: [],
      currentStepOptions: {}
    };
  },
  computed: {},
  watch: {
    stepStage: function () {
      this.currentStep = this.stepStage - 1;
    },
    currentStep: function () {
      this.currentStepOptions = this.steps[this.currentStep].options || {};
    }
  },
  mounted: function mounted() {
    this.currentStepOptions = this.steps[this.currentStep].options || {};
    this.isMobile = this.isMobileCheck();

    window.addEventListener('resize', this.handleResize);
    this.stepStage = this.currentStep + 1;
    console.log(this.stepStage);
  },
  methods: {
    getStepOptions: function getStepOptions(stepIndex) {
      var options = this.steps[stepIndex].options || {};
      return options;
    },
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
      this.isMobile = this.isMobileCheck();
      this.stepStage = this.currentStep + 1;
      this.$forceUpdate();
      console.log('resize stepstage:' + this.stepStage);
    },
    isMobileCheck: function isMobileCheck() {
      // if(/Android|webOS|iPhone||iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      //   console.log('useragent : '+navigator.userAgent)
      //   console.log('useragenttest : '+/Android|webOS|iPhone||iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
      //   return true
      // } else if(window.innerWidth < 960){
      if (window.innerWidth < 960) {
        return true;
      } else {
        return false;
      }
    }
  }
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
