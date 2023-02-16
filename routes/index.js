const router = require("express").Router();
const betaRoutes = require("./betaRoutes");

router.use("/api", betaRoutes);

router.use((req, res) => res.send("Wrong route!"));

module.exports = router;
