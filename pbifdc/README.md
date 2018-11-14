# GMS BI: CBPF Contributions, force-directed graph

Data visualisation for the Country-based Pooled Funds (CBPF) contributions in the Business Inteligence Portal at [gms.unocha.org](https://gms.unocha.org/content/cbpf-contributions) . The datavis contains several elements:

- A top banner showing the contributions (total amount; pledge amount for future years), the number of donors and the number of CBPFs for the selected year;
- A control banner allowing the selection of the year, the geopositioning (in a map) of the nodes, showing/hiding the nodes' labels and downloading the corresponding CSV;
- A force-directed graph with all the donors and CBPFs for the selected year. In the force-directed graph each node represents a country, and each link represents the amount donated/received by the donor/CBPF pair.
- A legend panel, which shows information for the entire selected year, for the country hovered over and for the link hovered over. The legend panel can be hovered as well.

<img alt="GMS Landing Page" src="https://cbpfgms.github.io/img/thumbnails/pbifdc.png" width="450">

## Getting started

Copy this snippet to the HTML:

```<div id="d3chartcontainerpbifdc" data-year="2018" data-showmap="false" data-shownames="true" data-responsive="true" data-lazyload="true"></div><script type="text/javascript" src="https://cbpfgms.github.io/pbifdc/src/d3chartpbifdc.js"></script>```

The script will create an SVG inside the `<div>` specified in the snippet.

The JavaScript code will also reference [D3.js](https://d3js.org) version 5 and the [common CSS](https://github.com/CBPFGMS/cbpfgms.github.io/raw/master/css/) file.

*Important*: The code uses `window.innerHeight`  and `element.offsetTop` to start the animation. Do not copy the snippet inside an iframe or any other element that avoids the correct calculation of `window.innerHeight`  and `element.offsetTop`.

## Parameters

There are five parameters:

**`data-year`**: defines the year depicted by the data visualisation when the page loads. The value has to be a string containing the year with century as a decimal number, such as:

 `"2018"`

If the provided value is not a valid year the datavis will default to the current year.

For the accepted values for the years/periods please refer to the data API.

This value defines only the selected year when the page loads: the user can easily change the selected year by clicking the corresponding buttons.

**`data-showmap`**: defines if the nodes in the force-directed graph are freely positioned or if they follow the geographic position of the respective country (in a map) . The value has to be a string. Accepted values:

- `"false"`: nodes are freely positioned on the chart area.
- `"true"`: nodes in the correct geographic position.

If the value is not an accepted value, it defaults to `"false"`.

This value defines only the selected position of the nodes when the page loads: the user can easily change it by clicking the corresponding button.

**`data-shownames`**: defines if the donor/CBPF name is visible. Hiding the name is useful in the map view, where the labels normally overlap . The value has to be a string. Accepted values:

- `"false"`: name not visible.
- `"true"`: name visible.

If the value is not an accepted value, it defaults to `"false"`.

This value defines only if the names are visible when the page loads: the user can easily change it by clicking the corresponding button.

**`data-responsive`**: defines if the SVG stretches to the width of the containing element. Accepted values:

- `"true"`: the SVG will stretch to the width of the element containing the code snippet.
- `"false"`: the SVG will be created with a fixed size, which is 1130px width by 698px height.

Note: On Internet Explorer this parameter will default to `"false"`, meaning that the SVG will not be responsive.

**`data-lazyload`**: defines if the animation starts when the SVG is visible. Accepted values:

- `"true"`: the animation starts only when the SVG is visible in the browser window.
- `"false"`: the animation starts when the page is loaded, regardless if the SVG is visible.

If the value is neither `"true" ` nor `"false"`, it defaults to `"false" `.

*Recommended size*: 1130px x 698px.


## CSS

This chart uses the [common CSS](https://github.com/CBPFGMS/cbpfgms.github.io/raw/master/css/) for all OCHA charts. The specific styles are listed under `pbifdc` section.

---
Chart code: `pbifdc`