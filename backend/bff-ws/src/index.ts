import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";




const port = process.env.PORT || 3000;
const app: Express = express();

// middleware
app.use(bodyParser.json({ limit: "200mb" }));
app.use(cors());

const main = async () => {

  app.get("/", (req: Request, res: Response) => {
    res.send("hello")
  })

  
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
};

main();
