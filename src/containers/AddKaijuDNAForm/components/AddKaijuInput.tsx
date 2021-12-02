import { ChangeEvent } from "react";
import { InputLabel, OutlinedInput, IconButton, InputAdornment } from "@mui/material";
import { BugReport } from "@mui/icons-material";

interface AddKaijuInputProps {
	dna: string;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const AddKaijuInput = ({ dna, handleChange }: AddKaijuInputProps) => {
	return (
		<>
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
		</>
	);
};
