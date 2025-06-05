const url =
  "mongodb+srv://mahesh:Amahesh224@mahesh-o.xp3sntn.mongodb.net/authDB?retryWrites=true&w=majority&appName=Mahesh-O";


  const mongoose = require("mongoose");
  
  const ConnectDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

module.exports = { ConnectDB };