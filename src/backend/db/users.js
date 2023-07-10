import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

 export const users = 
//[
//   {
//     _id: "1",
//     name: "Adarsh Balika",
//     username: "adarshbalika",
//     password: "1",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     followers: [],
//     following: [{
//       _id: "2",
//       name: "Shashank Kumar",
//       username: "shashank",
//     }],
//     bookmarks: [],
//     bio:"Senior Software Engineer @Microsoft | Creator of Indias biggest programming community | Tweets about JavaScript, ReactJS, Career and Startups",
//     portfoliourl:"Microsoft.com",

//   },
//   {
//     _id: "2",
//     name: "Shashank Kumar",
//     username: "shashank",
//     password: "123",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     followers: [],
//     following: [],
//     bookmarks: [],
//   },
//   {
//     _id: "3",
//     name: "Praveen Shakya",
//     username: "praveen",
//     password: "123",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     followers: [],
//     following: [],
//     bookmarks: [],
//   },
// ];
[{
  _id: "1",
  name: "Shobhit",
  lastName: "Raj",
  user_email: "shobhitraj34@gmail.com",
  username: "shobhitraj",
  password: "shohehe",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  profile_pic: "https://pbs.twimg.com/profile_images/1266934374060052480/O3nYz9s-_400x400.jpg",
  cover_pic: "https://pbs.twimg.com/profile_banners/822058153051295745/1678301248/1500x500",
  portfoliourl: "https://github.com/shobhit-28/",
  bio: "Software Developer",
  followers: [
    {
      _id: "2",
      name: "Rahul",
      lastName: "Mallick",
      username: "mallick",
      profile_pic: "https://staticg.sportskeeda.com/editor/2022/07/c2ed4-16587439752781.png",
    },
    {
      _id: "3",
      name: "Ayush",
      lastName: "Singh",
      username: "ayush",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
    }
  ],
  following: [
    {
      _id: "2",
      name: "Rahul",
      lastName: "Mallick",
      username: "mallick",
      profile_pic: "https://staticg.sportskeeda.com/editor/2022/07/c2ed4-16587439752781.png",
    },
    {
      _id: "3",
      name: "Ayush",
      lastName: "Singh",
      username: "ayush",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
    }
  ],
  bookmarks: [],
  id: "1"
},
{
  _id: "2",
  name: "Rahul",
  lastName: "Mallick",
  user_email: "mallickrahul@gmail.com",
  username: "mallick",
  password: "1234abcd",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  profile_pic: "https://staticg.sportskeeda.com/editor/2022/07/c2ed4-16587439752781.png",
  cover_pic: "",
  portfoliourl: "https://mallickrahul.netlify.app",
  bio: "Singer",
  followers: [
    {
      _id: "1",
      name: "Shobhit",
      lastName: "Raj",
      username: "shobhitraj",
      profile_pic: "https://pbs.twimg.com/profile_images/1266934374060052480/O3nYz9s-_400x400.jpg",
    },
    {
      _id: "5",
      name: "Eklavya",
      lastName: "Prasad",
      username: "eklavya",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650009611/uchicha_crest_ngetfr.jpg",
    }
  ],
  following: [
    {
      _id: "1",
      name: "Shobhit",
      lastName: "Raj",
      username: "shobhitraj",
      profile_pic: "https://pbs.twimg.com/profile_images/1266934374060052480/O3nYz9s-_400x400.jpg",
    },
    {
      _id: "5",
      name: "Eklavya",
      lastName: "Prasad",
      username: "eklavya",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650009611/uchicha_crest_ngetfr.jpg",
    }
  ],
  bookmarks: [],
},
{
  _id: "3",
  name: "Ayush",
  lastName: "Singh",
  user_email: "singhayush@gmail.com",
  username: "ayush",
  password: "1234abcd",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
  cover_pic: "",
  portfoliourl: "https://singhayush.netlify.app",
  bio: "Automotive Designer",
  followers: [
    {
      _id: "4",
      name: "Saurabh",
      lastName: "Kumar",
      username: "saurabh",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022195/saitama_isaxm6.jpg",
    },
    {
      _id: "5",
      name: "Eklavya",
      lastName: "Prasad",
      username: "eklavya",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650009611/uchicha_crest_ngetfr.jpg",
    },
    {
      _id: "1",
      name: "Shobhit",
      lastName: "Raj",
      username: "shobhitraj",
      profile_pic: "https://pbs.twimg.com/profile_images/1266934374060052480/O3nYz9s-_400x400.jpg",
    }
  ],
  following: [
    {
      _id: "1",
      name: "Shobhit",
      lastName: "Raj",
      username: "shobhitraj",
      profile_pic: "https://pbs.twimg.com/profile_images/1266934374060052480/O3nYz9s-_400x400.jpg",
    },
    {
      _id: "4",
      name: "Saurabh",
      lastName: "Kumar",
      username: "saurabh",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022195/saitama_isaxm6.jpg",
    },
    {
      _id: "6",
      name: "Nitin",
      lastName: "Lakra",
      username: "tintin",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022195/one_piece_2_jcjkvz.jpg",
    },
    {
      _id: "5",
      name: "Eklavya",
      lastName: "Prasad",
      username: "eklavya",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650009611/uchicha_crest_ngetfr.jpg",
    },
  ],
  bookmarks: [],
},
{
  _id: "4",
  name: "Saurabh",
  lastName: "Kumar",
  username: "saurabh",
  user_email: "kumarsaurabh@gmail.com",
  password: "1234abcd",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022195/saitama_isaxm6.jpg",
  cover_pic: "",
  portfoliourl: "https://kumarsaurabhssm.netlify.app",
  bio: "bank manager",
  followers: [
    {
      _id: "3",
      name: "Ayush",
      lastName: "Singh",
      username: "ayush",
      pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
    },
  ],
  following: [
    {
      _id: "3",
      name: "Ayush",
      lastName: "Singh",
      username: "ayush",
      pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
    },
  ],
  bookmarks: [],
},
{
  _id: "5",
  name: "Eklavya",
  lastName: "Prasad",
  username: "eklavya",
  user_email: "eklavyapd@gmail.com",
  password: "1234abcd",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650009611/uchicha_crest_ngetfr.jpg",
  cover_pic: "",
  portfoliourl: "https://pdeklavya.netlify.app",
  bio: "App Developer",
  followers: [
    {
      _id: "2",
      name: "Rahul",
      lastName: "Mallick",
      username: "mallick",
      profile_pic: "https://staticg.sportskeeda.com/editor/2022/07/c2ed4-16587439752781.png",
    },
    {
      _id: "3",
      name: "Ayush",
      lastName: "Singh",
      username: "ayush",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
    },
  ],
  following: [
    {
      _id: "2",
      name: "Rahul",
      lastName: "Mallick",
      username: "mallick",
      profile_pic: "https://staticg.sportskeeda.com/editor/2022/07/c2ed4-16587439752781.png"
    },
    {
      _id: "3",
      name: "Ayush",
      lastName: "Singh",
      username: "ayush",
      pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
    },
  ],
  bookmarks: [],
},
{
  _id: "6",
  name: "Nitin",
  lastName: "Lakra",
  username: "tintin",
  user_email: "nitintin@gmail.com",
  password: "1234abcd",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022195/one_piece_2_jcjkvz.jpg",
  cover_pic: "",
  portfoliourl: "https://lakranitin.netlify.app",
  bio: "Gamer",
  followers: [
    {
      _id: "3",
      name: "Ayush",
      lastName: "Singh",
      username: "ayush",
      pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
    },
  ],
  following: [],
  bookmarks: [],
},
{
  _id: "1563",
  name: "Adarsh Balika",
  username: "adarshbalika",
  password: "1",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  followers: [{
    _id: "245346346",
    name: "Shashank Kumar",
    username: "shashank",
  },{
    _id: "33463463",
    name: "Praveen Shakya",
    username: "praveen",
  }],
  following: [{
    _id: "245346346",
    name: "Shashank Kumar",
    username: "shashank",
  }],
  bookmarks: [],
  bio:"Senior Software Engineer @Microsoft | Creator of Indias biggest programming community | Tweets about JavaScript, ReactJS, Career and Startups",
  portfoliourl:"Microsoft.com",
  profile_pic:"https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",

},
{
  _id: "245346346",
  name: "Shashank Kumar",
  username: "shashank",
  password: "123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  followers: [{
    _id: "1563",
    name: "Adarsh Balika",
    username: "adarshbalika",
  }],
  following: [{
    _id: "1563",
    name: "Adarsh Balika",
    username: "adarshbalika",
  }],
  bookmarks: [],
},
{
  _id: "33463463",
  name: "Praveen Shakya",
  username: "praveen",
  password: "123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  followers: [{
    _id: "1563",
    name: "Adarsh Balika",
    username: "adarshbalika",
  },],
  following: [],
  bookmarks: [],
},{
  _id: "7",
  name: "David",
  lastName: "Wilson",
  user_email: "davidwilson@example.com",
  username: "davidwilson",
  password: "password123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  cover_pic: "",
  portfoliourl: "https://davidwilson.com",
  bio: "Graphic Designer",
  followers: [],
  following: [],
  bookmarks: []
},
{
  _id: "8",
  name: "Sophia",
  lastName: "Johnson",
  user_email: "sophiajohnson@example.com",
  username: "sophiajohnson",
  password: "password123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  cover_pic: "",
  portfoliourl: "https://sophiajohnson.com",
  bio: "Front-end Developer",
  followers: [],
  following: [],
  bookmarks: []
},
{
  _id: "9",
  name: "Aman",
  lastName: "Gupta",
  user_email: "amangupta@example.com",
  username: "amangupta",
  password: "password123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  cover_pic: "",
  portfoliourl: "https://amanguptaportfolio.com",
  bio: "Data Scientist",
  followers: [],
  following: [],
  bookmarks: []
},
{
  _id: "10",
  name: "Emma",
  lastName: "Smith",
  user_email: "emmasmith@example.com",
  username: "emmasmith",
  password: "password123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  cover_pic: "",
  portfoliourl: "https://emmasmithportfolio.com",
  bio: "Photographer",
  followers: [],
  following: [],
  bookmarks: []
},
{
  _id: "11",
  name: "Rohit",
  lastName: "Gupta",
  user_email: "rohitgupta@example.com",
  username: "rohitgupta",
  password: "password123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  cover_pic: "",
  portfoliourl: "https://rohitguptaportfolio.com",
  bio: "Full-stack Developer",
  followers: [],
  following: [],
  bookmarks: []
},
{
  _id: "12",
  name: "Olivia",
  lastName: "Davis",
  user_email: "oliviadavis@example.com",
  username: "oliviadavis",
  password: "password123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  cover_pic: "",
  portfoliourl: "https://oliviadavisportfolio.com",
  bio: "GraphicHere's ",

}
,
{
  _id: "13",
  name: "William",
  lastName: "Anderson",
  user_email: "williamanderson@example.com",
  username: "williamanderson",
  password: "password123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  cover_pic: "",
  portfoliourl: "https://williamanderson.com",
  bio: "Mobile App Developer",
  followers: [],
  following: [],
  bookmarks: []
},
{
  _id: "14",
  name: "Ava",
  lastName: "Martinez",
  user_email: "avamartinez@example.com",
  username: "avamartinez",
  password: "password123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  cover_pic: "",
  portfoliourl: "https://avamartinezportfolio.com",
  bio: "UI Designer",
  followers: [],
  following: [],
  bookmarks: []
},
{
  _id: "15",
  name: "Daniel",
  lastName: "Brown",
  user_email: "danielbrown@example.com",
  username: "danielbrown",
  password: "password123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  cover_pic: "",
  portfoliourl: "https://danielbrownportfolio.com",
  bio: "Front-end Developer",
  followers: [],
  following: [],
  bookmarks: []
},
{
  _id: "16",
  name: "Mia",
  lastName: "Taylor",
  user_email: "miataylor@example.com",
  username: "miataylor",
  password: "password123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  cover_pic: "",
  portfoliourl: "https://miataylorportfolio.com",
  bio: "Web Designer",
  followers: [],
  following: [],
  bookmarks: []
},
{
  _id: "17",
  name: "James",
  lastName: "Harris",
  user_email: "jamesharris@example.com",
  username: "jamesharris",
  password: "password123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  cover_pic: "",
  portfoliourl: "https://jamesharrisportfolio.com",
  bio: "Software Engineer",
  followers: [],
  following: [],
  bookmarks: []
},
{
  _id: "18",
  name: "Isabella",
  lastName: "Lee",
  user_email: "isabellalee@example.com",
  username: "isabellalee",
  password: "password123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  cover_pic: "",
  portfoliourl: "https://isabellaleeportfolio.com",
  bio: "Full-stack Developer",
  followers: [],
  following: [],
  bookmarks: []
},
{
  _id: "19",
  name: "Alexander",
  lastName: "Clark",
  user_email: "alexanderclark@example.com",
  username: "alexanderclark",
  password: "password123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  cover_pic: "",
  portfoliourl: "https://alexanderclarkportfolio.com",
  bio: "Game Developer",
  followers: [],
  following: [],
  bookmarks: []
},
{
  _id: "20",
  name: "Charlotte",
  lastName: "Gonzalez",
  user_email: "charlottegonzalez@example.com",
  username: "charlottegonzalez",
  password: "password123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  cover_pic: "",
  portfoliourl: "https://charlottegonzalezportfolio.com",
  bio: "Graphic Designer",
  followers: [],
  following: [],
  bookmarks: []
},
{
  _id: "21",
  name: "Jackson",
  lastName: "Lopez",
  user_email: "jacksonlopez@example.com",
  username: "jacksonlopez",
  password: "password123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  cover_pic: "",
  portfoliourl: "https://jacksonlopezportfolio.com",
  bio: "Mobile App Developer",
  followers: [],
  following: [],
  bookmarks: []
},
{
  _id: "22",
  name: "Amelia",
  lastName: "Moore",
  user_email: "ameliamoore@example.com",
  username: "ameliamoore",
  password: "password123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  cover_pic: "",
  portfoliourl: "https://ameliamooreportfolio.com",
  bio: "UI/UX Designer",
  followers: [],
  following: [],
  bookmarks: []
},
{
  _id: "23",
  name: "Benjamin",
  lastName: "King",
  user_email: "benjaminking@example.com",
  username: "benjaminking",
  password: "password123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  cover_pic: "",
  portfoliourl: "https://benjaminkingportfolio.com",
  bio: "Front-end Developer",
  followers: [],
  following: [],
  bookmarks: []
},
{
  _id: "24",
  name: "Sofia",
  lastName: "Walker",
  user_email: "sofiawalker@example.com",
  username: "sofiawalker",
  password: "password123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  cover_pic: "",
  portfoliourl: "https://sofiawalkerportfolio.com",
  bio: "Graphic Designer",
  followers: [],
  following: [],
  bookmarks: []
},
{
  _id: "25",
  name: "Joseph",
  lastName: "Lewis",
  user_email: "josephlewis@example.com",
  username: "josephlewis",
  password: "password123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  cover_pic: "",
},
{
  _id: "26",
  name: "Harper",
  lastName: "Green",
  user_email: "harpergreen@example.com",
  username: "harpergreen",
  password: "password123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  cover_pic: "",
  portfoliourl: "https://harpergreenportfolio.com",
  bio: "Web Developer",
  followers: [],
  following: [],
  bookmarks: []
},
{
  _id: "27",
  name: "Samuel",
  lastName: "Hall",
  user_email: "samuelhall@example.com",
  username: "samuelhall",
  password: "password123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  cover_pic: "",
  portfoliourl: "https://samuelhallportfolio.com",
  bio: "Software Engineer",
  followers: [],
  following: [],
  bookmarks: []
},
{
  _id: "28",
  name: "Elizabeth",
  lastName: "Young",
  user_email: "elizabethyoung@example.com",
  username: "elizabethyoung",
  password: "password123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  cover_pic: "",
  portfoliourl: "https://elizabethyoungportfolio.com",
  bio: "UI/UX Designer",
  followers: [],
  following: [],
  bookmarks: []
},
{
  _id: "29",
  name: "Daniel",
  lastName: "Garcia",
  user_email: "danielgarcia@example.com",
  username: "danielgarcia",
  password: "password123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  cover_pic: "",
  portfoliourl: "https://danielgarciaportfolio.com",
  bio: "Front-end Developer",
  followers: [],
  following: [],
  bookmarks: []
},
{
  _id: "30",
  name: "Michael",
  lastName: "Johnson",
  user_email: "michaeljohnson@example.com",
  username: "michaeljohnson",
  password: "password123",
  createdAt: formatDate(),
  updatedAt: formatDate(),
  cover_pic: "",
  portfoliourl: "https://michaeljohnsonportfolio.com",
  bio: "Marketing Specialist",
  followers: [],
  following: [],
  bookmarks: []
}
]