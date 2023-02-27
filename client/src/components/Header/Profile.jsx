import {CardActionArea, Menu, MenuItem, Skeleton, Stack, Typography} from "@mui/material";
import {ArrowDropDown} from "@mui/icons-material";
import {logout} from "../../store/auth/actions";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

export default function Profile() {
	const [anchorEl, setAnchorEl] = useState();
	const {user, processing} = useSelector(state => state.auth);

	return (<>
		<CardActionArea sx={{p: 1, borderRadius: theme => theme.shape.borderRadius}}
										onClick={(e) => setAnchorEl(e.currentTarget)}>
			<Stack direction="row" alignItems="center" spacing={2}>
				{processing ? (<Skeleton variant="rectangular"/>) : (
					<Typography color="text.primary" variant="body1" fontWeight="bold">
						{user?.name}
					</Typography>)}
				<ArrowDropDown/>
			</Stack>
		</CardActionArea>
		<ProfileMenu anchor={anchorEl} visible={Boolean(anchorEl)} cleanup={() => setAnchorEl(null)}/>
	</>);
}

function ProfileMenu({anchor, visible, cleanup}) {
	const dispatch = useDispatch();

	function logoutUser() {
		dispatch(logout());
	}

	return (<Menu
		anchorEl={anchor}
		open={visible}
		onClose={cleanup}
		PaperProps={{
			sx: {
				border: "1px solid rgba(0, 0, 0, 0.1)"
			}
		}}
	>
		<MenuItem onClick={logoutUser}>
			<Typography variant="body1" color="error" px={4}>
				Logout
			</Typography>
		</MenuItem>
	</Menu>);
}