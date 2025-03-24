const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Dummy users array for demonstration (replace with database in production)
const users = [
  {
    id: 1,
    email: "testuser@gmail.com",
    password: "$2a$10$7qVvDlK1kPntX6/m0xOZ1eEjL96G53kbOHVzYYCz92kTg4W8rT67u", // bcrypt hash for 'password123'
  },
];

// Handle login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Find user by username
  const user = users.find((u) => u.email === email);
  if (!user) {
    console.log("Invalid");
    return res.status(400).json({ message: "Invalid credentials" });
  }
  console.log(user);
  // Check if the password matches
  //const isMatch = await bcrypt.compare(password, user.password);
  // if (!isMatch) {
  //   return res.status(400).json({ message: "Invalid credentials" });
  // }

  // Create JWT token
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    },
  );

  res.json({ message: "Login successful", token });
};

// Get user profile (protected route)
exports.getProfile = (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
  });
};
