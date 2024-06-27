import { useStore, Show, onMount } from '@builder.io/mitosis';

/*
*
* Web Components use only plain strings as props
*
* */
export interface NotFoundPageProps {
  imgUrl?: string
  title?: string
  description?: string
  redirectUrl?: string
  classList?: string
}

const DEFAULTS = {
  title: 'Something went wrong',
  description: 'Sorry, you are not allowed to be here',
  imgUrl: 'https://placehold.jp/ffffff/f549b4/600x400.png?text=Something%20went%20wrong',
  redirectUrl: '/',
  classList: 'not-found_wrapper'
}

export default function StubNotFound(props: NotFoundPageProps) {
  return (
    <div class={props.classList || DEFAULTS.classList} css={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center' }}>
      <a css={{ color: 'inherit', textDecoration: 'none' }} href={props.redirectUrl || DEFAULTS.redirectUrl}>
        <img src={props.imgUrl || DEFAULTS.imgUrl}  alt={props.title || DEFAULTS.title} />
      </a>
    </div>
  );
}
