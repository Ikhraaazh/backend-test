/*
Membeli makan siang dan menabung

Rusli adalah seorang anak sekolah di SD Beever
Setiap harinya, Rusli diberikan uang jajan oleh orang tuanya 
sebesar Rp. 10.000,- rupiah.

Rusli bisa menabung atau membeli makanan di sekolahnya untuk
makan siang. Kita telah diberikan catatan keuangan Rusli
dalam bentuk text biasa, dan kita diminta menghitung
jumlah uang tabungan Rusli per harinya dan total tabungannya.

OUTPUT:
{
    Senin: 2000,
    Selasa: 5500,
    Rabu: 3500,
    Kamis: 7000,
    Jumat: 5500,
    TotalTabungan: 23500
}

*/

function jumlahTabungan(listHarga, history) {
    // Write your code here
    let money = 7 * 10000
    let dayToDay = history.split(".")
    let histories = []
    let spent = 0
    let result = {}

    for(let i = 0; i < dayToDay.length; i++) {
      let splitByDay = dayToDay[i].split("-")
      histories.push(splitByDay)
    }


    for(let i = 0; i < histories.length; i++) {
      let splitItem = histories[i][1].split(",")
      let price = 0
      for(let j = 0; j < splitItem.length; j++) {
        let item = splitItem[j]
        
        for(let k = 0; k < listHarga.length; k++) {
          if(item === listHarga[k].nama){
            price += listHarga[k].harga
            spent += listHarga[k].harga
          }
        }
      }
      result[histories[i][0]] = price
    }
    result["TotalTabungan"] = money - spent
    return result
}

var hargaMakanan = [
  {
    nama: "ayam",
    harga: 5000
  },
  {
    nama: "nasi",
    harga: 2000
  },
  {
    nama: "cola",
    harga: 1000
  },
  {
    nama: "chiki",
    harga: 1500
  },
  {
    nama: "hotdog",
    harga: 3000
  },
  {
    nama: "aqua",
    harga: 2000
  }
]

var historyPembelian = `Senin-ayam,nasi,cola.Selasa-chiki,hotdog.Rabu-ayam,chiki.Kamis-hotdog.Jumat-chiki,cola,nasi`
console.log(jumlahTabungan(hargaMakanan, historyPembelian))