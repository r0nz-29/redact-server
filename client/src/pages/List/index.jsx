import {
	Button,
	Container,
	Grid,
	IconButton,
	Paper,
	Skeleton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography
} from "@mui/material";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getList} from "../../store/list/actions";
import {formatDistance} from "date-fns";
import AddIcon from "@mui/icons-material/Add";
import AddQuestionModal from "./AddQuestionModal.jsx";
import DataObjectIcon from "@mui/icons-material/DataObject";
import SolutionModal from "./SolutionModal.jsx";
import AddTaskIcon from "@mui/icons-material/AddTask";
import ConfirmUpdateModal from "./ConfirmUpdateModal.jsx";
import QuestionButton from "./QuestionButton.jsx";
import LoadingModal from "../../components/LoadingModal.jsx";
import {getColor} from "../../helpers";

export default function List() {
	const {listId} = useParams();
	const dispatch = useDispatch();
	const {currentList, loading, processing} = useSelector(state => state.lists);
	const [showAddQuestion, setShowAddQuestion] = useState(false);
	const [questionId, setQuestionId] = useState("");

	useEffect(() => {
		dispatch(getList(listId));
	}, []);

	function updateQuestionId(id) {
		setQuestionId(id);
	}

	return (<Container maxWidth="xl" sx={{pt: 2}}>
		{loading ? (
			<Grid container justifyContent="space-between" mt={2} alignItems="flex-end">
				<Grid item xs={4}>
					<Skeleton variant="rectangular" width="40%"/>
					<br/>
					<Skeleton variant="rectangular"/>
				</Grid>
				<Grid item>
					<Button variant="outlined" startIcon={<AddIcon/>} onClick={() => setShowAddQuestion(true)}>
						Add question
					</Button>
				</Grid>
			</Grid>
		) : (
			<Grid container justifyContent="space-between" alignItems="flex-end">
				<Grid item xs={9}>
					<Typography variant="h4" mt={2} fontWeight="bold" color="text.primary">{currentList?.name}</Typography>
					<Typography variant="body2" mt={1} color="text.secondary">{currentList?.description}</Typography>
				</Grid>
				<Grid item xs="auto">
					<Button variant="outlined" startIcon={<AddIcon/>} onClick={() => setShowAddQuestion(true)}>
						Add question
					</Button>
				</Grid>
			</Grid>)}
		<br/>
		<TableContainer component={Paper}>
			<Table>
				<TableHeaders/>
				<TableBody>
					{currentList?.questions?.map((question, i) => {
						return (<QuestionRow question={question} key={i} sno={i + 1}
																 updateQuestionId={updateQuestionId}/>);
					})}
				</TableBody>
			</Table>
		</TableContainer>
		<AddQuestionModal listId={currentList.id} visible={showAddQuestion} cleanup={() => setShowAddQuestion(false)}/>
		<ConfirmUpdateModal questionId={questionId} visible={!!questionId} cleanup={() => setQuestionId("")}/>
		{
			processing && <LoadingModal/>
		}
	</Container>);
}

export function QuestionRow({question, sno, updateSolution, updateQuestionId}) {
	const bgcolor = getColor(new Date(question.updated_at), question.submissions);
	const [solution, setSolution] = useState("");
	
	return (<TableRow sx={{bgcolor}}>
		<TableCell align="center">
			{sno}
		</TableCell>
		<TableCell>
			{question.name}
		</TableCell>
		<TableCell align="center">
			<QuestionButton link={question.link}/>
		</TableCell>
		<TableCell align="center">
			{question.submissions}
		</TableCell>
		<TableCell align="center">
			{getDuration(question.updated_at)}
		</TableCell>
		<TableCell align="center">
			<IconButton onClick={() => updateQuestionId(question.id)}>
				<AddTaskIcon/>
			</IconButton>
		</TableCell>
		<TableCell align="center">
			<IconButton onClick={() => setSolution(question.solution)}>
				<DataObjectIcon/>
			</IconButton>
		</TableCell>
		{
			!!solution && <SolutionModal solution={solution} visible={!!solution} cleanup={() => setSolution("")}/>
		}
	</TableRow>);
}

export function TableHeaders() {
	return (<TableHead>
		<TableRow>
			<TableCell align="center">
				#
			</TableCell>
			<TableCell>
				Name
			</TableCell>
			<TableCell align="center">
				Link
			</TableCell>
			<TableCell align="center">
				Submissions
			</TableCell>
			<TableCell align="center">
				Last updated
			</TableCell>
			<TableCell align="center">
				New submission
			</TableCell>
			<TableCell align="center">
				Solution
			</TableCell>
		</TableRow>
	</TableHead>);
}

export function getDuration(submissionTime) {
	return formatDistance(new Date(submissionTime), new Date(), {
		addSuffix: true
	});
}