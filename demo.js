
var colorScale = d3.scale.linear()
  .domain([0, 30])
  .range(['white', 'green']);

var dayCells = d3
  .selectAll('.cal-day-inmonth')
  .style('background-color', function (d, i) {
    return colorScale(i);
  });
