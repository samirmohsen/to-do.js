var items = [
    {
        itemName : "play handball",
        itemDetails : "play handball with frinds",
        itemDate : "8/4/2016",
        itemRate : "4"
    },
    {
        itemName : "play football",
        itemDetails : "play football with frinds",
        itemDate : "27/8/2019",
        itemRate : "2"
    },
    {
        itemName : "learn css",
        itemDetails : "learn css from udimy course",
        itemDate : "2/1/2021",
        itemRate : "3"
    },
];

function startList() {
    items.forEach(function(element, index){
        var oneRow = document.querySelector(".listHeader");
        var newRow = oneRow.cloneNode(true);
        newRow.querySelector(".itemName").innerText = element.itemName;
        newRow.querySelector(".itemDetails").innerText = element.itemDetails;
        newRow.querySelector(".itemDate").innerText = element.itemDate;
        newRow.querySelector(".itemRate").innerText = "";

        var oneStar = document.querySelector("#starRate").cloneNode(true);
        for(var i = 0; i < parseInt(element.itemRate); i++){
            newRow.querySelector(".itemRate").innerHTML += (oneStar.innerHTML);
            console.log(i);
        }

        newRow.querySelector(".operations").innerHTML = "";
        newRow.querySelector(".operations").innerHTML = "<i onclick= 'deleteItem(this);' class='fa-solid fa-trash-can'></i> &nbsp <i class='fa-solid fa-pen-to-square'></i> &nbsp<i class='fa-solid fa-angles-up'></i> &nbsp <i class='fa-solid fa-angles-down'></i>";

        document.querySelector(".itemsList").appendChild(newRow);
    });
};

// ////////////// delete operation //////////////////////

var deletedRow;

function deleteItem(deleteIcon) {
    document.querySelector("#lightScreen").style.display = "block";
    document.querySelector("#deleteDialoug").style.display = "block";
    0
    var deleteItemName = deleteIcon.parentNode.parentNode.querySelector(".itemName").innerText;
    document.querySelector("#deleteItemName").innerText = deleteItemName;

    deletedRow = deleteIcon.parentNode.parentNode;
}
function noDelete() {
    document.querySelector("#lightScreen").style.display = "none";
    document.querySelector("#deleteDialoug").style.display = "none";
}
function yesDelete() {
    deletedRow.remove();
    noDelete();
}

/* ////////////////////// create item//////////// */

function createItem() {
    document.querySelector("#lightScreen").style.display = "block"
    document.querySelector("#createDialoug").style.display = "block"
}
function cancelNew() {
    document.querySelector("#lightScreen").style.display = "none"
    document.querySelector("#createDialoug").style.display = "none"
}
function saveNew() {
    var itemName = document.querySelector("#itemName").value;
    var itemDetails = document.querySelector("#itemDetails").value;
    var itemDate = document.querySelector("#itemDate").value;
    var itemRate = document.querySelector("input[name= 'itemRate']:checked").value;

    var oneRow = document.querySelector(".listHeader");
    var newRow = oneRow.cloneNode(true);
    newRow.querySelector(".itemName").innerText = itemName;
    newRow.querySelector(".itemDetails").innerText = itemDetails;
    newRow.querySelector(".itemDate").innerText = itemDate;

    newRow.querySelector(".itemRate").innerText = "";
    var oneStar = document.querySelector("#starRate").cloneNode(true);
    for(var i = 0; i < parseInt(itemRate); i++){
        newRow.querySelector(".itemRate").innerHTML += (oneStar.innerHTML);
    }

    newRow.querySelector(".operations").innerHTML = "";
    newRow.querySelector(".operations").innerHTML = "<i onclick= 'deleteItem(this);' class='fa-solid fa-trash-can'></i> &nbsp <i onclick='showUpdateDialoug(this);' class='fa-solid fa-pen-to-square' onclick= 'showUpdateDialoug(this);'></i> &nbsp <i class='fa-solid fa-angles-up'></i> &nbsp <i class='fa-solid fa-angles-down'></i>";

    document.querySelector(".itemsList").appendChild(newRow);
    cancelNew();
}


/* ////////////////////// update item//////////// */

var updatedItem;

function showUpdateDialoug(updateIcon) {
    updatedItem = updateIcon.parentNode.parentNode;

    document.querySelector("#lightScreen").style.display = "block";
    document.querySelector("#updateDialoug").style.display = "block";

    document.querySelector("#updatedItemName").value = updateItem.querySelector(".itemName").innerText;
    document.querySelector("#updatedItemDetails").value = updateItem.querySelector(".itemDetails").innerText;
    document.querySelector("#updatedItemDate").value = updateItem.querySelector(".itemDate").innerText;
    
    //rate//
    var itemRate = updateItem.querySelectorAll(".itemRate i").length;
    var allRadios = document.querySelector("#updateDialoug input[name= 'updatedItemRate']");

    allRadios[itemRate - 1].checked = true;
}
    /****** */
    function cancelUpdate() {
        document.querySelector("#lightScreen").style.display = "none";
        document.querySelector("#updateDialoug").style.display = "none";
    }

    function updateItem() {
        
    var itemName = document.querySelector("#updatedItemName").value;
    var itemDetails = document.querySelector("#updatedItemDetails").value;
    var itemDate = document.querySelector("#updatedItemDate").value;
    var itemRate = document.querySelector("input[name= 'updatedItemRate']:checked").value;

    updateItem.querySelector(".itemName").innerText = itemName;
    updateItem.querySelector(".itemDetails").innerText = itemDetails;
    updateItem.querySelector(".itemDate").innerText = itemDate;
    updateItem.querySelector(".itemRate").innerText = itemRate;
    

    var oneStar = document.querySelector("#starRate").cloneNode(true);
    updateItem.querySelector(".itemRate").innerHTML = "";
    for(var i = 0; i < parseInt(element.itemRate); i++){
        updateItem.querySelector(".itemRate").innerHTML += (oneStar.innerHTML);
    }
    
    
    newRow.querySelector(".operations").innerHTML = "";
    newRow.querySelector(".operations").innerHTML = "<i class='fa-solid fa-trash-can'></i> &nbsp <i onclick='showUpdateDialoug(updateIcon);' class='fa-solid fa-pen-to-square' onclick= 'showUpdateDialoug(this);'></i> &nbsp <i class='fa-solid fa-angles-up'></i> &nbsp <i class='fa-solid fa-angles-down'></i>";


    cancelUpdate();
    }

















