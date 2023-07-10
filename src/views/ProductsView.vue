<template>
    <div class="container" v-if="data">
    <div class="checkOut">
    <div class="boots-images">
    <img src="{{data.image}}" alt="" class="pro-imgs border"/>
    <br/>
    </div>
    <div class="brand">
    <h2>{{data.brand}}</h2>
    </div>
    <div class="model">
    <h2>{{data.model}}</h2>
    </div>
    <div class="price">
    <h2>{{data.price}}</h2>
    </div>
    <div>
     <button class="button" onclick="addToList({data.id})">Add to Cart</button>
    </div>
    </div>
    </div>
    
</template>

<script>

export default {
    // props: ["id"],
    computed: {
        products() {
            return this.$store.state.products
        }
    },
    mounted() {
        this.$store.dispatch("getProducts", this.id)
    },
    // components: { CardComp }
}

</script>

<style>

</style>