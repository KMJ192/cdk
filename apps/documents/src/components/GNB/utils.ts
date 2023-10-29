import { URL } from '@src/utils/url';

type NavGroup = {
  url: string;
  contents: string;
};

const layoutGroup: Array<NavGroup> = [
  {
    url: URL.center,
    contents: 'Center',
  },
  {
    url: URL.flex,
    contents: 'Flex',
  },
  {
    url: URL.grid,
    contents: 'Grid',
  },
  {
    url: URL.float,
    contents: 'Float',
  },
  {
    url: URL.row,
    contents: 'Row',
  },
  {
    url: URL.spacing,
    contents: 'Spacing',
  },
  {
    url: URL.stack,
    contents: 'Stack',
  },
];

const uiComponentGroup: Array<NavGroup> = [
  {
    url: URL.button,
    contents: 'Button',
  },
  {
    url: URL.badge,
    contents: 'Badge',
  },
  {
    url: URL.checkbox,
    contents: 'Checkbox',
  },
  {
    url: URL.input,
    contents: 'Input',
  },
  {
    url: URL.popup,
    contents: 'Popup',
  },
  {
    url: URL.progressBar,
    contents: 'ProgressBar',
  },
  {
    url: URL.radio,
    contents: 'Radio',
  },
  {
    url: URL.radioGroup,
    contents: 'RadioGroup',
  },
  {
    url: URL.spinner,
    contents: 'Spinner',
  },
  {
    url: URL.switch,
    contents: 'Switch',
  },
  {
    url: URL.select,
    contents: 'Select',
  },
  {
    url: URL.tab,
    contents: 'Tab',
  },
  {
    url: URL.dataTable,
    contents: 'DataTable',
  },
  {
    url: URL.textarea,
    contents: 'Textarea',
  },
];

const hooksGroup: Array<NavGroup> = [
  {
    url: URL.useTrie,
    contents: 'useTrie',
  },
  {
    url: URL.useClickAway,
    contents: 'useClickAway',
  },
  {
    url: URL.useComponentDidMount,
    contents: 'useComponentDidMount',
  },
];

const moduleComponentGroup: Array<NavGroup> = [
  {
    url: URL.infiniteScroll,
    contents: 'InfiniteScroll',
  },
];

const category = {
  layout: 'layout',
  uiComponents: 'components',
  hooks: 'hooks',
  moduleComponents: 'components',
};

const URL_VALUES = Object.values(URL);

const urlDictionary = new Set(
  (() => {
    return URL_VALUES.map((value) => value);
  })(),
);

const initSelectedList: { [key: string]: boolean } = {};

(() => {
  URL_VALUES.forEach((value) => {
    if (value !== 'root' && value !== 'ui' && value !== 'modules') {
      initSelectedList[value] = false;
    }
  });
})();

const validNavGroup = (dataKey: string): string | null => {
  if (
    dataKey === URL.layout ||
    dataKey === URL.uiComponents ||
    dataKey === URL.hooks ||
    dataKey === URL.moduleComponents
  ) {
    return dataKey;
  }
  return null;
};

const isURL = (url: string) => {
  return urlDictionary.has(url);
};

export {
  category,
  urlDictionary,
  initSelectedList,
  layoutGroup,
  uiComponentGroup,
  hooksGroup,
  moduleComponentGroup,
  validNavGroup,
  isURL,
};
