function getCurrentlyReading(user_id, limit) {
    var rss_url = 'https://www.goodreads.com/review/list_rss/' + user_id + '?shelf=currently-reading';

    $.get(rss_url, function (data) {
        var item = $(data).find("item");
        for (var i = 0; i < 5; i++) {
                var content = item[i].textContent.split('\n');
                $('#currently-reading').append("<a href='" + content[1] + "'><img class='portada' src='" + content[8] + "' /></a>");
        }
    });

    $('#user').append("Visita mi perfil en <a href='https://www.goodreads.com/user/show/" + user_id + "'>Goodreads</a>");
}

function getRead(user_id) {
    var rss_url = 'https://www.goodreads.com/review/list_rss/' + user_id + '?shelf=read';

    $.get(rss_url, function (data) {
        var item = $(data).find("item");
        for (var i = 0; i < 5; i++) {
                var content = item[i].textContent.split('\n');
                $('#read').append("<a href='" + content[1] + "'><img class='portada' src='" + content[8] + "' /></a>");
        }
    });

    $('#user').append("Visita mi perfil en <a href='https://www.goodreads.com/user/show/" + user_id + "'>Goodreads</a>");
}

function getToRead(user_id) {
    var rss_url = 'https://www.goodreads.com/review/list_rss/' + user_id + '?shelf=to-read';

    $.get(rss_url, function (data) {
        var item = $(data).find("item");
        for (var i = 0; i < 5; i++) {
                var content = item[i].textContent.split('\n');
                $('#to-read').append("<a href='" + content[1] + "'><img class='portada' src='" + content[8] + "' /></a>");
        }
    });

    $('#user').append("Visita mi perfil en <a href='https://www.goodreads.com/user/show/" + user_id + "'>Goodreads</a>");
}