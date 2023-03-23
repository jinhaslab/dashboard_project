# Flexdashboard
<!-- Load holder style box -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/holder/2.9.7/holder.min.js"></script>
<!-- Load vs style highlight-->
<link rel="stylesheet" href="css/styles/vs.min.css">
<script src="css/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
<!-- Load zero-md -->
<script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2/webcomponents-loader.min.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/gh/zerodevx/zero-md@1/src/zero-md.min.js"></script>
<!-- load markdown function -->
<script src="mdsource/loadmd.js"></script>



Flexdashboard is a package for creating interactive dashboards in R. It is built on top of the Shiny package, which allows you to turn your R code into a web application. Flexdashboard provides a simple syntax for defining the structure of your dashboard and allows you to add various types of content such as text, plots, tables, and more.

Here are some key features of Flexdashboard:


1. Layout and Design
  + Rows and columns layout
  + Scrolling option
  + Tabsets
  + Scaling of size
  + Multiple pages

2. Visualization
  + HTML widgets
  + data tables
  + gauges

3. Interactivity
  + Integration with Shiny
  + Navigation bar
  + Input controls
  + Reactive outputs

4. Storytelling
  + The use of storyboards




## Layout and Design
### Rows and columns layout

level 2 markdown headers (represented by ---) are used to define columns within the dashboard. Each column contains one or more charts, which are stacked vertically within the column.


<div class="row">

<div class="col-md-6">
<script src="https://gist.github.com/jinhaslab/76fd4bbe731558d38c47cd3b1860e389.js"></script>
</div>

<div class="col-md-6 nopadding">
<div height="422px" width="100%">
<div style="float: left; width: 49%; height:200px">
<img class="holder" data-src="holder.js/100px470?size=28&amp;text=Chart 1">
</div>
<div style="margin-left: 51%; margin-down:10px; height:410px">
<img class="holder" data-src="holder.js/100px150?size=28&amp;text=Chart 2">
<img class="holder" data-src="holder.js/100px150?size=28&amp;text=Chart 3">
<img class="holder" data-src="holder.js/100px150?size=28&amp;text=Chart 4">
</div>
</div>
</div>
</div>


We can display row-wise by specifying the orientation: rows option. Following show that layout defines two rows, the first of which has a single chart and the second of which has three charts:


<div class="row">

<div class="col-md-6">
<script src="https://gist.github.com/jinhaslab/97642a7c622f5625530d903a38f5df02.js"></script>
</div>

<div class="col-md-6 nopadding">
<div height="550px" width="100%">
<img class="holder" data-src="holder.js/100px227?size=28&amp;text=Chart 1">
<div style="float: left; width: 32%;">
<img class="holder" data-src="holder.js/100px227?size=14&amp;text=Chart 2">
</div>
<div style="float: left; width: 32%; margin-left: 3%;">
<img class="holder" data-src="holder.js/100px227?size=14&amp;text=Chart 3">
</div>
<div style="width: 30%; margin-left: 70%;">
<img class="holder" data-src="holder.js/100px227?size=14&amp;text=Chart 4">
</div>
</div>
</div>
</div>

</div>




### Scrolling option


By default, charts in a flexdashboard are vertically stacked and resized to fit the height of the browser window. However, if you have many charts, this may lead to charts being compressed and difficult to read.

To address this issue, you can use the vertical_layout option to control the layout of your charts. The vertical_layout option can be set to either fill or scroll.

When vertical_layout: fill is used, charts will be resized to fill the entire height of the browser window, even if that means compressing the charts. This is the default behavior of flexdashboard.

When vertical_layout: scroll is used, charts will be displayed at their natural height, and the user will have to scroll down to see all the charts. This is useful when you have many charts and don't want them to be compressed.

In the example , the YAML header of the flexdashboard file specified vertical_layout: scroll, which means the charts will be displayed at their natural height and the page will scroll as necessary to accommodate them. This way, all the charts will be displayed clearly, even if there are many of them.


<div class="row">

<div class="col-md-12">
<script src="https://gist.github.com/jinhaslab/50f7473f33db407943965a21dd6957e7.js"></script>
</div>
<div class="col-md-12">
<img src="img/scrolling.gif" width="100%" >
</div>


### Tabsets
In flexdashboard, you can use the tabset layout to display multiple components within a row or column as tabs. This allows users to switch between the components by clicking on the tab labels. This layout is especially useful when you have several components that provide related information, but only one component is primary and should be seen by all readers.

<img src="img/tabsets.gif">

<script src="https://gist.github.com/jinhaslab/e6a76b4605bf00a8cc2405f680e62f13.js"></script>





### Scaling of size
The data-width and data-height attributes in flexdashboard allow you to control the relative size of rows, columns, or individual charts. These attributes determine the relative size between charts laid out in the same dimension (horizontal or vertical). By using these attributes, you can customize the sizing behavior of your charts and adjust the size of the charts to suit the nature of the charts and the desired emphasis, visualization types, etc. This way, you can ensure that your charts are displayed at the appropriate size and with the desired level of detail, and that the focus of the dashboard is clear to users.


<img src="img/chartsizing1.gif" width="100%">

<script src="https://gist.github.com/jinhaslab/659d496b30931cfc630a6b3049db83f9.js"></script>


<img src="img/chartsizing2.gif" width="100%">


<script src="https://gist.github.com/jinhaslab/cc0557fbd66e6346bf71e46f33a5c825.js"></script>




### Multiple pages

<img src="img/page1.gif" width="100%">

<script src="https://gist.github.com/jinhaslab/affc9d39daf9a6e8ab7ebf2f5fe147b2.js"></script>

