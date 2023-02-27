import {
	Alert,
	Box,
	Button,
	ButtonGroup,
	Card,
	CardActionArea,
	CardActions,
	Container,
	Divider,
	Grid,
	IconButton,
	Stack,
	TextField,
	Typography
} from "@mui/material";
import Logo from "../../components/Header/Logo.jsx";
import {useEffect, useState} from "react";
import {AccountCircle, ArrowBack} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {guestLogin, login, register as registerUser} from "../../store/auth/actions";
import LoadingModal from "../../components/LoadingModal.jsx";

export default function AuthPage() {
	const [active, setActive] = useState(0);
	const {user, loggedIn, processing} = useSelector(state => state.auth);
	const navigateTo = useNavigate();

	useEffect(() => {
		if (!!user && loggedIn) {
			navigateTo("/lists");
		}
	}, [loggedIn]);

	return (
		<Box sx={{pt: theme => theme.spacing(8)}}>
			<Container maxWidth="sm">
				<Card>
					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<Logo small/>
						{
							active !== 0 && (
								<IconButton onClick={() => setActive(0)}>
									<ArrowBack/>
								</IconButton>
							)
						}
					</Stack>
					<Box>
						{
							active === 0
								? <GuestAcc updateActive={setActive}/> :
								active === 1
									? <Login updateActive={setActive}/> :
									<Register updateActive={setActive}/>
						}
					</Box>
				</Card>
			</Container>
			{
				processing && <LoadingModal/>
			}
		</Box>
	);
}

function GuestAcc({updateActive}) {
	const dispatch = useDispatch();

	function _guestLogin(e) {
		e.preventDefault();
		dispatch(guestLogin());
	}

	return (
		<>
			<CardActionArea
				sx={{my: 1, borderRadius: theme => theme.shape.borderRadius}}
				onClick={_guestLogin}
			>
				<Grid container>
					<Grid item xs={12}>
						<Alert
							color="primary"
							icon={<AccountCircle sx={{fontSize: 48}}/>}
							sx={{borderRadius: theme => theme.shape.borderRadius}}
						>
							<Typography variant="body1" color="primary">
								Just here to look around ?
							</Typography>
							<Typography variant="caption" color="primary">
								Continue with a guest account ⟶
							</Typography>
						</Alert>
					</Grid>
				</Grid>
			</CardActionArea>
			<Divider textAlign="center">
				or
			</Divider>
			<ButtonGroup fullWidth variant="contained" sx={{mt: 2}}>
				<Button onClick={() => updateActive(1)}>Login</Button>
				<Button onClick={() => updateActive(2)}>Register</Button>
			</ButtonGroup>
		</>
	);
}

function Login({updateActive}) {
	const [fields, setFields] = useState({
		email: "",
		password: ""
	});
	const dispatch = useDispatch();

	function handleFields(e) {
		setFields({
			...fields,
			[e.target.name]: e.target.value
		});
	}

	function _login(e) {
		e.preventDefault();
		dispatch(login({
			...fields
		}));
	}

	return (
		<>
			<Stack spacing={2} mb={1}>
				<TextField fullWidth name="email" type="email" label="Email" value={fields.email} onChange={handleFields}/>
				<TextField fullWidth name="password" label="Password" type="password" value={fields.password}
									 onChange={handleFields}/>
			</Stack>
			<CardActions>
				<Button variant="contained" onClick={_login}>Login</Button>
				<Button variant="text" onClick={() => updateActive(2)}>Don't have an account ? Sign up</Button>
			</CardActions>
		</>
	);
}

function Register({updateActive}) {
	const [fields, setFields] = useState({
		username: "",
		password: "",
		email: ""
	});
	const dispatch = useDispatch();

	function handleFields(e) {
		setFields({
			...fields,
			[e.target.name]: e.target.value
		});
	}

	function register(e) {
		e.preventDefault();
		if (fields.username && fields.email && fields.password) {
			dispatch(registerUser({
				...fields
			}));
		}
	}

	return (
		<>
			<Stack spacing={2} mb={1}>
				<TextField fullWidth name="username" label="Fullname" value={fields.username} onChange={handleFields}/>
				<TextField fullWidth name="email" type="email" label="Email" value={fields.email} onChange={handleFields}/>
				<TextField fullWidth name="password" label="Password" type="password" value={fields.password}
									 onChange={handleFields}/>
			</Stack>
			<CardActions>
				<Button variant="contained" onClick={register}>Register</Button>
				<Button variant="text" onClick={() => updateActive(1)}>Already have an account ? Login</Button>
			</CardActions>
		</>
	);
}