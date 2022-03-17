const asyncHandler = require("express-async-handler");

// @desc Get goals
// @route Get/api/goals
//@access private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get goals" });
});

// @desc set goals
// @route post/api/goals
//@access private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }

  res.status(200).json({ message: "set goals" });
});

// @desc update goals
// @route Get/api/goals/:id
//@access private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "update goals" });
});

// @desc delte goals
// @route Get/api/goals/:id
//@access private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "delte goals" });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
