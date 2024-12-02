function drawChart1(data, elementId) {
  var tmpChannelsPerCategory = {};
  for (let i = 0; i < data.length; i++) {
    if (tmpChannelsPerCategory[data[i].Category] === undefined) {
      tmpChannelsPerCategory[data[i].Category] = 0;
    }
    tmpChannelsPerCategory[data[i].Category] += 1;
  }

  var channelsPerCategory = [];
  for (let [key, value] of Object.entries(tmpChannelsPerCategory)) {
    channelsPerCategory.push({ Category: key, ChannelsAmount: value });
  }

  var categories = data.columns.slice(2);
  var margin = { top: 60, right: 20, bottom: 70, left: 130 };
  var width = 700 - margin.left - margin.right;
  var height = 500 - margin.top - margin.bottom;

  var svg = d3
    .select(elementId)
    .append("svg")
    .attr("viewBox", `0 0 700 500`)
    .attr("preserveAspectRatio", "xMinYMin meet")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Title
  svg
    .append("text")
    .attr("x", width / 2)
    .attr("y", -20)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .text("Top 100 YouTube Channels by Category")
    .style("font-weight", "bold");

  // Add X axis
  var x = d3.scaleLinear().domain([0, 45]).range([0, width]);
  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end")
    .style("fill", "grey");  

  // Add Y axis
  var y = d3
    .scaleBand()
    .range([0, height])
    .domain(channelsPerCategory.map((d) => d.Category))
    .padding(0.1)

    svg.append("g")
    .call(d3.axisLeft(y))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(0)") 
    .style("text-anchor", "end") 
    .style("fill", "grey"); 

  // svg.append("g").call(d3.axisLeft(y));

  var color = d3
    .scaleOrdinal()
    .domain(categories)
    .range([
      "#CC3B4A",
      "#ED7B86",
      "#28AE45",
      "#5CB56F",
      "#F7A62B",
      "#FFD071",
      "#F1B963",
      "#774902",
      "#FFBD59",
    ]);

  // Bind data to bars and set color
  var bars = svg
    .selectAll("mybar")
    .data(channelsPerCategory)
    .enter()
    .append("rect")
    .attr("x", 1)
    .attr("y", (d) => y(d.Category))
    .attr("width", (d) => x(d.ChannelsAmount))
    .attr("height", y.bandwidth())
    .attr("fill", (d) => color(d.Category));
}
