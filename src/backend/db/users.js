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
    password: "1",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [{
      _id: "2",
      name: "Shashank Kumar",
      username: "shashank",
    }],
    bookmarks: [],
    bio:"Senior Software Engineer @Microsoft | Creator of Indias biggest programming community | Tweets about JavaScript, ReactJS, Career and Startups",
    portfoliourl:"Microsoft.com",

  },
  {
    _id: "2",
    name: "Shashank Kumar",
    username: "shashank",
    password: "123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
    bookmarks: [],
  },
  {
    _id: "3",
    name: "Praveen Shakya",
    username: "praveen",
    password: "123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
    bookmarks: [],
  },
];