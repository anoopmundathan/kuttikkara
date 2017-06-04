var arr = [10, 5, 7, 12, 23, 2, 34, 32, 29, 21, 45, 50, 60, 12, 23, 12, 4,23,10, 5, 34, 22, 43];
d3.select('.main-description')
	.selectAll('div')
	.data(arr)
	.enter()
	.append('div')
	.attr('class', 'chart')
	.style('height', function(r) {
		return r * 8;
	})
	.style('background', function(r) {
		return '#' + Math.random().toString(16).slice(-6);
	});