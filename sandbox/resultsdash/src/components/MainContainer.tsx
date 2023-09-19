import { useContext, useEffect, useState, useMemo } from "react";
import DataContext from "../context/DataContext";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import YearSelector from "./YearSelector";
import Selectors from "./Selectors";
import SummaryChart from "./SummaryChart";
import GradientPaper from "./GradientPaper";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import processDataSummary from "../utils/processdatasummary";
import TopChart from "./TopChart";
import PictogramChart from "./PictogramChart";
import Typography from "@mui/material/Typography";
import processDataBeneficiaryType from "../utils/processdatabytype";
import TypeAndSectorChart from "./TypeAndSectorChart";
import processDataSectors from "../utils/processdatasectors";
import colors from "../utils/colors";
import { useInView } from "react-intersection-observer";
import QuickSelectors from "./QuickSelectors";
import Map from "./Map";
import processDataMap from "../utils/processdatamap";

const downloadStates: DownloadStates = {
	summary: false,
	pictogram: false,
	beneficiaryTypes: false,
	sectors: false,
};

function MainContainer() {
	const queryStringValues = new URLSearchParams(location.search);

	const apiData = useContext(DataContext) as DataContext;
	const rawData = apiData.rawData;

	const lastYear = [...apiData.inDataLists.reportYears].sort(
		(a, b) => b - a
	)[0];

	const [reportYear, setReportYear] = useState<number[]>([lastYear]);
	const [year, setYear] = useState<number[] | null>(null);
	const [allocationType, setAllocationType] = useState<number[]>([
		...apiData.inDataLists.allocationTypes,
	]);
	const [fund, setFund] = useState<number[]>([...apiData.inDataLists.funds]);
	const [allocationSource, setAllocationSource] = useState<number[]>([
		...apiData.inDataLists.allocationSources,
	]);

	const [clickedDownload, setClickedDownload] =
		useState<DownloadStates>(downloadStates);

	const [ref, inView] = useInView({
		threshold: 0.999,
	});

	const [ref2, inView2] = useInView({
		threshold: 0,
	});

	const { dataSummary, dataPictogram, inSelectionData } = useMemo(
		() =>
			processDataSummary({
				rawData,
				reportYear,
				fund,
				allocationSource,
				allocationType,
				year,
			}),
		[rawData, reportYear, fund, allocationSource, allocationType, year]
	);

	const dataBeneficiaryTypes = useMemo(
		() =>
			processDataBeneficiaryType({
				rawData,
				reportYear,
				fund,
				allocationSource,
				allocationType,
				year,
			}),
		[rawData, reportYear, fund, allocationSource, allocationType, year]
	);

	const dataSectors = useMemo(
		() =>
			processDataSectors({
				rawData,
				reportYear,
				fund,
				allocationSource,
				allocationType,
				year,
			}),
		[rawData, reportYear, fund, allocationSource, allocationType, year]
	);

	const locationsList = apiData.lists.locations;

	const dataMap = useMemo(
		() =>
			processDataMap({
				rawData,
				reportYear,
				fund,
				allocationSource,
				allocationType,
				year,
				locationsList,
			}),
		[
			rawData,
			reportYear,
			fund,
			allocationSource,
			allocationType,
			year,
			locationsList,
		]
	);

	useEffect(() => {
		const reportYearParam = queryStringValues.has("reportYear")
			? queryStringValues
					.get("reportYear")
					?.split(",")
					.map(d => +d)
			: null;
		const allocationTypesParam = queryStringValues.has("allocationType")
			? queryStringValues
					.get("allocationType")
					?.split(",")
					.map(d => +d)
			: null;
		const allocationSourcesParam = queryStringValues.has("allocationSource")
			? queryStringValues
					.get("allocationSource")
					?.split(",")
					.map(d => +d)
			: null;
		const fundParam = queryStringValues.has("fund")
			? queryStringValues
					.get("fund")
					?.split(",")
					.map(d => +d)
			: null;
		const yearParam = queryStringValues.has("year")
			? queryStringValues
					.get("year")
					?.split(",")
					.map(d => +d)
			: null;
		if (reportYearParam) setReportYear(reportYearParam);
		if (allocationTypesParam) setAllocationType(allocationTypesParam);
		if (allocationSourcesParam) setAllocationSource(allocationSourcesParam);
		if (fundParam) setFund(fundParam);
		if (yearParam) setYear(yearParam);
		return () => {};
	}, []);

	useEffect(() => {
		setClickedDownload(downloadStates);
		const allocationTypesParam =
			allocationType.length === apiData.inDataLists.allocationTypes.size
				? ""
				: `&allocationType=${allocationType}`;
		const allocationSourcesParam =
			allocationSource.length ===
			apiData.inDataLists.allocationSources.size
				? ""
				: `&allocationSource=${allocationSource}`;
		const fundParam =
			fund.length === apiData.inDataLists.funds.size
				? ""
				: `&fund=${fund}`;
		const yearParam = year === null ? "" : `&year=${year}`;
		const reportYearParam =
			reportYear[0] === lastYear ? "" : `&reportYear=${reportYear[0]}`;
		if (
			allocationTypesParam ||
			allocationSourcesParam ||
			fundParam ||
			yearParam ||
			reportYearParam
		) {
			window.history.replaceState(
				{},
				"",
				`?${allocationTypesParam}${allocationSourcesParam}${fundParam}${yearParam}${reportYearParam}`
			);
		} else {
			window.history.replaceState({}, "", window.location.pathname);
		}
	}, [reportYear, year, fund, allocationSource, allocationType]);

	return (
		<Container
			disableGutters={true}
			style={{
				paddingLeft: "12px",
				paddingRight: "12px",
			}}
		>
			<Grid
				container
				spacing={2}
				justifyContent={"center"}
				position={"sticky"}
				top={-1}
				ref={ref}
				mb={2}
				style={{
					backgroundColor: "rgba(255,255,255,0.95)",
					zIndex: 1200,
					borderBottom: inView ? "none" : "1px solid #ccc",
					boxShadow: inView
						? "none"
						: "0px 6px 4px -4px rgba(0,0,0,0.2)",
				}}
			>
				<Grid
					pb={2}
					pt={2}
					xs={12}
					display={"flex"}
					alignItems={"center"}
					justifyContent={"center"}
				>
					<YearSelector
						reportYear={reportYear}
						setReportYear={setReportYear}
						reportYears={apiData.inDataLists.reportYears}
						setYear={setYear}
					/>
					<Typography
						variant={"h4"}
						style={{
							fontFamily: "Montserrat",
							fontSize: inView2 ? "40px" : "18px",
							fontWeight: 700,
							marginLeft: inView2 ? "1em" : "2em",
						}}
					>
						Results{inView2 ? " " : <br />}Dashboard
					</Typography>
					{!inView2 && (
						<QuickSelectors
							fund={fund}
							setFund={setFund}
							allocationSource={allocationSource}
							setAllocationSource={setAllocationSource}
							allocationType={allocationType}
							setAllocationType={setAllocationType}
							inSelectionData={inSelectionData}
						/>
					)}
				</Grid>
			</Grid>
			<Grid
				container
				spacing={2}
				justifyContent={"center"}
			>
				<Grid
					xs={10}
					mb={3}
				>
					<Typography
						variant="body1"
						style={{
							fontFamily: "Montserrat",
							fontSize: "14px",
							textAlign: "center",
						}}
					>
						Welcome to the Results Dashboard, a comprehensive tool
						that showcases the impact of Country-Based Pooled Funds.
						Here, you'll find a detailed breakdown of the total
						number of beneficiaries both targeted and reached,
						further segmented by gender/age group, type, location,
						and sector. For a more tailored view, users can apply
						the available filters to select specific allocation
						types or CBPF funds.
					</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={2}
			>
				<Paper
					elevation={0}
					style={{
						width: "100%",
						padding: "1em",
						backgroundColor: "#f5f8ff",
						borderRadius: "8px",
						position: "relative",
						overflow: "hidden",
					}}
				>
					<GradientPaper />
					<Grid
						ref={ref2}
						xs={12}
					>
						<Selectors
							fund={fund}
							setFund={setFund}
							allocationSource={allocationSource}
							setAllocationSource={setAllocationSource}
							allocationType={allocationType}
							setAllocationType={setAllocationType}
							inSelectionData={inSelectionData}
						/>
					</Grid>
					<Grid
						xs={12}
						display={"flex"}
						justifyContent={"flex-start"}
					>
						<Box
							mt={1}
							mb={1}
							ml={0}
						>
							<TopChart
								year={year}
								dataSummary={dataSummary}
								setYear={setYear}
								reportYear={reportYear}
							/>
						</Box>
					</Grid>
				</Paper>
			</Grid>
			<Box
				mt={3}
				mb={2}
				style={{
					opacity: year === null ? 0 : 1,
				}}
			>
				{year === null ? (
					<Typography fontSize={12}>...</Typography>
				) : (
					<Typography fontSize={12}>
						{" "}
						{"Projects from allocation year"}
						{year.length > 1 ? "s " : " "}
						{year
							.sort((a, b) => a - b)
							.reduce(
								(acc, curr, index) =>
									acc +
									(index >= year.length - 2
										? index > year.length - 2
											? curr
											: curr + " and "
										: curr + ", "),
								""
							)}
						{" contributing to "}
						<span
							style={{
								color: colors.contrastColorDarker,
								fontWeight: 700,
							}}
						>
							{reportYear[0]}
						</span>
						{" results."}
					</Typography>
				)}
			</Box>
			<Grid
				container
				spacing={2}
			>
				<Paper
					elevation={0}
					style={{
						width: "100%",
						paddingTop: "1em",
						paddingBottom: "1em",
						backgroundColor: "#f5f8ff",
						borderRadius: "6px",
						position: "relative",
						overflow: "hidden",
					}}
				>
					<GradientPaper />
					<Grid
						container
						direction={"row"}
						spacing={1}
						xs={12}
						flexWrap={"nowrap"}
						mt={3}
						mb={3}
					>
						<Grid xs={6}>
							<SummaryChart
								dataSummary={dataSummary}
								year={year}
								clickedDownload={clickedDownload}
								setClickedDownload={setClickedDownload}
							/>
						</Grid>
						<Divider
							orientation="vertical"
							flexItem
							style={{
								borderLeft: "3px dotted #ccc",
								borderRight: "none",
							}}
						/>
						<Grid xs={6}>
							<Box
								display={"flex"}
								alignItems={"center"}
								justifyContent={"center"}
							>
								<PictogramChart
									dataPictogram={dataPictogram}
									clickedDownload={clickedDownload}
									setClickedDownload={setClickedDownload}
								/>
							</Box>
						</Grid>
					</Grid>
					<Divider
						orientation="horizontal"
						flexItem
						style={{
							borderTop: "3px dotted #ccc",
							borderBottom: "none",
							width: "96%",
							marginLeft: "2%",
						}}
					/>
					<Grid
						container
						direction={"row"}
						spacing={1}
						xs={12}
						flexWrap={"nowrap"}
						mt={3}
						mb={3}
					>
						<Grid xs={6}>
							<TypeAndSectorChart
								data={dataBeneficiaryTypes}
								list={apiData.lists.beneficiaryTypes}
								title="People targeted and reached by type"
								chartType="beneficiaryTypes"
								clickedDownload={clickedDownload}
								setClickedDownload={setClickedDownload}
							/>
						</Grid>
						<Divider
							orientation="vertical"
							flexItem
							style={{
								borderLeft: "3px dotted #ccc",
								borderRight: "none",
							}}
						/>
						<Grid xs={6}>
							<Box
								display={"flex"}
								alignItems={"center"}
								justifyContent={"center"}
							>
								<TypeAndSectorChart
									data={dataSectors}
									list={apiData.lists.sectors}
									title="People targeted and reached by sector"
									chartType="sectors"
									clickedDownload={clickedDownload}
									setClickedDownload={setClickedDownload}
								/>
							</Box>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
			<Grid
				container
				spacing={2}
				mt={6}
				mb={6}
			>
				<Paper
					elevation={0}
					style={{
						width: "100%",
						paddingTop: "1em",
						paddingBottom: "1em",
						backgroundColor: "#f5f8ff",
						borderRadius: "6px",
						position: "relative",
						overflow: "hidden",
					}}
				>
					<GradientPaper />
					<Grid
						direction={"column"}
						spacing={2}
						xs={12}
					>
						<Map
							data={dataMap}
							clickedDownload={clickedDownload}
							setClickedDownload={setClickedDownload}
						/>
					</Grid>
				</Paper>
			</Grid>
		</Container>
	);
}

export default MainContainer;
