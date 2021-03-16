<template>
  <div>
    <country-table :countries="countries" @row-clicked="rowClicked"/>
    <modal v-if="selectedCountry" :show.sync="showDetail" :country="selectedCountry"/>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import CountryTable from "@/components/table/CountryTable";

export default {
  name: "Page",
  components: {
    Modal,
    CountryTable
  },
  data: () => ({
    selectedCountry: null,
    showDetail: false
  }),
  props: {
    countries: Array
  },
  methods: {
    rowClicked(country) {
      this.selectedCountry = country
      this.showDetail = true
    }
  }
}
</script>


<style scoped>

</style>
