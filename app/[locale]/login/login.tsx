'use client';
import { LockOutlined, MobileOutlined, UserOutlined } from '@ant-design/icons';
import {
  LoginFormPage,
  ProConfigProvider,
  ProFormCaptcha,
  ProFormText
} from '@ant-design/pro-components';
import { Button, message, theme } from 'antd';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import type { ProFormInstance } from '@ant-design/pro-components';
import { register, login, verifyEmail } from '@/http/apis';

type LoginType = 'login' | 'register' | 'resetpwd';

const Page = () => {
  const [loginType, setLoginType] = useState<LoginType>('login');
  const { token } = theme.useToken();
  const router = useRouter();
  const formRef = useRef<ProFormInstance>();
  const handleLoginOrRegister = async (values: any) => {
    const { user, password, email, captcha, inviteUuid } = values;
    console.log(values, 'values');
    if (loginType === 'login') {
      router.push('/home');
      console.log('登录');
      const res = await login({ user, password });
      console.log(res, '登录');
    } else if (loginType === 'register') {
      // const { code, msg } = await register({
      //   password,
      //   email,
      //   captcha,
      //   inviteUuid
      // });
      const res = await register({
        password,
        email,
        captcha,
        inviteUuid
      });
      console.log(res, 'res');
      // console.log(code, msg, 'code, msg');
      // if (code === 200) {
      //   message.success('注册成功');
      // } else {
      //   message.error(msg);
      // }
    } else {
      console.log('修改密码');
    }
  };
  const getCaptcha = async (type: 'signup' | 'update_password') => {
    console.log('获取验证码', formRef.current?.getFieldValue('email'));
    const email = formRef.current?.getFieldValue('email');
    if (!email) {
      message.error('请输入邮箱');
      return;
    }
    const res = await verifyEmail({ email, type });
    console.log(res, '获取验证码');
  };
  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '100vh'
      }}>
      <LoginFormPage
        backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
        logo="/image/logo_new.png"
        backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
        title="链极客"
        containerStyle={{
          backgroundColor: 'rgba(0, 0, 0,0.65)',
          backdropFilter: 'blur(4px)'
        }}
        onFinish={async values => {
          handleLoginOrRegister(values);
        }}
        formRef={formRef}
        submitter={{
          render: _ => {
            return (
              <>
                {loginType === 'register' && (
                  <Button
                    type="primary"
                    // type="submit"

                    style={{
                      width: '100%'
                    }}
                    onClick={() => {
                      _.submit();
                    }}>
                    注册
                  </Button>
                )}
                {loginType === 'login' && (
                  <Button
                    type="primary"
                    onClick={() => {
                      _.submit();
                    }}
                    style={{
                      width: '100%'
                    }}>
                    登录
                  </Button>
                )}
                {loginType === 'resetpwd' && (
                  <Button
                    type="primary"
                    style={{
                      width: '100%'
                    }}
                    onClick={() => {
                      _.submit();
                    }}>
                    立即重置
                  </Button>
                )}
              </>
            );
          }
        }}
        subTitle="Bitbot X">
        {loginType === 'login' && (
          <>
            <ProFormText
              name="user"
              fieldProps={{
                size: 'large',
                prefix: (
                  <UserOutlined
                    style={{
                      color: token.colorText
                    }}
                    className={'prefixIcon'}
                  />
                )
              }}
              placeholder={'账号'}
              rules={[
                {
                  required: true,
                  message: '请输入用户名!'
                }
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: (
                  <LockOutlined
                    style={{
                      color: token.colorText
                    }}
                    className={'prefixIcon'}
                  />
                )
              }}
              placeholder={'密码'}
              rules={[
                {
                  required: true,
                  message: '请输入密码！'
                }
              ]}
            />
            <div
              style={{
                marginBlock: 24
              }}>
              <a
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end'
                }}
                onClick={() => setLoginType('resetpwd')}>
                忘记密码?
              </a>
            </div>
            <a
              style={{ position: 'relative', bottom: '-70px', left: '100px' }}
              onClick={() => setLoginType('register')}>
              还没有账号？点我注册
            </a>
          </>
        )}
        {loginType === 'register' && (
          <>
            <ProFormText
              fieldProps={{
                size: 'large',
                prefix: (
                  <MobileOutlined
                    style={{
                      color: token.colorText
                    }}
                    className={'prefixIcon'}
                  />
                )
              }}
              name="email"
              placeholder={'邮箱'}
              rules={[
                {
                  required: true,
                  message: '请输入邮箱！'
                },
                {
                  pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                  message: '邮箱格式错误！'
                }
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: 'large',
                prefix: (
                  <LockOutlined
                    style={{
                      color: token.colorText
                    }}
                    className={'prefixIcon'}
                  />
                )
              }}
              captchaProps={{
                size: 'large'
              }}
              placeholder={'请输入验证码'}
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} ${'获取验证码'}`;
                }
                return '获取验证码';
              }}
              name="captcha"
              rules={[
                {
                  required: true,
                  message: '请输入验证码！'
                }
              ]}
              onGetCaptcha={async () => {
                getCaptcha('signup');
              }}
            />
            <ProFormText
              fieldProps={{
                size: 'large',
                prefix: (
                  <MobileOutlined
                    style={{
                      color: token.colorText
                    }}
                    className={'prefixIcon'}
                  />
                )
              }}
              name="inviteUuid"
              placeholder={'邀请码'}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: (
                  <LockOutlined
                    style={{
                      color: token.colorText
                    }}
                    className={'prefixIcon'}
                  />
                )
              }}
              placeholder={'密码'}
              rules={[
                {
                  required: true,
                  message: '请输入密码！'
                }
              ]}
            />
            <div
              style={{
                marginBlockEnd: 24
              }}>
              <a
                onClick={() => setLoginType('login')}
                style={{
                  float: 'right'
                }}>
                已有账号？去登录
              </a>
            </div>
          </>
        )}
        {loginType === 'resetpwd' && (
          <>
            <ProFormText
              fieldProps={{
                size: 'large',
                prefix: (
                  <MobileOutlined
                    style={{
                      color: token.colorText
                    }}
                    className={'prefixIcon'}
                  />
                )
              }}
              name="email"
              placeholder={'邮箱'}
              rules={[
                {
                  required: true,
                  message: '请输入邮箱！'
                },
                {
                  pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                  message: '邮箱格式错误！'
                }
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: 'large',
                prefix: (
                  <LockOutlined
                    style={{
                      color: token.colorText
                    }}
                    className={'prefixIcon'}
                  />
                )
              }}
              captchaProps={{
                size: 'large'
              }}
              placeholder={'请输入验证码'}
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} ${'获取验证码'}`;
                }
                return '获取验证码';
              }}
              name="captcha"
              rules={[
                {
                  required: true,
                  message: '请输入验证码！'
                }
              ]}
              onGetCaptcha={async () => {
                getCaptcha('update_password');
              }}
            />

            <div
              style={{
                marginBlockEnd: 24
              }}>
              <a
                onClick={() => setLoginType('login')}
                style={{
                  float: 'right'
                }}>
                已有账号？去登录
              </a>
            </div>
          </>
        )}
      </LoginFormPage>
    </div>
  );
};

const Index = () => {
  return (
    <ProConfigProvider dark>
      <Page />
    </ProConfigProvider>
  );
};
export default Index;
