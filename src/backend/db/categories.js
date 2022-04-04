import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Red",
    description:
      "Red Theme",
  },
  {
    _id: uuid(),
    categoryName: "Orange",
    description:
      "Orange Theme",
  },
  {
    _id: uuid(),
    categoryName: "Yellow",
    description:
      "Yellow Theme",
  },
  {
    _id: uuid(),
    categoryName: "Green",
    description:
      "Green Theme",
  },
  {
    _id: uuid(),
    categoryName: "Blue",
    description:"Blue Theme",
  },
    {
      _id: uuid(),
      categoryName: "Indigo",
      description:
        "Indigo Theme",
    }, 
    {
      _id: uuid(),
      categoryName: "Violet",
      description:
        "Violet Theme",
    },
];
