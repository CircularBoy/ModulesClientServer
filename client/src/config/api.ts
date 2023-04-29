// import _blank from '../modules/_blank/api';
// import houses from '../modules/houses/api';

// if (modules.api) {
//   console.log({ modules });
// }

const apiConfig = {
  baseUrl: 'http://localhost:3001/api',
};

const request = async (path: any, method: any, data?: any) => {
  const options = {
    method: method,
    headers: {
      'content-type': 'application/json',
    },
    ...(data ? { body: JSON.stringify(data) } : {}),
  };

  console.log(options);
  try {
    const response = await fetch(`${apiConfig.baseUrl}/${path}`, options);
    const data1 = await response.json();
    // console.log({data})
    return data1;
  } catch (e) {
    console.log('response', e);
  }
};

const query = {
  get: (path: any) => request(path, 'GET'),
  post: (path: any, data: any) => request(path, 'POST', data),
};

export default query;
