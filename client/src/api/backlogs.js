import axios from "axios";
import {BASE_URL} from "./index";

export const _getBacklogs = async () => {
	try {
		const {token} = JSON.parse(localStorage.getItem("redact-user"));
		return axios.get(`${BASE_URL}/questions/backlogs`, {
			headers: {Authorization: `Bearer ${token}`}
		}).then(response => {
			return response.data;
		});
	} catch (err) {
		throw err;
	}
};
