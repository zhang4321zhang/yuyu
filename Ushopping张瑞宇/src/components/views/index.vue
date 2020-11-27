<template>
  <div>
      <router-view></router-view>
      <com-footer></com-footer>
  </div>
</template>

<script>
import comFooter from '../../comComponents/footer'
export default {
  data() {
    return {};
  },
  components: {
      comFooter
  }
};
</script>

<style lang="" scoped>

</style>