import express from "express";
import mongoose from "mongoose";
import graphlHTTP from "express-graphql";
import dotenv from "dotenv";

import schema from "./src/schema";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3002;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/gql_db", {
  useNewUrlParser: true,
  useCreateIndex: true
});

app.get("/", (req, res) => {
  res.json({
    msn: "GraphQL"
  });
});

app.use(
  "/graphql",
  graphlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => console.log(`[SERVER] running GraphQL in PORT ${PORT}`));
