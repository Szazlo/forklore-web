import { Box, Stack, Typography } from "@mui/material";

const nutritionalValues = [
	{ name: "Calories", value: 494 },
	{ name: "Carbs", value: 80 },
	{ name: "Fat", value: 18 },
	{ name: "Protein", value: 24 },
	{ name: "Fiber", value: 23 },
	{ name: "Net Carbs", value: 56 },
	{ name: "Sodium", value: 444 },
	{ name: "Cholesterol", value: 0 },
];

export default function NutritionalValuesBox() {
	return (
		<Box className="bg-gray-200 my-6 py-5 px-5">
			<Typography
				variant="h5"
				fontWeight="bold"
				gutterBottom
			>
				Nutrition Facts
			</Typography>
			<Stack spacing={1}>
				{nutritionalValues.map((nut) => (
					<div
						className="flex justify-between border-b border-gray-300"
						key={nut.name}
					>
						<Typography color="text.dark">{nut.name}</Typography>
						<Typography>{nut.value}</Typography>
					</div>
				))}
			</Stack>
		</Box>
	);
}
