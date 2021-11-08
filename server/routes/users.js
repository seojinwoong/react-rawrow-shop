const express = require("express");
const router = express.Router();
const { User } = require("../models/User");

const { auth } = require("../middleware/auth");
const { response } = require("express");

//=================================
//             User
//=================================

router.get("/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    userId: req.user.userId,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
    cart: req.user.cart,
    history: req.user.history
  });
});

router.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

router.post("/login", (req, res) => {
  User.findOne({ userId: req.body.userId }, (err, user) => {
    if (!user)
      return res.json({
        loginSuccess: false,
        message: "해당 아이디는 존재하지 않습니다.",
      });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("w_authExp", user.tokenExp);
        res.cookie("w_auth", user.token).status(200).json({
          loginSuccess: true,
          userCode: user._id,
        });
      });
    });
  });
});

router.get("/logout", auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { token: "", tokenExp: "" },
    (err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true,
      });
    }
  );
});

router.post("/checkId", (req, res) => {
  User.findOne({ userId: req.body.id }, (err, user) => {
    if (err) return res.status(400).json({ success: false, err });
    if (user) return res.status(200).json({ success: true, result: 'impossible' }) 
    else return res.status(200).json({ success: true, result: 'possible' }) 
  })
});

// router.post("/changePwd", (req, res) => {
//   User.findOne({ _id: req.body.userKey }, (err, user) => {
//     if (err) return res.json({ success: false, err })
//     let userCopy = user;
//     User.deleteOne(
//       {_id: req.body.userKey},
//       { new : true },
//       (err) => {
//         if (err) return res.json({ success: false, err })
//         let newData = {
//           userId: userCopy.userId,
//           password: userCopy.password,
//           name: userCopy.name,
//           address: userCopy.address,
//           phone: userCopy.phone,
//           email: userCopy.email,
//           gender: userCopy.gender
//         }
//         const newUser = new User(newData);

//         newUser.save((err, doc) => {
//           if (err) return res.json({ success: false, err });
//           return res.status(200).json({
//             success: true,
//           });
//         });
//       }
//     )
//   })
// });

router.post("/findMemberIndo", (req, res) => {
  let flag = req.body.flag;
  let info = {};
  if (flag == 1) info = { email: req.body.inputEmail, name: req.body.inputName }
  else if (flag == 2) info = { name: req.body.inputName, phone: req.body.inputPhone }
  else if (flag == 3) info = { userId: req.body.inputId, email: req.body.inputEmail, name: req.body.inputName }
  else if (flag == 4) info = { userId: req.body.inputId, phone: req.body.inputPhone, name: req.body.inputName }
  
  User.findOne(info, (err, user) => {
    if (err) return res.status(400).json({ success: false, err });
    if (!user) return res.json({ success: true, findSuccess: false, msg: '일치하는 계정 정보가 없습니다.' })
    return res.status(200).json({ success: true, findSuccess: true, user, flag })
  })
});

module.exports = router;
