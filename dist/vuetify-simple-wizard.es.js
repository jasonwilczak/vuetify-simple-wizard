/**
 * vuetify-simple-table v2.1.0
 * https://github.com/jasonwilczak/vuetify-simple-wizard
 * Released under the MIT License.
 */

import PortalVue from 'portal-vue';

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
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('v-stepper', { directives: [{ name: "resize", rawName: "v-resize", value: _vm.handleResize, expression: "handleResize" }], attrs: { "alt-labels": !_vm.isMobile, "vertical": _vm.isMobile }, model: { value: _vm.stepStage, callback: function ($$v) {
          _vm.stepStage = $$v;
        }, expression: "stepStage" } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: !_vm.isMobile, expression: "!isMobile" }] }, [_c('v-stepper-header', [_vm._l(_vm.steps, function (item, index) {
      return [_c('v-stepper-step', { key: (index + "-step"), attrs: { "complete": _vm.isStepComplete(index), "step": index + 1, "editable": item.nonLinear && !_vm.isPersisted() } }, [_vm._v(_vm._s(item.label) + " ")]), _vm._v(" "), !_vm.isMobile && index !== _vm.steps.length ? _c('v-divider', { key: index }) : _vm._e()];
    })], 2), _vm._v(" "), _vm._l(_vm.steps, function (item, index) {
      return _c('v-container', { directives: [{ name: "show", rawName: "v-show", value: _vm.currentStep == index && !_vm.isMobile, expression: "currentStep==index && !isMobile" }], key: index }, [_c('v-flex', [_c('portal-target', { key: index, attrs: { "name": ("portal-desk-" + index), "slim": "" } })], 1)], 1);
    }), _vm._v(" "), _c('v-layout', { style: { backgroundColor: _vm.theme.actionBarBgColor }, attrs: { "justify-space-between": !_vm.currentStepOptions.hidePrevious, "justify-end": "" } }, [!_vm.currentStepOptions.hidePrevious ? _c('v-btn', { attrs: { "outline": "", "round": "", "color": _vm.theme.backButtonBgColor, "flat": "" }, on: { "click": function ($event) {
          _vm.backStep();
        } } }, [_vm._v(_vm._s(_vm.currentStepOptions.previousStepLabel || _vm.labelDefaults.previousStepLabel))]) : _vm._e(), _vm._v(" "), !_vm.currentStepOptions.hideNext ? _c('v-btn', { attrs: { "round": "", "color": _vm.theme.nextButtonBgColor }, on: { "click": function ($event) {
          _vm.nextStep();
        } } }, [_vm._v(_vm._s(_vm.currentStepOptions.nextStepLabel || _vm.labelDefaults.nextStepLabel))]) : _vm._e()], 1)], 2), _vm._v(" "), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.isMobile, expression: "isMobile" }] }, [_vm._l(_vm.steps, function (item, index) {
      return [_c('v-stepper-step', { key: (index + "-step-mobile"), attrs: { "complete": _vm.isStepComplete(index), "step": index + 1, "editable": item.nonLinear && !_vm.isPersisted() } }, [_vm._v(_vm._s(item.label) + " ")]), _vm._v(" "), _c('v-container', { directives: [{ name: "show", rawName: "v-show", value: _vm.currentStep == index && _vm.isMobile, expression: "currentStep==index && isMobile" }], key: (index + "-stepContent-mobile") }, [_c('portal-target', { key: index, attrs: { "name": ("portal-mobile-" + index), "slim": "" } })], 1), _vm._v(" "), _c('v-layout', { directives: [{ name: "show", rawName: "v-show", value: _vm.isMobile && _vm.currentStep == index, expression: "isMobile && currentStep==index" }], key: (index + "-stepActions-mobile"), attrs: { "color": "actionBarBgColor", "justify-space-between": !_vm.getStepOptions(index).hidePrevious, "justify-end": "" } }, [!_vm.getStepOptions(index).hidePrevious ? _c('v-btn', { attrs: { "outline": "", "round": "", "color": _vm.theme.backButtonBgColor, "flat": "" }, on: { "click": function ($event) {
            _vm.backStep();
          } } }, [_vm._v(_vm._s(_vm.getStepOptions(index).previousStepLabel || _vm.labelDefaults.previousStepLabel))]) : _vm._e(), _vm._v(" "), !_vm.getStepOptions(index).hideNext ? _c('v-btn', { attrs: { "round": "", "color": _vm.theme.nextButtonBgColor }, on: { "click": function ($event) {
            _vm.nextStep();
          } } }, [_vm._v(_vm._s(_vm.getStepOptions(index).nextStepLabel || _vm.labelDefaults.nextStepLabel))]) : _vm._e()], 1), _vm._v(" "), index !== _vm.steps.length ? _c('v-divider', { key: index }) : _vm._e()];
    })], 2), _vm._v(" "), _vm._l(_vm.steps, function (item, index) {
      return [_c('portal', { key: index, attrs: { "to": _vm.portalName(index) } }, [_vm._t(item.slot)], 2)];
    })], 2);
  }, staticRenderFns: [],
  name: 'vuetify-simple-wizard',
  props: {
    labelDefaults: {
      type: Object,
      default: function () {
        return {
          previousStepLabel: 'Back',
          nextStepLabel: 'Next'
        };
      }
    },
    steps: {},
    onNext: {},
    onBack: {},
    isPersisted: {
      type: Function,
      default: function () {
        return false;
      }
    },
    scrollToTopOnStepChange: { default: true },
    mobileBreakpoint: { default: 960 },
    theme: {
      type: Object,
      default: function () {
        return {
          actionBarBgColor: '#E0E0E0',
          nextButtonBgColor: 'primary',
          backButtonBgColor: ''
        };
      }
    },
    developer: {
      type: Object,
      default: function () {
        return { verboseLogging: false, logger: null };
      }
    }
  },
  data: function data() {
    return {
      stepStage: 0,
      currentStep: 0,
      isMobile: false,
      currentStepOptions: {}
    };
  },
  computed: {
    portalName: function portalName() {
      var this$1 = this;

      return function (index) {
        var section = this$1.isMobile ? 'mobile' : 'desk';
        return ("portal-" + section + "-" + index);
      };
    }
  },
  watch: {
    stepStage: function () {
      this.currentStep = this.stepStage - 1;
      if (this.scrollToTopOnStepChange === true) { this.goToTopOnNext(); }
    },
    currentStep: function () {
      this.currentStepOptions = this.steps[this.currentStep].options || {};
    }
  },
  mounted: function mounted() {
    this.currentStepOptions = this.steps[this.currentStep].options || {};
    this.isMobile = this.isMobileCheck();
    var userDefinedTheme = this.$vuetify.theme;
    this.theme.actionBarBgColor = userDefinedTheme.actionbar || this.theme.actionBarBgColor;
    this.theme.nextButtonBgColor = userDefinedTheme.nextbuttonBackground || this.theme.nextButtonBgColor;
    this.theme.backButtonBgColor = userDefinedTheme.backbuttonBackground || this.theme.backButtonBgColor;
    this.log('theme values:' + this.theme);
    this.$forceUpdate();
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
      this.log('resizing...');
      this.isMobile = this.isMobileCheck();
      this.stepStage = this.currentStep + 1;
      this.$forceUpdate();
      this.log('resize stepstage:' + this.stepStage);
    },
    isMobileCheck: function isMobileCheck() {
      // if(/Android|webOS|iPhone||iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      //   this.log('useragent : '+navigator.userAgent)
      //   return true
      // } 
      // else 
      if (window.innerWidth < 960) {
        return true;
      } else {
        return false;
      }
    },
    isStepComplete: function isStepComplete(stepIndex) {
      var currentStep = this.steps[stepIndex];
      return currentStep.isStepComplete && currentStep.isStepComplete() || !currentStep.isStepComplete && this.currentStep > stepIndex;
    },
    log: function log(message) {
      if (this.developer.verboseLogging) {
        if (this.developer.logger && typeof this.developer.logger == 'function') { this.developer.logger(message); }else { console.log(message); }
      }
    },
    // When the user clicks on the button, scroll to the top of the document
    goToTopOnNext: function goToTopOnNext() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

  }
};

var SimpleWizardPlugin = {
  install: function (Vue, options) {
    Vue.use(PortalVue);
    Vue.component(SimpleWizard.name, SimpleWizard);
  }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(PortalVue);
  window.Vue.use(SimpleWizardPlugin);
}

export { SimpleWizard };
export default SimpleWizardPlugin;
