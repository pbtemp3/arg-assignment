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

exports.addBook = async (_, res) => {
  try {
    return res.status(STATUS_CODES.SUCCESS).json({
      success: true,
    });
  } catch (err) {
    return res.status(STATUS_CODES.SERVER_ERROR).json({
      success: false,
      message: err.message || ERROR_MSG.SERVER_ERROR,
    });
  }
};

exports.deleteBook = async (_, res) => {
  try {
    return res.status(STATUS_CODES.SUCCESS).json({
      success: true,
    });
  } catch (err) {
    return res.status(STATUS_CODES.SERVER_ERROR).json({
      success: false,
      message: err.message || ERROR_MSG.SERVER_ERROR,
    });
  }
};
