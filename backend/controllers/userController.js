import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// Auth user and set token
// route: POST/api/users/auth
// access: Public


const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Auth user' })
});


// Register a new user 
// route: POST/api/users
// access: Public


const registerUser = asyncHandler(async (req, res) => {
    //get info from request
    const {userName, email, password} = req.body;
    //check if exists
    const userExists = await User.findOne({email: email});

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    };

    //create new user if email not exists
    const newUser = await User.create({
        userName,
        email,
        password
    });

    if (newUser) {
        res.status(201).json({
            _id: newUser._id,
            userName: newUser.name,
            email: newUser.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    };

});


// Logout user 
// route: POST/api/users/logout
// access: Public


const logoutUser = asyncHandler(async (req, res) => {

    res.status(200).json({ message: 'Logout user' })
});


// Get user profile
// route: GET/api/users/profile
// access: Private


const getUserProfile = asyncHandler(async (req, res) => {

    res.status(200).json({ message: 'Get User profile' })
});

// Update user profile
// route: PUT/api/users/profile
// access: Private


const updateUserProfile = asyncHandler(async (req, res) => {

    res.status(200).json({ message: 'Update User profile' })
});




export {
    authUser, 
    registerUser,
    logoutUser, 
    updateUserProfile, 
    getUserProfile
};