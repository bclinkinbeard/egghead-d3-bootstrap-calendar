
var dataset = _.range(31).map(function () {
  var val = Math.random();
  if (Math.round(Math.random())) {
    return val;
  } else {
    return -(val);
  }
});

var timeScale = d3.time.scale()
  .domain([new Date('2013-03-01'), new Date('2013-03-31')])
  .range(['orange', 'green']);

var colorScale = d3.scale.linear()
  //.domain([0, dataset.length / 2, dataset.length])
  .domain([-1, 0, 1])
  .range(['red', 'white', 'green']);

var dayCells = d3
  .selectAll('.cal-day-inmonth')
  .data(dataset)
  .style('background-color', function (d, i) {
    return colorScale(d);
  });
