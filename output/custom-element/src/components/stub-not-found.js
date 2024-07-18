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

/**
 * Usage:
 *
 *  <stub-not-found></stub-not-found>
 *
 */
class StubNotFound extends HTMLElement {
  get _root() {
    return this.shadowRoot || this;
  }

  constructor() {
    super();
    const self = this;

    this.state = {
      goHome() {
        window.location.href = self.props.homeUrl || "/";
      },
      goBack() {
        history.back();
      },
    };
    if (!this.props) {
      this.props = {};
    }

    this.componentProps = [
      "homeUrl",
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
      "docsCardLink",
      "blogCardLink",
      "faqCardLink",
    ];

    // used to keep track of all nodes created by show/for
    this.nodesToDestroy = [];
    // batch updates
    this.pendingUpdate = false;

    // Event handler for 'click' event on button-stub-not-found-1
    this.onButtonStubNotFound1Click = (event) => {
      this.state.goBack();
    };

    // Event handler for 'click' event on button-stub-not-found-2
    this.onButtonStubNotFound2Click = (event) => {
      this.state.goHome();
    };

    if (undefined) {
      this.attachShadow({ mode: "open" });
    }
  }

  destroyAnyNodes() {
    // destroy current view template refs before rendering again
    this.nodesToDestroy.forEach((el) => el.remove());
    this.nodesToDestroy = [];
  }

