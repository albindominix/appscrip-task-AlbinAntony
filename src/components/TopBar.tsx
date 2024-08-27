"use client";
import React, { useState } from "react";
import ProductsSection from "./ProductsSection";
import Image from "next/image";

const TopBar: React.FC<{ openSidebar: boolean; setOpenSidebar: any }> = ({
  openSidebar,
  setOpenSidebar,
}) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "2rem 0",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "3rem",
        }}
      >
        <div style={{
          display:'flex',
          alignItems:'center'
        }}>
        <span>3245 ITEMS</span>
        </div>
        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            cursor:'pointer'
          }}
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <Image
            src={`/assets/chevron-${openSidebar ? "left" : "right"}.svg`}
            height={20}
            width={20}
            alt="Dropdown arrow"
          />
          <span style={{
            textDecoration:'underline',
            opacity:0.5
          }}>{openSidebar ? "Hide Filter" : "Open Filter"}</span>
        </div>
      </div>
      <div
        style={{
          paddingRight: "2rem",
        }}
      >
        <Select
          items={[
            { label: "Recommended Item", value: "Recommended Item" },
            { label: "Newest First", value: "Newest First" },
            { label: "Popular", value: "Popular" },
            { label: "Price: High to Low", value: "Price" },
            { label: "Price: Low to High", value: "Price" },
          ]}
        />
      </div>
    </div>
  );
};

function Select({ items }: { items: { value: string; label: string }[] }) {
  const [selectedItem, setSelectedItem] = useState<any>(items[0]);
  const [isActiveSelect, setIsActiveSelect] = useState(false);

  const handleItemClick = (itemName: { value: string; label: string }) => {
    setSelectedItem(itemName);
    setIsActiveSelect(false);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        zIndex: "1",
      }}
      className="relative  w-full text-text"
      aria-expanded={isActiveSelect}
    >
      <div
        onClick={() => {
          setIsActiveSelect(!isActiveSelect);
        }}
        onBlur={() => {
          setIsActiveSelect(false);
        }}
        style={{
          display: "flex",
          width: "100%",
          zIndex: 1,
          cursor: "pointer",
          alignItems: "center",

          padding: "0.5rem 0.5rem",
          transition: "all 0.2s ease-in-out",
        }}
        className="flex w-full cursor-pointer items-center rounded-base border border-gray-300 px-2 py-1  rounded-xl   transition-all "
      >
        <div
          style={{
            width: "100%",

            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.875rem",
            alignItems: "center",
            gap: "2rem",
            fontWeight: "bold",
          }}
          className="w-full flex justify-between text-sm items-center font-medium"
        >
          {selectedItem.label}
          <Image
            src="/assets/arrow.svg"
            height={20}
            width={20}
            alt="Dropdown arrow"
          />
        </div>
      </div>
      {isActiveSelect && (
        <div
          role="listbox"
          style={{
            width: "100%",
            minWidth: "fit-content",
            background: "white",
            position: "absolute",
            left: "0",
            whiteSpace: "nowrap",
            padding: "0.5rem",
            backgroundColor: "white",
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: "all 0.2s ease-in-out",

            top: isActiveSelect ? "2.5rem" : "50px",
          }}
          className={`absolute left-0 w-full p-2 bg-white  ${
            isActiveSelect
              ? "visible opacity-100 top-10"
              : "invisible opacity-0 top-[50px]"
          } rounded-base shadow-xl border transition-all`}
        >
          {items.map((item, index) => {
            return (
              <button
                type="button"
                name="gender"
                key={index}
                onClick={() => {
                  handleItemClick(item);
                }}
                style={{
                  display: "block",
                  width: "100%",
                  borderRadius: "0.5rem",
                  border: "none",
                  padding: "0.5rem",
                  cursor: "pointer",
                  textAlign: "left",
                  fontSize: "0.875rem",
                  background: "white",
                }}
                className="block w-full rounded-lg p-2 text-left  hover:bg-gray-100 text-sm"
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default TopBar;
