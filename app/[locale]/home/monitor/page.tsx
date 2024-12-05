'use client';
import { ActionType, ProTable } from '@ant-design/pro-components';
import { Row, Col, Button } from 'antd';
import { useRef } from 'react';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';

const columns: any[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    title: '序号',
    width: 48
  },
  {
    title: '当前币种',
    dataIndex: 'title',

    ellipsis: true
  },
  {
    title: '状态',
    dataIndex: 'state'
    // filters: true,
    // onFilter: true,
    // ellipsis: true,
    // valueType: 'select',
    // valueEnum: {
    //   all: { text: '超长'.repeat(50) },
    //   open: {
    //     text: '未解决',
    //     status: 'Error'
    //   },
    //   closed: {
    //     text: '已解决',
    //     status: 'Success',
    //     disabled: true
    //   },
    //   processing: {
    //     text: '解决中',
    //     status: 'Processing'
    //   }
    // }
  },

  //   {
  //     title: '创建时间',
  //     key: 'showTime',
  //     dataIndex: 'created_at',
  //     valueType: 'date',
  //     sorter: true,
  //     hideInSearch: true
  //   },
  //   {
  //     title: '创建时间',
  //     dataIndex: 'created_at',
  //     valueType: 'dateRange',
  //     hideInTable: true,
  //     search: {
  //       transform: value => {
  //         return {
  //           startTime: value[0],
  //           endTime: value[1]
  //         };
  //       }
  //     }
  //   },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text: string, record: any, _: any, action: any) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}>
        编辑
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>
    ]
  }
];
const Monitor = () => {
  const actionRef = useRef<ActionType>();
  const router = useRouter();
  return (
    <div id="monitor" className={styles.monitor}>
      <div className={styles.monitorheader}>
        <Row>
          <Col span={3}>
            <div className={styles.monitorheaderitem}>
              <span>OKX：</span>
              <span>行情监控</span>
            </div>
          </Col>
          <Col span={3}>
            <div className={styles.monitorheaderitem}>
              <span>当前账户：</span>
              <span></span>
            </div>
          </Col>
          <Col span={3}>
            <div className={styles.monitorheaderitem}>
              <span>资产：</span>
              <span></span>
            </div>
          </Col>
          <Col span={6}>
            <div className={styles.monitorheaderitem}>
              <span>可下保证金：</span>
              <span></span>
            </div>
          </Col>
          <Col span={4}>
            <div className={styles.monitorheaderitem}>
              <span>盈亏：</span>
              <span></span>
            </div>
          </Col>
          <Col span={3} offset={2}>
            <Button
              type="primary"
              onClick={() => {
                router.push('/home/history');
              }}>
              历史数据
            </Button>
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
export default Monitor;
