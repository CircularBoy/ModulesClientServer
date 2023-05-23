import modules, { IModule } from '../modules';

// interface Api {
//   [key: string]: any;
// }
type Modules = typeof modules;
type ApiMethods = keyof Modules[keyof Modules]['api'];
export type ApiType = {
  [method in ApiMethods]: Modules[keyof Modules]['api'][method];
};

// export type ApiType = {
//   getHouses: () => Promise<AxiosResponse<IHouse[]>>;
//   createHouse: (data: any) => Promise<AxiosResponse<IHouse>>;
// };
// const api: Api = {};
const api: ApiType = {} as ApiType;

Object.values(modules).forEach((module: IModule) => {
  for (const item in module.api) {
    api[item] = module.api[item];
  }
});
console.log({ api });

export default api;
