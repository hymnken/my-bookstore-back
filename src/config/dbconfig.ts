function isString(data: any): data is string {
  return typeof data === 'string'
}

interface DbConConf {
  host: string
  user: string
  password: string
  port: number
  database: string
}

interface EnvConf {
  dev: DbConConf // 开发环境
  prod: DbConConf // 生产环境
}

class Conf {
  static conf: Conf = new Conf()
  env!: keyof EnvConf
  envConf!: EnvConf
  constructor() {
    this.env = process.env.NODE_ENV === 'dev' ? 'dev' : 'prod'
    this.initConf()
  }
  initConf() {
    this.envConf = {
      dev: {
        host: 'localhost',
        user: 'admin',
        password: '123456',
        database: 'kenn',
        port: 3306,
      },
      prod: {
        host: 'localhost',
        user: 'admin',
        password: '123456',
        database: 'kenn',
        port: 3306,
      },
    }
  }

  getConf(): DbConConf
  getConf(key: string): string
  getConf(key: any = ''): any {
    if (this.isDbConConfKeys(key) && key.length > 0) {
      return this.envConf[this.env][key]
    } else {
        return this.envConf[this.env]
    }
  }
  isDbConConfKeys(key: any): key is keyof DbConConf {
    return key === 'host' || key === 'user' || key === 'password' || key === 'database' || key === 'port'
  }
}

export default Conf.conf