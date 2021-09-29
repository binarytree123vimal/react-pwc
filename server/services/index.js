import axios from 'axios';

export const getUserData = async () => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        return data;
    } catch (error) {
        console.error(error);
    }
}