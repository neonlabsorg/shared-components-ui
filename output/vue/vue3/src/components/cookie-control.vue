<template>
  <template v-if="show">
    <div
      :class="
        _classStringToObject(
          classList?.container || DEFAULTS.classList.container
        )
      "
    >
      <h4
        :class="
          _classStringToObject(classList?.title || DEFAULTS.classList.title)
        "
      >
        {{ title || DEFAULTS.title }}
      </h4>
      <p
        :class="
          _classStringToObject(
            classList?.description || DEFAULTS.classList.description
          )
        "
      >
        {{ description || DEFAULTS.description }}
        <a
          :class="
            _classStringToObject(
              classList?.policyUrl || DEFAULTS.classList.policyUrl
            )
          "
          :href="policyUrl || DEFAULTS.policyUrl"
        >
          {{ policyText || DEFAULTS.policyText }} </a
        >.
      </p>

      <button
        :class="
          _classStringToObject(
            classList?.acceptCta || DEFAULTS.classList.acceptCta
          )
        "
        @click="acceptCookies()"
      >
        {{
          (
            buttonGroupContent?.acceptText ||
            DEFAULTS.buttonGroupContent.acceptText
          ).toUpperCase()
        }}
      </button>
      <button
        :class="
          _classStringToObject(
            classList?.postponeCta || DEFAULTS.classList.postponeCta
          )
        "
        @click="postponeCookies()"
      >
        {{
          (
            buttonGroupContent?.postponeText ||
            DEFAULTS.buttonGroupContent.postponeText
          ).toUpperCase()
        }}
      </button>
    </div>
  </template>
</template>

<script>
import { defineComponent } from "vue";

const DEFAULTS = {
  title: "We use cookies",
  description:
    "If you continue browsing, we consider that you have accepted the",
  policyText: "cookies policy",
  policyUrl: "cookie-policy",
  classList: {
    container:
      "fixed bottom-5 right-5 w-[calc(100%-40px)] sm:w-72 bg-cookie-banner p-5 rounded-lg z-50 drop-shadow-lg",
    title: "font-bold text-white text-lg",
    description: "text-xs text-grey mb-2",
    policyUrl:
      "text-pink hover:text-pink-weak cursor-pointer tracking-tight underline",
    acceptCta: "text-base font-bold text-pink hover:text-pink-weak",
    postponeCta:
      "pl-4 uppercase text-black-light text-base font-bold hover:text-black-light/70",
  },
  buttonGroupContent: {
    acceptText: "Accept",
    postponeText: "Ask me later",
  },
};

export default defineComponent({
  name: "cookie-control",

  props: [
    "classList",
    "title",
    "description",
    "policyUrl",
    "policyText",
    "buttonGroupContent",
  ],

  data() {
    return { show: true, DEFAULTS };
  },

  mounted() {
    const expireDate = localStorage.getItem("cookie-expire");
    this.show =
      this.checkCookieAcceptancePostpone() ||
      (!expireDate && !localStorage.getItem("cookie-usage"));
  },

  methods: {
    acceptCookies() {
      localStorage.setItem("cookie-usage", "true");
      this.show = false;
    },
    postponeCookies() {
      localStorage.setItem("cookie-expire", new Date().getTime().toString());
      this.show = false;
    },
    checkCookieAcceptancePostpone() {
      const expireDate = localStorage.getItem("cookie-expire");
      if (
        expireDate &&
        Math.abs(Number(expireDate) - new Date().getTime()) / (60 * 60 * 1000) >
          24
      ) {
        localStorage.removeItem("cookie-expire");
        //Banner is visible
        return true;
      }
      return false;
    },
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