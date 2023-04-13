import { DataTypes } from 'sequelize'
import { sequelize } from '../dao/BaseDaoDefine'

class Userinfo {
  static createModel() {
    return sequelize.define('userinfo', {
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
      vaild: {
        type: DataTypes.TINYINT,
        field: 'vaild',
        allowNull: false,
      },
    })
  }
}

export const model = Userinfo.createModel()
