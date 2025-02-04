/* eslint-disable @typescript-eslint/no-unused-vars */

type Beneficiaries = number | null;

type ReceiveDataArgs = [
	BySectorObj[],
	ByDisabilityObj[],
	ByLocationObj[],
	ByTypeObj[],
	LocationMasterObj[],
	BeneficiariesMasterObj[],
	AllocationTypeMasterObj[],
	FundsMasterObj[],
	AllocationSourcesMasterObj[],
	PartnerTypesMasterObj[],
	SectorsMasterObj[],
	ApprovedAllocationsObj[]
];

type ApprovedAllocationsObj = {
	AllocationYear: number;
	ApprovedBudget: number;
	ApprovedReserveBudget: number;
	ApprovedReserveBudgetPercentage: number;
	ApprovedStandardBudget: number;
	ApprovedStandardBudgetPercentage: number;
	FundingType: number;
	OrganizationType: string;
	PipelineBudget: number;
	PipelineReserveBudget: number;
	PipelineReserveBudgetPercentage: number;
	PipelineStandardBudget: number;
	PipelineStandardBudgetPercentage: number;
	PooledFundName: string;
	PooledFundId?: number;
};

type BySectorObj = {
	PooledFundId: number;
	AllocationYear: number;
	ReportApprovedDate: Date;
	AllocationtypeId: number;
	AllocationSourceId: number;
	ClusterId: number;
	ClusterBudget: number;
	TargetedMen: Beneficiaries;
	TargetedWomen: Beneficiaries;
	TargetedBoys: Beneficiaries;
	TargetedGirls: Beneficiaries;
	ReachedMen: Beneficiaries;
	ReachedWomen: Beneficiaries;
	ReachedBoys: Beneficiaries;
	ReachedGirls: Beneficiaries;
};

type ByDisabilityObj = {
	PooledFundId: number;
	AllocationYear: number;
	ReportApprovedDate: Date;
	AllocationtypeId: number;
	AllocationSourceId: number;
	NumbofProjects: number;
	TotalNumbPartners: number;
	Budget: number;
	TargetedMen: Beneficiaries;
	TargetedWomen: Beneficiaries;
	TargetedBoys: Beneficiaries;
	TargetedGirls: Beneficiaries;
	ReachedMen: Beneficiaries;
	ReachedWomen: Beneficiaries;
	ReachedBoys: Beneficiaries;
	ReachedGirls: Beneficiaries;
	DisabledMen: Beneficiaries;
	DisabledWomen: Beneficiaries;
	DisabledBoys: Beneficiaries;
	DisabledGirls: Beneficiaries;
	ReachedDisabledMen: Beneficiaries;
	ReachedDisabledWomen: Beneficiaries;
	ReachedDisabledBoys: Beneficiaries;
	ReachedDisabledGirls: Beneficiaries;
};

type ByLocationObj = {
	PooledFundId: number;
	AllocationYear: number;
	ApprovedDate: Date;
	LocationID: number;
	AllocationtypeId: number;
	AllocationSourceId: number;
	TargetMen: Beneficiaries;
	TargetWomen: Beneficiaries;
	TargetBoys: Beneficiaries;
	TargetGirls: Beneficiaries;
	ReachedMen: Beneficiaries;
	ReachedWomen: Beneficiaries;
	ReachedBoys: Beneficiaries;
	ReachedGirls: Beneficiaries;
};

type ByTypeObj = {
	PooledFundId: number;
	AllocationYear: number;
	ReportApprovedDate: Date;
	BeneficiaryTypeId: number;
	AllocationtypeId: number;
	AllocationSourceId: number;
	TargetMen: Beneficiaries;
	TargetWomen: Beneficiaries;
	TargetBoys: Beneficiaries;
	TargetGirls: Beneficiaries;
	ReachedMen: Beneficiaries;
	ReachedWomen: Beneficiaries;
	ReachedBoys: Beneficiaries;
	ReachedGirls: Beneficiaries;
};

type LocationMasterObj = {
	LocationID: number;
	Location: string;
	AdminLocation1: string;
	AdminLocation1Latitude: number;
	AdminLocation1Longitude: number;
};

type AllocationTypeMasterObj = {
	AllocationtypeId: number;
	AllocationType: string;
};

type BeneficiariesMasterObj = {
	BeneficiaryTypeId: number;
	BeneficiaryType: string;
};

