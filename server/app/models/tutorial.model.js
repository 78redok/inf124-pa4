module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    name: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.DOUBLE
    },
    descr1: {
      type: Sequelize.STRING
    },
    platform: {
      type: Sequelize.STRING
    },
    imgSrc: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Tutorial;
};
