<template>
  <ion-page>
    <ion-content class="dashboard-page" :fullscreen="false">
      <div>
        <h2>welcome to our page</h2>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ContactUs',
  components: {
    IonContent,
    IonPage,
  }
});
</script>

<style>
.top-header {
  height: 40px;
}

h2 {
  text-align: center;
}
</style>
