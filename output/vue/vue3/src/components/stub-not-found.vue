<template>
  <div
    :class="
      _classStringToObject(
        customClassList?.container || containerClass || '' + ' div'
      )
    "
  >
    <div class="div-2">
      <div class="div-3">
        <div
          :class="
            _classStringToObject(
              customClassList?.heading?.container ||
                headingContainerClass ||
                '' + ' div-4'
            )
          "
        >
          <h6
            :class="
              _classStringToObject(
                customClassList?.heading?.subtitle ||
                  headingSubtitleClass ||
                  '' + ' h6'
              )
            "
          >
            {{ DEFAULTS.heading.subtitle }}
          </h6>
          <h1
            :class="
              _classStringToObject(
                customClassList?.heading?.title ||
                  headingTitleClass ||
                  '' + ' h1'
              )
            "
          >
            {{ DEFAULTS.heading.title }}
          </h1>
        </div>
        <div class="div-5">
          <div class="div-6">
            <button
              :class="
                _classStringToObject(
                  customClassList?.backButton ||
                    backButtonClass ||
                    '' + ' button'
                )
              "
              @click="goBack()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="#CECFD2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>{{ DEFAULTS.actions.backButton }}</span>
            </button>
            <button
              :class="
                _classStringToObject(
                  customClassList?.homeButton ||
                    homeButtonClass ||
                    '' + ' button-2'
                )
              "
              @click="goHome()"
            >
              {{ DEFAULTS.actions.homeButton }}
            </button>
          </div>
        </div>
      </div>
      <div class="div-7">
        <div
          :class="
            _classStringToObject(
              customClassList?.card?.container ||
                cardContainerClass ||
                '' + ' div-8'
            )
          "
        >
          <div class="div-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14 17L17 14L14 11M10 7L7 10L10 13M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
                stroke="#94969C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div
            :class="
              _classStringToObject(
                customClassList?.card?.title || cardTitleClass || '' + ' div-10'
              )
            "
          >
            {{ DEFAULTS.cards.documentation.title }}
          </div>
          <div
            :class="
              _classStringToObject(
                customClassList?.card?.description ||
                  cardDescriptionClass ||
                  '' + ' div-11'
              )
            "
          >
            {{ DEFAULTS.cards.documentation.description }}
          </div>
          <a
            href="*"
            :class="
              _classStringToObject(
                customClassList?.card?.link || cardLinkClass || '' + ' a'
              )
            "
          >
            <span>{{ DEFAULTS.cards.documentation.linkText }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4.1665 10H15.8332M15.8332 10L9.99984 4.16667M15.8332 10L9.99984 15.8333"
                stroke="#CECFD2"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        </div>
        <div
          :class="
            _classStringToObject(
              customClassList?.card?.container ||
                cardContainerClass ||
                '' + ' div-12'
            )
          "
        >
          <div class="div-13">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 21L11.8999 20.8499C11.2053 19.808 10.858 19.287 10.3991 18.9098C9.99286 18.5759 9.52476 18.3254 9.02161 18.1726C8.45325 18 7.82711 18 6.57482 18H5.2C4.07989 18 3.51984 18 3.09202 17.782C2.71569 17.5903 2.40973 17.2843 2.21799 16.908C2 16.4802 2 15.9201 2 14.8V6.2C2 5.07989 2 4.51984 2.21799 4.09202C2.40973 3.71569 2.71569 3.40973 3.09202 3.21799C3.51984 3 4.07989 3 5.2 3H5.6C7.84021 3 8.96031 3 9.81596 3.43597C10.5686 3.81947 11.1805 4.43139 11.564 5.18404C12 6.03968 12 7.15979 12 9.4M12 21V9.4M12 21L12.1001 20.8499C12.7947 19.808 13.142 19.287 13.6009 18.9098C14.0071 18.5759 14.4752 18.3254 14.9784 18.1726C15.5467 18 16.1729 18 17.4252 18H18.8C19.9201 18 20.4802 18 20.908 17.782C21.2843 17.5903 21.5903 17.2843 21.782 16.908C22 16.4802 22 15.9201 22 14.8V6.2C22 5.07989 22 4.51984 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H18.4C16.1598 3 15.0397 3 14.184 3.43597C13.4314 3.81947 12.8195 4.43139 12.436 5.18404C12 6.03968 12 7.15979 12 9.4"
                stroke="#94969C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div
            :class="
              _classStringToObject(
                customClassList?.card?.title || cardTitleClass || '' + ' div-14'
              )
            "
          >
            {{ DEFAULTS.cards.blog.title }}
          </div>
          <div
            :class="
              _classStringToObject(
                customClassList?.card?.description ||
                  cardDescriptionClass ||
                  '' + ' div-15'
              )
            "
          >
            {{ DEFAULTS.cards.blog.description }}
          </div>
          <a
            href="*"
            :class="
              _classStringToObject(
                customClassList?.card?.link || cardLinkClass || '' + ' a'
              )
            "
          >
            <span>{{ DEFAULTS.cards.blog.linkText }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4.1665 10H15.8332M15.8332 10L9.99984 4.16667M15.8332 10L9.99984 15.8333"
                stroke="#CECFD2"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        </div>
        <div
          :class="
            _classStringToObject(
              customClassList?.card?.container ||
                cardContainerClass ||
                '' + ' div-16'
            )
          "
        >
          <div class="div-17">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6.09436 11.2288C6.03221 10.8282 5.99996 10.4179 5.99996 10C5.99996 5.58172 9.60525 2 14.0526 2C18.4999 2 22.1052 5.58172 22.1052 10C22.1052 10.9981 21.9213 11.9535 21.5852 12.8345C21.5154 13.0175 21.4804 13.109 21.4646 13.1804C21.4489 13.2512 21.4428 13.301 21.4411 13.3735C21.4394 13.4466 21.4493 13.5272 21.4692 13.6883L21.8717 16.9585C21.9153 17.3125 21.9371 17.4895 21.8782 17.6182C21.8266 17.731 21.735 17.8205 21.6211 17.8695C21.4911 17.9254 21.3146 17.8995 20.9617 17.8478L17.7765 17.3809C17.6101 17.3565 17.527 17.3443 17.4512 17.3448C17.3763 17.3452 17.3245 17.3507 17.2511 17.3661C17.177 17.3817 17.0823 17.4172 16.893 17.4881C16.0097 17.819 15.0524 18 14.0526 18C13.6344 18 13.2237 17.9683 12.8227 17.9073M7.63158 22C10.5965 22 13 19.5376 13 16.5C13 13.4624 10.5965 11 7.63158 11C4.66668 11 2.26316 13.4624 2.26316 16.5C2.26316 17.1106 2.36028 17.6979 2.53955 18.2467C2.61533 18.4787 2.65322 18.5947 2.66566 18.6739C2.67864 18.7567 2.68091 18.8031 2.67608 18.8867C2.67145 18.9668 2.65141 19.0573 2.61134 19.2383L2 22L4.9948 21.591C5.15827 21.5687 5.24 21.5575 5.31137 21.558C5.38652 21.5585 5.42641 21.5626 5.50011 21.5773C5.5701 21.5912 5.67416 21.6279 5.88227 21.7014C6.43059 21.8949 7.01911 22 7.63158 22Z"
                stroke="#94969C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div
            :class="
              _classStringToObject(
                customClassList?.card?.title || cardTitleClass || '' + ' div-18'
              )
            "
          >
            {{ DEFAULTS.cards.questions.title }}
          </div>
          <div
            :class="
              _classStringToObject(
                customClassList?.card?.description ||
                  cardDescriptionClass ||
                  '' + ' div-19'
              )
            "
          >
            {{ DEFAULTS.cards.questions.description }}
          </div>
          <a
            href="*"
            :class="
              _classStringToObject(
                customClassList?.card?.link || cardLinkClass || '' + ' a'
              )
            "
          >
            <span>{{ DEFAULTS.cards.questions.linkText }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4.1665 10H15.8332M15.8332 10L9.99984 4.16667M15.8332 10L9.99984 15.8333"
                stroke="#CECFD2"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
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
  heading: {
    title: "Uh-oh! It seems this page is stuck in a transaction loop.",
    subtitle: "404 Error: Lost in the Blockchain",
  },
  actions: {
    homeButton: "Go home",
    backButton: "Go back",
  },
  cards: {
    documentation: {
      title: "Documentation",
      description: "Dive in to learn all about our product.",
      linkText: "Start learning",
      linkHref: "",
    },
    blog: {
      title: "Our blog",
      description: "Read the latest posts on our blog.",
      linkText: "View lastest posts",
      linkHref: "",
    },
    questions: {
      title: "Do You Have Questions?",
      description: "We have answers (well, most of the times!)",
      linkText: "Visit our FAQ",
      linkHref: "",
    },
  },
  redirectUrl: "/",
};

export default defineComponent({
  name: "stub-not-found",

  props: [
    "customClassList",
    "containerClass",
    "headingContainerClass",
    "headingSubtitleClass",
    "headingTitleClass",
    "backButtonClass",
    "homeButtonClass",
    "cardContainerClass",
    "cardTitleClass",
    "cardDescriptionClass",
    "cardLinkClass",
  ],

  data() {
    return { DEFAULTS };
  },

  methods: {
    goHome() {
      window.location.href = "/";
    },
    goBack() {
      history.back();
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

<style scoped>
.div {
  display: flex;
  height: 52rem;
  justify-content: center;
  align-items: center;
  margin-top: 5.5rem;
  margin-bottom: 0.75rem;
}
.div-2 {
  display: flex;
  flex-direction: column;
}
.div-3 {
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
  align-items: center;
}
.div-4 {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 50rem;
  margin-bottom: 3rem;
  align-items: center;
}
.h6 {
  color: #cecfd2;
  font-weight: 600;
}
.h1 {
  font-size: 3.75rem;
  font-weight: 600;
  line-height: 4.5rem;
  color: #f5f5f6;
}
.div-5 {
  display: flex;
  justify-content: center;
}
.div-6 {
  display: flex;
  gap: 0.75rem;
}
.button {
  display: flex;
  gap: 0.625rem;
  border: solid;
  font-size: 1.125rem;
  font-weight: 600;
  color: #cecfd2;
  background: #161b26;
  border-color: #333741;
  border-radius: 0.5rem;
  padding: 1rem 1.25rem;
}
.button-2 {
  font-size: 1.125rem;
  font-weight: 600;
  background: #c121de;
  border-radius: 0.5rem;
  color: #ffffff;
  padding: 1rem 1.25rem;
}
.div-7 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.div-8 {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #161b26;
  padding: 1.5rem;
}
.div-9 {
  margin-bottom: 3rem;
}
.div-10 {
  color: #f5f5f6;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.div-11 {
  color: #94969c;
  margin-bottom: 1.25rem;
}
.a {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-weight: 600;
  color: #cecfd2;
}
.div-12 {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #161b26;
  padding: 1.5rem;
}
.div-13 {
  margin-bottom: 3rem;
}
.div-14 {
  color: #f5f5f6;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.div-15 {
  color: #94969c;
  margin-bottom: 1.25rem;
}
.div-16 {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #161b26;
  padding: 1.5rem;
}
.div-17 {
  margin-bottom: 3rem;
}
.div-18 {
  color: #f5f5f6;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.div-19 {
  color: #94969c;
  margin-bottom: 1.25rem;
}
</style>