"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import ProductCard from "./ProductCard";
import styles from './component.module.css'

interface ProductsSectionProps {
  initialProducts: any[];
  initialCategories: string[];
  initialCategory: string;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
  initialProducts,
  initialCategories,
  initialCategory,
}) => {
  const router = useRouter();
  const [categories] = useState(initialCategories);
  const [category, setCategory] = useState(initialCategory);
  const [products, setProducts] = useState([]);
  const[openSidebar,setOpenSidebar] =useState(false)

  function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    setCategory(value);
    router.push(`/?category=${value}`);
  }
  
  return (
    <>
    <TopBar openSidebar={openSidebar}setOpenSidebar={setOpenSidebar}/>
    <div
     className={styles.prodsectcontainer}
    >
      <div
             className={styles.prodsectcontent}

      >
        <select
          onChange={handleCategoryChange}
          value={category}
          className={styles.selectCategory}

        >
          <option value="">All Categories</option>
          {categories?.map((cat: string) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <div
          style={{
            display: "grid",
            gridTemplateRows:`repeat(${Math.ceil((initialProducts.length/(openSidebar?3:4)))}, 1fr)`,
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
        {openSidebar ?  <Sidebar />:null}
          {initialProducts?.map((item: any, index: number) => (
          <ProductCard item={item} key={index}/>
          ))}
        </div>
      </div>
    </div></>
  );
};

export default ProductsSection;
