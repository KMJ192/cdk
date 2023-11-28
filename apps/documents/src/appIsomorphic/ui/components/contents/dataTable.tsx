import {
  DataTable,
  DataTableContainer,
  useDataTablePagination,
} from '@cdkit/react-ui';
import type {
  CSS_VARIABLES,
  DATA_TYPE,
  DOCUMENT,
  PAGE_CONTENTS,
  PROPS,
} from './contents';
import { CSS_VAR_TYPE } from '@src/utils/utils';

const UseDataTablePaginationExample = () => {
  const paging = useDataTablePagination({
    lastPageIndex: 55,
  });

  return (
    <DataTableContainer>
      <DataTable.Pagination {...paging}></DataTable.Pagination>
    </DataTableContainer>
  );
};

const document: Array<DOCUMENT> = [
  {
    title: 'DataTable',
    subtitle: 'DataTable 코드 예시입니다.',
    view: (
      <DataTableContainer>
        <DataTable>
          <DataTable.Caption>caption</DataTable.Caption>
          <DataTable.Thead>
            <DataTable.Tr>
              <DataTable.Th>head1</DataTable.Th>
              <DataTable.Th>head2</DataTable.Th>
              <DataTable.Th>head3</DataTable.Th>
            </DataTable.Tr>
          </DataTable.Thead>
          <DataTable.Tbody>
            <DataTable.Tr>
              <DataTable.Td>data1</DataTable.Td>
              <DataTable.Td>data2</DataTable.Td>
              <DataTable.Td>data3</DataTable.Td>
            </DataTable.Tr>
            <DataTable.Tr>
              <DataTable.Td>data1</DataTable.Td>
              <DataTable.Td>data2</DataTable.Td>
              <DataTable.Td>data3</DataTable.Td>
            </DataTable.Tr>
            <DataTable.Tr disabled>
              <DataTable.Td>data1</DataTable.Td>
              <DataTable.Td>data2</DataTable.Td>
              <DataTable.Td>data3</DataTable.Td>
            </DataTable.Tr>
            <DataTable.Tr>
              <DataTable.Td>data1</DataTable.Td>
              <DataTable.Td>data2</DataTable.Td>
              <DataTable.Td>data3</DataTable.Td>
            </DataTable.Tr>
          </DataTable.Tbody>
          <DataTable.Tfoot>
            <DataTable.Tr>
              <DataTable.Th>foot1</DataTable.Th>
              <DataTable.Th>foot2</DataTable.Th>
              <DataTable.Th>foot3</DataTable.Th>
            </DataTable.Tr>
          </DataTable.Tfoot>
        </DataTable>
        <DataTable.Pagination lastPageIndex={55} />
      </DataTableContainer>
    ),
    code: [
      `<DataTableContainer>`,
      `  <DataTable>`,
      `    <DataTable.Caption>caption</DataTable.Caption>`,
      `    <DataTable.Thead>`,
      `      <DataTable.Tr>`,
      `        <DataTable.Th>head1</DataTable.Th>`,
      `        <DataTable.Th>head2</DataTable.Th>`,
      `        <DataTable.Th>head3</DataTable.Th>`,
      `      </DataTable.Tr>`,
      `    </DataTable.Thead>`,
      `    <DataTable.Tbody>`,
      `      <DataTable.Tr>`,
      `        <DataTable.Td>data1</DataTable.Td>`,
      `        <DataTable.Td>data2</DataTable.Td>`,
      `        <DataTable.Td>data3</DataTable.Td>`,
      `      </DataTable.Tr>`,
      `      <DataTable.Tr>`,
      `        <DataTable.Td>data1</DataTable.Td>`,
      `        <DataTable.Td>data2</DataTable.Td>`,
      `        <DataTable.Td>data3</DataTable.Td>`,
      `      </DataTable.Tr>`,
      `      <DataTable.Tr disabled>`,
      `        <DataTable.Td>data1</DataTable.Td>`,
      `        <DataTable.Td>data2</DataTable.Td>`,
      `        <DataTable.Td>data3</DataTable.Td>`,
      `      </DataTable.Tr>`,
      `      <DataTable.Tr>`,
      `        <DataTable.Td>data1</DataTable.Td>`,
      `        <DataTable.Td>data2</DataTable.Td>`,
      `        <DataTable.Td>data3</DataTable.Td>`,
      `      </DataTable.Tr>`,
      `    </DataTable.Tbody>`,
      `    <DataTable.Tfoot>`,
      `      <DataTable.Tr>`,
      `        <DataTable.Th>foot1</DataTable.Th>`,
      `        <DataTable.Th>foot2</DataTable.Th>`,
      `        <DataTable.Th>foot3</DataTable.Th>`,
      `      </DataTable.Tr>`,
      `    </DataTable.Tfoot>`,
      `  </DataTable>`,
      `  <DataTable.Pagination lastPageIndex={55} />`,
      `</DataTableContainer>`,
    ],
  },
  {
    title: 'useDataTablePagination',
    subtitle: 'Pagination과 연계할 수 있는 hook 입니다.',
    view: <UseDataTablePaginationExample />,
    code: [
      `const {`,
      `  selectedPageIndex,`,
      `  currentPaging,`,
      `  lastPageIndex,`,
      `  onClickPaging,`,
      `  onClickPageIndex`,
      `} = useDataTablePagination({`,
      `  lastPageIndex: 55,`,
      `});`,
      ``,
      `<DataTableContainer>`,
      `  <DataTable.Pagination`,
      `    selectedPageIndex={selectedPageIndex}`,
      `    currentPaging={currentPaging}`,
      `    lastPageIndex={lastPageIndex}`,
      `    onClickPaging={onClickPaging}`,
      `    onClickPageIndex={onClickPageIndex}`,
      `  ></DataTable.Pagination>`,
      `</DataTableContainer>`,
    ],
  },
];

