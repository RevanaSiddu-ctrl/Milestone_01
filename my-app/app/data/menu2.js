import pi1 from "../images/pi1.jpg";
import c2 from "../images/c2.jpg";
import blog2 from "../images/blog2.webp";
import seafood  from "../images/seafood.jpg";
import  beverage from "../images/beverage.jpg";

export const item1 = {
  mainImg: pi1,
  dishes: [
    { image: blog2, name: "Chicken Alfredo", desc: "Ricotta / Goat Cheese / Beetroot", price: "$20 / $40" },
    { image: c2, name: "Fish Chips", desc: "Tartar Sauce / Lemon", price: "$15 / $30" },
    { image: blog2, name: "Ebony Fillet Steak", desc: "Grilled / Pepper Sauce", price: "$25 / $50" },
    { image: c2, name: "Chicken Grill", desc: "Garlic Sauce / Herbs", price: "$18 / $36" },
  ],
};

export const item2 = {
  mainImg: c2,
  dishes: [
    { image: pi1, name: "Vanilla Cake", desc: "Sweet & Soft", price: "$10 / $20" },
    { image: blog2, name: "Chocolate Tart", desc: "Rich Cocoa Layer", price: "$15 / $30" },
    { image: c2, name: "Mango Delight", desc: "Fresh Mango Cream", price: "$12 / $24" },
    { image: pi1, name: "Strawberry Mousse", desc: "Light & Airy", price: "$14 / $28" },
  ],
};

export const item3 = {
  mainImg: seafood,
  dishes: [
    { image: pi1, name: "Salmon Fry", desc: "Sweet & Soft", price: "$10 / $20" },
    { image: blog2, name: "Pangasius or Basa", desc: "Rich Cocoa Layer", price: "$15 / $30" },
    { image: seafood, name: "Clams", desc: "Fresh Mango Cream", price: "$12 / $24" },
    { image: pi1, name: "Red Crab", desc: "Light & Airy", price: "$14 / $28" },
  ],
};

export const item4 = {
  mainImg: beverage,
  dishes: [
    { image: pi1, name: "Wine", desc: "Sweet & Soft", price: "$10 / $20" },
    { image: beverage, name: "Coffee", desc: "Rich Cocoa Layer", price: "$15 / $30" },
    { image: seafood, name: "Hot chocolate", desc: "Fresh Mango Cream", price: "$12 / $24" },
    { image: beverage, name: "Milk Shake", desc: "Light & Airy", price: "$14 / $28" },
  ],
};