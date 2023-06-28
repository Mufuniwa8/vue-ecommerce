<template>

<!--  -->

      <div class="container header">
        <div class="row">
          <div class="col-6">
            <h1 class="text">Boots 007</h1>
            <p >Are you are ready to conquer the World?</p>
          </div>
          <div class="col-6 home-img-div">
              <img class="home-img" src="https://i.postimg.cc/HsWN2yKh/IMG-1231.jpg" alt="">
              <p>Come get quality equipments for the best on the pitch</p>
            </div>
<div class="col-12">
  <h4 class="h4">Top sponsor</h4>
  <img class="brand-logo" src="https://i.postimg.cc/1tHL1QcG/Adidas-Logo-1971-removebg-preview.png" alt="">
  <img class="brand-logo" src="https://i.postimg.cc/Qt1dQHDX/swoosh-logo-black-removebg-preview.png" alt="">
  <img class="brand-logo" src="https://i.postimg.cc/Jh2cvYST/png-transparent-puma-logo-iron-on-adidas-brand-adidas-mammal-cat-like-mammal-carnivoran-removebg-pre.png" alt="">
  <img class="brand-logo" src="https://i.postimg.cc/zfyb4zCh/site-logo-select2-black.webp" alt="">
  <img class="brand-logo" src="https://i.postimg.cc/C5SjyyLV/Castore-brand-logo-svg.png" alt="">
</div>
          </div>
        </div>
<!--  -->
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style>

.home-img {
  width: 15rem;
  height: 15rem;
  object-fit: cover;
  /* justify-content: center; */
  /* display: flex; */
  border-radius: 8%;
  transition: 1s;
}
.home-img:hover {
  /* transform: scale3d(1.5); */
  /* -webkit-transform: scale(); */
  /* -ms-transform: scale(1.5); */
  width: 300px;
  height: 300px;
}
.home-img-div p {
  opacity: 0;
  margin-top: 5px;
}
.home-img-div:hover p {
  opacity: 1;
}
.brand-logo {
  width: 5rem;
  object-fit: cover;
  color: white;
}
</style>
