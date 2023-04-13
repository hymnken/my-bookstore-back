import { model } from '../definemodel'

class UserDaoDefine {
  static addUser(userinfo: Userinfo) {
    return model.create(userinfo)
  }
  static findAllUser() {
    return model.findAll({
      raw:true
    })
  }
}
export const { addUser, findAllUser } = UserDaoDefine
export type Userinfo = {
  userid: number
  username: string
  password: string
  address: string
  valid: number
}
