import React from 'react';

function Page({ params }: { params: { slug: string } }) {
  return <div>{params.slug}</div>;
}

export default Page;
