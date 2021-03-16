<template>
  <b-list-group v-if="value">
    <b-list-group-item v-for="item in countryEntries" :key="item[0]">
      <country-detail :name="item[0]" :value="item[1]"/>
    </b-list-group-item>
  </b-list-group>
</template>

<script>

export default {
  name: "ObjectDetail",
  props: {
    value: Object
  },
  computed: {
    countryEntries() {
      for (const valueKey in this.value) {
        if (this.value[valueKey] === null || this.value[valueKey] === undefined || !this.value[valueKey].length)
          delete this.value[valueKey]
      }
      return Object.entries(this.value)
    }
  },
}
</script>

<style scoped>

</style>
