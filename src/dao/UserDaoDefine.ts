import { Op, Sequelize } from 'sequelize'
import { model } from '../definemodel'

class UserDaoDefine {
  static addUser(userinfo: Userinfo) {
    return model.create(userinfo)
  }
  static findAllUser() {
    return model.findAll({
      raw: true,
    })
  }
  // 查询指定字段
  static findByprops() {
    return model.findAll({
      raw: true,
      attributes: ['username', 'password'],
    })
  }
  static findByUsmAndPsw(username: string, password: string) {
    return model.findOne({
      // 查找一条记录
      raw: true,
      where: {
        [Op.or]: [{ username }, { password }],
      },
    })
  }
  static findByLike(key: string) {
    const searchKey = `%${key}%`
    return model.findAll({
      raw: true,
      where: {
        username: {
          [Op.like]: searchKey,
        },
      },
    })
  }
  static findByUsmAndAddr() {
    return model.findAll({
      raw: true,
      where: {
        [Op.or]: [
          {
            username:{[Op.like]:'王%'}
          },
          {
            address: { [Op.like]: '%s%' }
          }
        ]
      }
    })
  }
  static countUserinfo() {
    return model.findAll({
      raw: true,
      group: 'address',
      attributes:['address',[Sequelize.fn('count',Sequelize.col('valid')),'totalcount']],
      where: {
        valid:1
      }
    })
  }
}




export const { addUser, findAllUser, findByprops,
  findByUsmAndPsw, findByLike, findByUsmAndAddr, countUserinfo } = UserDaoDefine


export type Userinfo = {
  userid: number
  username: string
  password: string
  address: string
  valid: number
}
