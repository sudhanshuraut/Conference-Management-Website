const express = require('express');
const router = express.Router();
const passport = require('passport');
const usersController = require('../controllers/userControllers');
const homeController = require('../controllers/homeController');


router.get('/login',usersController.login);
router.get('/signup',usersController.signup);
router.post('/create',usersController.create);
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/signup'},
),usersController.createSession);
router.get('/conferences',passport.checkAuthentication,usersController.conferences);
router.get('/home',homeController.home);
router.get('/destroy-session',passport.checkAuthentication,usersController.destroySession);
router.get('/profile',passport.checkAuthentication,usersController.profile);
router.get('/settings',passport.checkAuthentication,usersController.settings);
router.post('/updateLoginInfo',passport.checkAuthentication,usersController.updateLoginInfo);
router.post('/updateAccountInfo',passport.checkAuthentication,usersController.updateAccountInfo);
router.use('/conferences',require('./conferences'));

module.exports = router;