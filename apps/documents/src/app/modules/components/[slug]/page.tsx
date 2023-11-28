import ModuleComponentsPage from '@src/appIsomorphic/modules/components/page';
import type { PAGE_MODULE_COMPONENTS } from '@src/utils/url';

type Props = {
  params: {
    slug: PAGE_MODULE_COMPONENTS;
  };
};

function Page({ params }: Props) {
  return <ModuleComponentsPage type={params.slug} />;
}

export default Page;
