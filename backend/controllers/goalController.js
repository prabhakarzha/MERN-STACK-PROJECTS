const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModels");

// @desc Get goals
// @route Get/api/goals
//@access private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

// @desc set goals
// @route post/api/goals
//@access private
const setGoals = asyncHandler(async (req, res) => {
  // if (!req.body.name) {
  //   res.status(400);
  //   throw new Error("Please add name field");
  // }

  const goal = await Goal.create({
    name: req.body.name,
  });

  res.status(200).json(goal);
  console.log(goal);
});

// @desc update goals
// @route Get/api/goals/:id
//@access private
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not Found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

// @desc delte goals
// @route Get/api/goals/:id
//@access private
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not Found");
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
