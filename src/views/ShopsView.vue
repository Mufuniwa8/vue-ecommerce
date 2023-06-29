<template>
    <div v-if="Shop" class="sdf">
        <img :src="boot.images" :alt="boot.brand">
        <div>
            <h2>{{ boot.brand }}</h2>
            <p>Model: {{ boot.model }}</p>
            <p>Price: R {{ boot.price }}</p>
        </div>
    </div>
</template>

<script>

import CardComp from "../components/CardComp.vue";

export default {
    props: ["id"],
    computed: {
        boot() {
            return this.$store.state.shops
        }
    },
    mounted() {
        this.$store.dispatch("getShops", this.id)
    },

    components: { CardComp }
}

</script>
