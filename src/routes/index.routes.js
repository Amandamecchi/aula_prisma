import express from "express";

// Importar todas as rotas
import movieRouter from "./movies.routes.js";

const router = express.Router();

// Rotas públicas
router.use("/movies", movieRouter);

export default router;