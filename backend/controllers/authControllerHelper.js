 const generateOtp = () => {
  const numList = [
    Math.floor(Math.random() * 10 + 1),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
  ];

  return (
    numList[0] * 10000 +
    numList[1] * 1000 +
    numList[2] * 100 +
    numList[3] * 10 +
    numList[4]
  ).toString();
};

module.exports = {generateOtp}