import { Router } from "express";
import { users } from "../controllers/view.controllers.js";

const router = new Router()



router.get('/', users)

export default router