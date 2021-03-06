const express = require('express')
const Route = express.Router()
const Skill = require('../controller/skill')
Route

  .get('/', Skill.getSkill)
  .get('/detail', Skill.getdetail)
  .post('/', Skill.postSkill)
  .post('/detail', Skill.postDetail)
  .patch('/:id', Skill.patchSkill)
  .post('/level', Skill.postDetailSkill)
  .put('/update/:id', Skill.putDetailSkill)

module.exports = Route