const dataType: Array<DATA_TYPE> = [];

const props: Array<PROPS> = [
  {
    title: 'DataTableContainer Props',
    defaultTag: 'div',
    element: [
      {
        name: 'children',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['Children 컴포넌트'],
      },
    ],
  },
  {
    title: 'DataTable Props',
    defaultTag: 'table',
    element: [
      {
        name: 'children',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['Children 컴포넌트'],
      },
    ],
  },
  {
    title: 'Caption Props',
    defaultTag: 'caption',
    element: [
      {
        name: 'children',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['Children 컴포넌트'],
      },
    ],
  },
  {
    title: 'Thead Props',
    defaultTag: 'thead',
    element: [
      {
        name: 'children',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['Children 컴포넌트'],
      },
    ],
  },
  {
    title: 'Tbody Props',
    defaultTag: 'tbody',
    element: [
      {
        name: 'children',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['Children 컴포넌트'],
      },
    ],
  },
  {
    title: 'Tfoot Props',
    defaultTag: 'tfoot',
    element: [
      {
        name: 'children',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['Children 컴포넌트'],
      },
    ],
  },
  {
    title: 'Th Props',
    defaultTag: 'th',
    element: [
      {
        name: 'children',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['Children 컴포넌트'],
      },
    ],
  },
  {
    title: 'Tr Props',
    defaultTag: 'tr',
    element: [
      {
        name: 'children',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['Children 컴포넌트'],
      },
      {
        name: 'disabled',
        type: 'boolean',
        essential: false,
        defaultValue: 'false',
        description: ['비활성화 여부'],
      },
    ],
  },
  {
    title: 'Td Props',
    defaultTag: 'td',
    element: [
      {
        name: 'children',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['Children 컴포넌트'],
      },
    ],
  },
  {
    title: 'Pagination Props',
    defaultTag: 'div',
    element: [
      {
        name: 'selectedPageIndex',
        type: 'number',
        essential: false,
        defaultValue: '1',
        description: ['선택된 페이지 인덱스'],
      },
      {
        name: 'currentPaging',
        type: 'number',
        essential: false,
        defaultValue: '1',
        description: ['페이징 된 숫자'],
      },
      {
        name: 'lastPageIndex',
        type: 'number',
        essential: false,
        defaultValue: '1',
        description: ['마지막 페이지 인덱스'],
      },
      {
        name: 'onClickPaging',
        type: '(move: "prev" | "next" | "first" | "last") => void',
        essential: false,
        defaultValue: '() => {}',
        description: ['페이지 이동 아이콘 클릭 이벤트 수신기'],
      },
      {
        name: 'onClickPageIndex',
        type: '(idx: number) => void',
        essential: false,
        defaultValue: '() => {}',
        description: ['	페이지 인덱스 클릭 이벤트 수신기'],
      },
    ],
  },
];

