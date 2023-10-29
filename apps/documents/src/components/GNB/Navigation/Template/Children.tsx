import React from 'react';

import type { NavigationItem, NavigationKey } from '../types';
import SideNav from '../Navigation';

import type { Options } from './Template';

type Props = {
  uniqueKey: NavigationKey;
  options: Options;
  depth: number;
  navItem?: Array<NavigationItem>;
  onClick: (key: NavigationKey) => void;
} & Pick<NavigationItem, 'contents' | 'disabled'>;

function Children({
  uniqueKey,
  options,
  depth,
  contents,
  disabled,
  navItem,
  onClick,
}: Props) {
  return (
    <>
      <SideNav.Menu
        disabled={disabled}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
          onClick(uniqueKey);
        }}
        selected={options.selected === uniqueKey}
      >
        {contents}
      </SideNav.Menu>
      {Array.isArray(navItem) && (
        <SideNav.MenuGroup depth={depth} show={options.show.has(uniqueKey)}>
          {navItem.map(({ key, contents, disabled, children }) => {
            return (
              <Children
                key={key}
                uniqueKey={key}
                options={options}
                depth={depth + 1}
                disabled={disabled}
                contents={contents}
                navItem={children}
                onClick={onClick}
              />
            );
          })}
        </SideNav.MenuGroup>
      )}
    </>
  );
}

export default Children;
