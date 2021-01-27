<template>
  <section
    class="relative bg-white overflow-hidden shadow-sm"
    style="margin: 0px -14vw;"
  >
    <div class="max-w-screen-xl mx-auto">
      <div
        class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 xl:max-w-2xl xl:w-full xl:pb-28 xl:pb-32"
      >
        <svg
          class="hidden xl:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div class="relative pt-6 px-4 sm:px-6 xl:px-8"></div>

        <main
          class="mt-10 mb-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 xl:mt-20 xl:px-8 xl:mt-28"
        >
          <img
            class="w-40 h-40 mx-auto mb-8 rounded-full md:h-60 md:w-60 xl:hidden"
            src="/pictures/joel-head-shot.jpg"
            alt="Joel Brubaker"
          />
          <div class="text-center xl:text-left">
            <h1
              class="text-grey-600 text-4xl md:text-5xl tracking-tight leading-10 font-bold"
            >
              Hi there! I'm Joel Brubaker
            </h1>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-3xl sm:mx-auto md:mt-5 md:text-xl xl:mx-0"
            >
              I'm a Senior Software Engineer with Conduit Ventures. I help growth-stage startups ship code and scale teams.
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center xl:justify-start"
            >
              <div class="rounded-md shadow">
                <router-link
                  to="/about-me"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-3 md:text-lg md:px-8"
                >
                  About Me
                </router-link>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="https://twitter.com/JoelBrubaker"
                  target="_blank"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out md:py-3 md:text-lg md:px-8"
                >
                  @JoelBrubaker
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="xl:absolute bg-blue-500 xl:inset-y-0 xl:right-0 xl:w-1/2">
      <img
        class="hidden h-56 w-full object-cover sm:h-72 md:h-96 xl:w-full xl:h-full xl:block"
        src="/pictures/joel-brubaker.jpg"
        alt="Joel Brubaker"
        loading="lazy"
      />
    </div>
  </section>
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

<style lang="scss"></style>
