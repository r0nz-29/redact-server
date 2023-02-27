import {
  AppBar,
  CircularProgress,
  Container, Divider,
  Grid,
  IconButton,
  Stack, SvgIcon,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Logo from "./Logo.jsx";
import Profile from "./Profile.jsx";
import {Menu} from "@mui/icons-material";
import Headroom from "react-headroom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getLeetcodeCount, getTotalCount} from "../../store/question/actions";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import {Leetcode} from "../Leetcode.jsx";
import {LeeetcodeSVG} from "../../pages/List/QuestionButton.jsx";

export default function Header() {
  const lessThan770 = useMediaQuery(`(max-width: 770px)`);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalCount());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getLeetcodeCount());
  }, [dispatch]);

  const {totalQuestions, leetcodeCount} = useSelector(state => state.lists);
  return (<Headroom>
    <AppBar color="secondary" position="sticky">
      <Toolbar>
        <Container maxWidth="xl">
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Logo/>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems="center" columnGap={2}>
                <Stack direction="row" alignItems="center" columnGap={1}>
                  <TaskAltIcon color="success"/>
                  {
                    !!totalQuestions ? (
                      <Typography>
                        {totalQuestions[0].count}
                      </Typography>
                    ) : (
                      <CircularProgress/>
                    )
                  }
                </Stack>
                <Divider orientation="vertical" flexItem />
                <Stack direction="row" alignItems="center" columnGap={1}>
                  <SvgIcon width="10%" height="10%">
                    <LeeetcodeSVG/>
                  </SvgIcon>
                  {
                    !!leetcodeCount ? (
                      <Typography>
                        {leetcodeCount.count}
                      </Typography>
                    ) : (
                      <CircularProgress/>
                    )
                  }
                </Stack>
              </Stack>
            </Grid>
            <Grid item>
              {lessThan770 ? (<IconButton>
                <Menu/>
              </IconButton>) : (<Profile/>)}
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  </Headroom>);
}