export const getUserId = () => {
  const { userId } = JSON.parse(localStorage.getItem("user"));
  return userId;
};

export const getAccessToken = () => {
  const { accessToken } = JSON.parse(localStorage.getItem("user"));
  return accessToken;
};
