import {Dialog} from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import {anOldHope} from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function SolutionModal({visible, cleanup, solution}) {
	return (
		<Dialog maxWidth="xl" open={visible} onClose={cleanup} PaperProps={{sx: {p: 0, height: "auto"}}}>
			<SyntaxHighlighter style={anOldHope} language="java">
				{solution}
			</SyntaxHighlighter>
		</Dialog>
	);
}