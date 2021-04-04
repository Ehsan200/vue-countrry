<template>
  <div v-if="value">
    <div v-if="isObject">
      <template v-if="Object.keys(value).length">
        <span>{{ name }}: </span>
        <b-button v-b-toggle="name" pill variant="outline-info">show details</b-button>
        <div class="height-10"/>
        <b-collapse :id="name">
          <object-detail :value="value"/>
        </b-collapse>
      </template>
    </div>

    <div v-else-if="isArray">
      <template v-if="value.length">
        <span>{{ name }}: </span>
        <b-button v-b-toggle="name" pill variant="outline-info">show details</b-button>
        <div class="height-10"/>
        <b-collapse :id="name">
          <array-detail :array="value"/>
        </b-collapse>
      </template>
    </div>

    <div v-else>
      <span>{{ name }}: {{ value }}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "CountryDetail",
  data: () => ({
    isArray: false,
    isObject: false,
  }),
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: [String, Object, Number, Array],
      required: true
    },
  },
  created() {
    switch (typeof this.value) {
      case "object":
        if (Array.isArray(this.value)) {
          this.isArray = true
        } else {
          this.isObject = true
        }
    }
  },
}
</script>

<style scoped>

</style>
