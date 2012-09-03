
function jsman_init_short_toggle(toggle_parent_id, container_id) {
	var toggle_parent = $('#'+toggle_parent_id)
	var container = $('#'+container_id)

	var nodes = $('DIV.view-data-node-data-field-annotation-field-annotation-value', container)

	var short_toggle = $('.short', toggle_parent)
	var long_toggle = $('.long', toggle_parent)

	var isShort = long_toggle.hasClass('unactive')

	function toggle() {
		if (!$(this).hasClass('unactive')) return
		if (isShort) {
			long_toggle.removeClass('unactive')
			short_toggle.addClass('unactive')
			nodes.show()
		} else {
			long_toggle.addClass('unactive')
			short_toggle.removeClass('unactive')
			nodes.hide()
		}

		isShort = !isShort

	}

	long_toggle.click(toggle)

	short_toggle.click(toggle)


}

function jsman_short(id, on) {
	var nodes = $('DIV.view-data-node-data-field-annotation-field-annotation-value', root)
	if (on) nodes.hide()
	else nodes.show()

	onclick="jsman_short('js-manual', true)"

}