const cssVar: Array<CSS_VARIABLES> = [
  {
    title: 'CSS Variables',
    element: [
      {
        name: '--cdkit-color-data-table-bg',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상'],
      },
      {
        name: '--cdkit-color-data-table-border',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상'],
      },
      {
        name: '--cdkit-color-data-table-caption-text',
        type: CSS_VAR_TYPE.COLOR,
        description: ['캡션 글자 색상'],
      },
      {
        name: '--cdkit-color-data-table-header-bg',
        type: CSS_VAR_TYPE.COLOR,
        description: ['Header 배경 색상'],
      },
      {
        name: '--cdkit-color-data-table-header-text',
        type: CSS_VAR_TYPE.COLOR,
        description: ['Header 글자 색상'],
      },
      {
        name: '--cdkit-color-data-table-footer-bg',
        type: CSS_VAR_TYPE.COLOR,
        description: ['Footer 배경 색상'],
      },
      {
        name: '--cdkit-color-data-table-footer-text',
        type: CSS_VAR_TYPE.COLOR,
        description: ['Footer 글자 색상'],
      },
      {
        name: '--cdkit-color-data-table-divide-line',
        type: CSS_VAR_TYPE.COLOR,
        description: ['Row 경계선 색상'],
      },
      {
        name: '--cdkit-color-data-table-row-bg',
        type: CSS_VAR_TYPE.COLOR,
        description: ['Row 배경 색상'],
      },
      {
        name: '--cdkit-color-data-table-row-bg-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['Row 배경 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-data-table-row-bg-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['Row 배경 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-data-table-row-text',
        type: CSS_VAR_TYPE.COLOR,
        description: ['Row 글자 색상'],
      },
      {
        name: '--cdkit-color-data-table-row-text-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['Row 글자 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-data-table-row-text-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['Row 글자 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-data-table-pagination-index-bg',
        type: CSS_VAR_TYPE.COLOR,
        description: ['페이지네이션 목록 배경 색상'],
      },
      {
        name: '--cdkit-color-data-table-pagination-index-bg-selected',
        type: CSS_VAR_TYPE.COLOR,
        description: ['페이지네이션 목록 배경 색상', '선택됨'],
      },
      {
        name: '--cdkit-color-data-table-pagination-index-bg-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['페이지네이션 목록 배경 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-data-table-pagination-index-bg-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['페이지네이션 목록 배경 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-data-table-pagination-index-text',
        type: CSS_VAR_TYPE.COLOR,
        description: ['페이지네이션 목록 글자 색상'],
      },
      {
        name: '--cdkit-color-data-table-pagination-index-text-selected',
        type: CSS_VAR_TYPE.COLOR,
        description: ['페이지네이션 목록 글자 색상', '선택됨'],
      },
      {
        name: '--cdkit-color-data-table-pagination-index-text-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['페이지네이션 목록 글자 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-data-table-pagination-index-text-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['페이지네이션 목록 글자 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-data-table-pagination-arrow',
        type: CSS_VAR_TYPE.COLOR,
        description: ['페이지네이션 화살표 색상'],
      },
      {
        name: '--cdkit-color-data-table-pagination-arrow-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['페이지네이션 화살표 색상', '비활성화'],
      },
    ],
  },
];

const defaultCode: Array<string> = [
  `<DataTableContainer>`,
  `  <DataTable>`,
  `    <DataTable.Caption>caption</DataTable.Caption>`,
  `    <DataTable.Thead>`,
  `      <DataTable.Tr>`,
  `        <DataTable.Th>head1</DataTable.Th>`,
  `        <DataTable.Th>head2</DataTable.Th>`,
  `        <DataTable.Th>head3</DataTable.Th>`,
  `      </DataTable.Tr>`,
  `    </DataTable.Thead>`,
  `    <DataTable.Tbody>`,
  `      <DataTable.Tr>`,
  `        <DataTable.Td>data1</DataTable.Td>`,
  `        <DataTable.Td>data2</DataTable.Td>`,
  `        <DataTable.Td>data3</DataTable.Td>`,
  `      </DataTable.Tr>`,
  `      <DataTable.Tr>`,
  `        <DataTable.Td>data1</DataTable.Td>`,
  `        <DataTable.Td>data2</DataTable.Td>`,
  `        <DataTable.Td>data3</DataTable.Td>`,
  `      </DataTable.Tr>`,
  `      <DataTable.Tr disabled>`,
  `        <DataTable.Td>data1</DataTable.Td>`,
  `        <DataTable.Td>data2</DataTable.Td>`,
  `        <DataTable.Td>data3</DataTable.Td>`,
  `      </DataTable.Tr>`,
  `      <DataTable.Tr>`,
  `        <DataTable.Td>data1</DataTable.Td>`,
  `        <DataTable.Td>data2</DataTable.Td>`,
  `        <DataTable.Td>data3</DataTable.Td>`,
  `      </DataTable.Tr>`,
  `    </DataTable.Tbody>`,
  `    <DataTable.Tfoot>`,
  `      <DataTable.Tr>`,
  `        <DataTable.Th>foot1</DataTable.Th>`,
  `        <DataTable.Th>foot2</DataTable.Th>`,
  `        <DataTable.Th>foot3</DataTable.Th>`,
  `      </DataTable.Tr>`,
  `    </DataTable.Tfoot>`,
  `  </DataTable>`,
  `  <DataTable.Pagination />`,
  `</DataTableContainer>`,
];

const pgCode = `import {
  DataTable, 
  DataTableContainer, 
  useDataTablePagination,
} from '@cdkit/react-ui';

function App() {
  const paging = useDataTablePagination({
    lastPageIndex: 55,
  });

  return (
    <DataTableContainer>
      <DataTable>
        <DataTable.Caption>caption</DataTable.Caption>
        <DataTable.Thead>
          <DataTable.Tr>
            <DataTable.Th>head1</DataTable.Th>
            <DataTable.Th>head2</DataTable.Th>
            <DataTable.Th>head3</DataTable.Th>
          </DataTable.Tr>
        </DataTable.Thead>
        <DataTable.Tbody>
          <DataTable.Tr>
            <DataTable.Td>data1</DataTable.Td>
            <DataTable.Td>data2</DataTable.Td>
            <DataTable.Td>data3</DataTable.Td>
          </DataTable.Tr>
          <DataTable.Tr>
            <DataTable.Td>data1</DataTable.Td>
            <DataTable.Td>data2</DataTable.Td>
            <DataTable.Td>data3</DataTable.Td>
          </DataTable.Tr>
          <DataTable.Tr disabled>
            <DataTable.Td>data1</DataTable.Td>
            <DataTable.Td>data2</DataTable.Td>
            <DataTable.Td>data3</DataTable.Td>
          </DataTable.Tr>
          <DataTable.Tr>
            <DataTable.Td>data1</DataTable.Td>
            <DataTable.Td>data2</DataTable.Td>
            <DataTable.Td>data3</DataTable.Td>
          </DataTable.Tr>
        </DataTable.Tbody>
        <DataTable.Tfoot>
          <DataTable.Tr>
            <DataTable.Th>foot1</DataTable.Th>
            <DataTable.Th>foot2</DataTable.Th>
            <DataTable.Th>foot3</DataTable.Th>
          </DataTable.Tr>
        </DataTable.Tfoot>
      </DataTable>
      <DataTable.Pagination {...paging} />
    </DataTableContainer>
  );
}

export default App;
`;

export const dataTableContents: PAGE_CONTENTS = {
  pageTitle: 'DataTable',
  pageDesc: 'DataTable 컴포넌트',
  document,
  dataType,
  props,
  cssVar,
  defaultCode,
  pgCode,
};
