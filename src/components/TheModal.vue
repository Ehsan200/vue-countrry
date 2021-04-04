<template>
  <b-modal :visible="show" centered title="country" @change="changeVisibility" hide-footer="hide-footer">
    <b-img :src="country.flag" width="100" height="60" center class="b-img"/>
    <div class="height-10"/>
    <object-detail :value="copyCountry"/>
    <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close</b-button>
  </b-modal>
</template>

<script>

export default {
  name: "Modal",
  props: {
    country: {
      required: true,
      type: Object
    },
    show: {
      required: true,
      type: Boolean
    },
  },
  computed: {
    copyCountry: function () {
      // eslint-disable-next-line no-unused-vars
      const {flag, ...copy} = {...this.country}
      return copy
    }
  },
  methods: {
    changeVisibility(value) {
      this.$emit('update:show', value)
    },
    hideModal() {
      this.$emit('update:show', false)
    },
  },
}
</script>

<style scoped lang="scss">

</style>
