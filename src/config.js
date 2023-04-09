import axios from "axios";

export const API_URL =
  "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest";

export const API_BEARER_TOKEN = "Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo";

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`, {
    headers: {
      Authorization: `Bearer ${API_BEARER_TOKEN}`,
    },
  });
  return response.data;
};

export const getColors = async () => {
  const response = await axios.get(`${API_URL}/colors`, {
    headers: {
      Authorization: `Bearer ${API_BEARER_TOKEN}`,
    },
  });
  return response.data;
};

export const getMaterials = async () => {
  const response = await axios.get(`${API_URL}/materials`, {
    headers: {
      Authorization: `Bearer ${API_BEARER_TOKEN}`,
    },
  });
  return response.data;
};

export const getFeaturedProducts = async () => {
  const response = await axios.get(`${API_URL}/featured`, {
    headers: {
      Authorization: `Bearer ${API_BEARER_TOKEN}`,
    },
  });
  return response.data;
};
