<template>
  <div :class="_classStringToObject(classList || DEFAULTS.classList + ' div')">
    <a class="a" :href="redirectUrl || DEFAULTS.redirectUrl">
      <img :src="imgUrl || DEFAULTS.imgUrl" :alt="title || DEFAULTS.title" />
    </a>
  </div>
</template>

<script>
import { defineComponent } from "vue";

/*
 *
 * Web Components use only plain strings as props
 *
 * */

const DEFAULTS = {
  title: "Something went wrong",
  description: "Sorry, you are not allowed to be here",
  imgUrl:
    "https://placehold.jp/ffffff/f549b4/600x400.png?text=Something%20went%20wrong",
  redirectUrl: "/",
  classList: "not-found_wrapper",
};

export default defineComponent({
  name: "stub-not-found",

  props: ["classList", "redirectUrl", "imgUrl", "title"],

  data() {
    return { DEFAULTS };
  },

  methods: {
    _classStringToObject(str) {
      const obj = {};
      if (typeof str !== "string") {
        return obj;
      }
      const classNames = str.trim().split(/\s+/);
      for (const name of classNames) {
        obj[name] = true;
      }
      return obj;
    },
  },
});
</script>

<style scoped>
.div {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}
.a {
  color: inherit;
  text-decoration: none;
}
</style>