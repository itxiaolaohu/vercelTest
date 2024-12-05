'use client';
import React from 'react';
import { message } from 'antd';
import { ProForm, ProFormText } from '@ant-design/pro-components';

type PropsFieldType = {
  closeModal: () => void;
};

const UpdatePwd = ({ closeModal }: PropsFieldType) => {
  return (
    <div id="updatePwd">
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
        <ProFormText.Password
          label="旧密码"
          name="input-password"
          rules={[
            {
              required: true,
              message: '请输入旧密码'
            }
          ]}
        />
        <ProFormText.Password
          label="新密码"
          name="input-password"
          rules={[
            {
              required: true,
              message: '请输入新密码'
            }
          ]}
        />
        <ProFormText.Password
          label="确定密码"
          name="input-password"
          rules={[
            {
              required: true,
              message: '请输入确定密码'
            }
          ]}
        />
      </ProForm>
    </div>
  );
};
export default UpdatePwd;
