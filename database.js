const DB_NAME = "SunWahInventoryDB";

const DB_VERSION = 1;

const STORE_NAME = "products";


let db;



function initDatabase(){


let request =
indexedDB.open(
DB_NAME,
DB_VERSION
);



request.onupgradeneeded =
function(event){


db =
event.target.result;



if(
!db.objectStoreNames.contains(STORE_NAME)
){


let store =
db.createObjectStore(
STORE_NAME,
{
keyPath:"barcode"
}
);



store.createIndex(
"name",
"name",
{
unique:false
}
);


}


};



request.onsuccess =
function(event){

db =
event.target.result;

console.log(
"SunWah Database Ready"
);

};



}



function addProduct(product){


let transaction =
db.transaction(
STORE_NAME,
"readwrite"
);



let store =
transaction.objectStore(
STORE_NAME
);



store.put(product);

}




function getProduct(barcode){


return new Promise(
(resolve)=>{


let transaction =
db.transaction(
STORE_NAME,
"readonly"
);



let store =
transaction.objectStore(
STORE_NAME
);



let request =
store.get(barcode);



request.onsuccess =
function(){

resolve(
request.result
);

};



});


}



function getAllProducts(){


return new Promise(
(resolve)=>{


let transaction =
db.transaction(
STORE_NAME,
"readonly"
);



let store =
transaction.objectStore(
STORE_NAME
);



let request =
store.getAll();



request.onsuccess =
function(){

resolve(
request.result
);

};


});


}
