const List = require("../models/List");
const Board = require("../models/Board");
const Card = require("../models/Card");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const getCard = (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
  if (errors.isEmpty()) {
    const id = req.params.id;
    Card.findById(id)
      .then((card) => {
        req.card = card;
        next();
      })
      .catch((err) => {
        console.log(err);
        next(new HttpError("Card not found", 404));
      });
  } else {
    return next(new HttpError("You must provide a title.", 422));
  }
};

const createCard = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    // const newList = {
    //   boardId: req.body.list.boardId,
    //   title: req.body.list.list.title,
    //   position: 65536,
    //   cards: [],
    // };
    // List.create(newList)
    //   .then((list) => {
    //     req.list = list;
    //     next();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     next(new HttpError("Creating list failed, please try again", 500));
    //   });
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

const sendCard = (req, res, next) => {
  console.log();
  res.json(req.card);
};

const updateCard = (req, res, next) => {
  console.log(req.body);
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const id = req.params.id;
    Card.findByIdAndUpdate(id, {
      // title: req.body.list.title,
      // position: req.body.list.position,
    })
      .then((list) => {
        req.list = list;
        next();
      })
      .catch((err) => {
        console.log(err);
        next(new HttpError("Card not found", 404));
      });
  } else {
    return next(new HttpError("You must provide a title.", 422));
  }
};

exports.getCard = getCard;
// exports.getLists = getLists;
// exports.getList = getList;
exports.createCard = createCard;
exports.sendCard = sendCard;
exports.updateCard = updateCard;