function drawChart7(data, elementId) {
  // Chart7: The category that has most followers
  //     • Find the category with the most followers by adding up all the followers by each category.
  var tmpFollowersPerCategoty = {};

  for (let i = 0; i < data.length; i++) {
    if (tmpFollowersPerCategoty[data[i].Category] === undefined) {
      tmpFollowersPerCategoty[data[i].Category] = 0;
    }
    tmpFollowersPerCategoty[data[i].Category] += parseInt(data[i].followers);
  }

  var topFollowers = null;
  var topCategoryByFollowers = null;

  for (let [key, value] of Object.entries(tmpFollowersPerCategoty)) {
    if (topFollowers === null) {
      topFollowers = value;
      topCategoryByFollowers = key;
      continue;
    }

    if (value > topFollowers) {
      topFollowers = value;
      topCategoryByFollowers = key;
    }
  }

  d3.select(elementId).text(
    "The category that has most followers: " + topCategoryByFollowers,
  );
}
