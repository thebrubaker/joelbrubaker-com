<template>
  <card-row>
    <div class="card-row-item">
    <card
        background="#455c7b"
        tag="Claims Processing Platform"
        title="Premier Healthcare Management"
        actionText="Visit Website"
        actionLink="https://www.phmtech.com/"
      >
        <browser-frame>
          <img class="project-image" src="/projects/premier.png"></img>
        </browser-frame>
      </card>
    </div>
    <div class="card-row-item">
      <card
        background="#ac6c82"
        tag="Fitness Studio Management"
        title="Pure Studio"
        actionText="Visit Website"
        actionLink="https://purestudio.com/"
      >
        <browser-frame>
          <img class="project-image" src="/projects/pure.jpg"></img>
        </browser-frame>
      </card>
    </div>
  </card-row>
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
.card-row-item {
  flex: 1 0 calc(100%);
  box-sizing: border-box;
  padding: 0 1rem 1rem;
  @media only screen and (min-width: 500px) {
    flex: 1 0 calc(100% / 2);
  }
  @media only screen and (min-width: 1100px) {
    flex: 1 0 calc(100% / 4);
  }
}
.project-image {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
</style>
