import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import {initializepassport} from "./config/passport.js";


import studentRoute from "./routes/student.routes.js";
import adminRoute from "./routes/admin.routes.js";
import companyRoute from "./routes/company.routes.js";
import distributionRoute from "./routes/distribution.routes.js";
import gradeRoute from "./routes/grade.routes.js";
import reportRoute from "./routes/report.routes.js";
import mentorRoute from "./routes/mentor.routes.js"

const port = process.env.PORT || 4000;
const app = express();
dotenv.config();

const connection = async () => {
    try {
      await mongoose.connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'InterConnect', 
      });
      console.log("Connected to database successfully!");
    } catch (error) {
      console.log(error);
    }
};
app.use(session({
  secret: "secret",
  resave: true ,
  saveUninitialized: true ,
}))

initializepassport(passport)
app.use(passport.initialize());

app.use(passport.session()) ;

app.use(express.json()); 
app.use(cookieParser());
app.use(cors({origin:"http://localhost:3000", credentials: true}));


app.use("/InterConnect/student", studentRoute);
app.use("/InterConnect/admin", adminRoute);
app.use("/InterConnect/company", companyRoute);
app.use("/InterConnect/distribution", distributionRoute);
app.use("/InterConnect/grade", gradeRoute);
app.use("/InterConnect/report", reportRoute);
app.use("/InterConnect/mentor", mentorRoute);


app.use((err, req, res, next)=>{
    console.error("Error:", err);
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
  
    return res.status(errorStatus).send(errorMessage);
});


app.listen(port, function(){
    connection();
    console.log(`Server is running on Port ${port}`);
});