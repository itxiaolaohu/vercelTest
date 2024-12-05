'use client';
import LanguageChanger from '@/components/LanguageChanger';
import { DownOutlined } from '@ant-design/icons';
import { MenuProps, message, Modal } from 'antd';
import { Dropdown, Space } from 'antd';
import styles from './dashbord.module.scss';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import UserSetting from './userSetting';
import Account from './account';
import ApiBinding from './apibinding';
import Recharge from './recharge';
import UpdatePwd from './updatePwd';
import React from 'react';

type MenuItem = {
  key: string;
  label: string;
  path: string;
  component?: React.ReactNode;
};
const items: MenuItem[] = [
  {
    key: 'monitor',
    label: '行情监控',
    path: '/home/monitor'
  },
  {
    key: 'start',
    label: '启动配置',
    path: '/home/startconfig'
  }
];

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUserMenu, setCurrentUserMenu] = useState<MenuItem | null>(null);

  const userItems: MenuItem[] = useMemo(
    () => [
      {
        key: 'user',
        label: '个人资料设置',
        path: '',
        component: (
          <UserSetting
          // closeModal={() => {
          //   setIsModalOpen(false);
          // }}
          />
        )
      },
      {
        key: 'account',
        label: '账户和账单',
        path: '',
        component: (
          <Account
          // closeModal={() => {
          //   setIsModalOpen(false);
          // }}
          />
        )
      },

      {
        key: 'apiBinding',
        label: '绑定API',
        path: '',
        component: (
          <ApiBinding
            closeModal={() => {
              setIsModalOpen(false);
            }}
          />
        )
      },
      {
        key: 'updatePwd',
        label: '修改密码',
        path: '',
        component: (
          <UpdatePwd
            closeModal={() => {
              setIsModalOpen(false);
            }}
          />
        )
      },
      {
        key: 'recharge',
        label: '充值',
        path: '',
        component: (
          <Recharge
            closeModal={() => {
              setIsModalOpen(false);
            }}
          />
        )
      },

      {
        key: 'quit',
        label: '退出',
        path: ''
      }
    ],
    []
  );
  const menuClick: MenuProps['onClick'] = ({ key }) => {
    const obj = items.find(item => item.key === key);
    obj?.path && router.push(obj.path);
  };
  const userInfoClick: MenuProps['onClick'] = ({ key }) => {
    const obj = userItems.find(item => item.key === key);
    if (key === 'quit') {
      //退出登录
      message.info('退出登录');
      router.push('/login');
      return;
    }
    if (obj?.component) {
      setCurrentUserMenu(obj);
      setIsModalOpen(true);
    } else {
      message.info('功能暂未开放');
    }
  };
  return (
    <div id="test-pro-layout">
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/image/logo_new.png" alt="logo" />
          <div className={styles.title}>Bitbox X</div>
          <div className={styles.dropdownmenu}>
            <Dropdown menu={{ items, onClick: menuClick }}>
              <a
                onClick={e => {
                  e.preventDefault();
                }}>
                <Space>
                  OKX
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>

        <div className={styles.userinfo}>
          <LanguageChanger />
          <Dropdown menu={{ items: userItems, onClick: userInfoClick }}>
            <a onClick={e => e.preventDefault()}>
              <Space>
                <img src="/image/logo_robot.png" className={styles.avatar} />
              </Space>
            </a>
          </Dropdown>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <Modal
        title={currentUserMenu?.label}
        open={isModalOpen}
        width={currentUserMenu?.key === 'account' ? '70%' : 520}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        destroyOnClose={true}
        footer={null}>
        {currentUserMenu?.component}
      </Modal>
    </div>
  );
}
