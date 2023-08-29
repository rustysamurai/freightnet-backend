const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to frieghtnet." });
});

const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

require("./app/routes/company.routes")(app);
require("./app/routes/contact.routes")(app);
require("./app/routes/container.routes")(app);
require("./app/routes/country.routes")(app);
require("./app/routes/flightCase.routes")(app);
require("./app/routes/freightMethod.routes")(app);
require("./app/routes/freightType.routes")(app);
require("./app/routes/item.routes")(app);
require("./app/routes/legType.routes")(app);
require("./app/routes/pallet.routes")(app);
require("./app/routes/quote.routes")(app);
require("./app/routes/shipment.routes")(app);
require("./app/routes/shipmentLeg.routes")(app);
require("./app/routes/state.routes")(app);
require("./app/routes/tour.routes")(app);
require("./app/routes/vehicle.routes")(app);
require("./app/routes/vehicleType.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
