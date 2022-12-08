const log4jsconfig = require('../../../config/log4js.config');
const express = require("express");
const router = express.Router();
const listData = require("../../data/userInfo");
const _ = require('lodash');


router.get("/", (req, res) => {
  res.json(listData);
});

router.route("/:id")
  .get((req, res) => {
    const id = parseInt(req.params.id);
    res.json(listData.find((user) => user.id === id));
    log4jsconfig.debug('Get user', id, listData)
  })
  .post((req, res) => {
    const id = parseInt(req.params.id);
    const body = _.get(req, "body");

    const idx = listData.findIndex(user => user.id === id);
    if(idx !== -1) {
      listData.splice(idx, 1, {
        ...listData[idx],
        name: body.name,
        age: body.age,
      })
    }
    log4jsconfig.debug('Post user', id, listData)
    res.json(listData[idx]);
  })
  .delete((req, res) => {
    const id = parseInt(req.params.id);
    const idx = listData.findIndex(user => user.id === id);
    if(idx !== -1) {
      listData.splice(idx, 1)
      log4jsconfig.debug('Delete user', id, listData)
      res.json("Delete success")
    }else {
      log4jsconfig.warn('Exception id', id)
      res.json("Id Not Found")
    }
  })

module.exports = router;
