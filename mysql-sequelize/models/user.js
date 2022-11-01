const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      age: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      married: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      comment: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  
  //timestamps true면 createdAt,updatedAt 자동으로해준다
  //underscored true면 자동으로 created_At이런식으로 해준다 지금 false여도
  //위에 직접created_at작성했기때문에 되는겅ㅁ
  //paranoid true이면 deletedAt:true로되면서 소프트딜리트가됨 나중에 복구해달라면 할수있음


  
  //hasMany로 1:N관계라는걸 설정해야함
  //1:1관계이면 hasOne
  static associate(db) {
    db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' });
  }
};