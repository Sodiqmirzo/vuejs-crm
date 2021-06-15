<template>
  <div class="grey darken-1 empty-layout">
    <router-view></router-view>
  </div>
</template>

<script>
import message from '@/utils/messages.js'
export default {
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(fbError) {
      console.log(fbError);
      this.$error(messages[fbError.code] || 'Ooo no, try again....')
    }
  }
}
</script>
