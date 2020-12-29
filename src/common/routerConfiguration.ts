import express from 'express';

/**
 * Simplify the Configuration for the Router with a base class to use inheritance.  
 * We set the route and the name of the route configured. 
 */
export abstract class RouterConfiguration {
    expressApp: express.Application;
    name: string;

    constructor(expressApp: express.Application, name: string) {
        this.expressApp = expressApp;
        this.name = name;
        this.configureRoutes();
    }
    
    getName() {
        return this.name;
    }

    abstract configureRoutes(): express.Application;
}
