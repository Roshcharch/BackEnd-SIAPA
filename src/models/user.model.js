module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      name: {
        type: Sequelize.STRING,
      },
      pass: {
        type: Sequelize.STRING,
      },
    });
  
    return User;
  };
  