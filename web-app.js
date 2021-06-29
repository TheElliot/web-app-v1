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

   

    // === === === === === === === === === === === === ===
    // === === === ===   global functions  === === === ===
    // === === === ===      begin here     === === === ===
    // === === === === === === === === === === === === ===


    function byID(element) {
        return document.getElementById(element);
    }

    function addItem(item) {
        const list_item = document.createElement("li");
        const node = document.createTextNode(item);
        list_item.appendChild(node);
        byID("todo-items").appendChild(list_item);
    }

    function submitItem() {
        const item_value = byID("add-item").value;
        addItem(item_value);
    }

    byID("item-submit").addEventListener("click", submitItem);
 

}());