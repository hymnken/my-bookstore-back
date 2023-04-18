import { DataTypes } from 'sequelize'
import { sequelize } from '../../BaseDao'

class ThirdCtgyModel {
  static createModel() {
    const model = sequelize.define('thirdctgy', {
      thirdctgyid: {
        type: DataTypes.INTEGER,
        field: 'thirdctgyid',
        primaryKey: true,
        autoIncrement: true,
      },

      thirdname: {
        type: DataTypes.STRING(20),
        field: 'thirdname',
        allowNull: false,
      },
      secctgyid: {
        type: DataTypes.INTEGER,
        field: 'secctgyid',
        allowNull: false,
      },
    })
      return model
  }
}


export const thirdCtgyModel = ThirdCtgyModel.createModel()
