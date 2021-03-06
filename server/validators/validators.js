const { check } = require("express-validator");

exports.validateBoard = [check("board.title").not().isEmpty()];

exports.validateList = [check("list.list.title").not().isEmpty()];

exports.validateUpdateList = [check("list.title").not().isEmpty()];

exports.validateCard = [check("card.title").not().isEmpty()];

exports.validateComment = [check("comment.text").not().isEmpty()];