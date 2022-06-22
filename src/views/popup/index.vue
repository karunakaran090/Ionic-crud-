<template>
  <ion-content v-if="show" class="popup-page" :fullscreen="false">
    <div class="popUp">
      <section class="popupBody">
        <ion-label class="close" @click="close">X</ion-label>
        <ion-label class="labelTitle" v-if="data == ''">Create a new post</ion-label>
        <ion-label class="labelTitle" v-else>Edit {{ data.name }}'s post</ion-label>
        <form ref="form" v-on:submit.prevent="onSubmit">
          <ion-item-group>
            <ion-item>
              <ion-label position="floating">Enter Name</ion-label>
              <ion-input type="text" name="name" :value=data.name></ion-input>
            </ion-item>
          </ion-item-group>
          <ion-item-group>
            <ion-item>
              <ion-label position="floating">Enter Position</ion-label>
              <ion-input type="text" name="position" :value=data.position></ion-input>
            </ion-item>
          </ion-item-group>
          <ion-item-group>
            <ion-item>
              <ion-label position="floating">Text Content</ion-label>
              <ion-textarea name="textValue" :value=data.text></ion-textarea>
            </ion-item>
          </ion-item-group>
          <ion-item-group>
            <ion-item>
              <ion-label position="floating">Place your image link</ion-label>
              <ion-input type="text" name="img" :value=data.img></ion-input>
            </ion-item>
          </ion-item-group>
          <ion-item-group class="modelFooter">
            <ion-button v-if="data == ''" v-on:click="addTweet">
              Create
            </ion-button>
            <ion-button v-on:click="UpdateData(data.id)" v-else>
              Update
            </ion-button>
          </ion-item-group>
        </form>
      </section>
    </div>
  </ion-content>

</template>

<script>
import { IonContent, IonInput, IonItem, IonLabel,IonButton,IonTextarea } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'PopUp',
  components: {
    IonContent,
    IonInput,
    IonItem,
    IonLabel,
    IonButton,
    IonTextarea
  },
  props: {
    show: { default: false, type: Boolean },
    data: {},
    addNew: [],
  },
  methods: {
    close() {
      // this.show= false;
      this.$emit('update:show', false)
      // destroy the vue listeners, etc
      // this.$destroy();
      // remove the element from the DOM
      // this.$el.parentNode.removeChild(this.$el);
    },
    UpdateData(index) {
      // update the array based on the selected index
      debugger;
      this.$store.commit('updateTweet', { id: index, name: this.$refs.form.name.value, position: this.$refs.form.position.value, text: this.$refs.form.textValue.value, img: this.$refs.form.img.value })
    },
    addTweet() {
      // this will add new object in list item array
      console.log("data>>>", this.$refs.form)
      this.$store.commit('addTweet', { name: this.$refs.form.name.value, position: this.$refs.form.position.value, text: this.$refs.form.textValue.value, img: this.$refs.form.img.value })
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.popup-page {
  min-height: 100%;
}

.popUp {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(50, 50, 50, 0.509);
  z-index: 4;
}

.popupBody {
  max-width: 450px;
  margin: auto;
  display: block;
  background-color: #fff;
  margin-top: 10%;
  padding: 20px;
}

.close {
  float: right;
}

label {
  font-size: 12px;
}

.labelTitle {
  font-size: 20px;
}

input {
  width: 90%;
  padding: 5px;
  margin-top: 5px;
}

textarea {
  width: 92%;
  min-height: 90px;
}

.modelFooter {
  margin-top: 15px;
}

.modelFooter button {
  background-color: #42b883;
  padding: 10px 15px;
  color: #fff;
  outline: none;
  border: none;
}
</style>
