import Center from './layout/Center/Center';
import Flex from './layout/Flex/Flex';
import Float from './layout/Float/Float';

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
  ],
  components: [
    {
      name: 'Button',
      category: 'Components',
      html: ``,
      code: [``],
    },
  ],
};

const allOptions = [...options.layout, ...options.components];

export { options, allOptions };
