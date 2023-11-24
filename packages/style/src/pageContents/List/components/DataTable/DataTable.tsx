import { useEffect, useRef } from 'react';

import classNames from 'classnames/bind';
import style from '@css/components/DataTable/style.module.scss';
const cx = classNames.bind(style);

function DataTable() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = /* html */ `
        <div class="${cx('data-table-container')}">
          <table class="${cx('data-table')}">
            <caption class="${cx('caption')}">caption</caption>
            <thead class="${cx('thead')}">
              <tr class="${cx('tr')}">
                <th class="${cx('th')}">head1</th>
                <th class="${cx('th')}">head2</th>
                <th class="${cx('th')}">head3</th>
              </tr>
            </thead>
            <tbody class="${cx('tbody')}">
              <tr class="${cx('tr')}">
                <td class="${cx('td')}">data1</td>
                <td class="${cx('td')}">data2</td>
                <td class="${cx('td')}">data3</td>
              </tr>
            </tbody>
            <tbody class="${cx('tbody')}">
              <tr class="${cx('tr')}">
                <td class="${cx('td')}">data1</td>
                <td class="${cx('td')}">data2</td>
                <td class="${cx('td')}">data3</td>
              </tr>
            </tbody>
            <tbody class="${cx('tbody')}">
              <tr class="${cx('tr')}">
                <td class="${cx('td')}">data1</td>
                <td class="${cx('td')}">data2</td>
                <td class="${cx('td')}">data3</td>
              </tr>
            </tbody>
            <tfoot class="${cx('tfoot')}">
              <tr class="${cx('tr')}">
                <th class="${cx('th')}">foot1</th>
                <th class="${cx('th')}">foot2</th>
                <th class="${cx('th')}">foot3</th>
              </tr>
            </tfoot>
          </table>
          <div class="${cx('pagination')}">
            <div class="${cx('prev')}">
              <div>
                <svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><g><g><polygon points='242.2,66.8 284.6,109.2 137.8,256 284.6,402.8 242.2,445.2 53,256   ' /></g></g><g><g><polygon points='416.6,66.8 459,109.2 312.2,256 459,402.8 416.6,445.2 227.4,256   ' /></g></g></svg>
              </div>
              <div>
                <svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><g><polygon points='318.8,445.2 129.6,256 318.8,66.8 361.2,109.2 214.4,256 361.2,402.8  ' /></g></svg>
              </div>
            </div>
            <ul class="${cx('index-list')}">
              <li class="${cx('index')}">1</li>
              <li class="${cx('index')}">2</li>
              <li class="${cx('index')}">3</li>
              <li class="${cx('index')}">4</li>
              <li class="${cx('index', 'selected')}">5</li>
              <li class="${cx('index')}">6</li>
              <li class="${cx('index')}">7</li>
              <li class="${cx('index', 'over')}">8</li>
              <li class="${cx('index', 'over')}">9</li>
              <li class="${cx('index', 'over')}">10</li>
            </ul>
            <div class="${cx('next', 'last-page')}">
              <div>
                <svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><g><polygon points='318.8,445.2 129.6,256 318.8,66.8 361.2,109.2 214.4,256 361.2,402.8  ' /></g></svg>
              </div>
              <div>
                <svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><g><g><polygon points='242.2,66.8 284.6,109.2 137.8,256 284.6,402.8 242.2,445.2 53,256   ' /></g></g><g><g><polygon points='416.6,66.8 459,109.2 312.2,256 459,402.8 416.6,445.2 227.4,256   ' /></g></g></svg>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }, []);

  return <div ref={ref}></div>;
}

export default DataTable;
