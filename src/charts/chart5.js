function drawChart5(data, elementId) {
  // Chart5: The top 5 YouTube channels’ Quarterly income.
  //     • Use group bar horizontal chart
  data.sort((a, b) => b.followers - a.followers);
  var top5youtubeChannels = data.slice(0, 5);

  console.log(top5youtubeChannels);

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
    .text("Top 5 Channel's Quarterly Income");

  var subgroups = ["Income q1", "Income q2", "Income q3", "Income q4"];

  var groups = d3
    .map(top5youtubeChannels, function (d) {
      return d.ChannelName;
    })
    .keys();

  console.log("groups", groups, "subgroups", subgroups);

  // Add X axis
  var x = d3.scaleLinear().domain([0, 1000000]).range([0, width]);
  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSize(0))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("fill", "grey")
    .style("text-anchor", "end");

  // Add Y axis
  var y = d3.scaleBand().domain(groups).range([height, 0]).padding(0.20);
  svg
  .append("g")
  .call(d3.axisLeft(y))
  .selectAll("text")
  .attr("transform", "translate(-1,0)rotate(0)") 
  .style("text-anchor", "end")
  .style("fill", "grey");

  // Another scale for subgroup position?
  var ySubgroup = d3
    .scaleBand()
    .domain(subgroups)
    .range([0, y.bandwidth()])
    .padding([0.09]);

  // color palette = one color per subgroup
  var color = d3
    .scaleOrdinal()
    .domain(subgroups)
    .range(["#ffbd59", "#28ae45", "#cc3b4a", "#774902"]);

  // Show the bars
  svg
    .append("g")
    .selectAll("g")
    .data(top5youtubeChannels)
    .enter()
    .append("g")
    .attr("transform", function (d) {
      return "translate(0," + y(d.ChannelName) + ")";
    })
    .selectAll("rect")
    .data(function (d) {
      return subgroups.map(function (key) {
        return { key: key, value: d[key] };
      });
    })
    .enter()
    .append("rect")
    .attr("x", 1)
    .attr("y", function (d) {
      return ySubgroup(d.key);
    })
    .attr("height", ySubgroup.bandwidth())
    .attr("width", function (d) {
      return x(d.value);
    })
    .attr("fill", function (d) {
      return color(d.key);
    });
}
