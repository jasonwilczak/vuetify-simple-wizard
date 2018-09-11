<template>
  <v-app>
    <vuetify-simple-wizard
      ref="wizard"
      :steps="steps"
      :onNext="nextClicked" 
      :onBack="backClicked"
      >
      <div slot="page1">
        <h4>Step 1</h4>
        <input
        id="step1"
        v-model="step1"
        rows="15"
        >
        </input>
      </div>
      <div slot="page2">
        <h4>Step 2</h4>
        <input
        id="step2"
        v-model="step2"
        rows="15"
        >
        </input>
      </div>
      <div slot="page3">
        <h4>Step 3</h4>
      </div>
      <div slot="page4">
        <h4>Step 3</h4>
      </div>
      <div slot="page5">
        <h4>Step 3</h4>
      </div>
      <div slot="page6">
        <h4>Step 3</h4>
      </div>
      <div slot="page7">
        <h4>Step 3</h4>
      </div>
      <div slot="pageDone">
        <h2>Congratulations!  You can leave now...</h2>
      </div>
    </vuetify-simple-wizard>
  </v-app>
</template>

<script>

export default {
  name: 'simplewizard-demo',
  data(){
    return {
      step1:'',
      step2:'',
      steps: [
        {
          label: 'Select Items',
          slot: 'page1',
          options: {
            hidePrevious: true
          }          
        },
        {
          label: 'Add Constraints',
          slot: 'page2',
          options: {
            previousStepLabel: 'Left',
            nextStepLabel: 'Right'
          }
        },
        {
          label: 'Twist Gears',
          slot: 'page3',
        },
        {
          label: 'Define Terrain',
          slot: 'page4',
        },
        {
          label: 'Hire Trolls',
          slot: 'page5',
        },
        {
          label: 'Move Rocks',
          slot: 'page6',
        },
        {
          label: 'Review',
          slot: 'page7',
        },
        {
          label: 'Apply',
          slot: 'page8',
          options: {
            nextStepLabel: 'Save'
          }
        },
        {
          label: 'Complete',
          slot: 'pageDone',
          options: {
            hidePrevious: true,
            hideNext: true,
          }
        }
      ]
    };
  },
  methods: {
    nextClicked(currentPage) {
      console.log('next clicked', currentPage)
      return true; //return false if you want to prevent moving to next page
    },
    backClicked(currentPage) {
      console.log('back clicked', currentPage);
      return true; //return false if you want to prevent moving to previous page
    }
  }
};
</script>


