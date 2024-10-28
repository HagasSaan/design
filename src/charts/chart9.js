function drawChart9(data, elementId) {
  // Chart9: The name of the channel with the most subscribers

  var maxSubscribers = null;
  var maxSubscribersInfo = null;
  for (let i = 0; i < data.length; i++) {
    if (maxSubscribers === null) {
      maxSubscribers = data[i].followers;
      maxSubscribersInfo = data[i];
      continue;
    }

    var info = data[i];
    if (info.followers > maxSubscribers) {
      maxSubscribers = info.followers;
      maxSubscribersInfo = info;
    }
  }

  d3.select(elementId).text(maxSubscribersInfo.ChannelName);
}
