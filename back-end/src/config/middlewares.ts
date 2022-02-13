import { app } from '../index'

const bodyParser = require('body-parser')();

export = function():void {
    app.use(bodyParser.json());
}



