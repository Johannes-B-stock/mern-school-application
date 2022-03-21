const express = require("express");
const router = express.Router();
const {
  getSchools,
  setSchool,
  updateSchool,
  deleteSchool,
} = require("../controllers/schoolController");

router.route("/").get(getSchools).post(setSchool);
router.route("/:id").delete(deleteSchool).put(updateSchool);

module.exports = router;
