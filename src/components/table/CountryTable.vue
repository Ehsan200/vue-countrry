<template>
  <div>
    <b-container class="header">
      <b-row>
        <b-col><h3>country</h3></b-col>
        <b-col><h3>name</h3></b-col>
        <b-col><h3>population</h3></b-col>
        <b-col><h3>region</h3></b-col>
        <b-col><h3>subregion</h3></b-col>
      </b-row>
    </b-container>
    <div class="height-25"/>
    <b-list-group v-if="countries">
      <b-list-group-item v-for="country in countries" :key="country.name">
        <country-row :country="country" @click="click"/>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import CountryRow from "@/components/table/CountryRow";

export default {
  name: "CountryTable",
  components: {
    CountryRow
  },
  props: {
    countries: Array
  },
  methods: {
    click(country) {
      this.$emit('row-clicked', country)
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  border-bottom: 1px solid #ce6262;
}
</style>
