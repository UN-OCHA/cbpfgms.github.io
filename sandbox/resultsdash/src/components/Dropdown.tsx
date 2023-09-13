import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useMemo, useRef, useState } from "react";

function Dropdown({
	value,
	setValue,
	names,
	namesList,
	type,
	inSelectionData,
	dataProperty,
}: DropdownProps) {
	let isAllSelected = value.length === names.length;

	const selectRef = useRef<HTMLDivElement | null>(null);
	const [dropdownHeight, setDropdownHeight] = useState<number>(450);

	function handleChange(event: SelectChangeEvent<typeof value>) {
		const eventArray: number[] = [event.target.value as number[]].flat();
		if (isAllSelected) {
			isAllSelected = eventArray.length !== names.length;
			const missingItems: number[] = names.filter(
				d => !eventArray.includes(d)
			);
			setValue(missingItems);
		} else {
			eventArray.sort((a, b) => namesList[a].localeCompare(namesList[b]));
			setValue(eventArray);
		}
	}

	function calculateHeight() {
		if (selectRef.current) {
			const selectRect = selectRef.current.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			const remainingSpace = windowHeight - selectRect.bottom;
			setDropdownHeight(remainingSpace);
		}
	}

	const namesListMemo = useMemo(() => {
		names.sort((a, b) => namesList[a].localeCompare(namesList[b]));
		return names;
	}, [names, namesList]);

	return (
		<div ref={selectRef}>
			<FormControl sx={{ m: 1, maxWidth: "95%", minWidth: "95%" }}>
				<InputLabel id="multiple-checkbox-label">{type}</InputLabel>
				<Select
					labelId="multiple-checkbox-label"
					id="multiple-checkbox"
					multiple
					value={value}
					onChange={handleChange}
					onMouseEnter={calculateHeight}
					input={<OutlinedInput label={type} />}
					renderValue={selected =>
						(selected as number[]).map(d => namesList[d]).join(", ")
					}
					MenuProps={{
						PaperProps: {
							style: {
								maxHeight: dropdownHeight,
								marginTop: "8px",
							},
						},
					}}
				>
					{namesListMemo.map(name => (
						<MenuItem
							key={name}
							value={name}
							disabled={!inSelectionData[dataProperty].has(name)}
							style={
								!inSelectionData[dataProperty].has(name)
									? {
											whiteSpace: "normal",
											padding: "1px",
											filter: "grayscale(100%)",
									  }
									: {
											whiteSpace: "normal",
											padding: "1px",
											filter: "grayscale(0%)",
									  }
							}
						>
							<Checkbox
								checked={value.includes(name)}
								sx={{ padding: "6px" }}
							/>
							<ListItemText
								style={{ maxWidth: "500px" }}
								primary={namesList[name]}
							/>
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}

export default Dropdown;
