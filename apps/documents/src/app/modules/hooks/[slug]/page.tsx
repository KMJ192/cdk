import type { PAGE_HOOKS } from '@src/utils/url';

type Props = {
  params: {
    slug: PAGE_HOOKS;
  };
};

function Page({ params }: Props) {
  // return <div>{params.slug}</div>;
  return <div>준비중 입니다.</div>;
}

export default Page;
