import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

const generateToken = (res, userId) => {
    //generate token
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '5d'
    });

    //save to cookie
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV != 'development',
        sameSite: 'strict',
        maxAge: 5 * 24 * 60 * 60 * 1000 //5 days
    })


}

export default generateToken;