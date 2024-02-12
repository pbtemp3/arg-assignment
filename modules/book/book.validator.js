import { STATUS_CODES } from "../../utils/constants.util";

const failedValidation = {
  validation: false,
  msg: "",
};

exports.addBookValidator = (req, res, next) => {
  const { name, description, numberOfPages, author, publisher } = req.body;

  if (!name || !typeof name === "string") {
    failedValidation.msg = "Validation fail for name";
    return res.status(STATUS_CODES.BAD_REQUEST).send(failedValidation);
  }
  if (!description || !typeof description === "string") {
    failedValidation.msg = "Validation fail for description";
    return res.status(STATUS_CODES.BAD_REQUEST).send(failedValidation);
  }
  if (!numberOfPages || !typeof numberOfPages === "number") {
    failedValidation.msg = "Validation fail for numberOfPages";
    return res.status(STATUS_CODES.BAD_REQUEST).send(failedValidation);
  }
  if (!author || !typeof author === "string") {
    failedValidation.msg = "Validation fail for author";
    return res.status(STATUS_CODES.BAD_REQUEST).send(failedValidation);
  }
  if (!publisher || !typeof publisher === "string") {
    failedValidation.msg = "Validation fail for publisher";
    return res.status(STATUS_CODES.BAD_REQUEST).send(failedValidation);
  }

  return next(req, res, next);
};

exports.deleteBookValidator = (req, res) => {
  const { bookId } = req.params;

  if (!bookId) {
    failedValidation.msg = "Validation fail for bookId";
    return res.status(STATUS_CODES.BAD_REQUEST).send(failedValidation);
  }

  return next(req, res, next);
};
