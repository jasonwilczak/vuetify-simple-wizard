<template>
  <v-app>
    <vuetify-simple-wizard
      ref="wizard"
      :steps="steps"
      :onNext="nextClicked" 
      :onBack="backClicked"
      :developer="{'verboseLogging':'true','logger':myLogger}"
      :isPersisted="isUserDone"
      >
      <div slot="page1">
        <h4>User Info</h4>
        <v-form v-model="step1Model.isValid" ref="formStep1" lazy-validation>
          <v-layout row wrap>
            <v-flex md3>
              <v-text-field v-model="step1Model.applicant.firstName" label="First Name" required></v-text-field>
            </v-flex>
            <v-flex md3>
              <v-text-field v-model="step1Model.applicant.lastName" label="Last Name" required></v-text-field>
            </v-flex>
            <v-flex md2>
              <v-text-field v-model="step1Model.phone" type="tel" label="Phone" required></v-text-field>
            </v-flex>
          </v-layout>
        </v-form>
      </div>
      <div slot="page2">
        <h4>Address</h4>
        <v-form v-model="step2Model.isValid" ref="formStep2">
          <v-layout row wrap>
            <v-flex md3>
              <v-text-field v-model="step2Model.address.street" label="Street"></v-text-field>
            </v-flex>
            <v-flex md3>
              <v-text-field v-model="step2Model.address.city" label="City"></v-text-field>
            </v-flex>
            <v-flex md2>
              <v-text-field v-model="step2Model.address.state" label="State"></v-text-field>
            </v-flex>
            <v-flex md1>
              <v-text-field v-model="step2Model.address.zip" label="Zip"></v-text-field>
            </v-flex>
          </v-layout>
        </v-form>
      </div>
      <div slot="page3">
        <h4>Step 3 - Constraints</h4>
        <p>You are blocked from doing all things.</p>
      </div>
      <div slot="page4">
        <h4>Step 4 - Twist Gears</h4>
        <p>All gears must be twisted at all times</p>
      </div>
      <div slot="page5">
        <h4>Step 5 - Define Terrain</h4>
        <p>Is it rocky, flat, peaked?</p>
      </div>
      <div slot="page6">
        <h4>Step 6 - Hire Trolls</h4>
        <p>This wizard is too long...</p>
      </div>
      <div slot="page7">
        <h4>Step 7 - Move Rocks</h4>
        <p>Is that the same as "kick rocks"...?</p>
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
      step1Model:{
        applicant: {
          firstName:'',
          lastName:''
        },
        phone:''
      },
      step2Model:{
        address: {
          street: '',
          city: '',
          state: '',
          zip: ''
        }
      },
      currentStep: 0,
      steps: [
        {
          label: 'User',
          slot: 'page1',
          options: {
            hidePrevious: true
          }          
        },
        {
          label: 'Address',
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
          nonLinear: true
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
      this.myLogger('next clicked', currentPage)
      this.currentStep++;
      return true; //return false if you want to prevent moving to next page
    },
    backClicked(currentPage) {
      this.myLogger('back clicked', currentPage);
      this.currentStep--;
      return true; //return false if you want to prevent moving to previous page
    },
    myLogger(message) {
      console.log('from myLogger: '+message);
    },
    isUserDone() {
      return (this.currentStep >= this.steps.length-1);
    }
  }
};
</script>


