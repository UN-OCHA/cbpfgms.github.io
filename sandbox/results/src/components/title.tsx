import Typography from "@mui/material/Typography";

function Title() {
	return (
		<div style={{ marginBottom: "2em" }}>
			<Typography
				variant="h4"
				mb={1}
				color="#424242"
				sx={{ fontWeight: 700, fontSize: "2.25rem" }}
			>
				Results
			</Typography>
			<Typography
				variant="subtitle1"
				color="text.secondary"
			>
				This is the sandbox page for the data visualizations of the
				Results dashboard.
			</Typography>
		</div>
	);
}

export default Title;
