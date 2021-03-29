const chai = require('chai')
const expect = chai.expect
import {connection} from "../models/db.js";
const db = require('../models/db.js')

describe("connected connect()", () => {

    it("should connect to db", ()=> {
        console.log(connection)
    })
})
