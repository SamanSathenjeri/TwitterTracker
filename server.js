require("dotenv").config();
const express = require("express")

const app = express()

//middleware
//checks if any body/data is sent to server
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//uses whatever handler workouts returns on the app
//only routes to app when we fire a request to that particular path
app.use("/api/workouts", workoutRoutes);

app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT);
});

