//db
const db = require('../models')
module.exports = (app) => {

    //////Workout Routes//////
    //get all
    app.get("/api/workouts", (req, res) => {
        console.log("message");
        db.Workout.find({})
            .sort({ date: -1 })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
    //add excerise, set id, push to model, set true
    app.put("/api/workouts/:id", (req, res) => {
        const filter = { _id: req.params.id };
        const update = { $push: { exercises: req.body } };
        db.Workout.findOneAndUpdate(filter, update)
            .then(dbWorkout => {
                console.log(dbWorkout);
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            })
    });

    app.post("/api/workouts", ({ body }, res) =>
        db.Workout.create(body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            }));


    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .sort({ date: -1 })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    })

}
