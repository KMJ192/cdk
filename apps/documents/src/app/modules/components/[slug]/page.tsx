import type { PAGE_MODULE_COMPONENTS } from '@src/utils/url';

type Props = {
  params: {
    slug: PAGE_MODULE_COMPONENTS;
  };
};

function Page({ params }: Props) {
  return <div>{params.slug}</div>;
}

export default Page;
