<template>
  <!-- Default List Header -->
  <ion-page>
    <ion-content class="top-header">
      <headerMenu></headerMenu>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import headerMenu from './navMenu.vue'
export default defineComponent({
  name: 'PageHeader',
  components: {
     headerMenu
  }
});
</script>
<style scoped>
.top-header{
  height: 65px;
  z-index: 2;
}
</style>