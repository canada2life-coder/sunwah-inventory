initDatabase();



function openProductPage(){


document.body.innerHTML = `


<header>

<div class="logo">
SW
</div>


<h1>
商品管理
</h1>


<p>
Product Management
</p>


</header>



<div class="status">


<h2>
新增商品
</h2>


<input id="barcode"
placeholder="Barcode"
style="width:100%;height:45px;">


<br><br>


<input id="name"
placeholder="商品名稱"
style="width:100%;height:45px;">


<br><br>


<input id="category"
placeholder="分類"
style="width:100%;height:45px;">


<br><br>


<input id="stock"
type="number"
placeholder="目前庫存"
style="width:100%;height:45px;">


<br><br>


<input id="minStock"
type="number"
placeholder="最低庫存"
style="width:100%;height:45px;">


<br><br>


<input id="expiry"
type="date"
style="width:100%;height:45px;">


<br><br>


<button onclick="saveProduct()"
style="width:100%;height:55px;font-size:20px;">

保存商品

</button>


</div>


`;

}



function saveProduct(){


let product = {


barcode:
document.getElementById(
"barcode"
).value,


name:
document.getElementById(
"name"
).value,


category:
document.getElementById(
"category"
).value,


stock:
Number(
document.getElementById(
"stock"
).value
),


minStock:
Number(
document.getElementById(
"minStock"
).value
),


expiry:
document.getElementById(
"expiry"
).value


};



addProduct(product);



alert(
"商品保存成功"
);


}
