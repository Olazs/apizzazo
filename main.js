alert("hello");
let vegosszeg=0;
function kosar(szam) {
    let szamid = "ar"+szam;
    vegosszeg+=document.getElementById(szamid).innerHTML;
    alert(vegosszeg+" Ft a fizetendo osszeg!")
}
