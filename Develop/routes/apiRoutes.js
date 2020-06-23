module.exports = function (app) {
  let db = require("../models");

  //retrieve workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((exerciseDB) => {
        console.log(exerciseDB);
        res.json(exerciseDB);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //add exercises
  app.put("/api/workouts/:id", (req, res) => {
    console.log(req.body + " id: " + req.params.id);
    db.Workout.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: req.body } },
      { new: true }
    )
      .then((exerciseDB) => {
        let fullDuration = 0;
        exerciseDB.exercises.forEach(
          (exercise) => (fullDuration += exercise.duration)
        );
        db.Workout.findOneAndUpdate(
          { _id: req.params.id },
          { $set: { totalDuration: fullDuration } },
          { new: true }
        ).then((exerciseDB) => {
          console.log(exerciseDB);
          res.json(exerciseDB);
        });
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // create a workout
  app.post("/api/workouts/range", (req, res) => {
    db.Workout.create({ req })
      .then((exerciseDB) => {
        console.log(exerciseDB);
        res.json(exerciseDB);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // retrieve workout data
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((exerciseDB) => {
        console.log(exerciseDB);
        res.json(exerciseDB);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
