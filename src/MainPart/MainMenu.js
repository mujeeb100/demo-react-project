import { useEffect, useState } from "react";
import { fetchProducts, fetchColors, fetchMaterials } from "../api";

function MainMenu() {
  const [products, setProducts] = useState([]);
  const [colors, setColors] = useState([]);
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productData = await fetchProducts();
      const colorData = await fetchColors();
      const materialData = await fetchMaterials();
      setProducts(productData.products);
      setColors(colorData.colors);
      setMaterials(materialData.materials);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
        }}
      >
        {products.map((product) => (
          <li key={product.id} style={{ margin: "0 0.5rem" }}>
            <img src={product.image} alt={product.name} />
            <div>{product.name}</div>
            <div>INR :{product.price}</div>
          </li>
        ))}
      </ul>

      <h1>Color List</h1>
      <ul>
        {colors.map((color) => (
          <li key={color.id}>{color.name}</li>
        ))}
      </ul>

      <h1>Material List</h1>
      <ul>
        {materials.map((material) => (
          <li key={material.id}>{material.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MainMenu;
