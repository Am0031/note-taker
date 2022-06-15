const { Router } = require("express");

const {
  getNotes,
  createNote,
  deleteNote,
  getNote,
  editNote,
} = require("../controllers/notes");

const router = Router();

router.get("/", getNotes);
router.post("/", createNote);
router.delete("/:id", deleteNote);
router.get("/:id", getNote);
router.put("/:id", editNote);

module.exports = router;
