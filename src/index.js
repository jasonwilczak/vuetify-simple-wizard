import SimpleWizard from './components/SimpleWizard.vue';

var SimpleWizardPlugin = {
  install: function(Vue, options) {
    Vue.component(SimpleWizard.name, SimpleWizard);
  },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(SimpleWizardPlugin);
}

export default SimpleWizardPlugin;
export { SimpleWizard };
