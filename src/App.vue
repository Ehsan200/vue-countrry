<template>
  <div id="app" class="container">
    <div class="text-left"><span>filter by region:</span></div>
    <b-form-select v-model="selectedFilter" :options="options" @change="filterByRegion"/>
    <b-table id="table"
             :items="countries"
             :per-page="pageSize"
             :current-page="currentPage"
             :busy="isLoading"
             :fields="tableFields"
             @row-clicked="rowClicked"
             selectable
             ref="table"
             class="text-center"
    >
      <template #cell(flag)="data">
        <b-img-lazy :key="data.item.name" :src="data.item.flag" width="100" height="60"/>
      </template>

    </b-table>
    <b-pagination
        v-model="currentPage"
        :total-rows="countries.length"
        :per-page="pageSize"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
        aria-controls="table"
        class="justify-content-center"
    ></b-pagination>
    <modal v-if="selectedCountry" :show.sync="showDetail" :country="selectedCountry"/>
  </div>
</template>

<script>
import axios from "axios";
import Modal from "@/components/TheModal";

export default {
  name: 'App',
  components: {
    Modal
  },
  data: () => ({
    tableFields: [
      'flag',
      {
        key: 'name',
        formatter: 'cellFormatter'
      },
      {
        key: 'capital',
        formatter: 'cellFormatter'
      },
      {
        key: 'region',
        formatter: 'cellFormatter'
      },
      {
        key: 'population',
        formatter: 'cellFormatter'
      },
    ],
    isLoading: true,
    countries: null,
    currentPage: 1,
    pageSize: 20,
    totalRows: 0,
    selectedFilter: null,
    baseURL: 'https://restcountries.eu/rest/v2/',
    options: [
      {value: null, text: 'all', selected: true},
      {value: 'Africa', text: 'Africa'},
      {value: 'Americas', text: 'Americas'},
      {value: 'Asia', text: 'Asia'},
      {value: 'Europe', text: 'Europe'},
      {value: 'Oceania', text: 'Oceania'},
    ],
    selectedCountry: null,
    showDetail: false
  }),
  created() {
    this.fetchData('all')
  },
  watch: {
    showDetail: function () {
      this.$refs.table.clearSelected()
    }
  },
  methods: {
    cellFormatter(value) {
      if (value)
        return value
      return '_____'
    },
    rowClicked(country) {
      this.selectedCountry = country
      this.showDetail = true
    },
    filterByRegion() {
      if (this.selectedFilter) {
        this.fetchData('region/' + this.selectedFilter)
      } else {
        this.fetchData('all')
      }
    },
    fetchData(param) {
      this.isLoading = true
      axios.get(this.baseURL + param)
          .then(({data}) => {
            this.countries = data
            this.isLoading = false
          }).catch(console.error)
    }
  },
  computed: {
    pageCountries() {
      const index = this.currentPage - 1
      if (index * this.pageSize >= this.countries.length) {
        return this.countries.slice(index * this.pageSize)
      } else {
        return this.countries.slice(index * this.pageSize, this.currentPage * this.pageSize)
      }
    }
  }

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
