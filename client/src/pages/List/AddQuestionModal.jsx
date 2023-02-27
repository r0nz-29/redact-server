import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {addQuestion} from "../../store/question/actions";
import {useState} from "react";

export default function AddQuestionModal({visible, cleanup, listId}) {
  const dispatch = useDispatch();
  const [fields, setFields] = useState({
    name: "", link: "", solution: "",
  });

  function handleFields(e) {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  }

  function addQuestion_() {
    dispatch(addQuestion({
      ...fields,
      listId,
    }));
    cleanup();
  }

  function generateLink() {
    const {name} = fields;
    let link = "https://leetcode.com/problems/";
    const suffix = name.toLowerCase().split(" ").join("-");
    link += suffix.replace(/-+/g, "-");
    setFields({...fields, link});
  }

  return (<Dialog maxWidth="sm" fullWidth open={visible} onClose={cleanup}>
    <DialogTitle mb={2} borderBottom="1px solid rgba(0, 0, 0, 0.2)">
      Add New Question
    </DialogTitle>
    <DialogContent>
      <Stack gap={2}>
        <TextField placeholder="question name" name="name" value={fields.name} onChange={handleFields}/>
        <TextField placeholder="question link" name="link" value={fields.link} onChange={handleFields} onFocus={generateLink}/>
        <textarea placeholder="solution" name="solution" value={fields.solution} onChange={handleFields}></textarea>
      </Stack>
    </DialogContent>
    <DialogActions>
      <Button variant="contained" onClick={addQuestion_}>
        Submit
      </Button>
    </DialogActions>
  </Dialog>);
}