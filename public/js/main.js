//client_id = Y9szWsPjYXE7XJAS5YeeakrLQx45A0BM

const SearchButton = $('#searchButton');
const SearchInput = $('#searchInput');

//Search call on button clicked
SearchButton.click(function(){
    Busqueda('Botón');
})

//Search call on Enter released when search input has the focus
SearchInput.keyup(function(ev){
    if(ev.keyCode === 13){
        Busqueda('Input');
    }
})

//Artist search function
function Busqueda(searchText){
    console.log(searchText);
}