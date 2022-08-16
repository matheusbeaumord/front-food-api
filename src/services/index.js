import axios from 'axios';

export default class FoodServices {
  static _withBaseUrl = (path) => {
    return `https://pwn-msba.herokuapp.com/api/${path}`;
  };

  static login(e) {
    console.log('🚀', e);

    // return axios.post(FoodServices._withBaseUrl('seguranca/login'), {
    //   body: {
    //     login: userName,
    //     senha: password,
    //   },
    // });
  }
}
