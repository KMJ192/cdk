import List from '@src/pageContents/List/List';
import { allOptions } from '@src/pageContents/List/options';

function RootApp() {
  return <List list={allOptions} />;
}

export default RootApp;
