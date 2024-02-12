const express = require("express");
const router = express.Router();

const { getBooks, addBook, deleteBook } = require("./book.controller");
const { addBookValidator, deleteBookValidator } = require("./book.validator");

router.use("/").get(getBooks).post(addBookValidator, addBook);
router.delete("/:bookId", deleteBookValidator, deleteBook);

module.exports = router;
