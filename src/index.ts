import express from "express";
import getusers from "./get_users";


const port = 5000;

const app = express();

interface user {
  email: string;
  name: string;
  post?: [];
}

app.get("/getuser", async (req, res): Promise<any>=> {
  try {
    const users = await getusers();
    return res.status(200).send(users);
  } catch (e) {
    console.log(e);
    return res.status(404).json({
      error: e,
    });
  }
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
