<template>
  <b-card
    :title="cardTitle"
    :sub-title="cardSubTitle"
    tag="article"
    :style="'max-width: ' + maxWidth"
    class="m-2"
  >
    <b-card-text>
      {{ cardContent }}
    </b-card-text>

    <b-button
      :class="buttonClasses"
      @click="$emit('button-click')"
      variant="primary"
      >{{ buttonContent }}</b-button
    >
  </b-card>
</template>

<script>
export default {
  props: {
    cardTitle: {
      default: null,
    },

    cardSubTitle: {
      default: null,
    },

    cardContent: {
      default:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },

    maxWidth: {
      default: "20em",
    },

    buttonContent: {
      default: "Click Here",
    },

    buttonClasses: {
      default: null,
    },
  },
};
</script>

<style scoped>
.hidden {
  display: none;
}
</style>
