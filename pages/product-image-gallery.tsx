import React from "react";
import ProductDetailImages from "../components/ProductDetailImages/ProductDetailImages";

const images = [
  {
    url: "https://cdn.media.amplience.net/i/interflora/HT1-1",
    altText: "Image 1 of 3 of Hand-tied bouquet made with the finest flowers",
    label: "Each design is one of a kind",
  },
  {
    url: "https://cdn.media.amplience.net/i/interflora/HT8-1",
    altText: "Image 2 of 3 of Hand-tied bouquet made with the finest flowers",
  },
  {
    url: "https://cdn.media.amplience.net/i/interflora/HT6-1",
    altText: "Image 3 of 3 of Hand-tied bouquet made with the finest flowers",
  },
];
const ProductImageGallery = () => {
  return <ProductDetailImages images={images} />;
};

export default ProductImageGallery;
