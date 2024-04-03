<script>
import {store} from '../data/store'
export default {
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <div class="text-center my-5">
    <button @click="store.counter++" class="btn btn-primary"> incrementa contatore</button>
  </div>
</template>

<style lang="scss" scoped>
</style>