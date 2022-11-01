const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      comment: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW,
      },
    }, {
      sequelize,
      timestamps: false,
      modelName: 'Comment',
      tableName: 'comments',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  //belongsto로 comments 테이블의 로우를 불러올떄연결된 user테이블로우를가져오게함
  //belongsto에 커멘터 컬럼이 생김
  //쉽게 댓글테이블에 누가 작성했는지 아이디를 가져와야하니 
  //다른 모델정보가 들어가는테이블이니까 belong
  //foreignkey를 설정하지않으면 모델명+기본이들어옴 UserId가 자동으로 foreignKey로설정됨
  static associate(db) {
    db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' });
  }
};