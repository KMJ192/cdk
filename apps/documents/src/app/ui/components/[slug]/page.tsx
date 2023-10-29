import type { PAGE_UI_COMPONENTS } from '@src/utils/url';

type Props = {
  params: {
    slug: PAGE_UI_COMPONENTS;
  };
};

function Page({ params }: Props) {
  return <div>{params.slug}</div>;
}

export default Page;
