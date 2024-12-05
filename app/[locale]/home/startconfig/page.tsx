'use client';

import { ProFormSelect } from '@ant-design/pro-components';

import { Row, Col, Button } from 'antd';

import styles from '../monitor/page.module.scss';

const Index = () => {
  return (
    <div id="startconfig" className={styles.monitor}>
      <div className={styles.monitorheader}>
        <Row gutter={8}>
          <Col span={7}>
            <ProFormSelect
              name="select"
              label="选择账户："
              fieldProps={{
                options: [
                  {
                    value: '1',
                    label: 'Option 1'
                  },
                  {
                    value: '2',
                    label: 'Option 2'
                  },
                  {
                    value: '3',
                    label: 'Option 3'
                  }
                ]
              }}
              placeholder="请选择账户"
            />
          </Col>
          <Col span={7}>
            <ProFormSelect
              name="select"
              label="选择币种："
              fieldProps={{
                options: [
                  {
                    value: '1',
                    label: 'Option 1'
                  },
                  {
                    value: '2',
                    label: 'Option 2'
                  },
                  {
                    value: '3',
                    label: 'Option 3'
                  }
                ]
              }}
              placeholder="请选择币种"
            />
          </Col>
          <Col span={7}>
            <ProFormSelect
              name="select"
              label="选择仓位："
              fieldProps={{
                options: [
                  {
                    value: '1',
                    label: 'Option 1'
                  },
                  {
                    value: '2',
                    label: 'Option 2'
                  },
                  {
                    value: '3',
                    label: 'Option 3'
                  }
                ]
              }}
              placeholder="请选择仓位"
            />
          </Col>
          <Col span={2} offset={1}>
            <Button type="primary">启动</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Index;
