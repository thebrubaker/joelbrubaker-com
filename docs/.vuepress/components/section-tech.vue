<template>
  <section
    class="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24"
    style="margin: 0 -14vw;"
  >
    <div class="relative max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <svg
        class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
        width="404"
        height="400"
        fill="none"
        viewBox="0 0 101 400"
      >
        <defs>
          <pattern
            id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
        />
      </svg>
      <div class="relative">
        <p
          class="text-center mb-16 text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
        >
          My Favorite Tools And Technology
        </p>
        <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div
            v-for="(tool, index) in list"
            :key="index"
            class="col-span-1 flex flex-col items-center text-center justify-center md:col-span-2 lg:col-span-1"
          >
            <img
              class="h-12 object-scale-down"
              width="100"
              :src="tool.icon"
              :alt="tool.text"
            />
            <div class="uppercase mt-4 text-sm font-bold text-gray-600">
              {{ tool.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      list: [
        {
          icon: "/logos/laravel.svg",
          text: "Laravel",
        },
        {
          icon: "/logos/vue.svg",
          text: "Vue",
        },
        {
          icon: "/logos/gopher.svg",
          text: "Go",
        },
        {
          icon: "/logos/google-cloud.svg",
          text: "GCP",
        },
        {
          icon: "/logos/docker.svg",
          text: "Docker",
        },
        {
          icon: "/logos/kubernets.svg",
          text: "Kubernetes",
        },
        {
          icon: "/logos/nodejs-1.svg",
          text: "Node.js",
        },
        {
          icon: "/logos/vs-code.svg",
          text: "VS Code",
        },
        {
          icon: "/logos/firebase.svg",
          text: "Firebase",
        },
        {
          icon: "/logos/jwt.svg",
          text: "JWT",
        },
        {
          icon: "/logos/nginx.svg",
          text: "Nginx",
        },
        {
          icon: "/logos/react.svg",
          text: "React",
        },
        {
          icon: "/logos/redis.svg",
          text: "Redis",
        },
        {
          icon: "/logos/sass.svg",
          text: "Sass",
        },
        {
          icon: "/logos/ubuntu.svg",
          text: "Ubuntu",
        },
        {
          icon: "/logos/algolia.svg",
          text: "Algolia",
        },
        {
          icon: "/logos/aws.svg",
          text: "AWS",
        },
        {
          icon: "/logos/netlify.svg",
          text: "Netlify",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss"></style>
