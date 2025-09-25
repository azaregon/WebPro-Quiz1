

$('#burger-icon-btn').on('change', function () {
    let selected = $(this)
    
    if (selected.prop("checked")) {
        $('#header-drop').show();
    } else {
        $('#header-drop').hide();
    }
});

function fillTheList(data) {
    for (i=0 ; i < data.length ; i++ ) {
        $('#spot-list').append(`
            <!-- list-item-start -->
            <div class="list-item">
                <div>
                    <h3 class="font-heading fg-text" >${data[i].title}</h3>
                    <p class="font-body fg-text" >${data[i].desc.substring(0,100)}...</p>
                    <a href="/quiz1/tourist/item/?id=${i}" class="highlighted-link"> Check_it_out</a>
                </div>
                <div>
                    <img src='${data[i].img_src}' alt=''/>
                </div>
            </div>
            <!-- list-item-end -->
            `)

        // $(selector).append(content);
    }
}


$(document).ready(function () {
    fetch('/quiz1/tourist/data.json').then((res) => {
        jsonres = res.json()

        return jsonres
    }).then((jsonres) => {
        console.log(jsonres)
        fillTheList(jsonres)
    })
});