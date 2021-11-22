import app from "./app.js";

const PORT = 5000;

const handleListening = () => {
  console.log("Server in on !");
};

app.listen(PORT, handleListening);
