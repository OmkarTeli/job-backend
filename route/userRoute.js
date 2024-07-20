const express = require("express");

const {
   userRegisterController,
   userLoginController,
   userUpdateController,
   userDeleteController,
   testController,
} = require("../controllers/userController");
const requireSignIn = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/user", (req, res) => {});
router.post("/user-register", userRegisterController);
router.post("/user-login", userLoginController);
router.put("/user/:id", userUpdateController);
router.delete("/user/:id", userDeleteController);
router.get("/protected-route", requireSignIn, testController);
module.exports = router;
