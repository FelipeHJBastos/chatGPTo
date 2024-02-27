import { Router } from "../deps.ts";
import userRoutes from "./Routes/userRoutes.ts";

const router = new Router();

router.use("/user", userRoutes.routes());

export default router;