import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "1",
    name: "Adarsh Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "2",
    name: "Shashank",
    username: "shashank",
    password: "123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "3",
    name: "Praveen",
    username: "praveen",
    password: "123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
