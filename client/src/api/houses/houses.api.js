import { api } from '../index';

export default {
  getHouses: () => {
    return api.get('houses');
  },

  createHouse: (data) => {
    return api.post('houses/create', data);
  },
};
