import Layout from '@src/appIsomorphic/ui/layout/page';
import NotFoundComponent from '@src/components/NotFoundComponent/NotFoundComponent';

import { LAYOUT_CONTENTS } from '@src/appIsomorphic/ui/layout/contents/contents';
import type { PAGE_LAYOUT } from '@src/utils/url';

type Props = {
  params: {
    slug: PAGE_LAYOUT;
  };
};

function Page({ params }: Props) {
  if (!LAYOUT_CONTENTS[params.slug]) {
    return <NotFoundComponent queryParam={params.slug} />;
  }

  return <Layout type={params.slug} />;
}

export default Page;
