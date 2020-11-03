<template>
  <article>
    <div class="image" :style="{ 'background-color': background }">
      <slot></slot>
    </div>
    <main>
      <small>{{ tag }}</small>
      <h1>{{ title }}</h1>
      <p>{{ body }}</p>
    </main>
    <footer>
      <a
        :href="actionLink"
        rel="noopener"
        target="_blank"
        :class="{ 'no-link': !actionLink }"
        >{{ actionText }}</a
      >
    </footer>
  </article>
</template>

<script>
export default {
  components: {},
  props: {
    background: {
      type: String,
      required: false,
      default: "#da727e",
    },
    imageAlt: {
      type: String,
      required: false,
    },
    tag: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: false,
    },
    actionLink: {
      type: String,
      required: true,
    },
    actionText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
article {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 500px;
  margin: 20px 0;
  box-shadow: 2px 2px 2px 0 rgba(black, 0.1);
  background: white;
}

.image {
  padding: 35px 15px;
  background: #da727e;
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

main {
  padding: 30px 30px 50px;
  min-height: 200px;
  width: 100%;
}

small {
  text-transform: uppercase;
  color: lighten(black, 80);
  font-weight: bold;
}

h1 {
  font-size: 1.6em;
  font-weight: bold;
  color: lighten(black, 35);
  letter-spacing: 0;
  line-height: 1.2;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  @media screen and (min-width: 425px) {
    font-size: 1.8em;
  }
}

p {
  font-size: 1.2em;
  line-height: 1.7;
  @media screen and (min-width: 425px) {
    font-size: 1em;
  }
}

footer {
  background: white;
  width: 100%;
  padding: 0 30px 30px;

  a {
    color: #cccccc;
  }
  a:hover {
    color: #da727e;
  }
  a.no-link {
    pointer-events: none;
  }
}
</style>
