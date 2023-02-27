import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getLists} from "../../store/list/actions";
import {CardActionArea, Grid, IconButton, LinearProgress, Paper, Stack, Typography} from "@mui/material";
import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";
import {Search} from "@mui/icons-material";
import AddListModal from "./AddListModal.jsx";
import {capitalizeFirstLetter} from "./index.jsx";

export default function AllLists() {
	const {lists, loading} = useSelector(state => state.lists);
	const [showAddList, setShowAddList] = useState(false);
	const navigate_to = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getLists());
	}, [dispatch]);

	function _search() {
		navigate_to("/search");
	}

	return (
		<>
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<Stack direction="row" alignItems="center" mb={2}>
					<Typography variant="h4" fontWeight="bold" color="text.primary">All Lists</Typography>
					<IconButton size="large" color="primary" onClick={() => setShowAddList(true)}>
						<PlaylistAddRoundedIcon fontSize="large"/>
					</IconButton>
				</Stack>
				<IconButton color="primary" onClick={_search}>
					<Search/>
				</IconButton>
			</Stack>
			{loading ? (<LinearProgress color="primary"/>) : (<Grid container spacing={2} alignItems="center">
				{lists.map((list, i) => {
					return (<Grid item key={i} xs={3}>
						<ListCard list={list}/>
					</Grid>);
				})}
			</Grid>)}
			<AddListModal visible={showAddList} cleanup={() => setShowAddList(false)}/>
		</>
	);
}

function ListCard({list}) {
	const navigate_to = useNavigate();
	return (<CardActionArea
		sx={{borderRadius: "12px"}}
		onClick={() => navigate_to(`/lists/${list.id}`)}
	>
		<Paper sx={{p: 2, border: "1px solid rgba(0, 0, 0, 0.2)"}}>
			<Typography variant="h6">
				{capitalizeFirstLetter(list.name)}
			</Typography>
			<br/>
			<Typography
				variant="body2" color="text.secondary"
				sx={{height: "60px", overflow: "hidden", width: "100%", textOverflow: "ellipsis"}}
			>
				{list.description}
			</Typography>
			{/*<Visibility type="private"/>*/}
		</Paper>
	</CardActionArea>);
}