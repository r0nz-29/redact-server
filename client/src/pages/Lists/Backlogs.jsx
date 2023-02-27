import {Box, LinearProgress, Paper, Stack, Table, TableBody, TableContainer, Typography} from "@mui/material";
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors";
import {QuestionRow, TableHeaders} from "../List/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getBacklogs} from "../../store/backlogs/actions";
import ConfirmUpdateModal from "../List/ConfirmUpdateModal.jsx";
import LoadingModal from "../../components/LoadingModal.jsx";

export default function Backlogs() {
	const dispatch = useDispatch();
	const {backlogs, loading} = useSelector(state => state.backlogs);
	const {processing} = useSelector(state => state.lists);
	const [questionId, setQuestionId] = useState("");

	function updateQuestionId(id) {
		setQuestionId(id);
	}

	useEffect(() => {
		dispatch(getBacklogs());
	}, []);

	return (<Box>
		<Stack direction="row" columnGap={1} alignItems="center">
			<Typography variant="h5" fontWeight="bold" color="text.primary">Backlogs</Typography>
			<RunningWithErrorsIcon color="primary"/>
		</Stack>
		{loading ? (<LinearProgress color="primary"/>) : (<TableContainer component={Paper}>
			<Table>
				<TableHeaders/>
				<TableBody>
					{backlogs?.map((question, i) => {
						return (<QuestionRow question={question} key={i} sno={i + 1}
																 updateQuestionId={updateQuestionId}/>);
					})}
				</TableBody>
			</Table>
		</TableContainer>)}
		<ConfirmUpdateModal
			refreshBacklogs
			questionId={questionId}
			visible={!!questionId}
			cleanup={() => setQuestionId("")}
		/>
		{processing && <LoadingModal/>}
	</Box>);
}