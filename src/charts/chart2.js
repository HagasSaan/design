function drawChart2(data, elementId) {
  var likesAndSubscribes = [];
  var categoriesSet = new Set();

  for (let i = 0; i < data.length; i++) {
    likesAndSubscribes.push({
      likes: data[i].Likes,
      subscribers: data[i].followers,
      category: data[i].Category,
    });
    categoriesSet.add(data[i].Category);
  }

  var categories = Array.from(categoriesSet);
  var margin = { top: 70, right: 20, bottom: 90, left: 120 };
  var width = 700 - margin.left - margin.right;
  var height = 500 - margin.top - margin.bottom;

  // svg
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
    .text("Likes and Subscribers");

  // X
  var x = d3.scaleLinear().domain([30000000, 100000000]).range([0, width]);
  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).ticks(8))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end")
    .style("fill", "grey")
    .select(".domain")
    .remove();

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

  // Y
  var y = d3.scaleLinear().domain([0, 1000000000]).range([height, 0]).nice();

  svg
  .append("g")
  .call(d3.axisLeft(y).ticks(7))
  .selectAll("text")
  .attr("transform", "translate(-10,0)rotate(0)")
  .style("text-anchor", "end")
  .style("fill", "grey"); 

  svg
    .append("text")
    .attr("text-anchor", "end")
    .attr("x", width / 2)
    .attr("y", height + margin.bottom - 10)
    .text("Subscribers");

  // Y label
  svg
    .append("text")
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left + 40)
    .attr("x", -height / 2)
    .text("Likes");

  var circles = svg
    .append("g")
    .selectAll("dot")
    .data(likesAndSubscribes)
    .enter()
    .append("circle")
    .attr("cx", function (d) {
      return x(d.subscribers);
    })
    .attr("cy", function (d) {
      return y(d.likes);
    })
    .attr("r", 2)
    .attr("fill", (d) => {
      return color(d.category);
    });

  var brush = d3
    .brushX()
    .extent([
      [0, 0],
      [width, height],
    ])
    .on("end", function(event) { 
      brushed(event);
    });

  svg.append("g").attr("class", "brush").call(brush);

  function brushed() {
    const selection = d3.event.selection; 
    if (!selection) return; 
    const [x0, x1] = selection;

    console.log(`x0: ${x0}, x1: ${x1}`);

    circles
      .attr("fill", (d) => {
        const isSelected = x(d.subscribers) >= x0 && x(d.subscribers) <= x1;
        return isSelected ? "orange" : color(d.category);
      })
      .attr("stroke", (d) => {
        const isSelected = x(d.subscribers) >= x0 && x(d.subscribers) <= x1;
        return isSelected ? "black" : "none"; 
      });
  }
}
