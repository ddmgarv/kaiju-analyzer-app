import { useSelector } from "react-redux";
import { FormControl, Grid } from "@mui/material";
import { useAddKaijuForm } from "../../hooks";
import { ApplicationState } from "../../redux";
import { AddKaijuInput } from "./components/AddKaijuInput";

export const AddKaijuDNA = () => {
	const { dna, hasError } = useSelector((state: ApplicationState) => state.kaijuDNA);
	const { handleSubmit, handleChange } = useAddKaijuForm();
	return (
		<FormControl onSubmit={handleSubmit} fullWidth variant="outlined">
			<AddKaijuInput dna={dna} hasError={hasError} handleChange={handleChange} />
		</FormControl>
	);
};
