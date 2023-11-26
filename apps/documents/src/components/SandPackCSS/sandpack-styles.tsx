/* eslint-disable react/no-danger */
// Code sandbox sandpack SSR 설정

'use client';

import { getSandpackCssText } from '@codesandbox/sandpack-react';
import { useServerInsertedHTML } from 'next/navigation';

/**
 * Ensures CSSinJS styles are loaded server side.
 */
export const SandPackCSS = () => {
  useServerInsertedHTML(() => {
    return (
      <style
        dangerouslySetInnerHTML={{ __html: getSandpackCssText() }}
        id='sandpack'
      />
    );
  });
  return null;
};
