<template>
    <div v-if="shop" class="sdf">
        <img :src="boot.images" :alt="boot.brand">
        <div id="shop" class="checkout-products">
        
        <div class="img-products">
          <img id="pro-img" class="img-size" src="${item.image}" alt="">
        </div>
        <div class="titles">
          <h2 class="brand">${item.brand}</h2>
          <br>
          <h4 class="model">${item.model}</h4>
        </div>
        <div class="add">
          <div class="add-btn">+</div>
          <div class="value">${item.value}</div>
          <div class="add-btn">-</div>
        </div>
        <div class="product-price">
          <div class="price-cart">${item.price}</div> 
          <button onclick="clearItem(${item.id})" class="can"><i class="fa-solid fa-trash-can" style="color: black"></i></button>
        </div>
        
      </div>
    </div>
</template>

<script>

export default {
    // props: ["id"],
    computed: {
        shops() {
            return this.$store.state.tutorial
        }
    },
    mounted() {
        this.$store.dispatch("getBoot", this.id)
    },
    // components: { CardComp }
}

</script>
