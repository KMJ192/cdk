import Layout from '@src/PageContents/Layout/Layout';

function Page({ params }: { params: { slug: string } }) {
  return <Layout type={params.slug} />;
}

export default Page;
