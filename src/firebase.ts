import { Router } from "../deps.ts";

 const firebaseRoutes = new Router();

 firebaseRoutes.get("/get", async (context) => {
    try {
        const response = await fetch("https://deno-server-4ebc2-default-rtdb.firebaseio.com/", {
          method: "GET",
        });
        context.response.body = await response.json();
    } catch (error) {
        context.response.status = 500;
        context.response.body = error;
        console.log(error);
    }
});


const AutorizaFirebase = async (context) => {
    try {
        const response = await fetch("https://deno-server-4ebc2-default-rtdb.firebaseio.com/", {
          method: "POST",
        });
        const data = await response.json();
        context.response.body = await response.json();
    } catch (error) {
        context.response.status = 500;
        context.response.body = error;
        console.log(error);
    }
}
   

export default firebaseRoutes; {AutorizaFirebase};

