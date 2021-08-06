import Axios from 'axios';
import citiesStreets from "../components/main/search/dropdowns/streetsGraph"
import cities from "../components/main/search/dropdowns/citiesArray"
import axios from 'axios';

const developmentDB = process.env.REACT_APP_DB;

export const loginToDB = async (email, password) => {
    try {
        const res = await Axios.post(developmentDB + "/login-user", { email, password });
        return res;
    } catch (err) {
        return err.response.data.message;
    }
};
export const registerToDB = async (email, password) => {

    try {
        const res = await Axios.post(developmentDB + "/create-user", { email, password });
        return res;
    } catch (err) {
        return err.response.data.message;
    }
};

export const logoutFromDB = async (token) => {
    try {
        const res = await Axios.post(developmentDB + "/user/logout-user", { token }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res.data
    } catch (err) {
        console.log(err);
    }
}
export const updateUserInfoDB = async (token, newUser) => {
    try {
        const res = await Axios.patch(developmentDB + "/user/update-user", { token, newUser }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res.data
    } catch (err) {
        console.log(err);
    }
}


export const getCitiesResults = (searchValue) => {
    const citiesFiltered = cities.filter((city) => city.includes(searchValue))
    return citiesFiltered;
}
export const getAnyAreaResults = (searchValue) => {
    const anyCities = Array.from(Object.keys(citiesStreets)).filter((area) => area.includes(searchValue));
    let streets = new Set();
    for (let i = 0; i < Object.keys(citiesStreets).length; i++) {
        for (let street of Object.values(citiesStreets)[i]) {
            if (street.includes(searchValue))
                streets.add(street)
        }
    }
    const anyStreets = Array.from(streets)
    const anyArea = [...anyCities, ...anyStreets]
    return anyArea;
}

export const getStreetsOfCity = (city, searchValue) => {
    const streets = [];
    for (let i = 0; i < Object.keys(citiesStreets).length; i++) {
        if (Object.keys(citiesStreets)[i].includes(city)) {
            for (let street of Object.values(citiesStreets)[i]) {
                if (street.includes(searchValue))
                    streets.push(street)
            }
        }
    }
    return streets;
}

export const addPostToDB = async (token, postObj) => {
    try {
        const res = await Axios.post(developmentDB + '/user/add-post', postObj, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res.data
    } catch (e) {
        return e
    }
}

export const postFile = async (token, file) => {
    try {
        const formData = new FormData();
        formData.append("file", file);

        const res = await axios.post(developmentDB + '/user/post-file', formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
        return res.data
    } catch (e) {
        return e
    }
}

export const getPosts = async (limit, page, queryObj, postsCurrentLength) => {
    const params = { limit, page, queryObj, postsCurrentLength };
    try {
        const res = await Axios.get(developmentDB + '/get-posts', { params })
        return res.data
    } catch (e) {
        console.log(e)
        return e
    }
}

export const getUserPosts = async (token, id) => {
    try {
        const res = await Axios.get(developmentDB + '/user/my-posts', {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            params: {
                id
            }
        })
        return res.data
    } catch (e) {
        return e
    }
}
