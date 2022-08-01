export const getAccessToken = () => {
  const { accessToken } = JSON.parse(localStorage.getItem("user"));
  return accessToken;
};
