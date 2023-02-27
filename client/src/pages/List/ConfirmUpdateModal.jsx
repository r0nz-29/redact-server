import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {updateQuestion} from "../../store/question/actions";
import {useDispatch} from "react-redux";
import {getBacklogs} from "../../store/backlogs/actions";

export default function ConfirmUpdateModal({visible, cleanup, questionId}) {

	const dispatch = useDispatch();

	function updateQuestion_() {
		dispatch(updateQuestion({questionId}));
		cleanup();
	}

	return (<Dialog open={visible} onClose={cleanup}>
		<DialogTitle>
			Mark this question as revised ?
		</DialogTitle>
		<DialogContent>
			<DialogContentText>
				Click on yes, if you have successfully submitted the question after a while on leetcode.
			</DialogContentText>
		</DialogContent>
		<DialogActions>
			<Button onClick={updateQuestion_}>
				Yes
			</Button>
			<Button onClick={cleanup}>
				No
			</Button>
		</DialogActions>
	</Dialog>);
}