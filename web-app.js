// web-app.js JavaScript
// don't forget to validate at https://jslint.com

/*jslint devel: true, browser: true */

// self-executing "global" anonymous function
// it's here to keep variable and function scope
// contained within our script
(function () {

    // use strict enforces more rules
    // rules make us better programmers
    "use strict";

    // === === === === === === === === === === === === ===
    // === === === ===   global variables  === === === ===
    // === === === ===      begin here     === === === ===
    // === === === === === === === === === === === === ===

    const items = [];
   

    // === === === === === === === === === === === === ===
    // === === === ===   global functions  === === === ===
    // === === === ===      begin here     === === === ===
    // === === === === === === === === === === === === ===


    function byID(element) {
        return document.getElementById(element);
    }

    function printItem(item, index) {
        const list_item = document.createElement("li");
        const list_node = document.createTextNode(item);
        list_item.appendChild(list_node);
        byID("todo-items").appendChild(list_item);

        const delete_button = document.createElement("button");
        const button_node = document.createTextNode("delete");
        delete_button.appendChild(button_node);
        list_item.appendChild(delete_button);
        delete_button.setAttribute("id","delete-button-" + index);
    }

    function submitItem() {
        const item_value = byID("add-item").value;
        items.push(item_value);
        byID("todo-items").innerHTML = "";
        items.forEach(printItem);
    }

    byID("item-submit").addEventListener("click", submitItem);
 

}());