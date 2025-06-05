const authmodel = require("../Model/auth");
const {
  hashpassword,
  comparePassword,
  generateId,
  encryptjwt,
  decryptjwt,
} = require("../lib/hash");

const login = async (req, res) => {
  const { email, password } = req.body;
  const DBdata = await authmodel.findOne({ email });

  if (!DBdata || !(await comparePassword(password, DBdata.password))) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const playload = {
    id:DBdata.id,
    name: DBdata.name,
    email: DBdata.email,
  };
  const token = await encryptjwt(playload);
  res.cookie("token", token);

  return res.status(200).json({ message: "Login successfully" });
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const hashpass = await hashpassword(password);

  try {
    const newUser = new authmodel({
      _id: generateId(),
      name,
      email,
      password: hashpass,
    });
    await newUser.save();
    return res.status(200).json({ message: "Sucessfully Created" });
  } catch (error) {
    console.error("Registration Error:", error);
    return res
      .status(500)
      .json({ message: "Registration failed", error: error.message });
  }
};

module.exports = { register, login };
