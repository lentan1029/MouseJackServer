var svg = d3.select('#nav').append('svg').attr('position', 'fixed')
.attr('top', 0)
.attr('bottom', 0)
.attr('width', '100%')
.attr('height', '100%')
.on('click', function(data, index) { //TODO: fix it so that midpoint is moved when the window resizes
  d3.event.preventDefault();
  middle.attr('cx', window.innerWidth / 2)
  .attr('cy', window.innerHeight / 2);
  range.attr('cx', window.innerWidth / 2)
  .attr('cy', window.innerHeight / 2);
  mousepad.attr('height', '60%')
  .attr('width', '60%')
  .attr('x', window.innerWidth * 0.2)
  .attr('y', window.innerHeight * 0.2);
});

var bg = svg.append('rect')
.attr('width', '100%')
.attr('height', '100%')
.attr('fill', 'gray')
.on('click', function(data, index) { //TODO: fix it so that midpoint is moved when the window resizes
  middle.attr('cx', window.innerWidth / 2)
  .attr('cy', window.innerHeight / 2);
  range.attr('cx', window.innerWidth / 2)
  .attr('cy', window.innerHeight / 2);
});

// var dragstarted = function(d) {
//   d3.select(this).raise().classed('active', true);
// };

// var dragged = function(d) {
//   d3.select(this).attr('cx', d3.event.x).attr('cy', d3.event.y);
// };

// var dragended = function(d) {
//   d3.select(this).classed('active', false);
//   // console.log(d3.select(this).attr('cx'), d3.select(this).attr('cy'));
// };


// var pointer = svg.append('circle')
// .attr('cx', '50%')
// .attr('cy', '50%')
// .attr('r', '2%')
// .attr('fill', 'pink')
// .call(d3.drag()
// .on('start', dragstarted)
// .on('drag', dragged)
// .on('end', dragended));

var range = svg.append('circle')
  .attr('cx', window.innerWidth / 2)
  .attr('cy', window.innerHeight / 2)
  .attr('r', '30%')
  .attr('fill', '#d3d3d3')
  .on('click', function(data, index) {
    var xMove = d3.event.x - middle.attr('cx');
    var yMove = d3.event.y - middle.attr('cy');
    console.log(d3.event.x, d3.event.y);
    console.log(xMove, yMove - window.innerHeight / 100 * 13); //TODO: hard coded movement values
  });

var mousepad = svg.append('image')
  .attr('xlink:href', 'http://138.68.49.22:3000/public/movement.png')
  .attr('height', '60%')
  .attr('width', '60%')
  .attr('x', window.innerWidth * 0.2)
  .attr('y', window.innerHeight * 0.2)
  .on('click', function(data, index) {
    var xMove = d3.event.x - middle.attr('cx');
    var yMove = d3.event.y - middle.attr('cy');
    console.log(d3.event.x, d3.event.y);
    console.log(xMove, yMove - window.innerHeight / 100 * 13); //TODO: hard coded movement values
  });
  

var middle = svg.append('circle')
  .attr('cx', window.innerWidth / 2)
  .attr('cy', window.innerHeight / 2)
  .attr('r', '0.5%')
  .attr('fill', 'pink');

