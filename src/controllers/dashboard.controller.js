const operator = (req,res) => {
  res.send({token: req.headers["accessToken"],message:"Dashboard con contenido del operador"});
};

const visor = (req,res) => {
  res.send({token: req.headers["accessToken"],message:"Dashboard con contenido del visor"});
};

const admin = (req,res) => {
  res.send({token: req.headers["accessToken"],message:"Dashboard con contenido del Admin"});
};


module.exports = {
    operator,
    visor,
    admin
}