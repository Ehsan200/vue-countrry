<template>
  <b-container @click="click">
    <b-row>
      <b-col>
        <b-img :src="country.flag" width="100" height="60"/>
      </b-col>
      <b-col class="center">
        <span v-if="country.name">
          {{ country.name }}
        </span>
        <span v-else>-</span>
      </b-col>
      <b-col class="center">
        <span v-if="country.population">
          {{ country.population }}
        </span>
        <span v-else>-</span>
      </b-col>
      <b-col class="center">
        <span v-if="country.region">
          {{ country.region }}
        </span>
        <span v-else>-</span>
      </b-col>
      <b-col class="center">
        <span v-if="country.subregion">
          {{ country.subregion }}
        </span>
        <span v-else>-</span>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "CountryRow",
  props: {
    country: Object
  },
  methods: {
    click() {
      console.log(this.country)
      this.$emit('click', this.country)
    }
  }
}
</script>

<style scoped>

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
