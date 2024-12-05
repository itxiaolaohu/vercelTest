'use client';
import React from 'react';
import { message } from 'antd';
import {
  ProForm,
  ProFormDigit,
  ProFormRadio
} from '@ant-design/pro-components';

type PropsFieldType = {
  closeModal: () => void;
};

const Recharge = ({ closeModal }: PropsFieldType) => {
  return (
    <div id="recharge">
      <ProForm
        onFinish={async () => {
          closeModal();
          message.success('提交成功');
        }}
        layout="horizontal"
        submitter={{
          render: (props, doms) => {
            console.log(props);
            return [
              <div
                key={'dom'}
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: 8
                }}>
                {...doms}
              </div>
            ];
          }
        }}>
        <ProFormRadio.Group
          name="radio-group"
          label="类型"
          initialValue={'a'}
          rules={[
            {
              required: true,
              message: '请选择类型'
            }
          ]}
          options={[
            {
              label: '充值',
              value: 'a'
            },
            {
              label: 'VIP',
              value: 'b'
            }
          ]}
        />
        <ProFormDigit
          label="金额"
          name="input-number"
          rules={[
            {
              required: true,
              message: '请输入金额'
            }
          ]}
          fieldProps={{
            suffix: 'USDT'
          }}
          min={0}
        />
      </ProForm>
    </div>
  );
};
export default Recharge;
