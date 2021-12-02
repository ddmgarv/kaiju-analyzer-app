import { useDispatch, useSelector } from "react-redux";
import { Grid, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import { TabPanel, AddKaijuDNA, KaijuAnalytics } from "./containers";
import { setCurrentTab } from "./redux/App";
import { ApplicationState } from "./redux/rootReducer";

const a11yProps = (index: number) => ({
	id: `simple-tab-${index}`,
	"aria-controls": `simple-tabpanel-${index}`,
});

const App = () => {
	const { tab } = useSelector((state: ApplicationState) => state.app);
	const dispatch = useDispatch();

	const handleChange = (e: any, newValue: any) => {
		dispatch(setCurrentTab(newValue));
	};

	return (
		<Grid xl={6} md={8} marginX="auto">
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
					<Tab label="Add Kaiju" {...a11yProps(0)} />
					<Tab label="Kaiju Analytics" {...a11yProps(1)} />
				</Tabs>
			</Box>
			<TabPanel value={tab} index={0}>
				<AddKaijuDNA />
			</TabPanel>
			<TabPanel value={tab} index={1}>
				<KaijuAnalytics />
			</TabPanel>
		</Grid>
	);
};

export default App;
