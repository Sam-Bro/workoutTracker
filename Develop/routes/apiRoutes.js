module.exports = function(app) {
    let db = require("../models");

    // create a workout
    app.post("/api/workouts/range", (req, res) => {
        db.workout.find({})
        .then(newWorkout => {
            console.log(newWorkout);
            res.json(newWorkout);
        })
        .catch(err => {
            res.json(err);
        })
    })
}


