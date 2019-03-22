//client_id = Y9szWsPjYXE7XJAS5YeeakrLQx45A0BM

const SearchButton = $('#searchButton');
const SearchInput = $('#searchInput');
const ArtistList = $('.list');
const Player = $('#cover');

//Search call on button clicked
SearchButton.click(function(){
    /*let searchString = SearchInput.value.trim();
    console.log(searchString);

    FindArtist(searchString);*/
    alert('Not implemented yet!');
})

//Search call on Enter released when search input has the focus
SearchInput.keyup(function(ev){
    if(ev.keyCode === 13){
        let searchString = ev.target.value.trim();

        FindArtist(searchString);
    }
})

//Artist search function
const FindArtist = async (searchText) => {
    SC.initialize({
        client_id: 'Y9szWsPjYXE7XJAS5YeeakrLQx45A0BM'
    })

    let tracks = await SC.get('/tracks', {q:searchText})
    .then((results) => {
        ArtistList.empty();
        results.forEach(element => {
            //console.log(element);
            let artworkURL = element.artwork_url;
            let songID = element.id;

            if (artworkURL !== null){
                let artworkLink = `<img src="${artworkURL}" id="${songID}" draggable="true" ondragstart="drag(event)">`;
                ArtistList.append(artworkLink);
            }
        });
    })
}

//Drag event implementation
function drag(ev) {
    ev.dataTransfer.setData('img', ev.target.src);
    ev.dataTransfer.setData('text', ev.target.id);
}

//Drop event implementation
function drop(ev){
    let artworkURL = ev.dataTransfer.getData('img');
    let songID = ev.dataTransfer.getData('text');
    let artworkLink = `<img src="${artworkURL}">`;

    Player.empty();
    Player.append(artworkLink);

    let song = SC.stream('/tracks/' + songID)
    .then(function(song){
        song.play();
    });
}

function allowDrop(ev){
    ev.preventDefault();
}
