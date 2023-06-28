<template>
  <nav class="navbar navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" to="/">Boots 007</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon bg-dark"></span>
      </button>
      <div
        class="offcanvas offcanvas-end text-bg-dark"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
            Dark offcanvas
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item hover">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item hover">
            <router-link to="/about">About</router-link>
          </li>
          <li class="nav-item dropdown hover">
            <router-link
              class="nav-link active dropdown-toggle"
              to="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Products
            </router-link>

            <ul class="dropdown-menu dropdown-menu-light">
              <li>
                <router-link class="dropdown-item hover" to="/shop"
                  >Shop</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item hover" to="/admin"
                  >admin</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active hover" to="/contact"
              >contact Us</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
    
}
</script>
<style>
.hover {
  /* background-color: black; */
  transition: 1s;
}
.hover:hover {
  background-color: grey;
  color: black;
  transition: 1s;
}
</style>