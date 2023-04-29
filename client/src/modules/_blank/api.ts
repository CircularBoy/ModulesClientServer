import api from '../../config/api';

export default {
  blank: () => {
    return api.get('houses');
  },
};
