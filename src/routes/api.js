const { Router } = require("express");

const {
  getNotes,
  createNote,
  deleteNote,
  getNote,
  editNote,
} = require("../controllers/notes");

const router = Router();

router.get("/notes", getNotes);
router.post("/notes", createNote);
router.delete("/notes/:id", deleteNote);
router.get("/notes/:id", getNote);
router.put("/notes/:id", editNote);

module.exports = router;
