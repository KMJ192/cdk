import Button from './components/Button/Button';
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
      code: [``],
    },
  ],
};

const allOptions = [...options.layout, ...options.components];

export { options, allOptions };
