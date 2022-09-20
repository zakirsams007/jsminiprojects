let form = document.querySelector('.form-inline');
let itemList = document.getElementById('item');

form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();

    //get the input value
    let newItem = document.getElementById('item-text').value;

//create new li tag
    let li = document.createElement('li');
    li.className = 'list-group-items';

    //create new span tag
    let span = document.createElement('span');
    span.appendChild(document.createTextNode(newItem));

    //create delete button
    let delButton = document.createElement('button');
    delButton.className = "delete"

    delButton.appendChild(document.createTextNode('x'));

    // add elements in list
    li.appendChild(span);   
    li.appendChild(delButton);

    itemList.appendChild(li);
    
       // clear input
    document.getElementById('item-text').value =" "
}

// delete item
itemList.addEventListener('click',removeItem)
function removeItem(e){
    if(e.target.className==='delete'){
        var mainLi = e.target.parentElement;
        itemList.removeChild(mainLi)
    }    
}

