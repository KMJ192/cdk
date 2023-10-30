import layout from './layout.module.scss';

export const headerHeight = Number(layout.header_height);
export const footerHeight = Number(layout.footer_height);
export const sideNavWidth = Number(layout.side_nav_width);

export const RESOLUTION_WIDTH = {
  '360': Number(layout.resolution_width_360),
  '480': Number(layout.resolution_width_480),
  '608': Number(layout.resolution_width_608),
  '768': Number(layout.resolution_width_768),
  '800': Number(layout.resolution_width_800),
};

export const RESOLUTION_HEIGHT = {
  '267': Number(layout.resolution_height_267),
  '340': Number(layout.resolution_height_340),
  '480': Number(layout.resolution_height_480),
  '600': Number(layout.resolution_height_600),
  '780': Number(layout.resolution_height_780),
};
