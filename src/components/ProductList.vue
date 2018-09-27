<template>
    <div>
        All List  
        <ul>
            <li
            v-for="product in products"
            :key="product.id">
           {{ product.id }} {{ product.text }}
            </li>
        </ul>

        List Done True  
         <ul> 
            <li
            v-for="product in doneProduct"
            :key="product.id">
           {{ product.id }} {{ product.text }}
            <button v-on:click="removeItem(product.id)" class="rm">Remove</button>
            </li>
        </ul>
       ID 1 :{{getProductById(1)}} <br>
       count : {{count}} <br>
       count*10: {{getCountMutiple(10)}} <br>
       <button  @click="increment(1)">+</button>
       <button v-bind:disabled="count <= 0" @click="decrement(1)">-</button>
  </div>

</template>

<script>
import { mapState, mapActions , mapGetters } from 'vuex'

export default {
  computed:{
    ...mapState({
             products: state => state.products.all,
             count : state => state.products.count
         }),
    ...mapGetters('products',{
            doneProduct : 'doneProduct',
            getProductById : 'getProductById',
            getCountMutiple : 'getCountMutiple'
        })
  }, methods: {
    ...mapActions('products',{
       increment : 'increment',
       decrement :'decrement',
       removeItem:'removeItem'
    })
  }
}
</script>