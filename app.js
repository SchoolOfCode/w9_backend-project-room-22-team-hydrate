import express from "express";
import cors from "cors";
import resourcesRoute from './routes/resources.js';
const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());
app.use(cors());

// test route for postman testing
app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "Test route up and running!",
  });
});

// This shows when we run the backend it appears in the terminal telling us "server is running on port 3000" 
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/resources', resourcesRoute);