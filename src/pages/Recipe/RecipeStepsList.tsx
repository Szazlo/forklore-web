import { Box, Stack, Typography } from "@mui/material";
import { RecipeInstruction } from "@/types/recipe";
import { useToggle } from "@/useToggle.ts";
import DoneIcon from "@mui/icons-material/Done";

export default function RecipeStepsList({
	steps,
}: {
	steps: RecipeInstruction[];
}) {
	return (
		<Stack gap={3}>
			{steps.map((step) => (
				<RecipeStep step={step} key={step.stepNumber} />
			))}
		</Stack>
	);
}

function RecipeStep({ step }: { step: RecipeInstruction }) {
	const [ticked, toggleTicked] = useToggle(false);

	return (
		<div className="flex gap-1">
			<div className="w-8">
				<Box
					bgcolor="primary.main"
					onClick={toggleTicked}
					className="w-6 h-6 flex align-middle justify-center rounded text-white cursor-pointer select-none"
				>
					{ticked ? <DoneIcon /> : step.stepNumber}
				</Box>
			</div>
			<Typography
				maxWidth={0.9}
				sx={{ textDecoration: ticked ? "line-through" : "" }}
				color={ticked ? "text.dark" : ""}
			>
				{step.content}
			</Typography>
		</div>
	);
}
