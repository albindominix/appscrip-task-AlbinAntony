import React, { useState } from "react";
import styles from "./component.module.css";
import Image from "next/image";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <Select
        title="IDEAL FOR"
        items={[
          { value: "Men", label: "Men" },
          { value: "Women", label: "Women" },
          { value: "Baby & Kids", label: "Baby & Kids" },
        ]}
      />
      <Select
        title="OCCASION"
        items={[
          { value: "Men", label: "Men" },
          { value: "Women", label: "Women" },
          { value: "Baby & Kids", label: "Baby & Kids" },
        ]}
      />
      <Select
        title="WORK"
        items={[
          { value: "Men", label: "Men" },
          { value: "Women", label: "Women" },
          { value: "Baby & Kids", label: "Baby & Kids" },
        ]}
      />
      <Select
        title="FABRIC"
        items={[
          { value: "Men", label: "Men" },
          { value: "Women", label: "Women" },
          { value: "Baby & Kids", label: "Baby & Kids" },
        ]}
      />
      <Select
        title="SEGMENT"
        items={[
          { value: "Men", label: "Men" },
          { value: "Women", label: "Women" },
          { value: "Baby & Kids", label: "Baby & Kids" },
        ]}
      />
      <Select
        title="SUITABLE FOR"
        items={[
          { value: "Men", label: "Men" },
          { value: "Women", label: "Women" },
          { value: "Baby & Kids", label: "Baby & Kids" },
        ]}
      />
      <Select
        title="RAW MATERIALS"
        items={[
          { value: "Men", label: "Men" },
          { value: "Women", label: "Women" },
          { value: "Baby & Kids", label: "Baby & Kids" },
        ]}
      />
      <Select
        title="PATTERN"
        items={[
          { value: "Men", label: "Men" },
          { value: "Women", label: "Women" },
          { value: "Baby & Kids", label: "Baby & Kids" },
        ]}
      />
    </div>
  );
};

function Select({
  items,
  title,
}: {
  title: string;
  items: { value: string; label: string }[];
}) {
  const [selectedItem, setSelectedItem] = useState<any>(items[0]);
  const [isActiveSelect, setIsActiveSelect] = useState(false);

  const handleItemClick = (itemName: { value: string; label: string }) => {
    setSelectedItem(itemName);
    setIsActiveSelect(false);
  };

  return (
    <div
      className={styles.selectContainer}
      aria-expanded={isActiveSelect}
    >
      <div
        onClick={() => {
          setIsActiveSelect(!isActiveSelect);
        }}
        onBlur={() => {
          setIsActiveSelect(false);
        }}
        className={styles.selectButton}
      >
        <div className={styles.selectButtonContent}>
          {title}
          <Image
            src="/assets/arrow.svg"
            height={20}
            width={20}
            alt="Dropdown arrow"
          />
        </div>
      </div>
      {isActiveSelect && (
        <div className={styles.dropdownContent}>
          {items.map((item, index) => {
            return (
              <div className={styles.checkboxContainer} key={index}>
                <input type="checkbox" />
                <button
                  type="button"
                  name="gender"
                  onClick={() => handleItemClick(item)}
                  className={styles.dropdownItem}
                >
                  {item.label}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
