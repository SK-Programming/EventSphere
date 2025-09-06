const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: [true, "Please add a username"] },
    email: { type: String, required: [true, "Please add an email"], unique: true },
    password: { type: String }, // optional for social logins
    provider: {
      type: String,
      enum: ["local", "google", "facebook"],
      default: "local",
    },
  },
  { timestamps: true }
);

// Hash password only if it's a local signup
userSchema.pre("save", async function (next) {
  if (!this.isModified("password") || this.provider !== "local") {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Check password
userSchema.methods.matchPassword = async function (enteredPassword) {
  if (!this.password) return false;
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
