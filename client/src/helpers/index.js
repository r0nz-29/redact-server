import {intervalToDuration} from "date-fns";

const COLORS = {
	RED: "rgb(255, 200, 200)",
	GREEN: "rgb(200, 255, 200)",
	WHITE: "white"
};

export function getColor(startDate, submissions) {
	const duration = intervalToDuration({start: startDate, end: new Date()});

	// re-attempt
	if ((duration.days >= 4) || duration.months !== 0)
		return COLORS.RED;

	// attempted today
	if (duration.hours <= 24 && duration.days === 0 && duration.months === 0 && submissions === 1) {
		return COLORS.GREEN;
	}

	// normal
	return COLORS.WHITE;
}
