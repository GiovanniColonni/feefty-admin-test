import { Mongoose } from "mongoose";
// Define the Status enum as an array of valid values
const Status = ['active', 'inactive'];

// Define the Permission enum as an array of valid values
const Permission = ['create_user', 'read_user', 'update_user', 'delete_user'];

// Create a Mongoose schema for the User model
const userSchema = new mongoose.Schema({
  id: { type: String, default: mongoose.Types.ObjectId },
  email: { type: String, unique: true },
  firstName: String,
  lastName: String,
  status: { type: String, enum: Status, default: 'inactive' },
  role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Create a Mongoose schema for the Role model
const roleSchema = new mongoose.Schema({
  id: { type: String, default: mongoose.Types.ObjectId },
  slug: { type: String, unique: true },
  label: String,
  permissions: [{ type: String, enum: Permission }],
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

// Create and export the User and Role models
const User = mongoose.model('User', userSchema);
const Role = mongoose.model('Role', roleSchema);

module.exports = { User, Role };
