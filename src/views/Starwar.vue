<template>
  <div class="starwar">
    <h1>This is an starwar page</h1>
     <starwar-profile/>
  </div>
</template>

<script>
// @ is an alias to /src
import StarwarProfile from '@/components/StarwarProfile.vue'

export default {
  name: 'starwar',
  components: {
    StarwarProfile
  }
}
</script>
