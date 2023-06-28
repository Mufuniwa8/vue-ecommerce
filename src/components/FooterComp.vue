<template>
  <footer class="p-2 bg-dark text-bg-light w-100 position-fixed foot">
    <div class="footer">
      <a>
        Made by M.Mbedzi
        <router-link to="/">mufuniwambedzi@gmail.com</router-link>
        <div>
          <router-link to="/"
            ><i class="fa-brands fa-twitter" style="color: white"></i
          ></router-link>
          <router-link to="/"
            ><i class="fa-solid fa-phone" style="color: #e8eaed"></i
          ></router-link>
          <router-link to="/"
            ><i class="fa-brands fa-linkedin-in" style="color: #e8eaed"></i
          ></router-link>
        </div>
      </a>
    </div>
  </footer>
</template>
<script>
export default {
    
}
</script>

<style>

.foot {
    bottom: 0;
    height: 10%;
}
.footer {
  text-align: center;
  color: white;
  text-align: center;
  padding: 10px;
}

</style>
