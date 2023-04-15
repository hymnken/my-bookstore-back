import { DataTypes } from 'sequelize'
import { sequelize } from '../../BaseDao'

class Userinfo {
  static createModel() {
    const model = sequelize.define(
      'userinfo',
      {
        userid: {
          type: DataTypes.INTEGER,
          field: 'userid',
          primaryKey: true,
          autoIncrement: true,
        },
        username: {
          type: DataTypes.STRING(255),
          field: 'username',
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(255),
          field: 'password',
          allowNull: false,
        },
        address: {
          type: DataTypes.STRING(255),
          field: 'address',
          allowNull: false,
        },
        valid: {
          type: DataTypes.TINYINT,
          field: 'valid',
          allowNull: false,
        },
      },
      {
        // freezeTableName: false, // true表示使用给用的表名，false表示模型名后加s作为表名
        timestamps: false, //表示给模型加上时间戳属性(createAt,updateAt),false表示不带时间戳属性
      }
    )
    // 同步数据库 force的值为true 表若存在则删除后创建，force的值为false 表示表不存在才创建
    // model.sync({force: true})
    return model
  }
}

export const model = Userinfo.createModel()
