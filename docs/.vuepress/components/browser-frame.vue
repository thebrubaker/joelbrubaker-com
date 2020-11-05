<template>
  <div class="w-full flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="w-full h-full bg-white">
      <header class="bg-gray-100 h-6 rounded-t-lg flex items-center px-2">
        <i class="bg-red-500 h-2 w-2 rounded-full mr-2"></i>
        <i class="bg-yellow-300 h-2 w-2 rounded-full mr-2"></i>
        <i class="bg-green-300 h-2 w-2 rounded-full mr-2"></i>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
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

<style lang="scss" scoped></style>
