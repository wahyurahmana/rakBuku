const db = [];

function inputBuku() {
    let baris = {}
    let data = document.getElementsByClassName('stylInput')
    for (let i = 0; i < data.length; i++) {
        baris[data[i].name] = data[i].value
    }
    let sudahDibaca = document.getElementById("checkboxStyle")
    baris[sudahDibaca.name] = sudahDibaca.checked

    db.push(baris)
    alert("Data Berhasil Ditambahkan!")
    data[0].value = ""
    data[1].value = ""
    data[2].value = ""

    if(sudahDibaca.checked === true){
        telahDibaca()
    }else{
        belumDibaca()
    }

    sudahDibaca.checked = false

    return db
}

function belumDibaca() {
    let dataBelumDibaca = document.getElementById("dataBelumDibaca");
    if(db[db.length-1].sudahDibaca === false){
        let html =`<tr> <th>Judul</th> <td>:</td> <td>${db[db.length-1].judul}</td> </tr> <tr> <th>Penulis</th> <td>:</td> <td>${db[db.length-1].penulis}</td> </tr> <tr> <th>Tahun Terbit</th> <td>:</td> <td>${db[db.length-1].tahunTerbit}</td> </tr> <tr> <td><button style="font-size: 10px;">Tandai Sudah Dibaca</button></td> </tr>`;
        dataBelumDibaca.innerHTML += html
    }
}

function telahDibaca() {
    let dataSudahDibaca = document.getElementById("dataSudahDibaca");
    if(db[db.length-1].sudahDibaca === true){
        let html =`<tr> <th>Judul</th> <td>:</td> <td>${db[db.length-1].judul}</td> </tr> <tr> <th>Penulis</th> <td>:</td> <td>${db[db.length-1].penulis}</td> </tr> <tr> <th>Tahun Terbit</th> <td>:</td> <td>${db[db.length-1].tahunTerbit}</td> </tr> <tr> <td><button style="font-size: 10px;">Tandai Belum Dibaca</button></td> </tr>`;
        dataSudahDibaca.innerHTML += html
    }
}