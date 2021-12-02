import { useSelector } from "react-redux";
import { FormControl, Grid } from "@mui/material";
import { useAddKaijuForm } from "../../hooks";
import { ApplicationState } from "../../redux";
import { AddKaijuInput } from "./components/AddKaijuInput";

export const AddKaijuDNA = () => {
	const dna = useSelector((state: ApplicationState) => state.kaijuDNA.dna);
	const { handleSubmit, handleChange } = useAddKaijuForm();
	return (
		<FormControl onSubmit={handleSubmit} fullWidth variant="outlined">
			<AddKaijuInput dna={dna} handleChange={handleChange} />
		</FormControl>
	);
};
