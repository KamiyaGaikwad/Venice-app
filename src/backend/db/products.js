import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Red Jacket",
    rating: "4",
    price: "150",
    category: "Red",
    imageURL:"https://picsum.photos/id/1005/340/196",
  },
  {
    _id: uuid(),
    title: "Orange Jacket",
    rating: "3",
    price: "100",
    category: "Orange",
    imageURL:"https://picsum.photos/id/1005/340/196",
  },
  {
    _id: uuid(),
    title: "Yellow Jacket",
    rating: "1",
    price: "50",
    category: "Yellow",
    imageURL:"https://picsum.photos/id/1005/340/196",
  },
  {
    _id: uuid(),
    title: "Green Jacket",
    rating: "2",
    price: "100",
    category: "Green",
    imageURL:"https://picsum.photos/id/1005/340/196",
  },
  {
    _id: uuid(),
    title: "Blue Jacket",
    rating: "4.4",
    price: "150",
    category: "Blue",
    imageURL:"https://picsum.photos/id/1005/340/196",
  },
  {
    _id: uuid(),
    title: "Indigo Jacket",
    rating: "5",
    price: "150",
    category: "Indigo",
    imageURL:"https://picsum.photos/id/1005/340/196",
  },
  {
    _id: uuid(),
    title: "Violet Jacket",
    rating: "3",
    price: "100",
    category: "Violet",
    imageURL:"https://picsum.photos/id/1005/340/196",
  },
];
