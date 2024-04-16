// const asyncHandler = require("express-async-handler");
// const User = require("../schema/user-schema");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const registerUser = asyncHandler(async (req, res) => {
//   const { email, password, username } = req.body;
//   if (!email || !password || !username) {
//     res.status(400);
//     throw new Error("Please fill all the fields");
//   }

//   const userAvailble = await User.findOne({ email: email });
//   if (userAvailble) {
//     res.status(400);
//     throw new Error("Email already exists");
//   }
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const newUser = await User.create({
//     email: email,
//     password: hashedPassword,
//     username: username,
//   });
//   if (newUser) {
  
//     return res.status(201).json({
//       error: false,
//       message: "User registered successfully",
//       data: newUser
//     });
//   } else {
//     res.status(400);
//     throw new Error("Invalid userData");
//   }
// });

// const loginUser = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     res.status(400);
//     throw new Error("Please fill all the fields");
//   }
//   const existingUser = await User.findOne({ email: email });
//   if (!existingUser) {
//     res.status(400);
//     throw new Error("User not found");
//   } else if (
//     existingUser &&
//     (await bcrypt.compare(password, existingUser.password))
//   ) {
//     const token = jwt.sign(
//       {
//         id: existingUser.userId,
//         email: existingUser.email,
//         username: existingUser.username,
//       },
//       process.env.ACCESS_TOKEN_SECRET,
//       { expiresIn: "15m" }
//     );
//     return res.status(200).json({
//       error: false,
//       message: "User logged in successfully",
//       data: {
//         userId: existingUser.userId,
//         username: existingUser.username,
//         email: existingUser.email,
//         token: token,
//       },
//     });
//   } else {
//     res.status(400);
//     throw new Error("Invalid credentials");
//   }
// });

// const updateUserData = asyncHandler(async (req, res) => {
//   const { username, email } = req.body;
//   const id = req.params.id;
//   if (!id) {
//     res.status(400);
//     throw new Error("Please provider the id");
//   }

//   const updateuser = {
//     username,
//     email,
//   };
//   const result = await User.findOneAndUpdate({ _id: id }, updateuser, {
//     new: true,
//   });
//   if (!result) {
//     res.status(400);
//     throw new Error("User not found");
//   }
//   return result.status(200).json({
//     error: false,
//     message: "User updated successfully",
//     data: result,
//   });
// });

// const deleteUserData = asyncHandler(async (req, res) => {
//   const id = req.params.id;
//   const result = await User.findOneAndDelete({ _id: id });
//   if (!result) {
//     res.status(400);
//     throw new Error("User not found");
//   }
//   return res.status(200).json({
//     error: false,
//     message: "User deleted successfully",
//   });
// });

// const getUsers = asyncHandler(async (req, res) => {
//   const users = await User.find();
//   return res.json({
//     error: false,
//     message: "Users fetched successfully",
//     data: users,
//   });
// });

// const getCurrent = asyncHandler(async (req, res) => {
//   const token = await req.headers.authorization.split(" ")[1];
//   return res.json({
//     error: false,
//     message: "User fetched successfully",
//     token: token,
//   });
// });

// module.exports = {
//   registerUser,
//   loginUser,
//   updateUserData,
//   deleteUserData,
//   getUsers,
//   getCurrent,
// };
