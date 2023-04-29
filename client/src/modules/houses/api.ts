import api from '../../config/api';

export default {
  getHouses: () => {
    return api.get('houses');
  },

  // createHouse: (data: any) => {
  //   return api.post('houses/create', data);
  // },
};
