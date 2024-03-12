import { Router } from "../deps.ts";
import userRoutes from "./Routes/userRoutes.ts";
import firebaseRoutes from "./firebase.ts";

const router = new Router();

router.use("/user", userRoutes.routes());
router.use("/firebase", firebaseRoutes.routes());

export default router;