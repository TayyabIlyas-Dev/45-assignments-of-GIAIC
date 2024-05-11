function make_album(artistName, albumTittle, tracks) {
    var album = {
        artist: artistName,
        title: albumTittle,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album('Rahat Fatah', 'Udaas');
var album2 = make_album('Chahat Fatah', 'Taali', 20);
var album3 = make_album('Junaid ', 'Dill Badaldy', 6);
console.log(album1);
console.log(album2);
console.log(album3);
