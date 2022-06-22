<template>
  <ion-list class="listClass">
    <ion-item>
      <router-link to="/home">Home</router-link>
    </ion-item>
    <ion-item>
      <router-link to="/about">Aboutus</router-link>
    </ion-item>
    <ion-item>
      <router-link to="/contact">Contact</router-link>
    </ion-item>
  </ion-list>
</template>

<script>
export default {
  name: 'headerMenu'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.listClass{
  display: flex;
  list-style: none;
  display: flex;
  justify-content: center;
}

</style>
