import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password : {type : String , unique : true},
  phone: {
    type: String,
    match: [/^[6-9]\d{9}$/, "Invalid Indian phone number"],
  },
  
},
{ timestamps: true }
);

export default mongoose.model("User", userSchema);
