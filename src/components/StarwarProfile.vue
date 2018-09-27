<template>
    <div>
        <h1>Starwar</h1>
        {{post}}
        <!-- {{profiles.results}} -->
        <ul> 
            <li
            v-for="(result,index) in profiles.results"
            :key="index">
          Name : {{ result.name }} <br>
          Gender : {{result.gender}} <br>
          ____________________________________________
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions , mapGetters } from 'vuex'
export default {
    created () {
        this.$store.dispatch('starwars/loadProfile')
    },
      computed:{
    ...mapState({
             post : state => state.starwars.posts,
             profiles : state => state.starwars.profile
         })}

}
</script>