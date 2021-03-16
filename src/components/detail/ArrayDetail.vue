<template>
  <div v-if="array">
    <div v-if="isArray">
      <b-list-group>
        <b-list-group-item v-for="item in array" :key="item">
          <span>{{ item }}</span>
        </b-list-group-item>
      </b-list-group>
    </div>
    <div v-else>
      <b-list-group>
        <b-list-group-item v-for="(item, index) in array" :key="index">
          <object-detail :value="item"/>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>

export default {
  name: "ArrayDetail",
  data: () => ({
    isArray: false
  }),
  props: {
    array: {
      type: Array,
    }
  },
  created() {
    if (typeof this.array[0] !== 'object')
      this.isArray = true
  },
}
</script>

<style scoped>

</style>
