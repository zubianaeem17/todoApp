var list=document.getElementById("list");
function addTodo(){
    var todo_item=document.getElementById("todo-item");
    var li=document.createElement("li");
    var liText=document.createTextNode(todo_item.value);
    li.appendChild(liText);
    list.appendChild(li);

    var rembtn=document.createElement("button");
    var remtext=document.createTextNode("REMOVE");
    rembtn.appendChild(remtext);
    rembtn.setAttribute('class',"btnn");
    rembtn.setAttribute("onclick","removeItem(this)");


    var editBtn=document.createElement("button");
    var editText=document.createTextNode("EDIT");
    editBtn.appendChild(editText);
    editBtn.setAttribute('class','btnn');
    editBtn.setAttribute('onclick','editItem(this)');

    li.appendChild(rembtn);
    li.appendChild(editBtn);

    todo_item.value=" ";
};
function removeItem(e){
    e.parentNode.remove();
};
function removeAll(e) {
    list.innerHTML='';

};
function editItem(e){
    var val=e.parentNode.firstChild.nodeValue;
    var editValue=prompt('Enter edit value:',val);
    e.parentNode.firstChild.nodeValue=editValue;
}