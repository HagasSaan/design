function drawChart4(data, elementId) {
  // Chart4: The top 5 YouTube channels' average view changes every year.
  var margin = { top: 60, right: 20, bottom: 70, left: 100 };
  var width = 700 - margin.left - margin.right;
  var height = 500 - margin.top - margin.bottom;

  var svg = d3
    .select(elementId)
    .append("svg")
    .attr("viewBox", `0 0 700 500`)
    .attr("preserveAspectRatio", "xMinYMin meet")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg
    .append("text")
    .attr("x", width / 2)
    .attr("y", -20)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .text("Top 5 YouTube Channels");

  var youtubers = data.columns.slice(1);

  // List of groups = species here = value of the first column called group -> I show them on the X axis
  var years = d3
    .map(data, function (d) {
      return d.Year;
    })
    .keys();

  // Add X axis
  var x = d3.scaleBand().domain(years).range([0, width]).padding([0.1]);
  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSize(0));

  // Add Y axis
  var y = d3.scaleLinear().domain([0, 60000000]).range([height, 0]);
  svg.append("g").call(d3.axisLeft(y));

  // Another scale for subgroup position?
  var xYoutubers = d3
    .scaleBand()
    .domain(youtubers)
    .range([0, x.bandwidth()])
    .padding([0.05]);

  // color palette = one color per subgroup
  var color = d3.scaleOrdinal().domain(youtubers).range([
    "#ffbd59", // T-Series
    "#28ae45", // ABCkidTV - Nursery Rhymes
    "#ffd071", // SET India
    "#774902", // PewDiePie
    "#ed7b86", // MrBeast
  ]);

  // Show the bars
  svg
    .append("g")
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", function (d) {
      return "translate(" + x(d.Year) + ",0)";
    })
    .selectAll("rect")
    .data(function (d) {
      return youtubers.map(function (key) {
        return { key: key, value: d[key] };
      });
    })
    .enter()
    .append("rect")
    .attr("x", function (d) {
      return xYoutubers(d.key);
    })
    .attr("y", function (d) {
      return y(d.value);
    })
    .attr("width", xYoutubers.bandwidth())
    .attr("height", function (d) {
      return height - y(d.value);
    })
    .attr("fill", function (d) {
      return color(d.key);
    });

  var legend = svg
    .append("g")
    .attr("transform", "translate(-50," + (height + 30) + ")");

  var legendItemWidth = 140;
  var legendItemHeight = 20;

  legend
    .selectAll(".legend-item")
    .data(youtubers)
    .enter()
    .append("g")
    .attr("class", "legend-item")
    .attr("transform", (d, i) => "translate(" + i * legendItemWidth + ", 10)"); 

  legend
    .selectAll(".legend-item")
    .append("rect")
    .attr("x", -1)
    .attr("y", 0)
    .attr("width", legendItemHeight)
    .attr("height", legendItemHeight)
    .attr("fill", (d) => color(d));

  legend
    .selectAll(".legend-item")
    .append("text")
    .attr("x", legendItemHeight + 10)
    .attr("y", legendItemHeight - 5)
    .text((d) => d)
    .style("font-size", "8px");
}
