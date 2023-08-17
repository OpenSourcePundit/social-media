import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = 
// [
//   {
//     _id: uuid(),
//     content:
//       "At vero eos et aibero tempore, cum solutail impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
//     likes: {
//       likeCount: 0,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "adarshbalika",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//   },
//   {
//     _id: uuid(),
//     content:
//       "At vero eos etibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
//     likes: {
//       likeCount: 0,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "shashank",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//   },
//   {
//     _id: uuid(),
//     content:
//       "At veroum deleniti atque corrupti quos dolores et  quas moletate non provident,rum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
//     likes: {
//       likeCount: 0,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "praveen",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//   },
//   {
//     _id: uuid(),
//     content:
//       "At vero eos ees alias consequatur aut perferendis doloribus asperiores repellat.",
//     likes: {
//       likeCount: 0,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "adarshbalika",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//   },
// ];
[
  {
    _id: "1",
    content: "RajSphere is the best app 🎉",
    username: "shobhitraj",
    postedBy: {
      _id: "1",
      name: "Shobhit",
      lastName: "Raj",
      username: "shobhitraj",
      profile_pic: "https://pbs.twimg.com/profile_images/1266934374060052480/O3nYz9s-_400x400.jpg",
    },
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "3",
          name: "Ayush",
          lastName: "Singh",
          username: "ayush",
          profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
        },
        {
          _id: "2",
          name: "Rahul",
          lastName: "Mallick",
          username: "mallick",
          profile_pic: "https://staticg.sportskeeda.com/editor/2022/07/c2ed4-16587439752781.png",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "1",
        content: "Yeah... I am using it",
        postId: "1",
        user: {
          _id: "3",
          name: "Ayush",
          lastName: "Singh",
          username: "ayush",
          profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
        },
        replies: [
          {
            _id: "1",
            user: {
              _id: "1",
              name: "Shobhit",
              lastName: "Raj",
              username: "shobhitraj",
              profile_pic: "https://pbs.twimg.com/profile_images/1266934374060052480/O3nYz9s-_400x400.jpg",
            },
            content: "Ping me @ayush if you find any bug",
          },
        ],
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "2",
        content: "I am also using it",
        postId: "1",
        user: {
          _id: "2",
          name: "Rahul",
          lastName: "Mallick",
          username: "mallick",
          profile_pic: "https://staticg.sportskeeda.com/editor/2022/07/c2ed4-16587439752781.png",
        },
        replies: [
          {
            _id: "1",
            user: {
              _id: "1",
              name: "Shobhit",
              lastName: "Raj",
              username: "shobhitraj",
              profile_pic: "https://pbs.twimg.com/profile_images/1266934374060052480/O3nYz9s-_400x400.jpg",
            },
            content: "Ping me @mallick if you find any bug",
          },
        ],
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "2",
    content: "Must try these momos from Kalimpong Restaurant, Dharamshala",
    pic: "https://www.thespruceeats.com/thmb/T_R22QniykdQ9aPCLKIk-O22Gh4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg",
    username: "mallick",
    postedBy: {
      _id: "2",
      name: "Rahul",
      lastName: "Mallick",
      username: "mallick",
      profile_pic: "https://staticg.sportskeeda.com/editor/2022/07/c2ed4-16587439752781.png",
    },
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "3",
          name: "Ayush",
          lastName: "Singh",
          username: "ayush",
          profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
        },
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
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "1",
        content: "Sure, I'll give it a try.",
        postId: "2",
        user: {
          _id: "1",
          name: "Shobhit",
          lastName: "Raj",
          username: "shobhitraj",
          profile_pic: "https://pbs.twimg.com/profile_images/1266934374060052480/O3nYz9s-_400x400.jpg",
        },
        replies: [],
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "3",
    content: "Hadimba Temple covered with snow, a symbol of peace and tranquility",
    pic: "https://2.bp.blogspot.com/-lWmqyny4pOU/XB_S3p271kI/AAAAAAAAZcU/k-1aAHyk5yAkF--jnHXs90xDwQ7AL1cKACLcBGAs/s1600/hidimba%2Bmata%2B2.jpg",
    username: "ayush",
    postedBy: {
      _id: "3",
      name: "Ayush",
      lastName: "Singh",
      username: "ayush",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
    },
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "2",
          name: "Rahul",
          lastName: "Mallick",
          username: "mallick",
          profile_pic: "https://staticg.sportskeeda.com/editor/2022/07/c2ed4-16587439752781.png",
        },
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
          _id: "5",
          name: "Eklavya",
          lastName: "Prasad",
          username: "eklavya",
          profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650009611/uchicha_crest_ngetfr.jpg",
        }
      ],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "4",
    content: "Went to the new Apple store in Mumbai",
    pic: "https://static.dezeen.com/uploads/2023/04/apple-store-mumbai-foster-partners-india_dezeen_2364_hero_12-852x479.jpg",
    username: "saurabh",
    postedBy: {
      _id: "4",
      name: "Saurabh",
      lastName: "Kumar",
      username: "saurabh",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022195/saitama_isaxm6.jpg",
    },
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "3",
          name: "Ayush",
          lastName: "Singh",
          username: "ayush",
          profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
        },
        {
          _id: "2",
          name: "Rahul",
          lastName: "Mallick",
          username: "mallick",
          profile_pic: "https://staticg.sportskeeda.com/editor/2022/07/c2ed4-16587439752781.png",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "1",
        content: "How was your experience, I also plan on visiting soon.",
        postId: "4",
        user: {
          _id: "3",
          name: "Ayush",
          lastName: "Singh",
          username: "ayush",
          profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
        },
        replies: [
          {
            _id: "1",
            user: {
              _id: "4",
              name: "Saurabh",
              lastName: "Kumar",
              username: "saurabh",
              profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022195/saitama_isaxm6.jpg",
            },
            content: "It was nice",
          },
        ],
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "5",
    content: "Got this view after 2 hours trek",
    pic: "https://static.toiimg.com/photo/msid-94791202,width-96,height-65.cms",
    username: "eklavya",
    postedBy: {
      _id: "5",
      name: "Eklavya",
      lastName: "Prasad",
      username: "eklavya",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650009611/uchicha_crest_ngetfr.jpg",
    },
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "6",
          name: "Nitin",
          lastName: "Lakra",
          username: "tintin",
          profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022195/one_piece_2_jcjkvz.jpg",
        },
        {
          _id: "1",
          name: "Shobhit",
          lastName: "Raj",
          username: "shobhitraj",
          profile_pic: "https://pbs.twimg.com/profile_images/1266934374060052480/O3nYz9s-_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "1",
        content: "WoW!!",
        postId: "5",
        user: {
          _id: "1",
          name: "Shobhit",
          lastName: "Raj",
          username: "shobhitraj",
          profile_pic: "https://pbs.twimg.com/profile_images/1266934374060052480/O3nYz9s-_400x400.jpg",
        },
        replies: [],
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "6",
    content: "Went to this gaming fair yesterday!",
    pic: "https://upload.wikimedia.org/wikipedia/commons/e/ee/EGX_2014.jpg",
    username: "tintin",
    postedBy: {
      _id: "6",
      name: "Nitin",
      lastName: "Lakra",
      username: "tintin",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022195/one_piece_2_jcjkvz.jpg",
    },
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "5",
          name: "Eklavya",
          lastName: "Prasad",
          username: "eklavya",
          profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650009611/uchicha_crest_ngetfr.jpg",
        },
        {
          _id: "2",
          name: "Rahul",
          lastName: "Mallick",
          username: "mallick",
          profile_pic: "https://staticg.sportskeeda.com/editor/2022/07/c2ed4-16587439752781.png",
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "7",
    content: "एक ख़ूबसूरत शाम",
    pic: "https://images.pexels.com/photos/6335643/pexels-photo-6335643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "shobhitraj",
    postedBy: {
      _id: "1",
      name: "Shobhit",
      lastName: "Raj",
      username: "shobhitraj",
      profile_pic: "https://pbs.twimg.com/profile_images/1266934374060052480/O3nYz9s-_400x400.jpg",
    },
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "3",
          name: "Ayush",
          lastName: "Singh",
          username: "ayush",
          profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
        },
        {
          _id: "2",
          name: "Rahul",
          lastName: "Mallick",
          username: "mallick",
          profile_pic: "https://staticg.sportskeeda.com/editor/2022/07/c2ed4-16587439752781.png",
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "8",
    content: "A random click",
    pic: "https://images.pexels.com/photos/13650389/pexels-photo-13650389.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    username: "mallick",
    postedBy: {
      _id: "2",
      name: "Rahul",
      lastName: "Mallick",
      username: "mallick",
      profile_pic: "https://staticg.sportskeeda.com/editor/2022/07/c2ed4-16587439752781.png",
    },
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "3",
          name: "Ayush",
          lastName: "Singh",
          username: "ayush",
          profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
        },
        {
          _id: "1",
          name: "Shobhit",
          lastName: "Raj",
          username: "shobhitraj",
          profile_pic: "https://pbs.twimg.com/profile_images/1266934374060052480/O3nYz9s-_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "9",
    content: "love this season",
    pic: "https://images.pexels.com/photos/15780002/pexels-photo-15780002/free-photo-of-speed-limit-sign.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    username: "ayush",
    postedBy: {
      _id: "3",
      name: "Ayush",
      lastName: "Singh",
      username: "ayush",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "10",
    content: "surrounded by peace",
    pic: "https://images.pexels.com/photos/15953852/pexels-photo-15953852/free-photo-of-canoe-on-the-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    username: "saurabh",
    postedBy: {
      _id: "4",
      name: "Saurabh",
      lastName: "Kumar",
      username: "saurabh",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022195/saitama_isaxm6.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "11",
    content: "always wanted one",
    pic: "https://images.pexels.com/photos/16953244/pexels-photo-16953244/free-photo-of-hand-holding-kitten.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    username: "eklavya",
    postedBy: {
      _id: "5",
      name: "Eklavya",
      lastName: "Prasad",
      username: "eklavya",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650009611/uchicha_crest_ngetfr.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "12",
    content: "nature",
    pic: "https://images.pexels.com/photos/17206891/pexels-photo-17206891/free-photo-of-wildflowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    username: "tintin",
    postedBy: {
      _id: "6",
      name: "Nitin",
      lastName: "Lakra",
      username: "tintin",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022195/one_piece_2_jcjkvz.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "13",
    content: "enjoying the ocean's breeze",
    pic: "https://images.pexels.com/photos/16208497/pexels-photo-16208497/free-photo-of-hills-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    username: "shobhitraj",
    postedBy: {
      _id: "1",
      name: "Shobhit",
      lastName: "Raj",
      username: "shobhitraj",
      profile_pic: "https://pbs.twimg.com/profile_images/1266934374060052480/O3nYz9s-_400x400.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "14",
    content: "finally!",
    pic: "https://images.pexels.com/photos/352505/pexels-photo-352505.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "mallick",
    postedBy: {
      _id: "2",
      name: "Rahul",
      lastName: "Mallick",
      username: "mallick",
      profile_pic: "https://staticg.sportskeeda.com/editor/2022/07/c2ed4-16587439752781.png",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "15",
    content: "Let's celebrate! My first car is here!",
    pic: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "ayush",
    postedBy: {
      _id: "3",
      name: "Ayush",
      lastName: "Singh",
      username: "ayush",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "16",
    content: "even rupee has evolved!",
    pic: "https://images.pexels.com/photos/10326878/pexels-photo-10326878.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "saurabh",
    postedBy: {
      _id: "4",
      name: "Saurabh",
      lastName: "Kumar",
      username: "saurabh",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022195/saitama_isaxm6.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "17",
    content: "building apps and drinking coffee -- daily routine",
    pic: "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "eklavya",
    postedBy: {
      _id: "5",
      name: "Eklavya",
      lastName: "Prasad",
      username: "eklavya",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650009611/uchicha_crest_ngetfr.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "18",
    content: "finally!",
    pic: "https://images.pexels.com/photos/2885014/pexels-photo-2885014.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "tintin",
    postedBy: {
      _id: "6",
      name: "Nitin",
      lastName: "Lakra",
      username: "tintin",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022195/one_piece_2_jcjkvz.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "19",
    content: "serene",
    pic: "https://images.pexels.com/photos/3384815/pexels-photo-3384815.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "shobhitraj",
    postedBy: {
      _id: "1",
      name: "Shobhit",
      lastName: "Raj",
      username: "shobhitraj",
      profile_pic: "https://pbs.twimg.com/profile_images/1266934374060052480/O3nYz9s-_400x400.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "20",
    content: "far away from chaos",
    pic: "https://images.pexels.com/photos/570026/pexels-photo-570026.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "mallick",
    postedBy: {
      _id: "2",
      name: "Rahul",
      lastName: "Mallick",
      username: "mallick",
      profile_pic: "https://staticg.sportskeeda.com/editor/2022/07/c2ed4-16587439752781.png",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "21",
    content: "Jodhpur",
    pic: "https://images.pexels.com/photos/797824/pexels-photo-797824.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "ayush",
    postedBy: {
      _id: "3",
      name: "Ayush",
      lastName: "Singh",
      username: "ayush",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "22",
    content: "strolling",
    pic: "https://images.pexels.com/photos/3337153/pexels-photo-3337153.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "saurabh",
    postedBy: {
      _id: "4",
      name: "Saurabh",
      lastName: "Kumar",
      username: "saurabh",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022195/saitama_isaxm6.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "23",
    content: "Mysore Palace",
    pic: "https://images.pexels.com/photos/4134644/pexels-photo-4134644.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "eklavya",
    postedBy: {
      _id: "5",
      name: "Eklavya",
      lastName: "Prasad",
      username: "eklavya",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650009611/uchicha_crest_ngetfr.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "24",
    content: "always chasing these sunsets",
    pic: "https://images.pexels.com/photos/14384530/pexels-photo-14384530.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "tintin",
    postedBy: {
      _id: "6",
      name: "Nitin",
      lastName: "Lakra",
      username: "tintin",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022195/one_piece_2_jcjkvz.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "25",
    content: "गंगा आरती",
    pic: "https://images.pexels.com/photos/7919683/pexels-photo-7919683.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "shobhitraj",
    postedBy: {
      _id: "1",
      name: "Shobhit",
      lastName: "Raj",
      username: "shobhitraj",
      profile_pic: "https://pbs.twimg.com/profile_images/1266934374060052480/O3nYz9s-_400x400.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "26",
    content: "शाम-ए-बनारस",
    pic: "https://images.unsplash.com/photo-1665413791165-b25d42542b80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJhbmFyYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    username: "mallick",
    postedBy: {
      _id: "2",
      name: "Rahul",
      lastName: "Mallick",
      username: "mallick",
      profile_pic: "https://staticg.sportskeeda.com/editor/2022/07/c2ed4-16587439752781.png",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "27",
    content: "अंतः अस्ति प्रारंभः \n📍Manikarnika Ghat",
    pic: "https://images.unsplash.com/photo-1682827818567-51c02517aa49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    username: "ayush",
    postedBy: {
      _id: "3",
      name: "Ayush",
      lastName: "Singh",
      username: "ayush",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "28",
    content: "ghats of Varanasi",
    pic: "https://images.pexels.com/photos/16745037/pexels-photo-16745037/free-photo-of-sea-city-dawn-sunset.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "saurabh",
    postedBy: {
      _id: "4",
      name: "Saurabh",
      lastName: "Kumar",
      username: "saurabh",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022195/saitama_isaxm6.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "29",
    content: "Leaning temple of Kashi",
    pic: "https://images.pexels.com/photos/14676831/pexels-photo-14676831.png?auto=compress&cs=tinysrgb&w=600",
    username: "eklavya",
    postedBy: {
      _id: "5",
      name: "Eklavya",
      lastName: "Prasad",
      username: "eklavya",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650009611/uchicha_crest_ngetfr.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "30",
    content: "BHU Roadshow",
    pic: "https://images.unsplash.com/photo-1588804472052-7bc180967a12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGJhbmFyYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    username: "tintin",
    postedBy: {
      _id: "6",
      name: "Nitin",
      lastName: "Lakra",
      username: "tintin",
      profile_pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022195/one_piece_2_jcjkvz.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At vero eos et aibero tempore, cum solutail impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At vero eos etibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shashank",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At veroum deleniti atque corrupti quos dolores et  quas moletate non provident,rum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "praveen",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    pic: "https://www.thespruceeats.com/thmb/T_R22QniykdQ9aPCLKIk-O22Gh4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg",
    content:
      "At vero eos ees alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
