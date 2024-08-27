import Image from "next/image"
import styles from './component.module.css'

const ProductCard:React.FC<{item:any}>=({item})=>{
    return(
      <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={item.image}
          alt={item.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <div className={styles.title} title={item.title}>
            {item.title}
          </div>
          <span className={styles.subtitle}>
            Sign in or Create an account to see pricing
          </span>
        </div>
        <div className={styles.iconContainer}>
          <Image
            src="/assets/heart.svg"
            height={20}
            width={20}
            alt="heart like"
          />
        </div>
      </div>
    </div>
    )
}

export default ProductCard