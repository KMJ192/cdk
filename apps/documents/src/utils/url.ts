const URL: { [key: string]: string } = {
  root: '/',
  // UI
  ui: '/ui',
  layout: '/ui/layout',
  center: '/ui/layout/center',
  flex: '/ui/layout/flex',
  float: '/ui/layout/float',
  grid: '/ui/layout/grid',
  row: '/ui/layout/row',
  spacing: '/ui/layout/spacing',
  stack: '/ui/layout/stack',
  uiComponents: '/ui/components',
  typo: '/ui/components/typo',
  badge: '/ui/components/badge',
  button: '/ui/components/button',
  card: '/ui/components/card',
  checkbox: '/ui/components/checkbox',
  dataTable: '/ui/components/data-table',
  input: '/ui/components/input',
  popup: '/ui/components/popup',
  progressBar: '/ui/components/progress-bar',
  radio: '/ui/components/radio',
  radioGroup: '/ui/components/radio-group',
  spinner: '/ui/components/spinner',
  switch: '/ui/components/switch',
  select: '/ui/components/select',
  tab: '/ui/components/tab',
  textarea: '/ui/components/textarea',
  pieChart: '/ui/components/pie-chart',
  // Modules
  modules: '/modules',
  hooks: '/modules/hooks',
  useTrie: '/modules/hooks/use-trie',
  useClickAway: '/modules/hooks/use-click-away',
  useComponentDidMount: '/modules/hooks/use-component-did-mount',
  moduleComponents: '/modules/components',
  infiniteScroll: '/modules/components/infinite-scroll',
};

type PAGE_LAYOUT =
  | 'center'
  | 'flex'
  | 'float'
  | 'grid'
  | 'row'
  | 'spacing'
  | 'stack';

type PAGE_UI_COMPONENTS =
  | 'typo'
  | 'badge'
  | 'button'
  | 'input'
  | 'checkbox'
  | 'popup'
  | 'progress-bar'
  | 'radio'
  | 'radio-group'
  | 'spinner'
  | 'switch'
  | 'select'
  | 'tab'
  | 'data-table'
  | 'textarea';

type PAGE_HOOKS = 'use-trie' | 'use-click-away' | 'use-component-did-mount';

type PAGE_MODULE_COMPONENTS = 'infinite-scroll';

export type {
  PAGE_LAYOUT,
  PAGE_UI_COMPONENTS,
  PAGE_HOOKS,
  PAGE_MODULE_COMPONENTS,
};
export { URL };
