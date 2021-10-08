const express = require("express");
const router = express.Router();
const boardsController = require("../controllers/boardsController");
const listsController = require("../controllers/listsController");
const cardsController = require("../controllers/cardsController");
const {
  validateBoard,
  validateList,
  validateUpdateList,
  validateCard,
} = require("../validators/validators");

router.get("/boards", boardsController.getBoards);
router.get("/boards/:id", boardsController.getBoard);
router.get("/cards/:id", cardsController.getCard, cardsController.sendCard);

router.post(
  "/cards",
  validateCard,
  cardsController.getCardBoard,
  cardsController.createCard,
  cardsController.sendCard
);

router.post("/boards", validateBoard, boardsController.createBoard);
router.post(
  "/lists",
  validateList,
  listsController.createList,
  boardsController.addListToBoard,
  listsController.sendList
);
router.put(
  "/lists/:id",
  validateUpdateList,
  listsController.updateList,
  listsController.sendList
);

module.exports = router;
