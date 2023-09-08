import Box from "@mui/material/Box";
// import createPictogramChart from "../charts/createtopchart";
import Typography from "@mui/material/Typography";
import { Tooltip } from "react-tooltip";
import formatSIFloat from "../utils/formatsi";
import NumberAnimator from "./NumberAnimator";
import { useState, useEffect, useRef } from "react";
import Pictogram from "../assets/Pictogram";
import { scaleLinear } from "d3-scale";
import { format } from "d3-format";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import DoneIcon from "@mui/icons-material/Done";

const unColor = "#418fde",
	unColorLighter = "#82b5e9";

function PictogramRow({
	type,
	reached,
	targeted,
	setMaxNumberOfPictograms,
	maxValue,
}: PictogramRowProps) {
	const [divWidth, setDivWidth] = useState<number>(0);
	const divRef = useRef<HTMLDivElement>(null);

	const pictogramWidth = 12;
	const numberOfPictograms = Math.floor(divWidth / pictogramWidth);
	const numberOfPictogramsArray = Array.from(
		Array(numberOfPictograms).keys()
	);

	const scale = scaleLinear<number>().domain([0, maxValue]).range([0, 100]);

	useEffect(() => {
		const divWidth = divRef.current?.offsetWidth;
		if (divWidth) {
			setDivWidth(divWidth);
			setMaxNumberOfPictograms(numberOfPictograms);
		}
	}, [numberOfPictograms, setMaxNumberOfPictograms]);

	return (
		<Box
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				width: "100%",
			}}
		>
			<Box
				style={{ flex: "0 15%", display: "flex", alignItems: "center" }}
			>
				<Typography
					variant="body2"
					fontWeight={500}
					style={{ color: "#555", border: "none" }}
				>
					{type.toUpperCase()}
				</Typography>
			</Box>
			<Box
				style={{
					flex: "0 75%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				{[targeted, reached].map((d, i) => (
					<Box
						style={{
							display: "flex",
							flexDirection: "row",
							width: "100%",
							alignItems: "center",
						}}
						key={i}
						data-tooltip-id={"tooltip-" + type + "-" + i}
						data-tooltip-content={`${capitalizeString(type)} ${
							i ? "reached" : "targeted"
						}: ${format(",.0f")(d)}`}
						data-tooltip-place="top"
					>
						<Tooltip id={"tooltip-" + type + "-" + i} />
						<Box
							style={{
								flex: "0 28%",
								display: "flex",
								flexDirection: "row",
								justifyContent: "flex-end",
								alignItems: "baseline",
								marginRight: "12px",
							}}
						>
							<Typography
								variant="body2"
								fontWeight={500}
								fontSize={i ? 24 : 18}
								style={{ color: "#222", border: "none" }}
							>
								<NumberAnimator
									number={parseFloat(formatSIFloat(d))}
								/>
								{formatSIFloat(d).slice(-1)}
							</Typography>
							<Typography
								variant="body2"
								fontWeight={400}
								style={{
									border: "none",
								}}
							>
								{i ? (
									<DoneIcon
										style={{
											fontSize: 18,
											marginLeft: 3,
											color: "#777",
											opacity: 0.6,
											marginBottom: "-2px",
										}}
									/>
								) : (
									<AdsClickIcon
										style={{
											fontSize: 18,
											marginLeft: 3,
											color: "#777",
											opacity: 0.6,
											marginBottom: "-3px",
										}}
									/>
								)}
							</Typography>
						</Box>
						<Box
							ref={divRef}
							style={{
								flex: "0 72%",
								marginTop: "2px",
								marginBottom: "2px",
								display: "flex",
								alignItems: "center",
								width: "100%",
							}}
						>
							<Box
								style={{
									width: scale(d) + "%",
									overflow: "hidden",
									display: "flex",
									flexWrap: "nowrap",
									transitionProperty: "width",
									transitionDuration: "0.75s",
								}}
							>
								{numberOfPictogramsArray.map((_, j) => (
									<Pictogram
										svgProps={{
											style: {
												width: pictogramWidth,
												fill: i
													? unColor
													: unColorLighter,
											},
										}}
										type={type}
										key={j}
									/>
								))}
							</Box>
						</Box>
					</Box>
				))}
			</Box>
			<Box
				style={{
					flex: "0 10%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Typography
					variant="body2"
					style={{
						fontSize: 12,
						color: "#444",
						border: "none",
						fontStyle: "italic",
					}}
				>
					<NumberAnimator number={~~((reached * 100) / targeted)} />%
				</Typography>
			</Box>
		</Box>
	);
}

function capitalizeString(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export default PictogramRow;
