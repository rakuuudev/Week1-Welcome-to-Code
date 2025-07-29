let nama = "caelum";
let peran = "Tabib"; 

function Proxytia() {
    if (nama === "") {
        console.log("nama wajib diisi!");
    } else if (peran === "") {
        console.log("pilih peranmu untuk memulai game");
    } else if (peran === 'Ksatria') {
        console.log(`halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu`);
    } else if (peran === 'Tabib') {
        console.log(`halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
    } else if (peran === 'Penyihir') {
        console.log(`halo penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
    } else {
        console.log("Kayaknya kamu jadi bot aja, peran yang kamu pilih gak ada");
    }
}


Proxytia();