import React from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import ProductPageHeader from "./ProductPageHeader";

function Products() {
  const navigate = useNavigate();
  const products = [
    {
      image:
        "https://azaffiliates-dashboard-dev.web.app/assets/images/ecommerce/11.jpg",
      hoverImage:
        "https://azaffiliates-dashboard-dev.web.app/assets/images/ecommerce/12.jpg",
      asin: "B01N1UX8RW",
      title:
        "GENIANI XL Heating Pad for Back Pain & Cramps Relief, Auto Shut-Off",
      rating: 4.8,
      reviewCount: 339242,
      seller: "GENIANI",
      category: "Health",
      googleLink: "#",
      youtubeLink: "#",
      facebookLink: "#",
      instagramLink: "#",
      price: 39.96,
      originalPrice: 49.99,
      discount: 20,
      commission: 4.5,
      estimatedPayout: 1.57,
    },
    {
      image:
        "https://azaffiliates-dashboard-dev.web.app/assets/images/ecommerce/15.jpg",
      hoverImage:
        "https://azaffiliates-dashboard-dev.web.app/assets/images/ecommerce/16.jpg",
      asin: "B07VY1XZXB",
      title:
        "Glocusent Book Light, 3-Color & 6-Brightness Amber Neck Reading Lamp",
      rating: 4.6,
      reviewCount: 125000,
      seller: "Glocusent",
      category: "Electronics",
      googleLink: "#",
      youtubeLink: "#",
      facebookLink: "#",
      instagramLink: "#",
      price: 21.99,
      originalPrice: 27.99,
      discount: 21,
      commission: 4.5,
      estimatedPayout: 1.57,
    },
    {
      image:
        "https://azaffiliates-dashboard-dev.web.app/assets/images/ecommerce/13.jpg",
      hoverImage:
        "https://azaffiliates-dashboard-dev.web.app/assets/images/ecommerce/14.jpg",
      asin: "B07VY1XZXC",
      title:
        "Glocusent Book Light, 3-Color & Adjustable Brightness, LED Neck Lamp",
      rating: 4.6,
      reviewCount: 139242,
      seller: "Glocusent",
      category: "Clothing",
      googleLink: "#",
      youtubeLink: "#",
      facebookLink: "#",
      instagramLink: "#",
      price: 21.99,
      originalPrice: 25.99,
      discount: 15,
      commission: 4.5,
      estimatedPayout: 1.57,
    },
    {
      image:
        "https://azaffiliates-dashboard-dev.web.app/assets/images/ecommerce/05.jpg",
      hoverImage:
        "https://azaffiliates-dashboard-dev.web.app/assets/images/ecommerce/06.jpg",
      asin: "B071CQ5LB2",
      title: "RENPHO Smart Scale for Body Weight, Digital Bathroom Scale",
      rating: 4.7,
      reviewCount: 300120,
      seller: "RENPHO",
      category: "Shoes & Jewelry",
      googleLink: "#",
      youtubeLink: "#",
      facebookLink: "#",
      instagramLink: "#",
      price: 34.99,
      originalPrice: 39.99,
      discount: 12,
      commission: 4.5,
      estimatedPayout: 1.57,
    },
    {
      image:
        "https://azaffiliates-dashboard-dev.web.app/assets/images/ecommerce/09.jpg",
      hoverImage:
        "https://azaffiliates-dashboard-dev.web.app/assets/images/ecommerce/10.jpg",
      asin: "B071CQ5LB3",
      title:
        "RENPHO Smart Scale for Body Weight, Large VA Display Bluetooth App",
      rating: 4.7,
      reviewCount: 212565,
      seller: "RENPHO",
      category: "Clothing",
      googleLink: "#",
      youtubeLink: "#",
      facebookLink: "#",
      instagramLink: "#",
      price: 34.99,
      originalPrice: 44.99,
      discount: 22,
      commission: 4.5,
      estimatedPayout: 1.57,
    },
    {
      image:
        "https://azaffiliates-dashboard-dev.web.app/assets/images/ecommerce/04.jpg",
      hoverImage:
        "https://azaffiliates-dashboard-dev.web.app/assets/images/ecommerce/03.jpg",
      asin: "B01NMPA4JZ",
      title: "Zyllion Shiatsu Back and Neck Massager with Heat",
      rating: 4.7,
      reviewCount: 134000,
      seller: "Zyllion",
      category: "Clothing",
      googleLink: "#",
      youtubeLink: "#",
      facebookLink: "#",
      instagramLink: "#",
      price: 74.95,
      originalPrice: 89.99,
      discount: 17,
      commission: 4.5,
      estimatedPayout: 1.57,
    },
  ];

  const handleClick = (id) => {
    navigate(`/amazon/products/${id}`);
    console.log("Product clicked:", id);
  };

  return (
    <div>
      <ProductPageHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product, index) => (
          <ProductCard
            key={product.asin}
            product={product}
            onClick={handleClick}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
