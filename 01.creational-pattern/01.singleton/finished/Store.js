var Logger = require('./Logger');

// below is the first implementation
// var logger = new Logger().getInstance()

// below is the neater way in nodejs
var logger = Logger

class Store {

    constructor(name, inventory=[]) {
        this.name = name;
        this.inventory = inventory;
        logger.log(`New Store: ${name} has ${inventory.length} items in stock.`);
    }

}

module.exports = Store;
