import Layout from '@src/PageContents/Layout/Layout';
import type { PAGE_LAYOUT } from '@src/utils/url';

type Props = {
  params: {
    slug: PAGE_LAYOUT;
  };
};

function Page({ params }: Props) {
  return <Layout type={params.slug} />;
}

export default Page;