  connectedCallback() {
    this.getAttributeNames().forEach((attr) => {
      const jsVar = attr.replace(/-/g, "");
      const regexp = new RegExp(jsVar, "i");
      this.componentProps.forEach((prop) => {
        if (regexp.test(prop)) {
          const attrValue = this.getAttribute(attr);
          if (this.props[prop] !== attrValue) {
            this.props[prop] = attrValue;
          }
        }
      });
    });

    this._root.innerHTML = `
      <div data-el="div-stub-not-found-1">
        <div class="div-stub-not-found-2">
          <div class="div-stub-not-found-3">
            <div data-el="div-stub-not-found-2">
              <h6 data-el="h6-stub-not-found-1">
                <template data-el="div-stub-not-found-3">
                  <!-- DEFAULTS.heading.subtitle -->
                </template>
              </h6>
      
              <h1 data-el="h1-stub-not-found-1">
                <template data-el="div-stub-not-found-4">
                  <!-- DEFAULTS.heading.title -->
                </template>
              </h1>
            </div>
      
            <div class="div-stub-not-found-5">
              <div class="div-stub-not-found-6">
                <button data-el="button-stub-not-found-1">
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
      
                  <span>
                    <template data-el="div-stub-not-found-5">
                      <!-- DEFAULTS.actions.backButton -->
                    </template>
                  </span>
                </button>
      
                <button data-el="button-stub-not-found-2">
                  <template data-el="div-stub-not-found-6">
                    <!-- DEFAULTS.actions.homeButton -->
                  </template>
                </button>
              </div>
            </div>
          </div>
      
          <div class="div-stub-not-found-7">
            <div data-el="div-stub-not-found-7">
              <div class="div-stub-not-found-9">
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
      
              <div data-el="div-stub-not-found-8">
                <template data-el="div-stub-not-found-9">
                  <!-- DEFAULTS.cards.documentation.title -->
                </template>
              </div>
      
              <div data-el="div-stub-not-found-10">
                <template data-el="div-stub-not-found-11">
                  <!-- DEFAULTS.cards.documentation.description -->
                </template>
              </div>
      
              <a data-el="a-stub-not-found-1">
                <span>
                  <template data-el="div-stub-not-found-12">
                    <!-- DEFAULTS.cards.documentation.linkText -->
                  </template>
                </span>
      
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
      
            <div data-el="div-stub-not-found-13">
              <div class="div-stub-not-found-13">
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
      
              <div data-el="div-stub-not-found-14">
                <template data-el="div-stub-not-found-15">
                  <!-- DEFAULTS.cards.blog.title -->
                </template>
              </div>
      
              <div data-el="div-stub-not-found-16">
                <template data-el="div-stub-not-found-17">
                  <!-- DEFAULTS.cards.blog.description -->
                </template>
              </div>
      
              <a data-el="a-stub-not-found-2">
                <span>
                  <template data-el="div-stub-not-found-18">
                    <!-- DEFAULTS.cards.blog.linkText -->
                  </template>
                </span>
      
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
      
            <div data-el="div-stub-not-found-19">
              <div class="div-stub-not-found-17">
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
      
              <div data-el="div-stub-not-found-20">
                <template data-el="div-stub-not-found-21">
                  <!-- DEFAULTS.cards.questions.title -->
                </template>
              </div>
      
              <div data-el="div-stub-not-found-22">
                <template data-el="div-stub-not-found-23">
                  <!-- DEFAULTS.cards.questions.description -->
                </template>
              </div>
      
              <a data-el="a-stub-not-found-3">
                <span>
                  <template data-el="div-stub-not-found-24">
                    <!-- DEFAULTS.cards.questions.linkText -->
                  </template>
                </span>
      
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
      <style>
        .div-stub-not-found {
          display: flex;
          height: 52rem;
          justify-content: center;
          align-items: center;
          margin-top: 5.5rem;
          margin-bottom: 0.75rem;
        }
        @media (max-width: 600px) {
          .div-stub-not-found {
            height: 96rem;
          }
        }
        .div-stub-not-found-2 {
          display: flex;
          flex-direction: column;
        }
        .div-stub-not-found-3 {
          display: flex;
          flex-direction: column;
          margin-bottom: 6rem;
          align-items: center;
        }
        @media (max-width: 600px) {
          .div-stub-not-found-3 {
            margin-bottom: 3rem;
          }
        }
        .div-stub-not-found-4 {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          max-width: 50rem;
          margin-bottom: 3rem;
          align-items: center;
        }
        @media (max-width: 992px) {
          .div-stub-not-found-4 {
            padding: 0 1.5rem;
            text-align: center;
          }
        }
        .h6-stub-not-found {
          color: #cecfd2;
          font-weight: 600;
        }
        .h1-stub-not-found {
          font-size: 3.75rem;
          font-weight: 600;
          line-height: 4.5rem;
          color: #f5f5f6;
        }
        @media (max-width: 600px) {
          .h1-stub-not-found {
            font-size: 2.5rem;
          }
        }
        .div-stub-not-found-5 {
          display: flex;
          justify-content: center;
        }
        .div-stub-not-found-6 {
          display: flex;
          gap: 0.75rem;
        }
        .button-stub-not-found {
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
        .button-stub-not-found-2 {
          font-size: 1.125rem;
          font-weight: 600;
          background: #c121de;
          border-radius: 0.5rem;
          color: #ffffff;
          padding: 1rem 1.25rem;
        }
        .div-stub-not-found-7 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding: 0 1.5rem;
          gap: 2rem;
        }
        @media (max-width: 600px) {
          .div-stub-not-found-7 {
            display: flex;
            flex-direction: column;
          }
        }
        .div-stub-not-found-8 {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: #161b26;
          padding: 1.5rem;
        }
        .div-stub-not-found-9 {
          margin-bottom: 3rem;
        }
        .div-stub-not-found-10 {
          color: #f5f5f6;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .div-stub-not-found-11 {
          color: #94969c;
          margin-bottom: 1.25rem;
        }
        .a-stub-not-found {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          font-weight: 600;
          color: #cecfd2;
        }
        .div-stub-not-found-12 {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: #161b26;
          padding: 1.5rem;
        }
        .div-stub-not-found-13 {
          margin-bottom: 3rem;
        }
        .div-stub-not-found-14 {
          color: #f5f5f6;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .div-stub-not-found-15 {
          color: #94969c;
          margin-bottom: 1.25rem;
        }
        .div-stub-not-found-16 {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: #161b26;
          padding: 1.5rem;
        }
        .div-stub-not-found-17 {
          margin-bottom: 3rem;
        }
        .div-stub-not-found-18 {
          color: #f5f5f6;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .div-stub-not-found-19 {
          color: #94969c;
          margin-bottom: 1.25rem;
        }
      </style>`;
    this.pendingUpdate = true;

    this.render();
    this.onMount();
    this.pendingUpdate = false;
    this.update();
  }

  onMount() {}

  onUpdate() {}

