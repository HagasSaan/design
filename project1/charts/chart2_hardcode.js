function drawChart2(elementId) {
  var likesAndSubscribes = [
    {
      likes: "1602680172",
      subscribers: "220000000",
      Category: "Gaming & Apps",
    },
    {
      likes: "220990134.6",
      subscribers: "138000000",
      Category: "Gaming & Apps",
    },
    {
      likes: "174875242.6",
      subscribers: "137000000",
      Category: "Gaming & Apps",
    },
    {
      likes: "2191405542",
      subscribers: "111000000",
      Category: "Gaming & Apps",
    },
    { likes: "1731833461", subscribers: "98100000", Category: "Gaming & Apps" },
    {
      likes: "280877652.4",
      subscribers: "97300000",
      Category: "People & Blogs",
    },
    {
      likes: "235190437.5",
      subscribers: "97200000",
      Category: "Gaming & Apps",
    },
    { likes: "543800874.3", subscribers: "89400000", Category: "Sports" },
    { likes: "210395355.3", subscribers: "85500000", Category: "Music" },
    {
      likes: "146245435.4",
      subscribers: "83500000",
      Category: "Entertainment",
    },
    {
      likes: "158230212.5",
      subscribers: "77000000",
      Category: "Gaming & Apps",
    },
    { likes: "617573972", subscribers: "75100000", Category: "Gaming & Apps" },
    { likes: "63642295.56", subscribers: "72000000", Category: "None" },
    {
      likes: "39350061.94",
      subscribers: "69400000",
      Category: "Gaming & Apps",
    },
    {
      likes: "109283010.7",
      subscribers: "69300000",
      Category: "Gaming & Apps",
    },
    { likes: "1640737553", subscribers: "69100000", Category: "Music" },
    { likes: "636497162.1", subscribers: "67300000", Category: "Music" },
    { likes: "116511691.1", subscribers: "65800000", Category: "Music" },
    {
      likes: "37475050.79",
      subscribers: "62100000",
      Category: "Gaming & Apps",
    },
    {
      likes: "12480195.26",
      subscribers: "60700000",
      Category: "Gaming & Apps",
    },
    { likes: "17219955", subscribers: "58700000", Category: "Music" },
    {
      likes: "244293352.9",
      subscribers: "57800000",
      Category: "Gaming & Apps",
    },
    {
      likes: "39953044.15",
      subscribers: "57300000",
      Category: "Gaming & Apps",
    },
    { likes: "31942735", subscribers: "57100000", Category: "Music" },
    { likes: "51156331.51", subscribers: "55500000", Category: "Music" },
    { likes: "182929448", subscribers: "53400000", Category: "Gaming & Apps" },
    { likes: "135816576.6", subscribers: "52800000", Category: "Music" },
    {
      likes: "45500762.85",
      subscribers: "52600000",
      Category: "Gaming & Apps",
    },
    {
      likes: "204913414.4",
      subscribers: "52300000",
      Category: "Gaming & Apps",
    },
    { likes: "97976609.8", subscribers: "52100000", Category: "Music" },
    {
      likes: "35849829.85",
      subscribers: "52000000",
      Category: "Gaming & Apps",
    },
    { likes: "406235612.4", subscribers: "51600000", Category: "Music" },
    { likes: "44484407.8", subscribers: "51500000", Category: "Music" },
    {
      likes: "27470145.64",
      subscribers: "51300000",
      Category: "Gaming & Apps",
    },
    { likes: "11453139.1", subscribers: "50900000", Category: "Music" },
    { likes: "25323367.15", subscribers: "49400000", Category: "Music" },
    {
      likes: "230841570.4",
      subscribers: "46900000",
      Category: "Gaming & Apps",
    },
    {
      likes: "22039543.26",
      subscribers: "46800000",
      Category: "Gaming & Apps",
    },
    {
      likes: "641782272.8",
      subscribers: "45900000",
      Category: "Gaming & Apps",
    },
    {
      likes: "37371320.82",
      subscribers: "45900000",
      Category: "Gaming & Apps",
    },
    {
      likes: "288740569.4",
      subscribers: "45600000",
      Category: "Beauty & Fashion",
    },
    {
      likes: "937427149.9",
      subscribers: "45100000",
      Category: "Gaming & Apps",
    },
    { likes: "24257065.2", subscribers: "44700000", Category: "Gaming & Apps" },
    { likes: "763318297", subscribers: "44200000", Category: "Gaming & Apps" },
    {
      likes: "196137065.7",
      subscribers: "43800000",
      Category: "Gaming & Apps",
    },
    {
      likes: "36932146.78",
      subscribers: "43700000",
      Category: "Science & Tech",
    },
    { likes: "222616795.2", subscribers: "43300000", Category: "Music" },
    {
      likes: "449621753.4",
      subscribers: "43100000",
      Category: "Gaming & Apps",
    },
    {
      likes: "5322828.259",
      subscribers: "43000000",
      Category: "Gaming & Apps",
    },
    { likes: "117320899.9", subscribers: "42300000", Category: "Music" },
    { likes: "55641776.54", subscribers: "42000000", Category: "Music" },
    { likes: "138038669.5", subscribers: "41600000", Category: "Music" },
    { likes: "39269151.6", subscribers: "41300000", Category: "Entertainment" },
    {
      likes: "766852538",
      subscribers: "40600000",
      Category: "Beauty & Fashion",
    },
    { likes: "16319224.4", subscribers: "40500000", Category: "Gaming & Apps" },
    {
      likes: "155670991.2",
      subscribers: "40500000",
      Category: "Gaming & Apps",
    },
    { likes: "814895443", subscribers: "40400000", Category: "Gaming & Apps" },
    { likes: "240442177.4", subscribers: "39800000", Category: "None" },
    { likes: "1205009.12", subscribers: "39400000", Category: "Fashion" },
    { likes: "5749294.194", subscribers: "39200000", Category: "Music" },
    {
      likes: "247337977.2",
      subscribers: "39000000",
      Category: "Beauty & Fashion",
    },
    { likes: "23751378.74", subscribers: "38300000", Category: "None" },
    { likes: "167231088.8", subscribers: "38300000", Category: "None" },
    { likes: "19334895.6", subscribers: "38200000", Category: "Music" },
    {
      likes: "46360335.99",
      subscribers: "38100000",
      Category: "Entertainment",
    },
    {
      likes: "156622828.8",
      subscribers: "37500000",
      Category: "Beauty & Fashion",
    },
    { likes: "245579644.7", subscribers: "37500000", Category: "Music" },
    { likes: "33550305.4", subscribers: "37400000", Category: "Music" },
    { likes: "18094604", subscribers: "37400000", Category: "Gaming & Apps" },
    { likes: "18852717", subscribers: "37200000", Category: "Gaming & Apps" },
    {
      likes: "240742149.4",
      subscribers: "36900000",
      Category: "Gaming & Apps",
    },
    { likes: "80346776.67", subscribers: "36800000", Category: "None" },
    {
      likes: "16923109.41",
      subscribers: "36700000",
      Category: "People & Blogs",
    },
    { likes: "188506752.5", subscribers: "36600000", Category: "Music" },
    {
      likes: "50988592.12",
      subscribers: "36300000",
      Category: "People & Blogs",
    },
    { likes: "543800874.3", subscribers: "89400000", Category: "Sports" },
    { likes: "210395355.3", subscribers: "85500000", Category: "Music" },
    {
      likes: "146245435.4",
      subscribers: "83500000",
      Category: "Entertainment",
    },
    {
      likes: "158230212.5",
      subscribers: "77000000",
      Category: "Gaming & Apps",
    },
    { likes: "617573972", subscribers: "75100000", Category: "Gaming & Apps" },
    { likes: "63642295.56", subscribers: "72000000", Category: "None" },
    {
      likes: "39350061.94",
      subscribers: "69400000",
      Category: "Gaming & Apps",
    },
    {
      likes: "109283010.7",
      subscribers: "69300000",
      Category: "Gaming & Apps",
    },
    { likes: "1640737553", subscribers: "69100000", Category: "Music" },
    { likes: "636497162.1", subscribers: "67300000", Category: "Music" },
  ];
  var categoriesSet = new Set([
    "Gaming & Apps",
    "People & Blogs",
    "Sports",
    "Music",
    "Entertainment",
    "None",
    "Beauty & Fashion",
    "Science & Tech",
    "Fashion",
  ]);

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
    .call(d3.axisBottom(x).ticks(10))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end")
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
  svg.append("g").call(d3.axisLeft(y).ticks(7)).select(".domain").remove();

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
    .on("end", function (event) {
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
