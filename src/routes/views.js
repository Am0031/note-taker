const { Router } = require("express");

const {
  renderStartPage,
  renderNotesPage,
  renderErrorPage,
} = require("../controllers/views");

const router = Router();

router.get("/", renderStartPage);
router.get("/notes", renderNotesPage);
router.get("*", renderErrorPage);

module.exports = router;
