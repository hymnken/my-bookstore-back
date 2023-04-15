import dbConConf from '../config/dbconfig'
import path from 'path'
import { Dialect } from 'sequelize'
import { Sequelize } from 'sequelize-typescript'
class BaseDaoDefine {
  static baseDaoOrm: BaseDaoDefine = new BaseDaoDefine()
  sequelize!: Sequelize
  constructor() {
    this.initSeqConf('mysql')
  }
  initSeqConf(dialect: Dialect) {
    //数据库连接
    let { host, user, password, database, port } = dbConConf.getConf()
    this.sequelize = new Sequelize(database, user, password, {
      host,
      port,
      dialect, // 表示是何种数据库
      define: { timestamps: true, freezeTableName: true },
    })
      this.addModels()
    }
    addModels() {
        const modelPath = path.join(process.cwd(), '/src/ormmodel')
        this.sequelize.addModels([modelPath])
    }
}
export const { sequelize } = BaseDaoDefine.baseDaoOrm