import { useRef } from 'react';

type Props = {
  html: string;
};

function View({ html }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  return <div ref={ref}></div>;
}

export default View;
