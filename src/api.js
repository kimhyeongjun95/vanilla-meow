const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const request = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (e) {
    console.warn(e);
  }
}

const api = {
  fetchCats: keyword => {
    return request(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
  },
  randomCats: () => {
    return request(`${API_ENDPOINT}/api/cats/random50`)
  },
  fetchCatsById: (id) => {
    return request(`${API_ENDPOINT}/api/cats/${id}`)
  }
};
