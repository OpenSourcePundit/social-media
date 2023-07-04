import axios from "axios";

export const LoginService = async ({ username, password }) =>
  axios.post("/api/auth/login", { username, password });

export const SignUpService = async ({ username, password, email, name }) => {
  return axios.post("/api/auth/signup", { username, password, email, name });
};

//Post Controller

export const GetAllPosts = async () => axios.get("/api/posts");
export const GetSinglePost = async ({ postId }) =>
  axios.get(`/api/posts/${postId}`);
export const GetAllUserPost = async ({ username }) =>
  axios.get(`/api/posts/user/${username}`);

export const CreatePost = async ({ content, encodedToken }) => {
  return axios.post(
    "/api/user/posts/",
    { content },
    { headers: { authorization: encodedToken } }
  );
};

export const EditPost = async ({ encodedToken, postData, postId }) => {
  return axios.post(
    `/api/posts/edit/${postId}`,
    { postData },
    { headers: { authorization: encodedToken } }
  );
};

export const LikePost = async ({ encodedToken, postId }) => {
  return axios.post(`/api/posts/like/${postId}`,{}, {
    headers: { authorization: encodedToken },
  });
};

export const DislikePost = async ({ encodedToken, postId }) => {
  return axios.post(`/api/posts/dislike/${postId}`,{}, {
    headers: { authorization: encodedToken },
  });
};

export const DeletePost = async ({ encodedToken, postId }) => {
  return axios.delete(`/api/user/posts/${postId}`, {
    headers: { authorization: encodedToken },
  });
};

//User Controller

export const GetAllUsers = async () => axios.get("/api/users");
export const GetUser = async ({ userId }) => axios.get(`/api/users/${userId}`);

export const EditUser = async ({ encodedToken, userData }) => {
  return axios.post(
    "/api/users/edit",
    { userData },
    { headers: { authorization: encodedToken } }
  );
};

//chancesoferror is in /
export const GetBookmarkPosts = async ({ encodedToken }) => {
  return axios.get("/api/users/bookmark", {
    headers: { authorization: encodedToken },
  });
};

//chancesoferror is in /
export const BookmarkPost = async ({ encodedToken, postId }) => {
  return axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    { headers: { authorization: encodedToken } }
  );
};

//chancesoferror is in /
export const RemovePostFromBookmark = async ({ encodedToken, postId }) => {
  return axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    { headers: { authorization: encodedToken } }
  );
};

//i have doubts about the userId that has not come and need to be extracted from encoded token
export const FollowUser = async ({ followUserId, encodedToken }) => {
  return axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    { headers: { authorization: encodedToken } }
  );
};

export const UnfollowUser = async ({ followUserId, encodedToken }) => {
  return axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    { headers: { authorization: encodedToken } }
  );
};