  update() {
    if (this.pendingUpdate === true) {
      return;
    }
    this.pendingUpdate = true;
    this.render();
    this.onUpdate();
    this.pendingUpdate = false;
  }

  render() {
    // re-rendering needs to ensure that all nodes generated by for/show are refreshed
    this.destroyAnyNodes();
    this.updateBindings();
  }

  updateBindings() {
    this._root
      .querySelectorAll("[data-el='div-stub-not-found-1']")
      .forEach((el) => {
        el.className =
          this.props.customClassList?.container ||
          this.props.containerClass ||
          "" + " div-stub-not-found";
      });

    this._root
      .querySelectorAll("[data-el='div-stub-not-found-2']")
      .forEach((el) => {
        el.className =
          this.props.customClassList?.heading?.container ||
          this.props.headingContainerClass ||
          "" + " div-stub-not-found-4";
      });

    this._root
      .querySelectorAll("[data-el='h6-stub-not-found-1']")
      .forEach((el) => {
        el.className =
          this.props.customClassList?.heading?.subtitle ||
          this.props.headingSubtitleClass ||
          "" + " h6-stub-not-found";
      });

    this._root
      .querySelectorAll("[data-el='div-stub-not-found-3']")
      .forEach((el) => {
        this.renderTextNode(el, DEFAULTS.heading.subtitle);
      });

    this._root
      .querySelectorAll("[data-el='h1-stub-not-found-1']")
      .forEach((el) => {
        el.className =
          this.props.customClassList?.heading?.title ||
          this.props.headingTitleClass ||
          "" + " h1-stub-not-found";
      });

    this._root
      .querySelectorAll("[data-el='div-stub-not-found-4']")
      .forEach((el) => {
        this.renderTextNode(el, DEFAULTS.heading.title);
      });

    this._root
      .querySelectorAll("[data-el='button-stub-not-found-1']")
      .forEach((el) => {
        el.className =
          this.props.customClassList?.backButton ||
          this.props.backButtonClass ||
          "" + " button-stub-not-found";
        el.removeEventListener("click", this.onButtonStubNotFound1Click);
        el.addEventListener("click", this.onButtonStubNotFound1Click);
      });

    this._root
      .querySelectorAll("[data-el='div-stub-not-found-5']")
      .forEach((el) => {
        this.renderTextNode(el, DEFAULTS.actions.backButton);
      });

    this._root
      .querySelectorAll("[data-el='button-stub-not-found-2']")
      .forEach((el) => {
        el.className =
          this.props.customClassList?.homeButton ||
          this.props.homeButtonClass ||
          "" + " button-stub-not-found-2";
        el.removeEventListener("click", this.onButtonStubNotFound2Click);
        el.addEventListener("click", this.onButtonStubNotFound2Click);
      });

    this._root
      .querySelectorAll("[data-el='div-stub-not-found-6']")
      .forEach((el) => {
        this.renderTextNode(el, DEFAULTS.actions.homeButton);
      });

    this._root
      .querySelectorAll("[data-el='div-stub-not-found-7']")
      .forEach((el) => {
        el.className =
          this.props.customClassList?.card?.container ||
          this.props.cardContainerClass ||
          "" + " div-stub-not-found-8";
      });

    this._root
      .querySelectorAll("[data-el='div-stub-not-found-8']")
      .forEach((el) => {
        el.className =
          this.props.customClassList?.card?.title ||
          this.props.cardTitleClass ||
          "" + " div-stub-not-found-10";
      });

    this._root
      .querySelectorAll("[data-el='div-stub-not-found-9']")
      .forEach((el) => {
        this.renderTextNode(el, DEFAULTS.cards.documentation.title);
      });

    this._root
      .querySelectorAll("[data-el='div-stub-not-found-10']")
      .forEach((el) => {
        el.className =
          this.props.customClassList?.card?.description ||
          this.props.cardDescriptionClass ||
          "" + " div-stub-not-found-11";
      });

    this._root
      .querySelectorAll("[data-el='div-stub-not-found-11']")
      .forEach((el) => {
        this.renderTextNode(el, DEFAULTS.cards.documentation.description);
      });

    this._root
      .querySelectorAll("[data-el='a-stub-not-found-1']")
      .forEach((el) => {
        el.className =
          this.props.customClassList?.card?.link ||
          this.props.cardLinkClass ||
          "" + " a-stub-not-found";
        el.setAttribute("href", this.props.docsCardLink || "/");
      });

    this._root
      .querySelectorAll("[data-el='div-stub-not-found-12']")
      .forEach((el) => {
        this.renderTextNode(el, DEFAULTS.cards.documentation.linkText);
      });

    this._root
      .querySelectorAll("[data-el='div-stub-not-found-13']")
      .forEach((el) => {
        el.className =
          this.props.customClassList?.card?.container ||
          this.props.cardContainerClass ||
          "" + " div-stub-not-found-12";
      });

    this._root
      .querySelectorAll("[data-el='div-stub-not-found-14']")
      .forEach((el) => {
        el.className =
          this.props.customClassList?.card?.title ||
          this.props.cardTitleClass ||
          "" + " div-stub-not-found-14";
      });

    this._root
      .querySelectorAll("[data-el='div-stub-not-found-15']")
      .forEach((el) => {
        this.renderTextNode(el, DEFAULTS.cards.blog.title);
      });

    this._root
      .querySelectorAll("[data-el='div-stub-not-found-16']")
      .forEach((el) => {
        el.className =
          this.props.customClassList?.card?.description ||
          this.props.cardDescriptionClass ||
          "" + " div-stub-not-found-15";
      });

    this._root
      .querySelectorAll("[data-el='div-stub-not-found-17']")
      .forEach((el) => {
        this.renderTextNode(el, DEFAULTS.cards.blog.description);
      });

    this._root
      .querySelectorAll("[data-el='a-stub-not-found-2']")
      .forEach((el) => {
        el.className =
          this.props.customClassList?.card?.link ||
          this.props.cardLinkClass ||
          "" + " a-stub-not-found";
        el.setAttribute("href", this.props.blogCardLink || "/");
      });

    this._root
      .querySelectorAll("[data-el='div-stub-not-found-18']")
      .forEach((el) => {
        this.renderTextNode(el, DEFAULTS.cards.blog.linkText);
      });

    this._root
      .querySelectorAll("[data-el='div-stub-not-found-19']")
      .forEach((el) => {
        el.className =
          this.props.customClassList?.card?.container ||
          this.props.cardContainerClass ||
          "" + " div-stub-not-found-16";
      });

    this._root
      .querySelectorAll("[data-el='div-stub-not-found-20']")
      .forEach((el) => {
        el.className =
          this.props.customClassList?.card?.title ||
          this.props.cardTitleClass ||
          "" + " div-stub-not-found-18";
      });

    this._root
      .querySelectorAll("[data-el='div-stub-not-found-21']")
      .forEach((el) => {
        this.renderTextNode(el, DEFAULTS.cards.questions.title);
      });

    this._root
      .querySelectorAll("[data-el='div-stub-not-found-22']")
      .forEach((el) => {
        el.className =
          this.props.customClassList?.card?.description ||
          this.props.cardDescriptionClass ||
          "" + " div-stub-not-found-19";
      });

    this._root
      .querySelectorAll("[data-el='div-stub-not-found-23']")
      .forEach((el) => {
        this.renderTextNode(el, DEFAULTS.cards.questions.description);
      });

    this._root
      .querySelectorAll("[data-el='a-stub-not-found-3']")
      .forEach((el) => {
        el.className =
          this.props.customClassList?.card?.link ||
          this.props.cardLinkClass ||
          "" + " a-stub-not-found";
        el.setAttribute("href", this.props.faqCardLink || "/");
      });

    this._root
      .querySelectorAll("[data-el='div-stub-not-found-24']")
      .forEach((el) => {
        this.renderTextNode(el, DEFAULTS.cards.questions.linkText);
      });
  }

  // Helper to render content
  renderTextNode(el, text) {
    const textNode = document.createTextNode(text);
    if (el?.scope) {
      textNode.scope = el.scope;
    }
    if (el?.context) {
      textNode.context = el.context;
    }
    el.after(textNode);
    this.nodesToDestroy.push(el.nextSibling);
  }
}

customElements.define("stub-not-found", StubNotFound);
