const store = {
  setItem(data) {
      localStorage.setItem('data', JSON.stringify(data));
  },
  getItem() {
      const result = JSON.parse(localStorage.getItem('data'));
      return result;
  }
}
export default store;