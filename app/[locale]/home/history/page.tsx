'use client';

import { ActionType, ProTable } from '@ant-design/pro-components';
import { Row, Col } from 'antd';
import { useRef } from 'react';
import styles from './page.module.scss';

const columns: any[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    title: '序号',
    width: 48
  },
  {
    title: '订单ID',
    dataIndex: 'title',

    ellipsis: true
  },
  {
    title: '币种',
    dataIndex: 'state'
  },

  {
    title: '订单方向',
    key: 'showTime',
    dataIndex: 'created_at',
    valueType: 'date',
    sorter: true,
    hideInSearch: true
  },
  {
    title: '开仓数量',
    dataIndex: 'created_at',
    valueType: 'dateRange',
    hideInTable: true
  },
  {
    title: '平仓数量',
    dataIndex: 'created_at',
    valueType: 'dateRange',
    hideInTable: true
  },
  {
    title: '收益',
    key: 'showTime',
    dataIndex: 'created_at',
    valueType: 'date',
    sorter: true,
    hideInSearch: true
  },
  {
    title: '收益率',
    key: 'showTime',
    dataIndex: 'created_at',
    valueType: 'date',
    sorter: true,
    hideInSearch: true
  },
  {
    title: '杠杆倍数',
    key: 'showTime',
    dataIndex: 'created_at',
    valueType: 'date',
    sorter: true,
    hideInSearch: true
  },
  {
    title: '平仓均价',
    key: 'showTime',
    dataIndex: 'created_at',
    valueType: 'date',
    sorter: true,
    hideInSearch: true
  },
  {
    title: '平仓时间',
    key: 'showTime',
    dataIndex: 'created_at',
    valueType: 'date',
    sorter: true,
    hideInSearch: true
  }
];
const Index = () => {
  const actionRef = useRef<ActionType>();
  return (
    <div id="history" className={styles.monitor}>
      <div className={styles.monitorheader}>
        <Row>
          <Col span={3}>
            <div className={styles.monitorheaderitem}>
              <span>当前账户：</span>
              <span></span>
            </div>
          </Col>
        </Row>
      </div>
      <div className={styles.monitorcontent}>
        <ProTable
          columns={columns}
          actionRef={actionRef}
          cardBordered
          request={async (params, sort, filter) => {
            console.log(sort, filter);
            return {
              data: [],
              total: 0
            };
          }}
          toolBarRender={false}
          rowKey="id"
          search={false}
          pagination={{
            pageSize: 5,
            onChange: page => console.log(page)
          }}
        />
      </div>
    </div>
  );
};
export default Index;
