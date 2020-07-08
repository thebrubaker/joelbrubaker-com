<template>
  <ul>
    <li v-for="(tool, index) in list" :key="index">
      <div class="icon-container">
        <img :src="tool.icon" class="icon" width="50" />
      </div>
      {{ tool.text }}
    </li>
  </ul>
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
        // {
        //   icon: "/logos/vs-code.svg",
        //   text: "VS Code",
        // },
        {
          icon: "/logos/firebase.svg",
          text: "Firebase",
        },
        // {
        //   icon: "/logos/jwt.svg",
        //   text: "JWT",
        // },
        {
          icon: "/logos/nginx.svg",
          text: "Nginx",
        },
        {
          icon: "/logos/react.svg",
          text: "React",
        },
        // {
        //   icon: "/logos/redis.svg",
        //   text: "Redis",
        // },
        // {
        //   icon: "/logos/sass.svg",
        //   text: "Sass",
        // },
        // {
        //   icon: "/logos/ubuntu.svg",
        //   text: "Ubuntu",
        // },
        {
          icon: "/logos/algolia.svg",
          text: "Algolia",
        },
        {
          icon: "/logos/aws.svg",
          text: "AWS",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-flow: row wrap;
  margin-left: -1rem;
  margin-right: -1rem;
  padding: 1rem 0;
  list-style: none;
  width: 100%;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: bold;
    flex: 1 0 calc(100% / 2);
    box-sizing: border-box;
    padding: 1rem 2rem;
    @media only screen and (min-width: 500px) {
      flex: 1 0 calc(100% / 3);
    }
    @media only screen and (min-width: 600px) {
      flex: 1 0 calc(100% / 4);
    }
    @media only screen and (min-width: 700px) {
      flex: 1 0 calc(100% / 6);
    }
  }
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
  }
}
</style>
