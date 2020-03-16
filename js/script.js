const abuse = ['гусь', 'дурак', 'дура'];

document.querySelector('button').onclick = () => {
    var text = document.querySelector('textarea').value;
    console.log(text);
    for(var i = 0; i < abuse.length; i++) {
        while (text.indexOf(abuse[i]) != -1) {
            text = text.replace(abuse[i], star(abuse[i].length));
        };
    };
    document.getElementById('out').innerHTML += '<div class="comment">' + text + '</div>';
};

function star(n) {
    var out = '';
    for (var i = 0; i < n; i++) {
        out += '*';
    };
    return out;
};