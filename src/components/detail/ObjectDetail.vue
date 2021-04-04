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
    value: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeFalsyValues(obj) {
      let newObj = {};
      Object.keys(obj).forEach((prop) => {
        if (
            !(
                obj[prop] === null ||
                obj[prop] === undefined ||
                !obj[prop].length
            )
        ) {
          newObj[prop] = obj[prop];
        }
      });
      return newObj
    }
  },
  computed: {
    countryEntries() {
      return Object.entries(this.removeFalsyValues(this.value))
    }
  },
}
</script>

<style scoped>

</style>
