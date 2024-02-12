const { STATUS_CODES, ERROR_MSG } = require("../../utils/constants.util");

// Static Data
const { BOOKS_API_STATIC_DATA } = require("./book.util");

exports.getBooks = async (_, res) => {
  try {
    return res.status(STATUS_CODES.SUCCESS).json({
      success: true,
      data: BOOKS_API_STATIC_DATA,
    });
  } catch (err) {
    return res.status(STATUS_CODES.SERVER_ERROR).json({
      success: false,
      message: err.message || ERROR_MSG.SERVER_ERROR,
    });
  }
};

exports.addBook = async (req, res) => {
  try {
    const { name, description, numberOfPages, author, publisher } = req.body;
    const newData = {
      id: Math.random(),
      name,
      description,
      numberOfPages,
      author,
      publisher,
    };
    BOOKS_API_STATIC_DATA.push(newData);

    return res.status(STATUS_CODES.SUCCESS).json({
      success: true,
      insertedData: newData,
    });
  } catch (err) {
    return res.status(STATUS_CODES.SERVER_ERROR).json({
      success: false,
      message: err.message || ERROR_MSG.SERVER_ERROR,
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const modifiedStaticData = BOOKS_API_STATIC_DATA.filter(
      (book) => book.id === bookId
    );

    return res.status(STATUS_CODES.SUCCESS).json({
      success: true,
      data: modifiedStaticData,
    });
  } catch (err) {
    return res.status(STATUS_CODES.SERVER_ERROR).json({
      success: false,
      message: err.message || ERROR_MSG.SERVER_ERROR,
    });
  }
};
