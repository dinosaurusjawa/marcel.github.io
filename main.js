let nama = prompt(
    'tuliskan nama anda?'
    )

let usia = prompt(
    'bereapa usia kamu?'
    )

let beratBadan = prompt(
    'berapa berat badan anda'
    )   
let pacar = prompt (
    'apakah anda mempunya pacar? (sudah/belum)'
) 

alert(
    `welcome ${nama} usia anda ${usia} 
berat badan anda adalah ${beratBadan}kg dan anda ${pacar} punya pacar`,
)


let pasangan = prompt(
    `pilih 1/2/3`
)

switch (pasangan) {
        case 1:
            pasangan = 'idih punya pacar kiw'
            break
        case 2:
            pasangan = 'ga kebanyakan apa 2?'
            break
      default:
            pasangan = 'kasian gapunya pacar :('
            break
}

alert(`${pasangan}`,)

let saldoAwal = prompt ('saldo awal anda')
const hutang = prompt ('hutang anda')
const saldoBersih = saldoAwal - hutang

alert (
`saya punya saldo Rp.${saldoAwal} dan punya hutang Rp.${hutang}
jadi saya punya saldo sebesar Rp.${saldoBersih}`,)


// let pacar = null
// if (pacar == null) {
    // pacar = 'belum punya'
// } else {
    // pacar = 'sudah punya'
// }