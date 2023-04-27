$('.lancement').on('click', function (event){
    var lien = 'https://www.depicus.com/wake-on-lan/woli?m=88-D7-F6-50-EB-B4&i=2.11.142.16&s=255.255.255.255&p=7';
    var nouvelleFenetre = window.open(lien, '_blank');
    nouvelleFenetre.focus();
    setTimeout(function() {
        nouvelleFenetre.close();
    }, 100);
})
    // $.ajax({
    //     type: "POST",
    //     crossDomain: true,
    //     dataType: 'json',
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'X-Requested-With': 'XMLHttpRequest'
    //     },
    //     url: "https://www.depicus.com/wake-on-lan/woli?m=88-D7-F6-50-EB-B4&i=2.11.142.16&s=255.255.255.255&p=7",
    //     success: function () {
    //         console.log('ça a fonctionné');
    //     }
    // });