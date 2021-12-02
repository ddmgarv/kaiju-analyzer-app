import axios, { AxiosInstance } from "axios";

export type GetKaijuTypeApi = "ONE" | "TWO" | "THREE" | "UNKNOWN" | "ALL";

export type KaijuType = "TYPE I" | "TYPE II" | "TYPE III" | "unknown";

type Mode = "raw";

type Raw = { dna: string };

export interface PostKaijuDNAApi {
	mode: Mode;
	raw: Raw;
}

class HttpService {
	service: AxiosInstance;

	static instance = new HttpService();

	constructor() {
		this.service = axios.create({
			baseURL: process.env.REACT_APP_KAIJU_API_URL,
			timeout: 4000,
		});
	}

	get(kaijuType: GetKaijuTypeApi) {
		this.service.get(`/stats?type=${kaijuType}`);
	}

	post(payload: PostKaijuDNAApi) {
		this.service.post("/dna", payload);
	}
}

export default HttpService.instance;
