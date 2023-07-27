// findMatching()
// 1) returns all drivers that match the passed in name
// 2) returns matching drivers if case does not match but letters do
// 3) returns an empty array if there is no match
function findMatching(drivers, driverName) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === driverName.toLowerCase()
  );
}

// fuzzyMatch()
// 1) returns a driver if beginning provided letters match
// 2) does not return drivers if only middle or ending letters match
function fuzzyMatch(drivers, letters) {
  return drivers.filter((driver) => driver.startsWith(letters));
}

// matchName()
// 1) accesses the data structure to check if name matches
function matchName(drivers, name) {
  return drivers.filter((driver) => driver.name === name);
}
