/**
 * Created by caoqimin on 2017/6/6.
 */
var Sequelize = require('sequelize');
var config = {
    username: 'root',
    password: 'Yka@yunkouan.cao',
    //password: 'root',
    database: 'work',
    host: "localhost",
    dialect: 'mysql',
    port: 3306, // 端口号，MySQL默认3306
    logging:false,
    define: {
        underscored: false,
        timestamps: false,
        paranoid: true
    },
    timezone: '+08:00' //东八时区
};

var db = {
    sequelize: new Sequelize(config.database, config.username, config.password,config)
};
db.workAdmin = db.sequelize.import('../biz/models/work_admin.js'); //用户模型
db.workAdminRole = db.sequelize.import('../biz/models/work_admin_role.js'); //用户角色模型
db.workDaily = db.sequelize.import('../biz/models/work_daily.js'); //主任务模型
db.workDepartment = db.sequelize.import('../biz/models/work_department.js'); //部门模型
db.workMenu = db.sequelize.import('../biz/models/work_menu.js'); //菜单模型
db.workProductProject = db.sequelize.import('../biz/models/work_product_project.js'); //产品项目模型
db.workRole = db.sequelize.import('../biz/models/work_role.js'); //角色模型
db.workRoleMenu = db.sequelize.import('../biz/models/work_role_menu.js'); //角色用户模型
db.workSubtask = db.sequelize.import('../biz/models/work_subtask.js'); //子任务模型
db.workWeekly = db.sequelize.import('../biz/models/work_weekly.js'); //周任务模型

//用户关联部门（1对多关联）
db.workDepartment.hasMany(db.workAdmin, {foreignKey:'departmentId', targetKey:'id'});
db.workAdmin.belongsTo(db.workDepartment, {foreignKey:'departmentId', targetKey:'id'});

//用户表、角色表建立关系（多对多关联）
db.workAdmin.belongsToMany(db.workRole,{through:'work_admin_role',foreignKey:'userId',targetKey:'id'});
db.workRole.belongsToMany(db.workAdmin,{through:'work_admin_role',foreignKey:'roleId',targetKey:'id'});

//角色表、菜单表建立关系（多对多关联）
db.workRole.belongsToMany(db.workMenu,{through:'work_role_menu',foreignKey:'roleId',targetKey:'id'});
db.workMenu.belongsToMany(db.workRole,{through:'work_role_menu',foreignKey:'menuId',targetKey:'id'});

//主任务关联用户（1对多关联）
db.workAdmin.hasMany(db.workDaily, {foreignKey:'userId', targetKey:'id'});
db.workDaily.belongsTo(db.workAdmin, {foreignKey:'userId', targetKey:'id'});

//周任务关联用户（1对多关联）
db.workAdmin.hasMany(db.workWeekly, {foreignKey:'userId', targetKey:'id'});
db.workWeekly.belongsTo(db.workAdmin, {foreignKey:'userId', targetKey:'id'});

//主任务关联产品和项目（1对多关联）
db.workProductProject.hasMany(db.workDaily, {foreignKey:'itemId', targetKey:'id'});
db.workDaily.belongsTo(db.workProductProject, {foreignKey:'itemId', targetKey:'id'});

//子任务关联主任务（1对多关联）
db.workDaily.hasMany(db.workSubtask, {foreignKey:'dailyId', targetKey:'id'});
db.workSubtask.belongsTo(db.workDaily, {foreignKey:'dailyId', targetKey:'id'});

module.exports = db;