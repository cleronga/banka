import express from "express";
import usercontroller from "../controller/usercontroller";


const router = express.Router();

router.get("/api/v1/users", usercontroller.getUser);
router.get("/api/v1/login", usercontroller.getLog);
router.post("/api/v1/auth/signup", usercontroller.createUser);
router.post("/api/v1/auth/login", usercontroller.login);
router.delete("/api/v1/auth/logout/:id", usercontroller.signout);
router.get("/api/v1/users/:id", usercontroller.getOneUser);
router.put("/api/v1/users/:id", usercontroller.updateUser);
router.delete("/api/v1/users/:id", usercontroller.deleteUser);

export default router;