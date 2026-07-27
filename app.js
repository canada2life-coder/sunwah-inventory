// SunWah Inventory Pro
// Main Controller


document.addEventListener(
"DOMContentLoaded",
function(){

updateDashboard();

});



async function updateDashboard(){


if(typeof getAllProducts !== "undefined"){


let products =
await getAllProducts();


let total =
document.getElementById(
"totalProducts"
);


if(total){

total.innerHTML =
products.length;

}


}



}




function home(){


location.reload();


}




function createBackButton(){


return `

<button onclick="home()"

style="
width:100%;
height:50px;
font-size:18px;
border-radius:15px;
margin-top:20px;
">

⬅️ 返回首頁

</button>

`;

}




function openProducts(){


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



<div class="dashboard">


<h2>
商品管理功能
</h2>


<button>

➕ 新增商品

</button>


<button>

📋 商品列表

</button>


${createBackButton()}


</div>


`;

}




function openSearch(){


document.body.innerHTML = `


<header>

<div class="logo">
SW
</div>

<h1>
查庫存
</h1>

</header>



<div class="dashboard">


<input

placeholder="輸入 Barcode"

style="
width:100%;
height:50px;
font-size:20px;
"


>


<br><br>


<button

style="
width:100%;
height:55px;
font-size:20px;
"

>

🔍 查詢

</button>


${createBackButton()}


</div>


`;

}




function openScanner(){


alert(
"Barcode Scanner 功能下一步加入"
);


}




function openStockIn(){


alert(
"入貨功能下一步加入"
);


}




function openStockOut(){


alert(
"出貨功能下一步加入"
);


}




function openCount(){


alert(
"盤點功能下一步加入"
);


}




function openAlerts(){


alert(
"有效期及低庫存提醒下一步加入"
);


}




function openSettings(){


alert(
"設定功能下一步加入"
);


}
