<template>
  <ion-page>
    <PopUp v-model:show.Boolean=showPopup v-bind:data=selectedObj></PopUp>
    <ion-content class="dashboard-page" :fullscreen="false">
      <ion-item class="feedList" v-for="(item, index) of cardData" :key="item.id">
        <ion-label>{{ item.name }}</ion-label>
        <ListItem v-bind:element="item" v-bind:position="index" :openmodel="openmodel" :deleteItem="deleteItem">
        </ListItem>
      </ion-item>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="openmodel()">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonFab, IonIcon, IonFabButton, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';
import PopUp from '../popup/index.vue'
import ListItem from './listItem.vue'
import { useStore } from "vuex";

export default defineComponent({
  name: 'DashBoard',
  components: {
    IonContent,
    IonPage,
    IonFab,
    IonIcon,
    IonFabButton,
    IonItem,
    IonLabel,
    PopUp,
    ListItem
  },
  setup(){
    const store = useStore();
    const deleteItem = () => { store.commit('deleteTweet', 0)}
    const getData = () => {return store.state.listItem};
    return { deleteItem,getData }
  },
  data() {
    return {
      showPopup: false,
      selectedObj: {},
      cardData: this.getData(),
    }
  },
  methods: {
    openmodel(item = null) {
      // model popup to edit & create new item will be taking care
      alert(item)
      this.showPopup = //true
      this.selectedObj = item != null ? JSON.parse(JSON.stringify(this.cardData[item])) : []
    }
  }
});
</script>

<style>
.top-header {
  height: 40px;
}

.dashboard-page {
  top: 65px;
  max-height: calc(100vh - 65px);
  overflow: hidden;

}

.feedList {
  max-width: 500px;
  margin: auto;
  display: block;
  list-style: none;
  padding: 0;
  z-index: -1;
}
</style>
