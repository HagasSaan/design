function drawChart3(data, elementId) {
  // Chart3: Each country's number of youtubers
  var tmpYoutubersPerCountry = {};

  for (let i = 0; i < data.length; i++) {
    if (tmpYoutubersPerCountry[data[i].Country] === undefined) {
      tmpYoutubersPerCountry[data[i].Country] = 0;
    }
    tmpYoutubersPerCountry[data[i].Country] += 1;
  }

  var youtubersPerCountry = [];
  for (let [key, value] of Object.entries(tmpYoutubersPerCountry)) {
    youtubersPerCountry.push({ Country: key, YoutubersAmount: value });
  }

  var margin = { top: 60, right: 20, bottom: 60, left: 70 };
  var width = 700 - margin.left - margin.right;
  var height = 500 - margin.top - margin.bottom;

  //Create SVG element
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
    .attr("y", -30)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .text("Youtubers Per Country");

  var x = d3
    .scaleBand()
    .range([0, width])
    .domain(
      data.map(function (d) {
        return d.Country;
      })
    )
    .padding(0.2);

  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("fill", "grey")
    .style("text-anchor", "end");

  // Add Y axis
  var y = d3.scaleLinear().domain([0, 45]).range([height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(0)")
    .style("text-anchor", "end")
    .style("fill", "grey");

  svg
    .selectAll("mybar")
    .data(youtubersPerCountry)
    .enter()
    .append("rect")
    .attr("x", function (d) {
      return x(d.Country);
    })
    .attr("y", function (d) {
      return y(d.YoutubersAmount);
    })
    .attr("width", x.bandwidth())
    .attr("height", function (d) {
      return height - y(d.YoutubersAmount);
    })
    .attr("fill", "#ffbd59");
}
