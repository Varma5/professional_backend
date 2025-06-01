import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config();

dotenv.config({ path: "./env" });

connectDB().then(
    () => {
        console.log("Database connected successfully");
        // Start your server or perform other operations here
        import("./app.js").then((app) => {
        const PORT = process.env.PORT || 3000;
        app.default.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
        });
    }   
).catch((error) => {
  console.error("Database connection error:", error);
  process.exit(1); // Exit the process with failure
});



