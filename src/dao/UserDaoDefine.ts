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
            username: { [Op.like]: '王%' },
          },
          {
            address: { [Op.like]: '%s%' },
          },
        ],
      },
    })
  }
  // 聚合查询
  static countUserinfo() {
    return model.findAll({
      raw: true,
      group: 'address',
      attributes: ['address', [Sequelize.fn('count', Sequelize.col('valid')), 'totalcount']],
      where: {
        valid: 1,
      },
    })
  }

  // 分页查询
  static findUserWithPager(offset:number,pageSize:number) {
    return model.findAll({
      raw: true,
      limit: pageSize,
      offset,
    })
  }
}

export const {
  addUser,
  findAllUser,
  findByprops,
  findByUsmAndPsw,
  findByLike,
  findByUsmAndAddr,
  countUserinfo,
  findUserWithPager,
} = UserDaoDefine

export type Userinfo = {
  userid: number
  username: string
  password: string
  address: string
  valid: number
}
