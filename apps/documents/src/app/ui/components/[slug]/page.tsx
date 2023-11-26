import Components from '@src/appIsomorphic/ui/components/page';
import NotFoundComponent from '@src/PageContents/NotFoundComponent/NotFoundComponent';

import { COMPONENT_CONTENTS } from '@src/appIsomorphic/ui/components/contents/contents';
import type { PAGE_UI_COMPONENTS } from '@src/utils/url';

type Props = {
  params: {
    slug: PAGE_UI_COMPONENTS;
  };
};

function Page({ params }: Props) {
  if (!COMPONENT_CONTENTS[params.slug]) {
    return <NotFoundComponent queryParam={params.slug} />;
  }

  return <Components type={params.slug} />;
}

export default Page;
