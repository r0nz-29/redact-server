import {Chip, Container} from "@mui/material";
import ShieldTwoToneIcon from "@mui/icons-material/ShieldTwoTone";
import PublicTwoToneIcon from "@mui/icons-material/PublicTwoTone";
import Backlogs from "./Backlogs.jsx";
import RecentSubmissions from "./RecentSubmissions.jsx";
import AllLists from "./AllLists.jsx";

export default function Lists() {
	return (<Container maxWidth="xl" sx={{bgcolor: theme => theme.palette.background.default}}>
		<br/>
		<AllLists/>
		<br/>
		<br/>
		<Backlogs/>
		<br/>
		<br/>
		<RecentSubmissions/>
		<br/>
	</Container>);
}

export function Visibility({type = "private"}) {
	return (<Chip
		icon={type === "private" ? <ShieldTwoToneIcon/> : <PublicTwoToneIcon/>}
		label={capitalizeFirstLetter(type)}
		variant="outlined"
		color="primary"
	/>);
}

export function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}