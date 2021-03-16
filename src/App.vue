<template>
  <div id="app" class="container">
    <div v-if="isLoading">
      <loading/>
    </div>
    <div v-else>
      <div class="text-left"><span>filter by region:</span></div>
      <b-form-select v-model="selectedFilter" :options="options" @change="filterByRegion"/>
      <div class="height-25"/>
      <page :countries="pageCountries"/>
      <div class="height-25"/>
      <b-row>
        <b-col>
          <b-button @click="previousPage" pill variant="outline-info">previous page</b-button>
        </b-col>
        <b-col>
          <b-button @click="nextPage" pill variant="outline-info">next page</b-button>
        </b-col>
      </b-row>
      <div class="height-25"/>
    </div>
  </div>
</template>

<script>
import Page from "@/components/Page";
import Loading from "@/components/Loading";
import axios from "axios";

export default {
  name: 'App',
  components: {
    Page,
    Loading
  },
  data: () => ({
    isLoading: true,
    countries: null,
    pageNumber: 1,
    pageSize: 20,
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
  }),
  created() {
    this.fetchData('all')
  },
  methods: {
    nextPage() {
      if (this.pageNumber * this.pageSize < this.countries.length)
        this.pageNumber += 1
    },
    previousPage() {
      if (this.pageNumber !== 1)
        this.pageNumber -= 1
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
      const index = this.pageNumber - 1
      if (index * this.pageSize >= this.countries.length) {
        return this.countries.slice(index * this.pageSize)
      } else {
        return this.countries.slice(index * this.pageSize, this.pageNumber * this.pageSize)
      }
    }
  }
}
</script>

<style lang="scss">

* {
  font-family: IranSans !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
