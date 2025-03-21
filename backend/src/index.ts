import express from "express";
import cors from "cors";
import get_users from "./get_users";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors())

app.get("/getuser", async (req, res): Promise<any> => {
  try {
    const users = await get_users();
    return res.status(200).send(users);
  } catch (e) {
    console.log(e);
    return res.status(404).json({
      error: e,
    });
  }
});

app.listen(port,()=>{ 
	console.log(`Server started on ${port}`)
})