type FundsMasterObj = {
	id: number;
	PooledFundName: string;
	PooledFundNameAbbrv: string;
	RegionName: string;
	RegionNameArr: string;
	SubRegionName: string;
	ContinentName: string;
	CountryCode: string;
	ISO2Code: string;
	latitude: number;
	longitude: number;
	CBPFFundStatus: number;
	CBPFId: number;
	CERFId: number;
	AreaType: string;
};

type AllocationSourcesMasterObj = {
	id: number;
	AllocationName: string;
};

type PartnerTypesMasterObj = {
	id: number;
	OrganizationTypeName: string;
};

type SectorsMasterObj = {
	id: number;
	ClustNm: string;
	ClustCode: string;
};

type ListObj = {
	[key: number]: string;
};

type ReversedNames = {
	[key: string]: number;
};

type LocationObj = {
	[key: number]: {
		coordinates: number[];
		locationName: string;
	};
};

type List = {
	fundNames: ListObj;
	fundAbbreviatedNames: ListObj;
	fundIsoCodes: ListObj;
	locations: LocationObj;
	beneficiaryTypes: ListObj;
	allocationTypes: ListObj;
	allocationSources: ListObj;
	partnerTypes: ListObj;
	sectors: ListObj;
};

type RawData = {
	bySector: BySectorYear;
	byDisability: ByDisabilityYear;
	byLocation: ByLocationYear;
	byType: ByTypeYear;
	approved: ApprovedAllocationsObj[];
	allocatedTotals: ByDisabilityYear;
};

type MakeListParams = {
	fundsMaster: FundsMasterObj[];
	locationMaster: LocationMasterObj[];
	beneficiariesMaster: BeneficiariesMasterObj[];
	allocationTypeMaster: AllocationTypeMasterObj[];
	allocationSourcesMaster: AllocationSourcesMasterObj[];
	partnerTypesMaster: PartnerTypesMasterObj[];
	sectorsMaster: SectorsMasterObj[];
};

type InDataLists = {
	reportYears: Set<number>;
	sectors: Set<number>;
	allocationTypes: Set<number>;
	allocationSources: Set<number>;
	beneficiaryTypes: Set<number>;
	funds: Set<number>;
};

type GenericYear<TObj> = {
	year: number;
	values: TObj[];
}[];

type BySectorYear = GenericYear<BySectorObj>;

type ByDisabilityYear = GenericYear<ByDisabilityObj>;

type ByLocationYear = GenericYear<ByLocationObj>;

type ByTypeYear = GenericYear<ByTypeObj>;

type ApprovedSummary = {
	year: number;
	approved: number;
	underApproval: number;
};

type PreProcessDataParams = {
	bySector: BySectorObj[];
	byDisability: ByDisabilityObj[];
	byLocation: ByLocationObj[];
	byType: ByTypeObj[];
	setInDataLists: React.Dispatch<React.SetStateAction<InDataLists | null>>;
};

type AllocatedTotals = {
	[key: string]: number;
};

type PreProcessDataReturn = {
	bySectorYear: BySectorYear;
	byDisabilityYear: ByDisabilityYear;
	byLocationYear: ByLocationYear;
	byTypeYear: ByTypeYear;
	allocatedTotals: ByDisabilityYear;
};

type DataContext = {
	rawData: RawData;
	lists: List;
	inDataLists: InDataLists;
};

type SelectionContext = {
	reportYear: number[];
	setReportYear: React.Dispatch<React.SetStateAction<number[]>>;
	year: number[] | null;
	setYear: React.Dispatch<React.SetStateAction<number[] | null>>;
	allocationType: number[];
	setAllocationType: React.Dispatch<React.SetStateAction<number[]>>;
	fund: number[];
	setFund: React.Dispatch<React.SetStateAction<number[]>>;
	allocationSource: number[];
	setAllocationSource: React.Dispatch<React.SetStateAction<number[]>>;
	beneficiaryType: number[];
	setBeneficiaryType: React.Dispatch<React.SetStateAction<number[]>>;
};

type YearSelectorProps = {
	reportYear: number[];
	setReportYear: React.Dispatch<React.SetStateAction<number[]>>;
	reportYears: Set<number>;
	setYear: React.Dispatch<React.SetStateAction<number[] | null>>;
};

type SummaryChartProps = {
	dataSummary: SummaryData[];
	year: number[] | null;
	clickedDownload: DownloadStates;
	setClickedDownload: React.Dispatch<React.SetStateAction<DownloadStates>>;
	summaryDataDownload: ByDisabilityObj[];
	fundsList: ListObj;
};

