var getDay = document.getElementById('day');
var getMonth = document.getElementById('month');
var getYear = document.getElementById('year');


var addButton = document.getElementById('button');

var store = {};
var dbContent = firebase.database().ref('messages');


addButton.addEventListener('click', function(){
	var item = document.getElementById('item');
	var price = document.getElementById('harga');
	var day = getDay.options[getDay.selectedIndex].value;
	var month = getMonth.options[getMonth.selectedIndex].value;
	var year = getYear.options[getYear.selectedIndex].value;
	//alert(item.value);
	
	var obj = {
		hari: day,
		bulan: month,
		tahun: year,
		barang: item.value,
		harga: price.value
	};

	if(store.length>0){
		store = {};
	};

	store.input = obj;
	var string = JSON.stringify(store);
	saveMessage(store.input.hari, store.input.bulan, store.input.tahun, store.input.barang, store.input.harga);
	//console.log();

	//empty the input value 
	item.value = '';
	price.value = '';

	
});

function saveMessage(hari, bulan, tahun, barang, harga){
  var newMessage = dbContent.push();
  newMessage.set({
    hari: hari,
    bulan: bulan,
    tahun: tahun,
    barang: barang,
    harga: harga
  });
}









