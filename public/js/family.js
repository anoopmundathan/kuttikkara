var tree = [
	{
		name: "Raman",
		age: 50
	},
	{
		name: "Seetha",
		age: 40
	},
	{
		name: "Lavan",
		age: 9
	},
	{
		name: "Kusan",
		age: 10
	},
	

];
var svg = d3.select('.main-description')
			.append('svg')
			.attr('width', 500)
			.attr('height', 500);
// data binding
svg.selectAll('circle')
	.data(tree)
	.enter()
	.append('circle')
	.attr('cx', function() {
		var x = Math.floor(Math.random() * 500);
		return x;
	})
	.attr('cy', function() {
		var y = Math.floor(Math.random() * 500);
		return y;
	})
	.attr('r', function(d) {
		return d.age * 8;
	})
	.attr('fill', function() {
		var color = '#' + Math.random().toString(16).slice(-6);
		return color;
	})
