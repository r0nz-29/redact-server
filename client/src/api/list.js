import axios from "axios";
import {BASE_URL} from "./index";

export const _getLists = async () => {
	try {
		const {token} = JSON.parse(localStorage.getItem("redact-user"));
		return axios.get(`${BASE_URL}/lists/getLists`, {
			headers: {Authorization: `Bearer ${token}`}
		}).then(response => {
			return response.data;
		});
	} catch (err) {
		throw err;
	}
};

export const _getList = async listId => {
	try {
		const {token} = JSON.parse(localStorage.getItem("redact-user"));
		return axios.get(`${BASE_URL}/lists/${listId}`, {
			headers: {Authorization: `Bearer ${token}`}
		}).then(response => {
			return response.data;
		});
	} catch (err) {
		throw err;
	}
};

export const _addQuestion = async payload => {
	try {
		const {token} = JSON.parse(localStorage.getItem("redact-user"));
		return axios.post(`${BASE_URL}/lists/${payload.listId}/addQuestion`, {...payload}, {
			headers: {Authorization: `Bearer ${token}`}
		}).then(response => {
			return response.data;
		});
	} catch (err) {
		throw err;
	}
};

export const _updateQuestion = async ({questionId}) => {
	try {
		const {token} = JSON.parse(localStorage.getItem("redact-user"));
		return axios.get(`${BASE_URL}/questions/${questionId}/update`, {
			headers: {Authorization: `Bearer ${token}`}
		}).then(response => {
			return response.data;
		});
	} catch (err) {
		throw err;
	}
};


export const _searchQuestion = async ({term}) => {
	try {
		const {token} = JSON.parse(localStorage.getItem("redact-user"));
		return axios.get(`${BASE_URL}/questions/search/${term}`, {
			headers: {Authorization: `Bearer ${token}`}
		}).then(response => {
			return response.data;
		});
	} catch (err) {
		throw err;
	}
};

export const _addList = async payload => {
	try {
		const {token} = JSON.parse(localStorage.getItem("redact-user"));
		return axios.post(`${BASE_URL}/lists/addList`, {...payload}, {
			headers: {Authorization: `Bearer ${token}`}
		}).then(response => {
			return response.data;
		});
	} catch (err) {
		throw err;
	}
};

export const _getTotalCount = () => {
	try {
		const {token} = JSON.parse(localStorage.getItem("redact-user"));
		return axios.get(`${BASE_URL}/questions/totalCount`, {
			headers: {Authorization: `Bearer ${token}`}
		}).then(response => {
			return response.data;
		});
	} catch (err) {
		throw err;
	}
};

export const _getTotalLeetcodeCount = () => {
	try {
		const {token} = JSON.parse(localStorage.getItem("redact-user"));
		return axios.get(`${BASE_URL}/questions/totalLeetcodeCount`, {
			headers: {Authorization: `Bearer ${token}`}
		}).then(response => {
			return response.data;
		});
	} catch (err) {
		throw err;
	}
};
