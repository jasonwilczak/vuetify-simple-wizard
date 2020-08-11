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
        <p>{{step2Model.description}}</p>
      </div>
      <div slot="page3">
        <h4>Step 3 - Constraints</h4>
        <p>You are blocked from doing all things.</p>
        <p>{{step3Model.description}}</p>
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
        },
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta ligula urna, eleifend interdum dui aliquet a. Nam libero leo, aliquet nec tortor sed, fringilla interdum magna. Fusce sit amet eros nec justo aliquet pulvinar vehicula in est. Duis non ligula nec lorem interdum vestibulum. Maecenas laoreet diam vitae est semper tincidunt posuere sed magna. Nulla facilisi. Ut ut condimentum erat. Maecenas aliquet tempor risus in mattis. Suspendisse dignissim sem ante, at lobortis mi mattis porta.
Duis eleifend mollis sodales. Duis luctus dignissim tempus. Maecenas eleifend ullamcorper euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris suscipit vel nunc in gravida. Fusce commodo lacus a nunc dapibus, in consequat justo mattis. Mauris eleifend elit nisi, et facilisis sapien cursus eu. Sed luctus placerat blandit. Nullam tortor tortor, accumsan eget semper sed, tincidunt quis augue. Duis dignissim ligula eu luctus facilisis. Vivamus elementum ultricies nibh id fringilla.
Praesent at scelerisque lacus. Mauris vel pulvinar mauris. Nam in purus quis massa lobortis efficitur. Nunc eu urna at nisi posuere lacinia. Vivamus malesuada, dolor ac laoreet consequat, tellus odio dapibus est, eu dictum eros est vel felis. Aliquam quis lacus volutpat, fringilla elit non, euismod elit. Suspendisse feugiat quam at pulvinar rutrum. Nam gravida mi vitae tellus molestie accumsan. Cras placerat turpis at nulla lacinia, vitae tristique enim convallis. Sed aliquam, diam ac volutpat dictum, tellus dui pellentesque elit, sed efficitur leo erat ut dolor.
Maecenas volutpat malesuada metus. Fusce sit amet congue magna. Sed vitae efficitur sem. Donec auctor consectetur arcu ut lacinia. Etiam tincidunt leo quis eleifend egestas. Aenean mi nibh, elementum efficitur diam faucibus, varius malesuada purus. Vestibulum ipsum mi, varius nec aliquet ac, porta et leo. Vivamus ac rhoncus velit, et lacinia nulla. Mauris non quam a arcu dignissim lobortis placerat eget mauris. Suspendisse potenti. Donec tempus venenatis nunc a facilisis. Etiam tincidunt, quam faucibus pellentesque dictum, magna mauris aliquam nulla, a eleifend augue dolor quis erat. In bibendum velit a enim efficitur iaculis. Nulla facilisi.
Nullam leo felis, tempor a eros ac, pharetra dignissim risus. Etiam ut justo quis urna rhoncus porta at et enim. Mauris laoreet vulputate cursus. In hac habitasse platea dictumst. Donec quis urna gravida, posuere lacus non, commodo purus. In eget tristique dolor. Nulla eu lacus risus. Sed efficitur sem scelerisque, scelerisque libero sed, finibus nisl. Maecenas lorem leo, accumsan sed elementum eget, aliquet at ante. Donec nec libero nec justo auctor pellentesque eu non mi. Aenean eleifend eros nec purus tempus ornare. Curabitur et laoreet leo. Etiam convallis lacus quis turpis faucibus pretium.
Vivamus auctor finibus orci, at imperdiet risus vulputate quis. Ut placerat, tortor ac aliquet pellentesque, dui lacus tempus nunc, eu accumsan libero nisl et dui. Maecenas fringilla faucibus bibendum. Cras sit amet viverra lorem. Aliquam vulputate, mauris et aliquam vestibulum, urna urna porttitor nulla, vitae dignissim odio felis a est. Ut et venenatis sem. Aenean rutrum congue tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate augue sed massa tristique, et eleifend leo molestie. Pellentesque eleifend purus vitae congue lacinia. Quisque non sollicitudin risus. Maecenas auctor porttitor nisi, id aliquam nisl iaculis at. In hac habitasse platea dictumst. Quisque ac iaculis quam. Proin dignissim luctus lacus, in hendrerit enim aliquam eget.
Nulla venenatis ipsum massa, eget tempor urna lacinia ac. Cras a sapien sit amet risus porttitor porttitor sed quis orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed tincidunt laoreet sem, nec porta magna vulputate vel. Etiam nec erat vitae enim tempor facilisis. Quisque hendrerit mollis velit, sed tempus odio pulvinar in. Nunc nisl ligula, consequat sit amet pellentesque sit amet, dignissim sed nulla. Pellentesque eu lacus efficitur, malesuada lacus nec, facilisis nisl. Fusce feugiat neque sit amet nisl vehicula dapibus. Vestibulum eget gravida ante.
Nulla mollis pulvinar mi. Cras at odio vitae elit eleifend sagittis. Nulla tempus ultricies lorem nec blandit. Sed mauris elit, interdum vel lacinia ac, porttitor in enim. Curabitur et erat volutpat, condimentum ante a, fringilla urna. Proin non nibh ex. Aenean sit amet nibh iaculis, fermentum nunc ut, aliquam turpis. Aliquam rutrum, neque at pellentesque commodo, lorem dolor posuere augue, vel venenatis sapien ipsum id ex. Quisque nibh sapien, sagittis a cursus in, sagittis sed nisl. Morbi eu pellentesque quam. Aliquam non ipsum id arcu vestibulum bibendum. Mauris orci ante, accumsan at condimentum a, convallis eget elit. Sed vel gravida neque, vitae sodales elit. Sed eget nulla eget est egestas volutpat ornare sed enim.
Fusce finibus tincidunt tellus, at porttitor odio pretium sit amet. Integer sodales vestibulum ligula eget porta. Donec augue purus, mattis ut lorem eu, tempor blandit lectus. Mauris volutpat vestibulum ex. Nulla at vulputate arcu. Cras sed sapien sit amet lacus convallis efficitur id sit amet felis. Phasellus id blandit augue, et scelerisque dui. Sed sagittis lacus quis placerat pharetra. Aliquam vitae mi quis lectus laoreet sagittis at non risus. Pellentesque lectus sem, scelerisque non sollicitudin ut, euismod a felis. Aenean vitae mauris non mi scelerisque porta vitae ac elit. In semper sem malesuada nisi tristique pellentesque a eget sem. Nunc eu eros hendrerit, venenatis nisi id, tempus lectus. Suspendisse molestie ac arcu ac condimentum. Curabitur ultrices egestas urna, eget sollicitudin magna accumsan non.
Duis vitae risus tincidunt, vehicula nunc sit amet, auctor sapien. Donec arcu quam, ullamcorper ac sodales eu, eleifend in mi. Donec massa velit, sodales sit amet quam eget, condimentum molestie nunc. Duis vel arcu magna. Nullam fringilla in justo ac facilisis. Duis eu pulvinar sem. Donec placerat consectetur purus. Nam quam erat, dapibus dignissim volutpat at, tempus sit amet leo. Pellentesque interdum luctus diam, eget mattis urna finibus vulputate.`
      },
      step3Model: {
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta ligula urna, eleifend interdum dui aliquet a. Nam libero leo, aliquet nec tortor sed, fringilla interdum magna. Fusce sit amet eros nec justo aliquet pulvinar vehicula in est. Duis non ligula nec lorem interdum vestibulum. Maecenas laoreet diam vitae est semper tincidunt posuere sed magna. Nulla facilisi. Ut ut condimentum erat. Maecenas aliquet tempor risus in mattis. Suspendisse dignissim sem ante, at lobortis mi mattis porta.
Duis eleifend mollis sodales. Duis luctus dignissim tempus. Maecenas eleifend ullamcorper euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris suscipit vel nunc in gravida. Fusce commodo lacus a nunc dapibus, in consequat justo mattis. Mauris eleifend elit nisi, et facilisis sapien cursus eu. Sed luctus placerat blandit. Nullam tortor tortor, accumsan eget semper sed, tincidunt quis augue. Duis dignissim ligula eu luctus facilisis. Vivamus elementum ultricies nibh id fringilla.
Praesent at scelerisque lacus. Mauris vel pulvinar mauris. Nam in purus quis massa lobortis efficitur. Nunc eu urna at nisi posuere lacinia. Vivamus malesuada, dolor ac laoreet consequat, tellus odio dapibus est, eu dictum eros est vel felis. Aliquam quis lacus volutpat, fringilla elit non, euismod elit. Suspendisse feugiat quam at pulvinar rutrum. Nam gravida mi vitae tellus molestie accumsan. Cras placerat turpis at nulla lacinia, vitae tristique enim convallis. Sed aliquam, diam ac volutpat dictum, tellus dui pellentesque elit, sed efficitur leo erat ut dolor.
Maecenas volutpat malesuada metus. Fusce sit amet congue magna. Sed vitae efficitur sem. Donec auctor consectetur arcu ut lacinia. Etiam tincidunt leo quis eleifend egestas. Aenean mi nibh, elementum efficitur diam faucibus, varius malesuada purus. Vestibulum ipsum mi, varius nec aliquet ac, porta et leo. Vivamus ac rhoncus velit, et lacinia nulla. Mauris non quam a arcu dignissim lobortis placerat eget mauris. Suspendisse potenti. Donec tempus venenatis nunc a facilisis. Etiam tincidunt, quam faucibus pellentesque dictum, magna mauris aliquam nulla, a eleifend augue dolor quis erat. In bibendum velit a enim efficitur iaculis. Nulla facilisi.
Nullam leo felis, tempor a eros ac, pharetra dignissim risus. Etiam ut justo quis urna rhoncus porta at et enim. Mauris laoreet vulputate cursus. In hac habitasse platea dictumst. Donec quis urna gravida, posuere lacus non, commodo purus. In eget tristique dolor. Nulla eu lacus risus. Sed efficitur sem scelerisque, scelerisque libero sed, finibus nisl. Maecenas lorem leo, accumsan sed elementum eget, aliquet at ante. Donec nec libero nec justo auctor pellentesque eu non mi. Aenean eleifend eros nec purus tempus ornare. Curabitur et laoreet leo. Etiam convallis lacus quis turpis faucibus pretium.
Vivamus auctor finibus orci, at imperdiet risus vulputate quis. Ut placerat, tortor ac aliquet pellentesque, dui lacus tempus nunc, eu accumsan libero nisl et dui. Maecenas fringilla faucibus bibendum. Cras sit amet viverra lorem. Aliquam vulputate, mauris et aliquam vestibulum, urna urna porttitor nulla, vitae dignissim odio felis a est. Ut et venenatis sem. Aenean rutrum congue tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate augue sed massa tristique, et eleifend leo molestie. Pellentesque eleifend purus vitae congue lacinia. Quisque non sollicitudin risus. Maecenas auctor porttitor nisi, id aliquam nisl iaculis at. In hac habitasse platea dictumst. Quisque ac iaculis quam. Proin dignissim luctus lacus, in hendrerit enim aliquam eget.
Nulla venenatis ipsum massa, eget tempor urna lacinia ac. Cras a sapien sit amet risus porttitor porttitor sed quis orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed tincidunt laoreet sem, nec porta magna vulputate vel. Etiam nec erat vitae enim tempor facilisis. Quisque hendrerit mollis velit, sed tempus odio pulvinar in. Nunc nisl ligula, consequat sit amet pellentesque sit amet, dignissim sed nulla. Pellentesque eu lacus efficitur, malesuada lacus nec, facilisis nisl. Fusce feugiat neque sit amet nisl vehicula dapibus. Vestibulum eget gravida ante.
Nulla mollis pulvinar mi. Cras at odio vitae elit eleifend sagittis. Nulla tempus ultricies lorem nec blandit. Sed mauris elit, interdum vel lacinia ac, porttitor in enim. Curabitur et erat volutpat, condimentum ante a, fringilla urna. Proin non nibh ex. Aenean sit amet nibh iaculis, fermentum nunc ut, aliquam turpis. Aliquam rutrum, neque at pellentesque commodo, lorem dolor posuere augue, vel venenatis sapien ipsum id ex. Quisque nibh sapien, sagittis a cursus in, sagittis sed nisl. Morbi eu pellentesque quam. Aliquam non ipsum id arcu vestibulum bibendum. Mauris orci ante, accumsan at condimentum a, convallis eget elit. Sed vel gravida neque, vitae sodales elit. Sed eget nulla eget est egestas volutpat ornare sed enim.
Fusce finibus tincidunt tellus, at porttitor odio pretium sit amet. Integer sodales vestibulum ligula eget porta. Donec augue purus, mattis ut lorem eu, tempor blandit lectus. Mauris volutpat vestibulum ex. Nulla at vulputate arcu. Cras sed sapien sit amet lacus convallis efficitur id sit amet felis. Phasellus id blandit augue, et scelerisque dui. Sed sagittis lacus quis placerat pharetra. Aliquam vitae mi quis lectus laoreet sagittis at non risus. Pellentesque lectus sem, scelerisque non sollicitudin ut, euismod a felis. Aenean vitae mauris non mi scelerisque porta vitae ac elit. In semper sem malesuada nisi tristique pellentesque a eget sem. Nunc eu eros hendrerit, venenatis nisi id, tempus lectus. Suspendisse molestie ac arcu ac condimentum. Curabitur ultrices egestas urna, eget sollicitudin magna accumsan non.
Duis vitae risus tincidunt, vehicula nunc sit amet, auctor sapien. Donec arcu quam, ullamcorper ac sodales eu, eleifend in mi. Donec massa velit, sodales sit amet quam eget, condimentum molestie nunc. Duis vel arcu magna. Nullam fringilla in justo ac facilisis. Duis eu pulvinar sem. Donec placerat consectetur purus. Nam quam erat, dapibus dignissim volutpat at, tempus sit amet leo. Pellentesque interdum luctus diam, eget mattis urna finibus vulputate.`
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


