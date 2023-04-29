import modules from '../modules';

interface Api {
  [key: string]: any;
}

const api: Api = {};

Object.values(modules).forEach((module: any) => {
  for (const item in module.api) {
    api[item] = module.api[item];
  }
});

console.log({ api });

export default api;
