const database = require('../config/db')

module.exports = {
  getSkill: () => {
    return new Promise((resolve, reject) => {
      database.query('SELECT * FROM skill_name', (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  getdetail: () => {
    return new Promise((resolve, reject) => {
      database.query('SELECT * FROM skill_detail', (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  postSkill: (data) => {
    return new Promise((resolve, reject) => {
      database.query('INSERT INTO skill_name set ?', data, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  postdetail: (data) => {
    return new Promise((resolve, reject) => {
      database.query('INSERT INTO skill_detail set ?', data, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  patchSkill: (data, id) => {
    return new Promise((resolve, reject) => {
      database.query('UPDATE skill_name set ? WHERE id = ?', [data, id], (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  patchDetail: (id, id_skill) => {
    return new Promise((resolve, result) => {
      database.query('UPDATE ')
    })
  },
  deleteSkill: (id) => {
    return new Promise((resolve, reject) => {
      database.query('DELETE FROM skill_name where id = ?', id, (err, re))
    })
  },
  postDetailSkill: (datas) => {
    return new Promise((resolve, reject) => {
      database.query('INSERT INTO skill_detail SET ?', datas, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  putDetailSkill: (datas, id) => {
    return new Promise((resolve, reject) => {
      database.query('UPDATE skill_detail SET skill_level = ? WHERE id = ?', [datas, id], (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  }

}
