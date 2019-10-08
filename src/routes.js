const router = require("express").Router();

const SessionController = require("./app/controllers/SessionController");

router.post("/sessions", SessionController.store);

router.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

module.exports = router;
