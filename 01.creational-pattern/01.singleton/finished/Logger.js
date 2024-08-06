class Logger {

    constructor() {
        this.logs = [];
    }

    get count() {
        return this.logs.length;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp} - ${message}`);
    }

}

class Singleton {

    constructor() {
        if(!Singleton.instance){
            Singleton.instance = new Logger()
        }
    }

    getInstance(){
        return Singleton.instance
    }
}

// there is actually two ways of implementing it
// below is one of the way
// module.exports = Singleton

// below is a neater way in nodejs, wich is exporting the instance from the nodejs module
// the idea here is that when we run this file, it will run once, create the new instance of the logger and save it in the cache
// nodejs will automatically handle exporting the same instance of the logger to every other module that wants to consume it
module.exports = new Logger();
