import { type Express } from "express"
import { getAllStudents, getStudentsById,  } from "./lib/db/getter.ts"
import bodyParser from "body-parser"
import { addStudentById } from "./lib/db/setter.ts";
import { authenticate } from "./lib/auth/index.ts";
import cookieParser from "cookie-parser";
import { authorize } from "./lib/auth/middleware.ts";
import multer from "multer";

export function configRoutes(app: Express) {

  //getters


  app.get("/students", async (_, res) => {
    return res.json(await getAllStudents());
  });
  app.get("/students/:id", async (req, res) => {
    const id: number = Number(req.params.id);
    return res.json(await getStudentsById(id));
  });

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());

  const upload = multer()
  app.post("/auth", upload.none(), async (req, res) => {

    const { username, password }: {username: string, password: string} = req.body;

    if (!username || !password) {
      return res.status(400).send("username or password not filled. ");
    }

    try {
      const token = await authenticate(username, password);
      res.cookie("inscriberCookie", `Bearer ${token}`, {
        httpOnly: true,
      })
    } catch (e) {
      res.status(400).send("You are not the Master!");
      return;
    }

    res.status(200).send("You are good to go!");

  });

  app.use(authorize);

  app.post("/students/:id", async (req, res) => {
    const id = Number(req.params.id);
    try {
      //dont even try to return anything from this because the frontend could just check it yaknow
      await addStudentById(id);
      return res.sendStatus(200);

    } catch (e) {
      return res.sendStatus(500);

    }

  });
  //this is for checking if frontend user is master
  app.get("/master/ping", async (_, res) => {
    res.sendStatus(200);
  })


}
