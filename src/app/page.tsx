import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";
import Head from 'next/head';
import { Metadata } from 'next';

async function getProducts(category: string | null) {
  const url = category
    ? `https://fakestoreapi.com/products/category/${category}`
    : "https://fakestoreapi.com/products";
  const res = await fetch(url);
  return res.json();
}

async function getCategories() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  return res.json();
}

// SEO Metadata
export const metadata: Metadata = {
  title: 'Our Amazing Products | Appscrip',
  description: 'Discover our wide range of high-quality products. From electronics to fashion, we have everything you need.',
  openGraph: {
    title: 'Our Amazing Products | Appscrip',
    description: 'Discover our wide range of high-quality products. From electronics to fashion, we have everything you need.',
    images: [
      {
        url: 'https://appscrip.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Our Amazing Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Amazing Products | Your Store Name',
    description: 'Discover our wide range of high-quality products. From electronics to fashion, we have everything you need.',
    images: ['https://appscrip.com/twitter-image.jpg'],
  },
}

export default async function Home({
  searchParams,
}: {
  searchParams: { category: string | undefined };
}) {
  const category = searchParams.category || null;
  const productsPromise = getProducts(category);
  const categoriesPromise = getCategories();

  const [products, categories] = await Promise.all([
    productsPromise,
    categoriesPromise,
  ]);

  // Schema.org JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Our Amazing Products",
    "description": "Discover our wide range of high-quality products. From electronics to fashion, we have everything you need.",
    "url": "https://appscrip.com",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": products.map((product:any, index:number) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": product.title,
          "description": product.description,
          "image": product.image,
          "url": `https://appscrip.com/product/${product.id}`
        }
      }))
    }
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Head>
      <main className={styles.main}>
        <div style={{ padding: "1rem 5rem" }}>
          <Navbar />
          <Menu />
          <HeroSection />
          <ProductsSection
            initialProducts={products}
            initialCategories={categories}
            initialCategory={category || ""}
          />
        </div>
        <Footer />
      </main>
    </>
  );
}