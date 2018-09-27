<template>
  <div class="shop">
    <h1>This is an shop page</h1>
    <product-list/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'shop',
  components: {
    ProductList
  }
}
</script>
