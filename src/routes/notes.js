const { Router } = require("express");

const {
  getNotes,
  createNote,
  deleteNote,
  editNote,
} = require("../controllers/notes");

const router = Router();

router.get("/", getNotes);
router.post("/", createNote);
router.delete("/:id", deleteNote);
router.put("/:id", editNote);

module.exports = router;
