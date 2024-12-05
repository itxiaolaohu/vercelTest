'use client';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useRef } from 'react';

const columns: ProColumns<any>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    title: '序号',
    width: 48
  },
  {
    title: '功能',
    dataIndex: 'title',
    width: 120
  },
  {
    title: '金额',
    dataIndex: 'state',
    width: 120
  },
  {
    title: '支付地址',
    dataIndex: 'labels',

    width: 120
  },
  {
    title: '支付hash',
    key: 'showTime',
    dataIndex: 'created_at',
    width: 200
  },
  {
    title: '资产（USDT）',
    dataIndex: 'created_at',
    valueType: 'dateRange',
    width: 120
  },
  {
    title: '时间',
    key: 'showTime',
    dataIndex: 'created_at',
    width: 120
  },
  {
    title: '状态',
    key: 'showTime',
    dataIndex: 'created_at',
    width: 120
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (_: any, record: any) => [
      <a
        onClick={e => {
          console.log(record, _);
          e.preventDefault();
        }}
        key="pay">
        支付
      </a>
    ]
  }
];

const Account = () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params, sort, filter) => {
        console.log(sort, params, filter);

        return {
          data: [],
          total: 0
        };
      }}
      rowKey="id"
      search={false}
      pagination={{
        pageSize: 5,
        onChange: page => console.log(page)
      }}
      toolBarRender={false}
    />
  );
};
export default Account;
