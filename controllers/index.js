const router = require("express").Router();
const homeRoutes = require("./home-routes.js");

const apiRoutes = require('./api');
const eventRoutes = require('./events-routes/html-event-routes');
const dashRoutes = require("./dash-routes");

router.use('/api', apiRoutes);
router.use('/meet', eventRoutes);
router.use('/', homeRoutes);
router.use('/dash',dashRoutes)

const storeRoutes = require("./store-routes/html-store-routes");
const questionRoutes = require("./question-routes/html-queston-routes");

router.use("/api", apiRoutes);
router.use("/meet", eventRoutes);
router.use("/askDevs-dashboard", questionRoutes);
router.use("/", homeRoutes);
router.use("/shopping", storeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
