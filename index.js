function findMatching(drivers, string) {
  const newDrivers = drivers.filter(function(ans) {return ans.toLowerCase() === string.toLowerCase();})
  return newDrivers;
}

function fuzzyMatch(drivers, string) {
  const newDrivers = drivers.filter(function(ans) {return ans.startsWith(string)})
  return newDrivers;
}

function matchName(drivers, string) {
  const newDrivers = drivers.filter(function(ans) {return ans.name === string})
  return newDrivers;
}
