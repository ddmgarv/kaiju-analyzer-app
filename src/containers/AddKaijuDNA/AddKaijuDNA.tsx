import { useSelector } from "react-redux";
import { FormControl, InputLabel, OutlinedInput, IconButton, InputAdornment } from "@mui/material";
import { BugReport } from "@mui/icons-material";
import { useAddKaijuForm } from "../../hooks";
import { ApplicationState } from "../../redux";

export const AddKaijuDNA = () => {
	const dna = useSelector((state: ApplicationState) => state.kaijuDNA.dna);
	const { handleSubmit, handleChange } = useAddKaijuForm();
	return (
		<FormControl onSubmit={handleSubmit} fullWidth variant="outlined" sx={{ maxWidth: "400px" }}>
			<InputLabel htmlFor="outlined-text-box">Add Kaiju DNA</InputLabel>
			<OutlinedInput
				fullWidth
				id="outlined-text-box"
				label="Add Kaiju DNA"
				type="text"
				value={dna}
				onChange={handleChange}
				endAdornment={
					<InputAdornment position="end">
						<IconButton aria-label="bug icon" edge="end">
							<BugReport />
						</IconButton>
					</InputAdornment>
				}
			/>
		</FormControl>
	);
};
