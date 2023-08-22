import { ValidationError } from "sequelize";

export const errorHandler = (error, req, res, next) => {
  console.error("Error:", error);

  if (error instanceof ValidationError) {
    res.status(400);
    res.json({
      name: "ValidationError",
      message: error.errors.map((err) => err.message),
    });
  } else {
    res.status(res.statusCode ?? 500);
    res.json({
      name: error.name,
      message: error.message,
    });
  }
};
