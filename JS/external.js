var w = window.innerWidth;
var h = window.innerHeight;

var data = [10, 60, 40, 20, 100];
var mySVG = d3.select("body").select("#svg_01");

function draw () {
    mySVG
    .attr("width", w)
    .attr("height", h);

    mySVG.selectAll("circle").remove();

    mySVG.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function(d){return d*3;})
    .attr("cy", "150px")
    .attr("r", "10")
    .style("fill", "purple");
}

draw();


