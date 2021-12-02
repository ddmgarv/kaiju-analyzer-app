import { SET_KAIJU_DNA } from "./kaijuDNATypes";

export const setKaijuDNA = (kaiju: any) => ({
	type: SET_KAIJU_DNA,
	payload: kaiju,
});
