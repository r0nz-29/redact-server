import {Box, LinearProgress, Paper, Stack, Table, TableBody, TableContainer, Typography} from "@mui/material";
import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getRecents} from "../../store/recentSubmissions/actions";
import {QuestionRow, TableHeaders} from "../List/index.jsx";

export default function RecentSubmissions() {
	const dispatch = useDispatch();
	const {recents, loading} = useSelector(state => state.recents);

	useEffect(() => {
		dispatch(getRecents());
	}, []);

	return (
		<Box>
			<Stack direction="row" columnGap={1} alignItems="center">
				<Typography variant="h5" fontWeight="bold" color="text.primary">New Submissions</Typography>
				<PlaylistAddRoundedIcon color="primary"/>
			</Stack>
			{loading ? (<LinearProgress color="primary"/>) : (<TableContainer component={Paper}>
				<Table>
					<TableHeaders/>
					<TableBody>
						{recents?.map((question, i) => {
							return (<QuestionRow question={question} key={i} sno={i + 1}
																	 updateQuestionId={() => {
																		 console.log("lol");
																	 }}/>);
						})}
					</TableBody>
				</Table>
			</TableContainer>)}
		</Box>
	);
}