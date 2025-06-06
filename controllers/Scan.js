const scanqr = async (req, res) => {
  const data = req.data;
  console.log(data);
  res.json({ Message: "ok" });
};

module.exports = { scanqr };
