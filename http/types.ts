// 返回接口通用参数
export interface requestParam<T = any> {
  code: number | string;
  data: T;
  msg: string;
}
