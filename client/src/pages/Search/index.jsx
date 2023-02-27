import {
  Button,
  Container,
  IconButton,
  LinearProgress,
  Stack,
  Table,
  TableBody,
  TextField,
  Typography,
} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getLists} from "../../store/list/actions";
import {KeyboardArrowLeft} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {searchQuestion} from "../../store/question/actions";
import {QuestionRow, TableHeaders} from "../List/index.jsx";
import LoadingModal from "../../components/LoadingModal.jsx";
import ConfirmUpdateModal from "../List/ConfirmUpdateModal.jsx";

export default function Search() {
  const dispatch = useDispatch();
  const navigate_to = useNavigate();
  const [term, setTerm] = useState("");
  const {searching, results} = useSelector(state => state.search);
  const [questionId, setQuestionId] = useState("");

  function updateQuestionId(id) {
    setQuestionId(id);
  }

  function _back() {
    navigate_to("/lists");
  }

  function _find(e) {
    e.preventDefault();
    dispatch(searchQuestion({term}));
  }

  useEffect(() => {
    dispatch(getLists());
  }, [dispatch]);

  return (<Container maxWidth="xl" sx={{bgcolor: theme => theme.palette.background.default}}>
    <br/>
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack direction="row" alignItems="center" mb={2}>
        <Typography variant="h4" fontWeight="bold" color="text.primary">Search Questions</Typography>
        <IconButton size="large" color="primary" onClick={_back}>
          <KeyboardArrowLeft fontSize="large"/>
        </IconButton>
      </Stack>
    </Stack>
    <form onSubmit={_find}>
      <Stack columnGap={2} direction="row" justifyContent="space-between">
        <TextField InputProps={{sx: {height: "40px"}}} fullWidth placeholder="search for questions"
                   value={term}
                   onChange={e => setTerm(e.target.value)}/>
        <Button variant="contained" color="primary" type="submit">Search</Button>
      </Stack>
    </form>
    <br/>
    <Table>
      <TableHeaders/>
      <TableBody>
        {
          results?.map((question, i) => {
            return (<QuestionRow question={question} key={i} sno={i + 1}
                                 updateQuestionId={updateQuestionId}/>);
          })
        }
      </TableBody>
    </Table>
    {
      searching && <LoadingModal/>
    }
    <ConfirmUpdateModal
      questionId={questionId}
      visible={!!questionId}
      cleanup={() => setQuestionId("")}
    />
  </Container>);
}