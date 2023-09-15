import { useStore, Show, onMount } from '@builder.io/mitosis';

/*
*
* Web Components use only plain strings as props
*
* */
export interface CookieControlProps {
  title?: string
  description?: string
  policyText?: string
  policyUrl?: string
  customClassList?: {
    container: string
    title: string
    description: string
    policyUrl: string
    acceptCta: string
    postponeCta: string
  }
  buttonGroupContent?: {
    acceptText: string
    postponeText: string
  }
  containerClass?: string
  titleClass?: string
  descriptionClass?: string
  policyUrlClass?: string
  acceptCtaClass?: string
  postponeCtaClass?: string
  acceptText?: string
  postponeText?: string
  linkTarget?: boolean
}

const DEFAULTS = {
  title: 'We use cookies',
  description: 'If you continue browsing, we consider that you have accepted the',
  policyText: 'cookies policy',
  policyUrl: 'cookie-policy',
  classList: {
    container: 'fixed bottom-5 right-5 w-[calc(100%-40px)] sm:w-72 bg-cookie-banner p-5 rounded-lg z-50 drop-shadow-lg',
    title: 'font-bold text-white text-lg',
    description: 'text-xs text-grey mb-2',
    policyUrl: 'text-pink hover:text-pink-weak cursor-pointer tracking-tight underline',
    acceptCta: 'text-base font-bold text-pink hover:text-pink-weak',
    postponeCta: 'pl-4 uppercase text-black-light text-base font-bold hover:text-black-light/70',
  },
  buttonGroupContent: {
    acceptText: 'Accept',
    postponeText: 'Ask me later'
  }
}

export default function CookieControl(props: CookieControlProps) {
  const state = useStore({
    show: true,
    acceptCookies(): void {
      localStorage.setItem('cookie-usage', 'true')

      state.show = false
    },
    postponeCookies(): void  {
      localStorage.setItem('cookie-expire', new Date().getTime().toString())
      state.show = false
    },
    checkCookieAcceptancePostpone(): boolean  {
      const expireDate = localStorage.getItem('cookie-expire')
      if (
        expireDate &&
        Math.abs(Number(expireDate) - new Date().getTime()) / (60 * 60 * 1000) > 24
      ) {
        localStorage.removeItem('cookie-expire')
        //Banner is visible
        return true
      }
      return false
    }
  });

  onMount(() => {
    const expireDate = localStorage.getItem('cookie-expire')
    state.show =
      state.checkCookieAcceptancePostpone() ||
      (!expireDate && !localStorage.getItem('cookie-usage'))
  });

  return (
      <Show when={state.show}>
        <div class={props.customClassList?.container || props.containerClass || DEFAULTS.classList.container}>
          <h4 class={props.customClassList?.title || props.titleClass || DEFAULTS.classList.title}>
            {props.title || DEFAULTS.title}
          </h4>
          <p class={props.customClassList?.description || props.descriptionClass || DEFAULTS.classList.description}>
            {props.description || DEFAULTS.description}
            <a
              class={props.customClassList?.policyUrl || props.policyUrlClass || DEFAULTS.classList.policyUrl}
              href={props.policyUrl || DEFAULTS.policyUrl}
              target={ props.linkTarget ? '_blank' : '_self' }
            >
              {props.policyText || DEFAULTS.policyText}
            </a
            >.
          </p>

          <button
            class={props.customClassList?.acceptCta || props.acceptCtaClass || DEFAULTS.classList.acceptCta}
            onClick={() => state.acceptCookies()}
          >
           {(props.buttonGroupContent?.acceptText || props.acceptText || DEFAULTS.buttonGroupContent.acceptText).toUpperCase()}
        </button>
        <button
          class={props.customClassList?.postponeCta || props.postponeCtaClass || DEFAULTS.classList.postponeCta}
          onClick={() => state.postponeCookies()}
        >
          {(props.buttonGroupContent?.postponeText || props.postponeText || DEFAULTS.buttonGroupContent.postponeText).toUpperCase()}
      </button>
        </div>
      </Show>
  );
}
