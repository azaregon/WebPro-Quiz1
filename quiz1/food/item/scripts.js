
$('#burger-icon-btn').on('change', function () {
    let selected = $(this)
    
    if (selected.prop("checked")) {
        $('#header-drop').show();
    } else {
        $('#header-drop').hide();
    }
});



$(document).ready(function () {
    let the_url = new URL(window.location.href)
    id = the_url.searchParams.get('id')[0];
    fetch('/quiz1/food/data.json').then((res) => {
        jsonres = res.json()

        return jsonres
    }).then((jsonres) => {
        console.log(jsonres[id])
        $('#desc').html(jsonres[id].desc);
        $('#spot-name').text(jsonres[id].title);
        $('#img_src').attr('src', jsonres[id].img_src)
        // $(selector).text(textString);
    })
});