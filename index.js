// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(element) {
    console.log(element.name);
  });
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(element) {
    if (element.hometown === hometown) {
      console.log(element.name);
    }
  });
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

function driversByName(drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
};

function totalRevenue(drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

function averageRevenue(drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0) / drivers.length;
};
