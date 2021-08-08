import { Sweaters } from "../products";

//----------------------------------------------------------------
// COMFORT HOODIES
// {Name, Price, Add Products}
export const comfort = new Sweaters("Comfort", 18, [
  { size: "sm", color: "yellow", quantity: 2 },
  { size: "sm", color: "green", quantity: 4 },
  { size: "sm", color: "grey", quantity: 4 },
  { size: "md", color: "yellow", quantity: 2 },
  { size: "md", color: "green", quantity: 4 },
  { size: "lg", color: "grey", quantity: 6 },
  { size: "lg", color: "yellow", quantity: 3 },
]);

comfort._addImages([
  {
    blue:
      "https://images-sale-dynamic-arcteryx.imgix.net/F21/450x625/Beta-AR-Jacket-Ladon.png?auto=format",
  },
  {
    yellow:
      "https://images-sale-dynamic-arcteryx.imgix.net/F21/450x625/Beta-AR-Jacket-Ladon.png?auto=format",
  },
  {
    green:
      "http://cdn.shopify.com/s/files/1/2280/3581/products/Fission-SV-Jacket-Soulsonic_1200x1200.png?v=1601554397",
  },
  {
    grey:
      "https://cdn.shoplightspeed.com/shops/623535/files/15595053/mens-fission-sv-jacket.jpg",
  },
]);

//----------------------------------------
// GRAPHIC

export const slim = new Sweaters("Slim", 22, [
  { size: "xs", color: "white", quantity: 5 },
  { size: "xs", color: "blue", quantity: 2 },
  { size: "xs", color: "grey", quantity: 8 },
  { size: "sm", color: "grey", quantity: 6 },
  { size: "sm", color: "yellow", quantity: 3 },
  { size: "sm", color: "blue", quantity: 3 },
  { size: "md", color: "yellow", quantity: 5 },
  { size: "md", color: "white", quantity: 4 },
  { size: "md", color: "grey", quantity: 7 },
  { size: "lg", color: "grey", quantity: 3 },
  { size: "xl", color: "green", quantity: 6 },
  { size: "xl", color: "white", quantity: 5 },
]);

slim._addImages([
  {
    white:
      "https://images-sale-dynamic-arcteryx.imgix.net/F21/450x625/Zeta-FL-Jacket-Hyperspace.png?auto=format",
  },
  {
    blue:
      "https://images-sale-dynamic-arcteryx.imgix.net/F21/450x625/Beta-AR-Jacket-Ladon.png?auto=format",
  },
  {
    yellow:
      "https://images-sale-dynamic-arcteryx.imgix.net/F21/450x625/Beta-AR-Jacket-Ladon.png?auto=format",
  },
  {
    green:
      "https://images-sale-dynamic-arcteryx.imgix.net/F21/450x625/Beta-AR-Jacket-Ladon.png?auto=format",
  },
  {
    grey:
      "https://images-sale-dynamic-arcteryx.imgix.net/F21/450x625/Beta-AR-Jacket-Ladon.png?auto=format",
  },
]);

//--------------------------------------------------------------------------
// Graphic

export const custom = new Sweaters("Custom", 34, [
  { size: "xs", color: "white", quantity: 5 },
  { size: "xs", color: "blue", quantity: 2 },
  { size: "xs", color: "grey", quantity: 8 },
  { size: "sm", color: "grey", quantity: 6 },
  { size: "sm", color: "yellow", quantity: 3 },
  { size: "sm", color: "green", quantity: 6 },
  { size: "sm", color: "white", quantity: 5 },
  { size: "md", color: "yellow", quantity: 5 },
  { size: "md", color: "white", quantity: 4 },
  { size: "md", color: "grey", quantity: 7 },
  { size: "lg", color: "grey", quantity: 3 },
  { size: "lg", color: "white", quantity: 10 },
  { size: "lg", color: "green", quantity: 5 },
  { size: "xl", color: "white", quantity: 3 },
  { size: "xl", color: "grey", quantity: 3 },
  { size: "xl", color: "blue", quantity: 3 },
]);

custom._addImages([
  {
    white:
      "https://www.nicepng.com/png/full/587-5878889_-jean-jacket-png-style-nichememe-png.png",
  },
  {
    blue:
      "https://images-sale-dynamic-arcteryx.imgix.net/F21/450x625/Beta-AR-Jacket-Ladon.png?auto=format",
  },
  {
    yellow:
      "https://images-sale-dynamic-arcteryx.imgix.net/F21/450x625/Beta-AR-Jacket-Ladon.png?auto=format",
  },
  {
    green:
      "https://images-sale-dynamic-arcteryx.imgix.net/F21/450x625/Beta-AR-Jacket-Ladon.png?auto=format",
  },
  {
    grey:
      "https://images-sale-dynamic-arcteryx.imgix.net/F21/450x625/Beta-AR-Jacket-Ladon.png?auto=format",
  },
]);

export default [custom, slim, comfort];
