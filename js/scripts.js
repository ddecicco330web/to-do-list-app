function newItem(){
    let list = $('#list');
    let li = $('<li></li>');
    let inputValue = $('#input').val();

    li.append(inputValue);
    

    let deleteButton = $('<crossOutButton></crossOutButton>');
    deleteButton.append(document.createTextNode('X'));

    deleteButton.on('click', () => {
        li.addClass('delete');
    });

    li.append(deleteButton);

    li.on('dblclick', () => {
        li.addClass('strike');
    });

    list.append(li);
    list.sortable();
}