type SelectorsProps = {
	fund: number[];
	setFund: React.Dispatch<React.SetStateAction<number[]>>;
	allocationType: number[];
	setAllocationType: React.Dispatch<React.SetStateAction<number[]>>;
	allocationSource: number[];
	setAllocationSource: React.Dispatch<React.SetStateAction<number[]>>;
	inSelectionData: InSelectionObject;
};

type AccordionComponentProps = {
	type: string;
	filterType: string;
	dataProperty: DataProperties;
	value: number[];
	setValue: React.Dispatch<React.SetStateAction<number[]>>;
	expanded: string | false;
	handleAccordionExpand: (
		panel: string
	) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
	inSelectionData: InSelectionObject;
};

type DropdownProps = {
	value: number[];
	setValue: React.Dispatch<React.SetStateAction<number[]>>;
	names: number[];
	namesList: ListObj;
	type: string;
	inSelectionData: InSelectionObject;
	dataProperty: DataProperties;
	fromQuickSelectors: boolean;
};

type SearchProps = {
	value: number[];
	setValue: React.Dispatch<React.SetStateAction<number[]>>;
	names: number[];
	namesList: ListObj;
	inSelectionData: InSelectionObject;
	dataProperty: DataProperties;
};

type CheckboxProps = {
	value: number[];
	setValue: React.Dispatch<React.SetStateAction<number[]>>;
	names: number[];
	namesList: ListObj;
	inSelectionData: InSelectionObject;
	dataProperty: DataProperties;
};

type SummaryData = {
	year: number;
	allocations: number;
	projects: number;
	partners: number;
};

type SummaryRowProps = SummaryData & {
	last: boolean;
};

type ProcessDataSummary = ({
	rawData,
	reportYear,
	fund,
	allocationSource,
	allocationType,
	year,
}: {
	rawData: RawData;
	reportYear: number[];
	fund: number[];
	allocationSource: number[];
	allocationType: number[];
	year: number[] | null;
}) => {
	dataSummary: SummaryData[];
	dataPictogram: PictogramData;
	inSelectionData: InSelectionObject;
	approvedSummary: ApprovedSummary[];
	allocatedTotals: AllocatedTotals;
};

type ProcessDataBeneficiaryType = ({
	rawData,
	reportYear,
	fund,
	allocationSource,
	allocationType,
	year,
}: {
	rawData: RawData;
	reportYear: number[];
	fund: number[];
	allocationSource: number[];
	allocationType: number[];
	year: number[] | null;
}) => BeneficiaryTypeData[];

type BeneficiaryTypeData = {
	beneficiaryType: number;
	targeted: number;
	reached: number;
};

type ProcessDataSectors = ({
	rawData,
	reportYear,
	fund,
	allocationSource,
	allocationType,
	year,
}: {
	rawData: RawData;
	reportYear: number[];
	fund: number[];
	allocationSource: number[];
	allocationType: number[];
	year: number[] | null;
}) => SectorsData[];

type SectorsData = {
	sector: number;
	targeted: number;
	reached: number;
};

type ProcessDataMap = ({
	rawData,
	reportYear,
	fund,
	allocationSource,
	allocationType,
	year,
	locationsList,
}: {
	rawData: RawData;
	reportYear: number[];
	fund: number[];
	allocationSource: number[];
	allocationType: number[];
	year: number[] | null;
	locationsList: LocationObj;
}) => MapData[];

type MapData = {
	locationId: number;
	locationName: string;
	coordinates: number[];
	beneficiaries: PictogramData;
};

type InSelectionObject = {
	funds: Set<number>;
	allocationSources: Set<number>;
	allocationTypes: Set<number>;
};

type DataProperties = keyof InSelectionObject;

type TopChartProps = {
	year: number[] | null;
	dataSummary: SummaryData[];
	setYear: React.Dispatch<React.SetStateAction<number[] | null>>;
	reportYear: number[];
	approvedData: ApprovedSummary[];
	allocatedTotals: AllocatedTotals;
};

type ChartValue = "allocations" | "projects" | "partners";

type CreateTopChartParams = {
	height: number;
	dataSummary: SummaryData[];
	chartValue: ChartValue;
	svgContainer: React.RefObject<SVGSVGElement>;
	year: number[] | null;
	setYear: React.Dispatch<React.SetStateAction<number[] | null>>;
};

type CreateDonutParams = {
	size: number;
	svgContainer: React.RefObject<SVGSVGElement>;
	donutData: DonutData;
	colorScale: d3.ScaleOrdinal<DonutTypes, string>;
	reportYear: number[];
};

