// let annie = "leonhart";
// const leonhart = "123";

// console.log(annie);
// console.log(leonhart);
// annie = "armin";
// console.log(annie)
// leonhart = "452";
// console.log (leonhart);


// let o = true;
// let i = false;

// console.log (o || i);

// let a = 40;
// let b = 40;

// console.log(a + b);

// let a = 10;
// let l = 20;
// let d = 30;

// console.log((a + l *10)+ d);

// let al = 400;
// let dorr = 500;

// console.log((al + dorr) / 10);

// let nama = "Annie Leonhart";
// console.log(nama.length);
// console.log(nama[4] +" "+ nama[7]);

// let pem1 = 60;
// let pem2 = 2;
// let ker1 = 10;
// let ker2 = 10;
// console.log((pem1 * ker1) / pem2 + " Membunuh Kerajaan1");
// console.log((pem1 * ker2) / pem2 + " Membunuh Kerajaan2");

// let juml = 100 / "10";
// console.log(juml)

// let age = 40
// let voteable = (age < 18) ? "Too young":"Old enough";

// console.log(voteable + typeof(age))


// let x = 10;
// let y = (x != 11)? "Ya" : "Tidak";
// console.log(x % 3 == 0) || (x < 10);
// console.log(y);

// let string1 = "hASHDHAS ahsdh asdh hasd hha ashdha ashdh ashdha as "

// let total = 0;


// console.log(total)


// console.log(string1[4])

// for(let i = 0; i < string1.length; i++){
//     console.log("string : " + string1[i] + " INDEX : " + i )
//     if(string1[i] === " "){
//         totalSpasi += 1
//     }
// }

// let string1 = "AHSHDHASH##@HASHHA**HASHDH##**HHASDH##";
// let totalPagar = 0;
// let totalBintang = 0;

// for(let i = 0; i <string1.length; i++){
//     if(string1[i] == "#"){
//         totalPagar += 1;
//     }else if(string1[i] == "*"){
//         totalBintang += 1;
//     }
// }


// console.log(totalPagar) 
// console.log(totalBintang)
// // console.log(string1)
// var kata = 'ayam itu sangat banyak'
// var jumlah = 0
// // hitung hasil huruf a yang muncul sebelum huruf n
// // jawabannya 2
// for(let i = 0; i <kata.length; i++){ // i = 2
//     if( kata[i] === "a" && kata[i+1] == 'n' ){
//         jumlah += 1;
//     }
// }
// console.log(jumlah)
// Hitung Jumlah Huruf Kata Ke2
// // var, temu, proses
// let kata = 'indomie goreng';
// let jumlah = 0;

// for(let i = 0; i <kata.length; i++){
//     // console.log("string : " + kata[i] + " INDEX : " + i)
//     if(kata[i-2] === " "){
//         jumlah++;
//     }
//     if(jumlah){
//         console.log("string : " + kata[i] + " INDEX : " + i)
//         jumlah++;
//     }
// }console.log(jumlah)

// let s1 = "Hello World";
// let hasil = "";

// for(let i = s1.length - 1; i >= 0; i--){
//     hasil += s1[i]
//     console.log(hasil)
// }

// let s1 = '';

// for( let i = 0; i <11; i++ ){
//   if(i < 5){
//     for(let j = 0; j <= i; j++){
//       s1 += '*';
//     }
//   } else {
//     for(let k = 11; k > i; k--){
//       s1 += '*';
//     }
//   }
//   s1 += '\n';
// }
// console.log(s1)


// let kata = 'The greatest victory is that which requires no battle';
// let temp = "";
// let result = "";
// let flag = false;

// for(let i = kata.length - 1; i >= 0;i--){
    // console.log(kata[i])
    // temp = kata[i] + temp
    // console.log(temp)
        // if (kata[i - 1] === " ") {
        //     result += temp
        //     temp =""
        // }
        // else if (kata[i] === " "){
        //     result += temp
        //     temp =""
        // }
        // if(i == 0){
        //     result += temp
        //     temp =""
        // }

        // if (kata[i - 1] === " " && !flag) {
        //     result += temp
        //     temp =""
        //     flag = true
        // }
        // if(temp[j] == " " && flag){
        //     result += temp
        //     temp =""
        // }
        // if(i == 0){
        //     result += " " + temp
        //     temp =""
        // }
    
    

    // if (kata[i-1] === " " && !flag) {
    //     result += temp;
    //     temp = "";
    //     flag = true;
    // }
    // if (kata[i] === " " && flag) {
    //     if (temp !== " ") {
    //         result += temp;
    //     }
    //     temp = "";
    // }

    // if (i === 0) {
    //     result += " " + temp;
    //     temp = "";
    // }
// }
// console.log(result)

// let jmlAngkot = 10

// for(let i = 1; i <= jmlAngkot; i++){
//     if(i <= 6 && i !== 5){
//         console.log("No." + i + " Angkot Bener")
//     }else if(i == 8 || i == 10 || i == 5){
//         console.log("No." + i + " Angkot Lembur")
//     }
//     else{
//         console.log("No." + i + " Angkot Rusak")
//     }
// }


arr = [
    'Steinbacher', 'African',
    'Mallard',     'Pilgrim',
    'Crested',     'African',
    'Pilgrim',     'Pilgrim',
    'Pilgrim',     'African',
    'Toulouse',    'Pilgrim',
    'Toulouse',    'Pilgrim'
  ]

  function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    console.log(birds)
    // return an array containing all of the strings in the input array except those that match strings in geese
  };