

$('#burger-icon-btn').on('change', function () {
    let selected = $(this)
    
    if (selected.prop("checked")) {
        $('#header-drop').show();
    } else {
        $('#header-drop').hide();
    }
});