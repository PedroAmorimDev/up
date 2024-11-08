import express from "express";
import cors from "cors";
import conn from "./config/conn.js";
import authRouter from "./router/authRouter.js"
import dotenv from "dotenv"
import userRouter from "./router/userRouter.js";

const port = 3000;
const app = express();

dotenv.config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Não precisa está autenticado para navegar nessa rota
app.use("/", userRouter)

// Precisa estar autenticado
app.use("/auth", authRouter)


conn
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Disponível em http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));
