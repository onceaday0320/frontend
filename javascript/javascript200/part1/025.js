/**
 * 비트(Bit)란 이진수(Binary digit)의 줄임말로, 0과 1로 구성된 숫자 체계를 갖고 있는 이진수의 단일 값을 가진다.
 컴퓨터 세계에서 비트는 데이터의 가장 작은 기억장치의 최소 단위이다.
 * 자바스크립트의 비트 연산자는 크게 비트 논리 연산자와 비트 이동 연산자로 나뉜다. 비트 논리 연산자로는 AND 연산자 &, NOT 연산자 ~,
 OR 연산자 |, XOR 연산자 ^가 있고, 비트 이동 연산자에는 <<, >> , >>>가 있다.
 */
// ex) 1 -> 1,
// 2 -> 10,
// 11 -> 1011,
// 14 -> 1110,

console.log(14 & 11); // 1110 & 1011 -> 1010 -> 10
console.log(~14); // ~1110 -> -1111 -> -15
console.log(14 | 11); // 1110 & 1011 -> 1111 -> 15
console.log(14 ^ 11); // 배타적으로 1인 경우에만 1을 반환 1110과 1011을 XOR 연산하면 0101이 되고, 이를 십진수로 변환하여 5가 출력된다.
console.log(2 << 2); // 8
console.log(14 >> 1); // 7
console.log(14 >> 2);
console.log(14 >>> 2); // a의 이진수 표현을 b 비트만큼 오른쪽으로 이동한다. 오른쪽 남은 비트는 버리고 왼쪽의 빈자리는 0으로 채운다.
// 오른쪽 남은 비트는 버리고 왼쪽의 빈자리는 0으로 채운다. 이에 따라 1110을 10비트 자리수(2개)만큼 오른쪽으로 이동하여 11이 되고,
// 3으로 출련된다.

console.log((150).toString(2)); // 10010110