/* lista - azonos típusú változók tárolására */
let lista=["első", "második"]

console.log(lista[0])

lista[0]="átírt első"

console.log(lista)

lista[10]="tizenegyedik"

console.log(lista)
console.log(lista[5])

// listához elemadás - utolsó hely után teszi az elemet

lista.push("következő elem")
console.log(lista)

// utolsó elem eltávolítása
lista.pop()
console.log(lista)

const szam = 5;
// szam = 12; - konstans értéke nem változtatható meg

const lista2=[12,13,14,15]
console.log(lista2)
// lista2=[23,24,25] - konstans változónak akartam új értéket adni

lista2[0]=2222222;
console.log(lista2)
lista2.push(333333)
console.log(lista2)

/* A konstans egyszerű adatszerkezet esetén const-al való deklarációnál 
a konstatns értékét nem lehet megváltoztatni */
/* Egyszerű adatszerkezet: szöveg, szám, logikai */

/* Összetett adatszerkezet esetén const használatával az összetett 
adatszerkezet memória címe lesz állandó az nem változtatható meg, de az egyes értékek megváltoztathatók */
/* Összetett adatszerkezet: lista, objektum */
/* konstans listához pl. tudunk új elemet adni, törölni, átírni */
/* a listákat mindig const-ként definiáljuk */

/* |Objektumok| */

/* étlapos feladat
ételnév lista -> szöveges típusú
ételár lista -> szám típusú
ezt egy egységként tudnám kezelni
*/
/* Az objektum az egy olyan összetett adatszerkezet, amely kulcsértékpárokból áll egységként tudunk 
vele kezelni összetartozó adattagokat többnyire const-ként deklaráljuk, mert neki is memória területi 
címe lesz fix és az egyes értékeit úgy tudjuk elérni, hogy pl.:console.log(etel1.nev) */

const etel1 = {
    nev:"Brassói aprópecsenye",
    ar: 2990
}

console.log(etel1.nev)
console.log(etel1.ar)
etel1.mennyiseg = 3 // új kulcsot adok az objektumhoz
console.log(etel1)

const etel2 = {
    nev:"BBQ pizza",
    ar: 4200,
    meret: 45,
    mennyiseg: 2
}

/* Egy kutya adatai */
/* Egy objektum tulajdonképpen olyan mint az adatbázis egy rekordja
Kulcsok - tulajdonságok az adatbázis egy mezője
*/

const kutya1 = {
    nev:"Dézi",
    fajta:"pitbull",
    szin:"fekete",
    marmagassag: 34,
    szul_datum: 2020,
    szul_hely: "Budapest"
}

const kutya2 = {
    nev:"Fruzsina",
    fajta:"keverék",
    szin:"tarka",
    marmagassag: 50,
    szul_datum: 2021,
    szul_hely: "Budapest"
}

const kutyalista=[
    {
        nev:"Dézi",
        fajta:"pitbull",
        szin:"fekete",
        marmagassag: 34,
        szul_datum: 2020,
        szul_hely: "Budapest"
    },
    {
        nev:"Fruzsina",
        fajta:"keverék",
        szin:"tarka",
        marmagassag: 50,
        szul_datum: 2021,
        szul_hely: "Budapest"
    }

]

/* hogy érem el a Dézi színét? */
console.log(kutyalista[0].szin)

/* HF: tetszőleges lista tetszőleges objektummal legalább 2 adattal
kiiratni a consolra az első kulcshoz tartozó dolgokat vagy vmit */

/* HF */
const f1lista=[
    {
        nev: "Mercedes AMG Petornas F1 Team",
        fonok:"Toto Wolf",
        vezeto1:"Lewis Hamilton",
        vezeto2: "George Russel",
        autoszam1: 44,
        autoszam2: 63
    },
    {
        nev:"Scuderia Ferrari F1 Team",
        fonok:"Frédéric Vasseur",
        vezeto1:"Charles Leclerc",
        vezeto2: "Carlos Sainz",
        autoszam1: 16,
        autoszam2: 55
    },
    {
        nev:"Mclaren F1 Team",
        fonok:"Zak Brown",
        vezeto1:"Lando Norris",
        vezeto2: "Oscar Piastri",
        autoszam1: 4,
        autoszam2: 81
    }
]

console.log("HF:")
console.log(f1lista[0].vezeto1)
console.log(f1lista[1].nev)
console.log(f1lista[2].autoszam2)