import { DataTypes } from 'sequelize'
import { sequelize } from '../../BaseDao'

class SecondCtgyModel {
  static createModel() {
    const model = sequelize.define('secondctgy', {
      secondctgyid: {
        type: DataTypes.INTEGER,
        field: 'secondctgyid',
        primaryKey: true,
        autoIncrement: true,
      },

      secctgyname: {
        type: DataTypes.STRING(20),
        field: 'secctgyname',
        allowNull: false,
      },
      firstctgyId: {
        type: DataTypes.INTEGER,
        field: 'firstctgyId',
        allowNull: false,
      },
    })
      return model
  }
}
export const secondCtgyModel = SecondCtgyModel.createModel()