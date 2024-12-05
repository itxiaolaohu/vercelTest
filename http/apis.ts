import request from './request';
import { requestParam } from './types';
interface IregisterProps {
  email: string;
  password: string;
  captcha: string;
  inviteUuid?: string;
}
interface IloginProps {
  user: string;
  password: string;
}
interface IEmailverifyProps {
  email: string;
  type: 'signup' | 'update_password';
}
// 注册
export async function register(data: IregisterProps) {
  return await request<requestParam>(`/register/email`, {
    method: 'POST',
    data
  });
}
// 登录
export async function login(data: IloginProps) {
  return await request<requestParam<any>>(`/login`, {
    method: 'POST',
    data
  });
}
// 邮箱验证
export async function verifyEmail(params: IEmailverifyProps) {
  return await request<requestParam<any>>(`/${params.email}/${params.type}`, {
    method: 'GET',
    params
  });
}
