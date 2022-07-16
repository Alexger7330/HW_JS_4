// // 1
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// // 2
// let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] > -10 && arr2[i] < -3) {
//         console.log(arr2[i]);
//     }
// }

// // 3
// let arr3 = [];
// let result = 0;
// let n = 23;
// for (let i = 23; i <= 57; i++) {
//     arr3.push(i);
// }
// console.log(arr3);
// arr3 = [];
// while (n <= 57) {
//     arr3.push(n);
//     n++;
// }
// console.log(arr3)
// for (let i = 0; i < arr3.length; i++) {
//     result += arr3[i];
// }
// console.log(`Result = ${result}`)

// // 4
// let arr4 = ['10', '20', '30', '50', '235', '3000'];
// for (let i = 0; i < arr4.length; i++) {
//     if (arr4[i][0] == 1 || arr4[i][0] == 2 || arr4[i][0] == 5) {
//         console.log(arr4[i])
//     }
// }

// // 5
// let arr5 = ["Пн", 'Вт', 'Ср', 'Чт', 'Пт', "Сб", 'Вс'];
// for (let i = 0; i < arr5.length; i++) {
//     if (arr5[i] == 'Сб' || arr5[i] == 'Вс') {
//         document.write(`<b>${arr5[i]}</b ><br>`)
//     }
//     else {
//         document.write(`${arr5[i]}<br>`);
//     }
// }

// // 6
// let arr6 = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr6[arr6.length-1]);

// // 7
// let arr7 = [];
// for (; ;) {
//     let promptElem = prompt("Введите элемент массива");
//     if (promptElem == '') {
//         break;
//     }
//     else {
//         arr7.push(promptElem);
//     }
// }
// console.log(arr7);
// arr7.sort(function (a, b) {
//     return a - b;
// });
// console.log(arr7);

// // 8
// let arr8 = [12, false, `Текст`, 4, 2, -5, 0];
// arr8.reverse;
// let len = arr8.length - 1;
// while (len >= 0) {
//     console.log(arr8[len]);
//     len--;
// }

// // 9
// let arr9 = [5, 9, 21, , , 9,,, 78, , , , 6];
// let count = 0;
// console.log(arr9);
// for (let i = 0; i < arr9.length; i++) {
//     if (arr9[i] === undefined) {
//         count++;
//     }
// }
// console.log(`Количество пустых элементов массива = ${count}`);