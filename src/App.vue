<template>
  <div id="app" class="container">
    <div v-if="isLoading">
      <loading/>
    </div>
    <div v-else>
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
    pageSize: 20
  }),
  created() {
    axios.get('https://restcountries.eu/rest/v2/all')
        .then(({data}) => {
          this.countries = data
          this.isLoading = false
        }).catch(console.error)
  },
  methods: {
    nextPage() {
      if (this.pageNumber * this.pageSize < this.countries.length)
        this.pageNumber += 1
    },
    previousPage() {
      if (this.pageNumber !== 1)
        this.pageNumber -= 1
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