The code snippet you provided is a simple example of how to create a flexdashboard with two pages. The first line defines the title of the dashboard as "Page Orientation" and the output format as a flexdashboard.

The first page is defined by the level 1 markdown header Page 1 (=====================================) and containing two charts. 

The second page is defined by the level 1 markdown header Page 2 (=====================================) and includes the attribute data-orientation=rows. This attribute specifies the orientation of the content within the page as rows, which means that the content will be arranged vertically in rows.

In this simple example, the two pages of the dashboard are defined and their orientation is specified. The first page does not include any content, while the second page is set to display its content in rows.







## Visualization
### HTML widgets
An htmlwidget is an R package that allows R users to create interactive web-based visualizations using popular JavaScript libraries such as d3.js, leaflet, plotly, and more. In the context of the flexdashboard R package, an htmlwidget can be used to add interactive visualizations to a flexdashboard.


> Leaflet

Leaflet is a popular open-source JavaScript library for creating interactive maps. It allows developers to create maps that can display various types of geographic data, such as points, lines, and polyggon shapes, as well as more advanced features such as pop-ups, markers, and custom icons. Leaflet is designed to be lightweight, fast, and easy to use, making it a popular choice for creating web maps for a variety of applications.

 The most useufull information are [here](http://rstudio.github.io/leaflet/) (http://rstudio.github.io/leaflet/)
 
> Plotly

Plotly is a data visualization library for creating interactive and visually appealing graphics. It supports many types of charts and graphs, including bar charts, line charts, scatter plots, pie charts, and more. Plotly also provides tools for streaming and real-time updating of graphs, as well as for creating dashboards and web-based visualizations. The library is available in Python, R, and JavaScript and can be used in a variety of platforms, including Jupyter notebooks, standalone web applications, and more. Plotly is known for its user-friendly interface and ability to handle large and complex datasets.

The official Plotly homepage for the R language can be found at [here](https://plotly.com/r/). https://plotly.com/r/

> Dygraphs

Dygraphs is a fast, flexible, and interactive JavaScript charting library for R. It is designed to visualize time-series data, but can be used to plot other types of data as well. Dygraphs supports multiple types of charts, including line graphs, area graphs, bar graphs, and more. The library is highly customizable, allowing users to change the appearance of their charts to suit their needs.

The official homepage for Dygraphs in R can be found at https://rstudio.github.io/dygraphs/. 

> rbokeh

rbokeh is a package for the R programming language that provides an interface to the Bokeh library for creating interactive visualizations in the web browser. Bokeh is a popular library for creating interactive visualizations in Python, and rbokeh provides a way to use these capabilities in R. With rbokeh, you can create a wide range of visualizations, including scatter plots, line charts, bar charts, and more, and you can easily customize the appearance of your visualizations to suit your needs.

The official homepage for rbokeh can be found at https://hafen.github.io/rbokeh/. 

> highcharter

highcharter is an R package that provides a high-level interface to the Highcharts JavaScript library for creating interactive visualizations in the web browser. Highcharts is a popular library for creating interactive charts, and highcharter provides a way to use these capabilities in R. With highcharter, you can create a wide range of visualizations, including bar charts, line charts, scatter plots, and more, and you can easily customize the appearance of your visualizations to suit your needs.

The official homepage for highcharter can be found at https://jkunst.com/highcharter/.


> visNetwork

visNetwork is an R package that provides an interface to the vis.js JavaScript library for creating interactive network visualizations. Network visualizations are used to display relationships between nodes, and visNetwork provides a way to create these types of visualizations in R. With visNetwork, you can create a wide range of network visualizations, including force-directed graphs, hierarchical graphs, and more, and you can easily customize the appearance of your visualizations to suit your needs.

The official homepage for visNetwork can be found at http://datastorm-open.github.io/visNetwork/.


> Detail tutorials for each of these packages can be found elsewhere, soon. 

### Data tables

There are several ways to include tabular data within a flexdashboard, including using R functions such as `renderTable()` or `renderDataTable()`. These functions allow you to display data from R data frames or other sources as interactive tables within your dashboard. The tables can be sorted, filtered, and paginated, and users can also export the data to various formats, such as CSV or Excel.

In addition to these R functions, you can also include tabular data within a flexdashboard using HTML tables. This allows you to control the exact layout and styling of your table, and to include custom features such as sorting and filtering.

<img src="img/datatable123.gif" width="100%">

<script src="https://gist.github.com/jinhaslab/670929077fd85d4559c1da80b9ff0c86.js"></script>



### ValueBox and Gauges

A value box is a simple, single value indicator in a flexdashboard. It's used to display a single value in a compact format, often with a small accompanying icon or color.

A gauge is a type of chart used to display a single value within a specified range. It's used to represent a measurement or value that falls within a defined range, such as the level of a particular resource (e.g., water in a tank) or the progress toward a goal.

In flexdashboard, both value boxes and gauges can be created using R code and the shiny package. Here is a simple example of how you could create a value box in flexdashboard:


<img src="img/valueboxes.png" width="100%">

<script src="https://gist.github.com/jinhaslab/80ec7ec5daae2b6b903a780b16fd4615.js"></script>


<img src="img/gauge1.gif" width="100%">

<script src="https://gist.github.com/jinhaslab/2fb94c16023545ae7c3f94cf968ba110.js"></script>

Note that the value argument in the valueBox function sets the value displayed in the box, the subtitle argument sets the text displayed beneath the value, and the icon argument sets the icon displayed next to the value.

In the gauge function, the value argument sets the value to be displayed on the gauge, the min and max arguments set the range of the gauge, the symbol argument sets the units for the value, and the gaugeSector argument sets the color and label of different sections of the gauge.










