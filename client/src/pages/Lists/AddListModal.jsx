import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {addList} from "../../store/list/actions";

export default function AddListModal({visible, cleanup}) {
	const dispatch = useDispatch();
	const [fields, setFields] = useState({
		name: "", description: ""
	});

	function handleFields(e) {
		setFields({
			...fields,
			[e.target.name]: e.target.value
		});
	}

	function addlist() {
		dispatch(addList({
			...fields
		}));
		cleanup();
	}

	return (<Dialog maxWidth="xl" open={visible} onClose={cleanup}>
		<DialogTitle mb={2} borderBottom="1px solid rgba(0, 0, 0, 0.2)">
			Add list
		</DialogTitle>
		<DialogContent>
			<Stack gap={2}>
				<TextField placeholder="List name" name="name" onChange={handleFields}/>
				<TextField placeholder="description" name="description" onChange={handleFields}/>
			</Stack>
		</DialogContent>
		<DialogActions>
			<Button variant="contained" onClick={addlist}>
				Submit
			</Button>
		</DialogActions>
	</Dialog>);
}