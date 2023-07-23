const express = require("express");
const {
  loginController, 
  registerController,
  authController,
  applyDoctorController,
  seenAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

router.post("/apply-doctor", authMiddleware, applyDoctorController);

router.post("/seen-all-notification", authMiddleware, seenAllNotificationController);

router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

router.post("/book-appointment", authMiddleware, bookAppointmentController)
module.exports = router;
