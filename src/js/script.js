@@include('bootstrap.min.js')
@@include('jquery.min.js')
@@include('jquery-ui.min.js')

$( function() {
	$("#border-size").slider({
		range: "max",
		min: 1,
		max: 10,
		value: 2,
		slide: function(event, ui) {
			$("#border-size-value").text(ui.value+'px');
		}
	});
	$("#border-size-value").text($("#border-size").slider("value")+'px');

	$("#border-radius").slider({
		range: "max",
		min: 1,
		max: 100,
		value: 15,
		slide: function(event, ui) {
			$("#border-radius-value").text(ui.value+'px');
		}
	});
	$("#border-radius-value").text($("#border-radius").slider("value")+'px');
});