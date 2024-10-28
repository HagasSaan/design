function drawChart8(data, elementId) {
  // Chart8: The country that has the most youtubers in the top 100 list.

  var tmpYoutubersPerCountry = {};

  for (let i = 0; i < data.length; i++) {
    if (tmpYoutubersPerCountry[data[i].Country] === undefined) {
      tmpYoutubersPerCountry[data[i].Country] = 0;
    }
    tmpYoutubersPerCountry[data[i].Country] += 1;
  }

  var top100YoutubersAmount = null;
  var top100YoutubersCountry = null;

  for (let [key, value] of Object.entries(tmpYoutubersPerCountry)) {
    if (top100YoutubersAmount === null) {
      top100YoutubersAmount = value;
      top100YoutubersCountry = key;
      continue;
    }

    if (value > top100YoutubersAmount) {
      top100YoutubersAmount = value;
      top100YoutubersCountry = key;
    }
  }

  d3.select(elementId).text(top100YoutubersCountry);
}
