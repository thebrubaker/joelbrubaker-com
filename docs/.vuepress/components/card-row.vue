<template>
  <div class="card-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
.card-row {
  display: flex;
  flex-flow: row wrap;
  margin-left: -1rem;
  margin-right: -1rem;
}
</style>
