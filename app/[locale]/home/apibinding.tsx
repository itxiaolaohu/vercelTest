'use client';
import React from 'react';
import { message, Space } from 'antd';
import {
  ProForm,
  ProFormSelect,
  ProFormText,
  ProFormTextArea
} from '@ant-design/pro-components';

type PropsFieldType = {
  closeModal: () => void;
};

const ApiBinding = ({ closeModal }: PropsFieldType) => {
  return (
    <div id="apibinding">
      <ProForm
        onFinish={async () => {
          closeModal();
          message.success('提交成功');
        }}
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
        }}
        autoFocusFirstInput>
        <Space>
          <ProFormSelect
            options={[
              {
                value: 'chapter',
                label: '盖章后生效'
              }
            ]}
            width={235}
            name="useMode"
            label="交易所"
            rules={[
              {
                required: true,
                message: '请选择交易所'
              }
            ]}
          />
          <ProFormSelect
            options={[
              {
                value: 'chapter',
                label: '盖章后生效'
              }
            ]}
            width={235}
            name="useMode1"
            label="账户类型"
            rules={[
              {
                required: true,
                message: '请选择账户类型'
              }
            ]}
          />
        </Space>
        <ProFormText
          width="md"
          name="name"
          label="公钥"
          tooltip="最长为 24 位"
          placeholder="请输入名称"
          rules={[
            {
              required: true,
              message: '请输入公钥'
            }
          ]}
        />
        <ProFormText
          width="md"
          name="name"
          label="私钥"
          tooltip="最长为 24 位"
          placeholder="请输入名称"
          rules={[
            {
              required: true,
              message: '请输入私钥'
            }
          ]}
        />
        <ProFormText.Password label="Api密码" name="input-password" />
        <ProFormText.Password
          label="下单密码（用户创建机器人）"
          name="input-password"
          rules={[
            {
              required: true,
              message: '请输入下单密码'
            }
          ]}
        />
        <ProFormTextArea
          name="text"
          label="账户描述"
          placeholder="请输入名称"
          rules={[
            {
              required: true,
              message: '请输入账户描述'
            }
          ]}
          fieldProps={{ minLength: 5, maxLength: 50 }}
        />
      </ProForm>
    </div>
  );
};
export default ApiBinding;
