const asyncHandler = require("express-async-handler");
const schoolModel = require("../models/schoolModel");

const School = require("../models/schoolModel");

// @desc    Get schools
// @route   GET api/schools
// @access  Public
const getSchools = asyncHandler(async (req, res) => {
  const schools = await School.find();
  res.status(200).json(schools);
});

// @desc    Get my schools
// @route   GET api/schools/my
// @access  Private
const mySchools = asyncHandler(async (req, res) => {
  const schools = await School.find({ user: req.user.id });
  res.status(200).json(schools);
});

// @desc    Set school
// @route   POST api/schools
// @access  Private
const setSchool = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add a name");
  }
  const school = await School.create({
    name: req.body.name,
    start: req.body.start,
    end: req.body.end,
  });
  res.status(200).json(school);
});

// @desc    Update school
// @route   PUT api/schools/:id
// @access  Private
const updateSchool = asyncHandler(async (req, res) => {
  const school = await School.findById(req.params.id);
  if (!school) {
    res.status(400);
    throw new Error("School not found");
  }

  const updatedSchool = await School.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedSchool);
});

// @desc    Delete schools
// @route   DELETE api/schools/:id
// @access  Private
const deleteSchool = asyncHandler(async (req, res) => {
  const school = await School.findByIdAndDelete(req.params.id);
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getSchools,
  setSchool,
  updateSchool,
  deleteSchool,
};
