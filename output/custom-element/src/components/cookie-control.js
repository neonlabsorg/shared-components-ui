/*
 *
 * Web Components use only plain strings as props
 *
 * */

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

/**
 * Usage:
 *
 *  <cookie-control></cookie-control>
 *
 */
class CookieControl extends HTMLElement {
  get _root() {
    return this.shadowRoot || this;
  }

  constructor() {
    super();
    const self = this;

    this.state = {
      show: true,
      acceptCookies() {
        localStorage.setItem("cookie-usage", "true");
        self.state.show = false;
        self.update();
      },
      postponeCookies() {
        localStorage.setItem("cookie-expire", new Date().getTime().toString());
        self.state.show = false;
        self.update();
      },
      checkCookieAcceptancePostpone() {
        const expireDate = localStorage.getItem("cookie-expire");
        if (
          expireDate &&
          Math.abs(Number(expireDate) - new Date().getTime()) /
            (60 * 60 * 1000) >
            24
        ) {
          localStorage.removeItem("cookie-expire");
          //Banner is visible
          return true;
        }
        return false;
      },
    };
    if (!this.props) {
      this.props = {};
    }

    this.componentProps = [
      "customClassList",
      "containerClass",
      "titleClass",
      "title",
      "descriptionClass",
      "description",
      "policyUrlClass",
      "policyUrl",
      "linkTarget",
      "policyText",
      "acceptCtaClass",
      "buttonGroupContent",
      "acceptText",
      "postponeCtaClass",
      "postponeText",
    ];

    // used to keep track of all nodes created by show/for
    this.nodesToDestroy = [];
    // batch updates
    this.pendingUpdate = false;

    // Event handler for 'click' event on button-cookie-control-1
    this.onButtonCookieControl1Click = (event) => {
      this.state.acceptCookies();
    };

    // Event handler for 'click' event on button-cookie-control-2
    this.onButtonCookieControl2Click = (event) => {
      this.state.postponeCookies();
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
      <template data-el="show-cookie-control">
        <div data-el="div-cookie-control-1">
          <h4 data-el="h4-cookie-control-1">
            <template data-el="div-cookie-control-2">
              <!-- props.title || DEFAULTS.title -->
            </template>
          </h4>
      
          <p data-el="p-cookie-control-1">
            <template data-el="div-cookie-control-3">
              <!-- props.description || DEFAULTS.description -->
            </template>
      
            <a data-el="a-cookie-control-1">
              <template data-el="div-cookie-control-4">
                <!-- props.policyText || DEFAULTS.policyText -->
              </template>
            </a>
            .
          </p>
      
          <button data-el="button-cookie-control-1">
            <template data-el="div-cookie-control-5">
              <!-- (props.buttonGroupContent?.acceptText || props.acceptText || DEFAULTS.buttonGroupContent.acceptText).toUpperCase() -->
            </template>
          </button>
      
          <button data-el="button-cookie-control-2">
            <template data-el="div-cookie-control-6">
              <!-- (props.buttonGroupContent?.postponeText || props.postponeText || DEFAULTS.buttonGroupContent.postponeText).toUpperCase() -->
            </template>
          </button>
        </div>
      </template>`;
    this.pendingUpdate = true;

    this.render();
    this.onMount();
    this.pendingUpdate = false;
    this.update();
  }

  showContent(el) {
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement/content
    // grabs the content of a node that is between <template> tags
    // iterates through child nodes to register all content including text elements
    // attaches the content after the template

    const elementFragment = el.content.cloneNode(true);
    const children = Array.from(elementFragment.childNodes);
    children.forEach((child) => {
      if (el?.scope) {
        child.scope = el.scope;
      }
      if (el?.context) {
        child.context = el.context;
      }
      this.nodesToDestroy.push(child);
    });
    el.after(elementFragment);
  }

  onMount() {
    // onMount
    const expireDate = localStorage.getItem("cookie-expire");
    this.state.show =
      this.state.checkCookieAcceptancePostpone() ||
      (!expireDate && !localStorage.getItem("cookie-usage"));
    this.update();
  }

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
      .querySelectorAll("[data-el='show-cookie-control']")
      .forEach((el) => {
        const whenCondition = this.state.show;
        if (whenCondition) {
          this.showContent(el);
        }
      });

    this._root
      .querySelectorAll("[data-el='div-cookie-control-1']")
      .forEach((el) => {
        el.className =
          this.props.customClassList?.container ||
          this.props.containerClass ||
          DEFAULTS.classList.container;
      });

    this._root
      .querySelectorAll("[data-el='h4-cookie-control-1']")
      .forEach((el) => {
        el.className =
          this.props.customClassList?.title ||
          this.props.titleClass ||
          DEFAULTS.classList.title;
      });

    this._root
      .querySelectorAll("[data-el='div-cookie-control-2']")
      .forEach((el) => {
        this.renderTextNode(el, this.props.title || DEFAULTS.title);
      });

    this._root
      .querySelectorAll("[data-el='p-cookie-control-1']")
      .forEach((el) => {
        el.className =
          this.props.customClassList?.description ||
          this.props.descriptionClass ||
          DEFAULTS.classList.description;
      });

    this._root
      .querySelectorAll("[data-el='div-cookie-control-3']")
      .forEach((el) => {
        this.renderTextNode(el, this.props.description || DEFAULTS.description);
      });

    this._root
      .querySelectorAll("[data-el='a-cookie-control-1']")
      .forEach((el) => {
        el.className =
          this.props.customClassList?.policyUrl ||
          this.props.policyUrlClass ||
          DEFAULTS.classList.policyUrl;
        el.setAttribute("href", this.props.policyUrl || DEFAULTS.policyUrl);
        el.setAttribute("target", this.props.linkTarget ? "_blank" : "_self");
      });

    this._root
      .querySelectorAll("[data-el='div-cookie-control-4']")
      .forEach((el) => {
        this.renderTextNode(el, this.props.policyText || DEFAULTS.policyText);
      });

    this._root
      .querySelectorAll("[data-el='button-cookie-control-1']")
      .forEach((el) => {
        el.className =
          this.props.customClassList?.acceptCta ||
          this.props.acceptCtaClass ||
          DEFAULTS.classList.acceptCta;
        el.removeEventListener("click", this.onButtonCookieControl1Click);
        el.addEventListener("click", this.onButtonCookieControl1Click);
      });

    this._root
      .querySelectorAll("[data-el='div-cookie-control-5']")
      .forEach((el) => {
        this.renderTextNode(
          el,
          (
            this.props.buttonGroupContent?.acceptText ||
            this.props.acceptText ||
            DEFAULTS.buttonGroupContent.acceptText
          ).toUpperCase()
        );
      });

    this._root
      .querySelectorAll("[data-el='button-cookie-control-2']")
      .forEach((el) => {
        el.className =
          this.props.customClassList?.postponeCta ||
          this.props.postponeCtaClass ||
          DEFAULTS.classList.postponeCta;
        el.removeEventListener("click", this.onButtonCookieControl2Click);
        el.addEventListener("click", this.onButtonCookieControl2Click);
      });

    this._root
      .querySelectorAll("[data-el='div-cookie-control-6']")
      .forEach((el) => {
        this.renderTextNode(
          el,
          (
            this.props.buttonGroupContent?.postponeText ||
            this.props.postponeText ||
            DEFAULTS.buttonGroupContent.postponeText
          ).toUpperCase()
        );
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

customElements.define("cookie-control", CookieControl);
