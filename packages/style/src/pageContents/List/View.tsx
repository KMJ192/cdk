import { useEffect, useRef } from 'react';

type Props = {
  html: string;
};

function View({ html }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = html;
    }
  }, [html]);

  return <div ref={ref}></div>;
}

export default View;
