const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// DATA OBJECTS
//setups
db.users = require("./user.model.js")(sequelize, Sequelize);
db.userroles = require("./userRole.model.js")(sequelize, Sequelize);
db.contacts = require("./contact.model.js")(sequelize, Sequelize);
db.companies = require("./company.model.js")(sequelize, Sequelize);

//touring
db.tours = require("./tour.model.js")(sequelize, Sequelize);
db.vehicles = require("./vehicle.model.js")(sequelize, Sequelize);
db.vehicletypes = require("./vehicleType.model.js")(sequelize, Sequelize);


//shipments
db.quotes = require("./quote.model.js")(sequelize, Sequelize);
db.shipments = require("./shipment.model.js")(sequelize, Sequelize);
db.shipmentlegs = require("./shipmentLeg.model.js")(sequelize, Sequelize);

db.items = require("./item.model.js")(sequelize, Sequelize);
db.flightcases = require("./flightCase.model.js")(sequelize, Sequelize);
db.pallets = require("./pallet.model.js")(sequelize, Sequelize);
db.containers = require("./container.model.js")(sequelize, Sequelize);

//lookups
db.countries = require("./country.model.js")(sequelize, Sequelize);
db.states = require("./state.model.js")(sequelize, Sequelize);
db.legtypes = require("./legType.model.js")(sequelize, Sequelize);
db.freighttypes = require("./freightType.model.js")(sequelize, Sequelize);


// RELATIONSHIPS

// one company to many contacts
db.companies.hasMany(db.contacts, { as: "contact" });
db.contacts.belongsTo(db.companies, {as: "company"});

// one userrole to many users
db.userroles.hasMany(db.users, { as: "user" });
db.users.belongsTo(db.userroles, {as: "userrole"});

// one state to many contacts
db.states.hasMany(db.contacts, { as: "contact" })
db.contacts.belongsTo(db.states, { as: "state" })

// one state to many companies
db.states.hasMany(db.companies, { as: "company" })
db.companies.belongsTo(db.states, { as: "state" })

// one country to many contacts
db.countries.hasMany(db.contacts, { as: "contact" })
db.contacts.belongsTo(db.countries, { as: "country" })

// one country to many companies
db.countries.hasMany(db.companies, { as: "company" })
db.companies.belongsTo(db.countries, { as: "country" })

// one flightcase to many items
db.flightcases.hasMany(db.items, { as: "item" })
db.items.belongsTo(db.flightcases, { as: "flightcase" })

// one pallet to many flightcases
db.pallets.hasMany(db.flightcases, { as: "flightcase" })
db.flightcases.belongsTo(db.pallets, { as: "pallet" })

// one container to many pallets
db.containers.hasMany(db.pallets, { as: "pallet" })
db.pallets.belongsTo(db.containers, { as: "container" })

// one shipment to many containers
db.shipments.hasMany(db.containers, { as: "container" })
db.containers.belongsTo(db.shipments, { as: "shipment" })

//one quote to many shipments
db.quotes.hasMany(db.shipments, { as: "shipment" })
db.shipments.belongsTo(db.quotes, { as: "quote" })

//one shipment to many shipmentLegs
db.quotes.hasMany(db.shipmentlegs, { as: "shipmentLeg" })
db.shipments.belongsTo(db.shipmentlegs, { as: "shipment" })


module.exports = db;
