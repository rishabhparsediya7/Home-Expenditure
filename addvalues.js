function addItems() {

    var ul = document.getElementById('item');
    var li = document.createElement("li");
    li.id = "items";


    var item = document.createElement("input");
    item.type = "text";
    item.className = "text-line";
    item.name = "item"
    item.placeholder = "Items";

    var amt = document.createElement("input");
    amt.type = "text";
    amt.className = "text-line";
    amt.name = "amount"
    amt.placeholder = "Amount";

    li.appendChild(item);
    li.appendChild(amt);
    ul.appendChild(li);
}

function getTotal() {
    var arr = document.getElementsByName('amount');
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseInt(arr[i].value))
            total += parseInt(arr[i].value);
    }
    document.getElementById("total").innerHTML = "Your total is: " + total;
    document.getElementById("total").style.display = "block";
}