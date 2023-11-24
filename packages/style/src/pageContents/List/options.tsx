import Badge from './components/Badge/Badge';
import Button from './components/Button/Button';
import Checkbox from './components/Checkbox/Checkbox';
import DataTable from './components/DataTable/DataTable';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import Center from './layout/Center/Center';
import Flex from './layout/Flex/Flex';
import Float from './layout/Float/Float';
import Grid from './layout/Grid/Grid';
import Row from './layout/Row/Row';
import Spacing from './layout/Spacing/Spacing';
import Stack from './layout/Stack/Stack';

const options = {
  layout: [
    {
      name: 'Center',
      category: 'Layout',
      html: <Center />,
      code: [
        `<div class="center flex vertical horizontal">display: flex</div>`,
        `<div class="center grid vertical horizontal">display: grid</div>`,
      ],
    },
    {
      name: 'Flex',
      category: 'Layout',
      html: <Flex />,
      code: [
        `<div class="flex column">flexDirection: column</div>`,
        `<div class="flex row">flexDirection: row</div>`,
        `<div class="flex column-reverse">flexDirection: column-reverse</div>`,
        `<div class="flex row-reverse">flexDirection: row-reverse</div>`,
      ],
    },
    {
      name: 'Float',
      category: 'Layout',
      html: <Float />,
      code: [
        `<div class="float lt">left top</div>`,
        `<div class="float lb">left bottom</div>`,
        `<div class="float rt">right top</div>`,
        `<div class="float rb">right bottom</div>`,
      ],
    },
    {
      name: 'Grid',
      category: 'Layout',
      html: <Grid />,
      code: [`<div class="grid">grid</div>`],
    },
    {
      name: 'Row',
      category: 'Layout',
      html: <Row />,
      code: [
        `<div class="row">row1</div>`,
        `<div class="row">row2</div>`,
        `<div class="row">row3</div>`,
      ],
    },
    {
      name: 'Spacing',
      category: 'Layout',
      html: <Spacing />,
      code: [`<div class="spacing"></div>`],
    },
    {
      name: 'Stack',
      category: 'Layout',
      html: <Stack />,
      code: [
        `<div class="stack row">`,
        `  <div>row</div>`,
        `  <div>row</div>`,
        `  <div>row</div>`,
        `</div>`,
        `<div class="stack column">`,
        `  <div>column</div>`,
        `  <div>column</div>`,
        `  <div>column</div>`,
        `</div>`,
      ],
    },
  ],
  components: [
    {
      name: 'Button',
      category: 'Components',
      html: <Button />,
      code: [
        `<button class="button primary rect">Primary Rect</button>`,
        `<button class="button outlined rect">Outlined</button>`,
        `<button class="button clear rect">Outlined</button>`,
        `<button class="button primary circle">Outlined</button>`,
        `<button class="button primary square">Outlined</button>`,
        `<button disabled="true" class="button primary rect">Outlined</button>`,
      ],
    },
    {
      name: 'Badge',
      category: 'Components',
      html: <Badge />,
      code: [
        `<div class="badge primary">primary</div>`,
        `<div class="badge success">success</div>`,
        `<div class="badge info">info</div>`,
        `<div class="badge warning">warning</div>`,
        `<div class="badge danger">danger</div>`,
        `<div class="badge custom">custom</div>`,
      ],
    },
    {
      name: 'Checkbox',
      category: 'Components',
      html: <Checkbox />,
      code: [
        `<div class="checkbox is-children">`,
        `  <div class="box">`,
        `    <div class="mark">`,
        `      <svg width='1em' height='1em'viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13.1562 4.71875L6.59375 11.2812L3.3125 8' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' /></svg>`,
        `    </div>`,
        `  </div>`,
        `  <span class="children">Unchecked</span>`,
        `</div>`,
        '',
        `<div class="checkbox is-children">`,
        `  <div class="box checked">`,
        `    <div class="mark">`,
        `      <svg width='1em' height='1em'viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13.1562 4.71875L6.59375 11.2812L3.3125 8' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' /></svg>`,
        `    </div>`,
        `  </div>`,
        `  <span class="children">Single</span>`,
        `</div>`,
        '',
        `<div class="checkbox is-children">`,
        `  <div class="box checked">`,
        `    <div class="mark">`,
        `      <svg width='1em' height='1em' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M3 6H9' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' /></svg>`,
        `    </div>`,
        `  </div>`,
        `  <span class="children">Multiple</span>`,
        `</div>`,
        '',
        `<div class="checkbox disabled is-children">`,
        `  <div class="box disabled">`,
        `    <div class="mark">`,
        `      <svg width='1em' height='1em'viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13.1562 4.71875L6.59375 11.2812L3.3125 8' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' /></svg>`,
        `    </div>`,
        `  </div>`,
        `  <span class="children">Unchecked</span>`,
        `</div>`,
        `<div class="checkbox disabled is-children">`,
        `  <div class="box checked disabled">`,
        `    <div class="mark">`,
        `      <svg width='1em' height='1em'viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13.1562 4.71875L6.59375 11.2812L3.3125 8' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' /></svg>`,
        `    </div>`,
        `  </div>`,
        `  <span class="children">Disabled</span>`,
        `</div>`,
        `<div class="checkbox disabled is-children">`,
        `  <div class="box checked disabled">`,
        `    <div class="mark">`,
        `      <svg width='1em' height='1em' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M3 6H9' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' /></svg>`,
        `    </div>`,
        `  </div>`,
        `  <span class="children">Disabled</span>`,
        `</div>`,
      ],
    },
    {
      name: 'DataTable',
      category: 'Components',
      html: <DataTable />,
      code: [],
    },
    {
      name: 'HamburgerMenu',
      category: 'Components',
      html: <HamburgerMenu />,
      code: [],
    },
  ],
};

const allOptions = [...options.layout, ...options.components];

export { options, allOptions };
