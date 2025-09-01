const express = require("express");
const app = express();

app.get("/health", (_req, res) => res.json({ status: "ok" }));
app.get("/healthCheck2", (_req, res) =>
  res.json({ status: "ok", version: "2.0" })
);
app.get("/", (_req, res) => res.send("Hello CI 👋"));

module.exports = app;
