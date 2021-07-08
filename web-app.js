// web-app.js JavaScript
// don't forget to validate at https://jslint.com

/*jslint devel: true, browser: true */

// self-executing "global" anonymous function
// it's here to keep variable and function scope
// contained within our script
(function() {

    // use strict enforces more rules
    // rules make us better programmers
    "use strict";

    // === === === === === === === === === === === === ===
    // === === === ===   global variables  === === === ===
    // === === === ===      begin here     === === === ===
    // === === === === === === === === === === === === ===

    let items = [];

    // === === === === === === === === === === === === ===
    // === === === ===   global functions  === === === ===
    // === === === ===      begin here     === === === ===
    // === === === === === === === === === === === === ===


    function byID(element) {
        return document.getElementById(element);
    }

    function createByName(name) {
        return document.createElement(name);
    }

    function createNode(element) {
        return document.createTextNode(element);
    }

    function writeLocalStorage() {
        try {
            const raw_storage = JSON.stringify(items);
            localStorage.setItem("items", raw_storage);
        } catch (error) {
            console.log("localStorage SetItem Error:" + error);
        }
    }

    function readLocalStorage() {
        try {
            const raw_storage = localStorage.getItem("items");
            items = JSON.parse(raw_storage) ?? items;
        } catch (error) {
            console.log("localStorage GetItem Error:" + error);
        }
    }

    function deleteItem(event) {
        const button_id = event.srcElement.id;
        const list_item = button_id.replace("delete-button-", "todo-item-");
        const index = button_id.replace("delete-button-", "");
        byID(button_id).removeEventListener("click", deleteItem);
        byID(button_id).remove();
        byID(list_item).remove();
        items.splice(index, 1);
        writeLocalStorage();
    }

    function printItem(item, index) {
        const list_item = createByName("li");
        const list_node = createNode(item);
        list_item.appendChild(list_node);
        byID("todo-items").appendChild(list_item);
        const list_item_id = "todo-item-" + index;
        list_item.setAttribute("id", list_item_id);

        const delete_button = createByName("button");
        const button_node = createNode("delete");
        delete_button.appendChild(button_node);
        list_item.appendChild(delete_button);
        const button_id = "delete-button-" + index;
        delete_button.setAttribute("id", button_id);
        byID(button_id).addEventListener("click", deleteItem);
    }

    function submitItem() {
        const item_value = byID("add-item").value;
        items.push(item_value);
        byID("todo-items").innerHTML = "";
        items.forEach(printItem);
        writeLocalStorage();
    }

    function clearAddField() {
        byID("add-item").value = "";
    }

    readLocalStorage();
    items.forEach(printItem);

    byID("item-submit").addEventListener("click", submitItem);
    byID("add-item").addEventListener("focus", clearAddField);

}());