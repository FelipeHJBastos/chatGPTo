import { oak } from "../deps.ts";
import userRoutes from "./Routes/userRoutes.ts";
import firebaseRoutes from "./firebase.ts";
import VerifyAuthorization from "./auth.ts";

const router = new oak.Router();

const logMiddleware: oak.Middleware = (ctx, next) => {
    console.log(`Received ${ctx.request.url} at ${new Date()}`);
    next();
};
router.use(logMiddleware);

router.use("/user", userRoutes.routes());
router.use("/firebase", firebaseRoutes.routes());

export default router;