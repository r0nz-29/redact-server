import {Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";

export default function Logo({small = false}) {
	const navigateTo = useNavigate();
	return (
		<Grid container justifyContent={small ? "flex-start" : "space-between"} alignItems="center" spacing={1}
					style={{cursor: "pointer"}} onClick={() => navigateTo("/lists")}>
			<Grid item>
				{/*<LandscapeRounded sx={{fontSize: small ? 56 : 64, transform: "scaleX(-1)"}} color="primary"/>*/}
				<ShutterSpeedIcon sx={{fontSize: 46, transform: "scaleX(-1)"}} color="primary"/>
			</Grid>
			<Grid item>
				<Typography variant="h6" fontWeight="bolder" color="text.primary">
					Redact
				</Typography>
			</Grid>
		</Grid>
	);
}