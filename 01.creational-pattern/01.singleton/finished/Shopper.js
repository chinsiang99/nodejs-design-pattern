var Logger = require('./Logger');

// below is the first implementation
// var logger = new Logger().getInstance()

// below is the neater way in nodejs
var logger = Logger

class Shopper {

    constructor(name, money=0) {
        this.name = name;
        this.money = money;
        logger.log(`New Shopper: ${name} has ${money} in their account.`);
    }

}

module.exports = Shopper;
