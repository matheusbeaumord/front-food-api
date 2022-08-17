export default class FoodServices {
  static _withBaseUrl = (path) => {
    return `https://pwn-msba.herokuapp.com/api/${path}`;
  };
}
