<template>
  <router-link: to="{name: 'Shop', params:{id: shop.id}}">
    <img :src="boot.image" :alt="boot.brand" />
    <h2>{{ boot.brand }}</h2>
    <p>Model: {{ boot.model }}</p>
    <p>Price: R {{ boot.price }}</p>
  </router-link:>

</template>

<script>

export default {
    props: ["boot"]
}

</script>

