const isVerified = (req, res) => {
  res.send({ verified: "true" });
};

module.exports = {
  isVerified,
};
