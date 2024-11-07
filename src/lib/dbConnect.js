import mongoose from "mongoose";

const dbConnect = async () => {
  if(mongoose.connection.readyState >= 1) return
  return mongoose.connect(process.env.DB_STRING)
}

export default dbConnect;