type PictogramData = {
	targetedMen: number;
	targetedWomen: number;
	targetedBoys: number;
	targetedGirls: number;
	reachedMen: number;
	reachedWomen: number;
	reachedBoys: number;
	reachedGirls: number;
};

type PictogramChartProps = {
	dataPictogram: PictogramData;
	clickedDownload: DownloadStates;
	setClickedDownload: React.Dispatch<React.SetStateAction<DownloadStates>>;
	summaryDataDownload: ByDisabilityObj[];
	fundsList: ListObj;
};

type PictogramTypes = "girls" | "boys" | "women" | "men";

type PictogramTypesWithTotal = PictogramTypes | "total";

type DownloadIconProps = {
	handleDownloadClick: () => void;
	clickedDownload: DownloadStates;
	setClickedDownload: React.Dispatch<React.SetStateAction<DownloadStates>>;
	type: Charts;
};

type DownloadStates = {
	summary: boolean;
	pictogram: boolean;
	beneficiaryTypes: boolean;
	sectors: boolean;
	map: boolean;
};

type Charts = "summary" | "pictogram" | "beneficiaryTypes" | "sectors" | "map";

type PictogramRowProps = {
	type: PictogramTypes;
	targeted: number;
	reached: number;
	maxNumberOfPictograms: number;
	maxValue: number;
};

type TypesAndSectorChartProps<DownloadType> = {
	data: BeneficiaryTypeData[] | SectorsData[];
	list: List;
	clickedDownload: DownloadStates;
	title: string;
	chartType: Charts;
	setClickedDownload: React.Dispatch<React.SetStateAction<DownloadStates>>;
	dataDownload: DownloadType[];
};

type DownloadType = ByTypeObj | BySectorObj;

type TypeAndSectorRowProps = {
	type: number;
	targeted: number;
	reached: number;
	list: ListObj;
	maxValue: number;
};

type DownloadData = <T extends object>(data: T[], fileName: string) => void;

type SnackProps = {
	openSnack: boolean;
	setOpenSnack: React.Dispatch<React.SetStateAction<boolean>>;
	message: string;
};

type MapProps = {
	data: MapData[];
	clickedDownload: DownloadStates;
	setClickedDownload: React.Dispatch<React.SetStateAction<DownloadStates>>;
};

type CreateMapParams = {
	data: MapData[];
	svgGroupRef: React.RefObject<SVGGElement>;
	maxCircleRadius: number;
	maxValue: number;
	minCircleRadius: number;
};

type SVGOverlayComponentProps = {
	data: MapData[];
	maxZoomValue: number;
	maxValue: number;
	maxCircleRadius: number;
	minCircleRadius: number;
};

type CreateSizeLegendParams = {
	svgRef: SVGSVGElement;
	maxValue: number;
	minValue: number;
	legendSvgWidth: number;
	legendSvgHeight: number;
	maxCircleRadius: number;
	minCircleRadius: number;
};

type CreateColorLegendParams = {
	svgRef: SVGSVGElement;
	legendSvgWidth: number;
	legendSvgHeight: number;
};

type TFilterObj = BySectorObj | ByDisabilityObj | ByTypeObj;

type FilterDownloadArray = <TFObj extends TFilterObj>(
	arr: GenericYear<TFObj>,
	reportYear: number[],
	fund: number[],
	allocationSource: number[],
	allocationType: number[]
) => TFObj[];

type ApprovedChartProps = {
	approvedData: ApprovedSummary[];
	year: number[];
	dataSummary: SummaryData[];
	reportYear: number[];
	allocatedTotals: AllocatedTotals;
};

type ApprovedAndUnder = {
	approved: number;
	underApproval: number;
};

type DonutDatum = {
	type: DonutTypes;
	value: number;
};

type DonutData = DonutDatum[];

type DonutTypes = "selected" | "allocated" | "underImplementation";

type arcObject = {
	startAngle: number;
	endAngle: number;
};

type ScrollSpyProps = {
	inViewSummary: boolean;
	inViewPictogram: boolean;
	inViewBeneficiaryTypes: boolean;
	inViewSectors: boolean;
	inViewMap: boolean;
	summaryRef: string;
	pictogramRef: string;
	beneficiaryTypesRef: string;
	sectorsRef: string;
	mapRef: string;
};

type TabProps = {
	label: string;
	inView: boolean;
	reference: string;
	handleOnClick: (reference: string) => void;
};
