const bookRouter = require("./book/book.routes");

const appModules = [{ name: "book", router: bookRouter }];

module.exports = appModules;
