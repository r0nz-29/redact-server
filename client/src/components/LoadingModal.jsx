import {Dialog} from "@mui/material";
import Lottie from "react-lottie";
import fire from "../assets/fire-loading.json";

export default function LoadingModal() {
	return (
		<Dialog
			open={true}
			PaperProps={{
				sx: {
					position: "absolute",
					top: 0
				}
			}}
		>
			<FireAnimation/>
		</Dialog>
	);
}

function FireAnimation() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: fire,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};

	return (
		<div>
			<Lottie
				options={defaultOptions}
				height={200}
				width={200}
			/>
		</div>
	);
}