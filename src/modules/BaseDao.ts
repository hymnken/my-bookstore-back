import dbConConf from '../config/dbconfig'
import path from 'path'
import { Dialect } from 'sequelize'
import { Sequelize } from 'sequelize-typescript'
//
class BaseDao {
  static baseDao: BaseDao = new BaseDao()
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
      pool: {
        // 数据库连接池
        max: 10, // 最大连接对象的个数
        min: 5,  // 最小连接数
        acquire: 10000, // 一条sql查询在获取连接资源之前的最长等待时间
        idle: 1000  // 空闲连接最长等待时间，单位为毫秒
      }
    })
  }

  addModels() {
    const modelPath = path.join(process.cwd(), '/src/modules/decormodel')
    this.sequelize.addModels([modelPath])
  }
}

const baseDao = BaseDao.baseDao
baseDao.addModels()
export const { sequelize } = baseDao
