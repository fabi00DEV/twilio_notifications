import TwilioController from "./module/Twilio/TwilioController";
import express from "express";

export default class ModuleRoutes {
  static async init(app) {
    const router = express.Router();
    
    new TwilioController(app, router, "/twilio");
  }
}
