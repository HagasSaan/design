function drawChart6(data, elementId, country = "IN") {
  // Chart6: The number of YouTube channels by category
  var countries = getCountries(data);
  var dropdownButton = d3
    .select(elementId)
    .append("select")
    .attr("class", "test");

  dropdownButton
    .selectAll("myOptions")
    .data(countries)
    .enter()
    .append("option")
    .text(function (d) {
      return d;
    })
    .attr("value", function (d) {
      return d;
    })
    .style("text-align", "center");

  var margin = { top: 60, right: 10, bottom: 70, left: 100 };
  var width = 700 - margin.left - margin.right;
  var height = 500 - margin.top - margin.bottom;

  var svg = d3
    .select(elementId)
    .append("svg")
    .attr("viewBox", `0 0 700 500`)
    .attr("preserveAspectRatio", "xMinYMin meet")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var x = d3.scaleLinear().domain([0, 50]).range([0, width]);
  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

  // Add Y axis
  var y = d3
    .scaleBand()
    .range([0, height])
    .domain(
      data.map(function (d) {
        return d.Category;
      }),
    )
    .padding(0.2);

  svg.append("g").call(d3.axisLeft(y));

  dropdownButton.on("change", function (d) {
    var selectedOption = d3.select(this).property("value");
    updateChart(selectedOption);
  });

  function updateChart(country) {
    var filteredData = filterByCountry(data, country);
    var channelsPerCategory = getChannelsPerCategory(filteredData);

    svg.selectAll("rect").remove();
    svg
      .selectAll("mybar")
      .data(channelsPerCategory)
      .enter()
      .append("rect")
      .attr("x", 1)
      .attr("y", function (d) {
        return y(d.Category);
      })
      .attr("width", function (d) {
        return x(d.ChannelsAmount);
      })
      .attr("height", y.bandwidth())
      .attr("fill", "#ffbd59");
  }

  updateChart(country);
}

function filterByCountry(data, country) {
  return data.filter(function (d) {
    return d.Country == country;
  });
}

function getCountries(data) {
  var countries = [];
  for (let i = 0; i < data.length; i++) {
    if (countries.indexOf(data[i].Country) == -1) {
      countries.push(data[i].Country);
    }
  }

  return countries;
}

function getChannelsPerCategory(data) {
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

  return channelsPerCategory;
}
