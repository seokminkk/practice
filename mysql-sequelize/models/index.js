
const Sequelize = require('sequelize');
//여기서 모델들 만든거 불러와야함
const User =require('./user')
const Comment =require('./comment')

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User =User;
db.Comment =Comment;

User.init(sequelize);
Comment.init(sequelize);


User.associate(db);
Comment.associate(db);


module.exports = db;
