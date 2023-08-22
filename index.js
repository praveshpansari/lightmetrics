import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import commentRoutes from "./routes/comment.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("common"));
app.use("/api/comment", commentRoutes);
app.use(errorHandler);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

export default app;
