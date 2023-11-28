import HooksPage from '@src/appIsomorphic/modules/hooks/page';
import type { PAGE_HOOKS } from '@src/utils/url';

type Props = {
  params: {
    slug: PAGE_HOOKS;
  };
};

function Page({ params }: Props) {
  return <HooksPage type={params.slug} />;
}

export default Page;
