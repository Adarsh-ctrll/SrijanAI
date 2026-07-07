
import dns from "node:dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

import mongoose from "mongoose";
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB Connected");
    } catch (error) {
        console.error("Full Error:", error);
        console.error("Message:", error.message);
    }
};

export default connectDb;