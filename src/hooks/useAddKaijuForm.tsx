import { ChangeEvent, FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HttpService from "../Api/HttpService";
import { ApplicationState } from "../redux";
import { setKaijuDNA } from "../redux/kaijuDNA";

export const useAddKaijuForm = () => {
	const dispatch = useDispatch();
	const { dna } = useSelector((state: ApplicationState) => state.kaijuDNA);

	useEffect(() => {
		(() => {
			const regex = /^[A-Za-z0-9]*$/;
			if (!dna) return;
			// if(regex.test(dna))
			// dispatch()
		})();
	}, [dna]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setKaijuDNA(e.target.value));
	};

	const handleSubmit = (e: FormEvent) => {
		console.log(e);
		// HttpService.post({
		//   mode: "raw",
		//   raw: {
		//     dna: e.
		//   }
		// })
	};

	return {
		handleSubmit,
		handleChange,
	};
};
