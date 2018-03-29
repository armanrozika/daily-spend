let jsondata = {
  "messages" : {
    "L6PMsrNNwBTuGWpMOpL" : {
      "barang" : "Kopi",
      "bulan" : "Februari",
      "harga" : "3000",
      "hari" : "Rabu",
      "tahun" : "2018"
    },
    "-L8js9CA01QpAM7aJWRN" : {
      "barang" : "kopi",
      "bulan" : "Maret",
      "harga" : "3000",
      "hari" : "Kamis",
      "tahun" : "2018"
    },
    "-L8jsB6G1GAiwIEX2BEk" : {
      "barang" : "tahu",
      "bulan" : "Maret",
      "harga" : "2000",
      "hari" : "Kamis",
      "tahun" : "2018"
    },
    "-L8jsMMHj6MZXVg0R__j" : {
      "barang" : "ketoprak",
      "bulan" : "Maret",
      "harga" : "10000",
      "hari" : "Rabu",
      "tahun" : "2018"
    },
    "-L8jsQ7I6fTmoRJUhm4M" : {
      "barang" : "rokok",
      "bulan" : "Maret",
      "harga" : "21000",
      "hari" : "Rabu",
      "tahun" : "2018"
    },
    "-L8jsUhX9_CsZikra1qK" : {
      "barang" : "kopi",
      "bulan" : "Maret",
      "harga" : "3000",
      "hari" : "Rabu",
      "tahun" : "2018"
    },
    "-L8jsWxZxFHCsf5xELRP" : {
      "barang" : "gorengan",
      "bulan" : "Maret",
      "harga" : "2000",
      "hari" : "Rabu",
      "tahun" : "2018"
    }
  }
}

let parsejson = JSON.stringify(jsondata);
let trail = parsejson.replace(/\-/g, '');
let parsethat = JSON.parse(trail);
let arr = parsethat.messages;

let arrlength = Object.keys(arr).length;
let sum = 0;
let arri = arr[Object.keys(arr)[1]].harga;
let numerize = Number(arri);

for(let i=0; i<arrlength ; i++){
	sum = sum + Number(arr[Object.keys(arr)[i]].harga);
}


console.log(sum);




























































