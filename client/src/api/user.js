import axios from "axios";
import {BASE_URL} from "./index";


export const _loginUser = async user => {
	try {
		return axios.post(`${BASE_URL}/auth/login`, {...user}).then(response => {
			if (response.data) {
				localStorage.setItem('redact-user', JSON.stringify(response.data));
				return response.data;
			}
		});
	} catch (err) {
		throw err;
	}
};

export const _requestGuestLogin = async () => {
	try {
		return axios.get(`${BASE_URL}/auth/login/guest`).then(response => {
			if (response.data) {
				localStorage.setItem('redact-user', JSON.stringify(response.data));
				return response.data;
			}
		});
	} catch (err) {
		throw err;
	}
};

export const _registerUser = async user => {
	try {
		return axios.post(`${BASE_URL}/auth/register`, {...user}).then(response => {
			if (response.data) {
				localStorage.setItem('redact-user', JSON.stringify(response.data));
				return response.data;
			}
		});
	} catch (err) {
		throw err;
	}
};

export const _logoutUser = () => {
	localStorage.removeItem('redact-user');
};


export const _getProfile = async userId => {
	try {
		console.log(userId);
		return axios.get(`${BASE_URL}/profile?userId=${userId}`).then(response => {
			if (response.data) {
				return response.data;
			}
		});
	} catch (err) {
		throw err;
	}
};

export const _updateProfileImage = async formdata => {
	try {
		return axios.post(`${BASE_URL}/profile/updateProfilePic`, formdata, {headers: {'Content-Type': 'multipart/form-data'}}).then(response => {
			return response.data;
		});
	} catch (err) {
		throw err;
	}
};

export const _updateCoverImage = async formdata => {
	try {
		return axios.post(`${BASE_URL}/profile/updateCoverImage`, formdata, {headers: {'Content-Type': 'multipart/form-data'}}).then(response => {
			return response.data;
		});
	} catch (err) {
		throw err;
	}
};