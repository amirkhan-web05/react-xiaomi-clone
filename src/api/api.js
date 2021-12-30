import axios from "axios";

export const getData = async () => {
    try {
        return await Promise.all([
            await axios.get('https://617d57bb1eadc50017136486.mockapi.io/phones'),
            await axios.get('https://617d57bb1eadc50017136486.mockapi.io/mitv'),
            await axios.get('https://617d57bb1eadc50017136486.mockapi.io/smart'),
            await axios.get('https://617d57bb1eadc50017136486.mockapi.io/cart'),
        ]);
    } catch (e) {
        console.log('Error:', e);
    }
};

export const getCartDevices = async (obj) => {
    try {
        const { data } = await axios.post('https://617d57bb1eadc50017136486.mockapi.io/cart',obj);
        return data
    } catch (e) {
        alert(e);
    }
};

export const getRemove = async (id) => {
    try {
        await axios.delete(
            `https://617d57bb1eadc50017136486.mockapi.io/cart/${id}`
        );
    } catch (e) {
        alert(e);
    }
};