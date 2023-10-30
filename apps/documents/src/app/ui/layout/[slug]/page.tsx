import Layout from '@src/PageContents/Layout/Layout';
import NotFoundLayout from '@src/PageContents/Layout/NotFoundLayout/NotFoundLayout';

import { LAYOUT_CONTENTS } from '@src/PageContents/Layout/contents/contents';
import type { PAGE_LAYOUT } from '@src/utils/url';

type Props = {
  params: {
    slug: PAGE_LAYOUT;
  };
};

function Page({ params }: Props) {
  if (!LAYOUT_CONTENTS[params.slug]) {
    return <NotFoundLayout queryParam={params.slug} />;
  }

  return <Layout type={params.slug} />;
}

export default Page;
