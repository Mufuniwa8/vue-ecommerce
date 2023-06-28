<template>
    <div v-if="boot" class="sdf">
        <img :src="boot.images" :alt="boot.brand">
        <div>
            <h2>{{ boot.brand }}</h2>
            <p>Model: {{ boot.model }}</p>
            <p>Price: R {{ boot.price }}</p>
        </div>
    </div>
</template>

<script>

export default {
    props: ["id"],
    computed: {
        boot() {
            return this.$store.state.tutorial
        }
    },
    mounted() {
        this.$store.dispatch("getBoot", this.id)
    },

    components: { CardComp }
}

</script>

<style>

</style>
