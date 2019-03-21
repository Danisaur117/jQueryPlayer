//client_id = Y9szWsPjYXE7XJAS5YeeakrLQx45A0BM

const SearchButton = $('#searchButton');
const SearchInput = $('#searchInput');
const ArtistList = $('.list');

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
            let artworkURL = element.artwork_url;
            if (artworkURL !== null){
                let artworkLink = `<img src="${artworkURL}">`;
                ArtistList.append(artworkLink);
            }
        });
    })
}
