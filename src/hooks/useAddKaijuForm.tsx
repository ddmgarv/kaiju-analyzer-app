import { ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { setKaijuDNA } from "../redux/kaijuDNA";

export const useAddKaijuForm = () => {
	const dispatch = useDispatch();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setKaijuDNA(e.target.value));
	};

	const handleSubmit = (e: FormEvent) => {};

	return {
		handleSubmit,
		handleChange,
	};
};
