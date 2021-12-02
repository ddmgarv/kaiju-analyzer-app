import { SET_CURRENT_KAIJU_DNA } from "./kaijuDNATypes";

export const setCurrentKaiju = (kaiju: any) => ({
	type: SET_CURRENT_KAIJU_DNA,
	payload: kaiju,
});
