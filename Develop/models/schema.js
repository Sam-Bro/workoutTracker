var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    totalDuration: {
        type: Number,
        required: true
    },

    exercises: [{
        type: {
        type: String,
        trim: true,
        required: [true, "Required field"]
        },
        name: {
        type: String,
        trim: true,
        required: [true, "Required field"]
        },
        distance: {
        type: Number
        },
        duration: {
        type: Number,
        required: [true, "Required field"]
        },
        weight: {
        type: Number
        },
        sets: {
        type: Number
        },
        reps: {
        type: Number
        },
    }]
});

const workout = mongoose.model("workout", workoutSchema)

module.exports = workout;