import { oak } from "../../deps.ts";
import { ReturnUser } from "../Controllers/userController.ts";

const userRoutes = new oak.Router();

userRoutes.get("/get", (context) => {
    context.response.body = ReturnUser();
});

userRoutes.post("/post", (context) => {
  //  context.response.body = CreateUser(context);
});

userRoutes.put("/put", (context) => {
   // context.response.body = UpdateUser(context);
})

userRoutes.delete("/delete", (context) => {
   // context.response.body = DeleteUser(context);
})
export default userRoutes;