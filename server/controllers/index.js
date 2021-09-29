import * as userService from '../services/index.js';

export const getData = async (req, res) => {
    try {
        const response = await userService.getUserData();
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}