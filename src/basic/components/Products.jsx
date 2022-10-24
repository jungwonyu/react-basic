import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    // 컴포넌트가 처음에 렌더링 될 때만 실행
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥뜨끈한 데이터를 네트워크에서 받아옴");
        setProducts(data);
      });
    return () => {
      // 컴포넌트가 사라질 때 실행
      console.log("🧹 깨끗하게 청소하는 일들을 합니다.");
    };
  }, [checked]); // checked 값이 변경될 때만 실행

  return (
    <>
      <input type="checkbox" value={checked} onChange={handleChange} />
      <label htmlFor="checkbox">Show Only ✨ Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
