module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("usuario", {
    login: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    rolId:{
      type:Sequelize.BIGINT
    }
  });

  return User;
};
