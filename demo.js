var dataset = _.range(31).map(function () {
  if (Math.round(Math.random())) {
    return Math.random();
  } else {
    return -(Math.random());
  }
});

var colorScale = d3.scale.linear()
  .domain([-1, 0, 1])
  .range(['red', 'white', 'green']);

var dayCells = d3
  .selectAll('.cal-day-inmonth')
  .data(dataset)
  .style('background-color', function (d, i) {
    return colorScale(d);
  });
