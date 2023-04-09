import {
  getProducts,
  getColors,
  getMaterials,
  getFeaturedProducts,
} from "./config";

export const fetchProducts = async () => {
  try {
    const products = await getProducts();
    return products;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchColors = async () => {
  try {
    const colors = await getColors();
    return colors;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchMaterials = async () => {
  try {
    const materials = await getMaterials();
    return materials;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchFeaturedProducts = async () => {
  try {
    const featuredProducts = await getFeaturedProducts();
    return featuredProducts;
  } catch (error) {
    console.log(error);
    return null;
  }
};
