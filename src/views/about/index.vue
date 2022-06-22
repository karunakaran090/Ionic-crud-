<template>
  <ion-page>
    <ion-content class="dashboard-page" :fullscreen="false">
      <div>
        <h2>Welcome to About page</h2>
        <p>Executing an enterprise-level digital transformation requires an experienced team of strategists who aren’t
          seeking organizationally siloed problems and creating solutions independent of one another. It requires a team
          willing to approach things differently; willing to sift through the global business patterns that have existed
          for decades and disrupt those patterns to reach company-wide, digital efficiency.</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'AboutUs',
  components: {
    IonContent,
    IonPage,
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h2 {
  text-align: center;
}

div {
  max-width: 80%;
  margin: auto;
  display: block;
  line-height: 1.5;
}
</style>
