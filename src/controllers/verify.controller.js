/** Retorna verificado si el token aun es valido */
const isVerified = (req, res) => {
  res.send({ verified: "true" });
};

module.exports = {
  isVerified,
};
