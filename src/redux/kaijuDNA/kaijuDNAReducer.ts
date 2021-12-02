import { Reducer } from "redux";
import { SET_KAIJU_DNA } from "./kaijuDNATypes";
import { ActionType } from "typesafe-actions";
import * as kaijuActions from "./kaijuDNAActions";

const initialState = {
	dna: "",
};

type KaijuAction = ActionType<typeof kaijuActions>;

export type KaijuState = {
	dna: string;
};

export const kaijuDNAReducer: Reducer<KaijuState, KaijuAction> = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_KAIJU_DNA:
			return { ...state, dna: payload };
		default:
			return state;
	}
};
