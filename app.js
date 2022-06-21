import express from "express";
import resourcesRoute from './routes/resources.js';
const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());
// test route
app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "Test route up and running!",
  });
});

app.use('/resources', resourcesRoute);


app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

