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

db.users = require("./user.model.js")(sequelize, Sequelize);
db.userroles = require("./userRole.model.js")(sequelize, Sequelize);
db.contacts = require("./contact.model.js")(sequelize, Sequelize);
db.companies = require("./company.model.js")(sequelize, Sequelize);
db.vehicles = require("./vehicle.model.js")(sequelize, Sequelize);
db.freighttypes = require("./freightType.model.js")(sequelize, Sequelize);
db.countries = require("./country.model.js")(sequelize, Sequelize);
db.states = require("./state.model.js")(sequelize, Sequelize);
db.legtypes = require("./legType.model.js")(sequelize, Sequelize);
db.freights = require("./freight.model.js")(sequelize, Sequelize);
db.shipments = require("./shipment.model.js")(sequelize, Sequelize);
db.shipmentlegs = require("./shipmentLeg.model.js")(sequelize, Sequelize);
db.tours = require("./tour.model.js")(sequelize, Sequelize);
db.items = require("./item.model.js")(sequelize, Sequelize);


// one shipment to many freights
db.shipments.hasMany(db.freights, { as: "freight" });
db.freights.belongsTo(db.shipments, {as: "shipment" });

// one freight to many items
db.freights.hasMany(db.items, { as: "item" });
db.items.belongsTo(db.freights, {as: "freight" });

// one freightType to many freights
db.freighttypes.hasMany(db.freights, { as: "freight" });
db.freights.belongsTo(db.freighttypes, {as: "freighttype" });

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


module.exports = db;
