/* 
 * col['posição x']['posição y'].up = boolean
 * col['posição x']['posição y'].down = boolean
 * col['posição x']['posição y'].left = boolean
 * col['posição x']['posição y'].right = boolean
 */
 var col = [
 [
	 {'up':false,'down':true,'left':false,'right':false},	//0 0
	 {'up':false,'down':true,'left':false,'right':true},	//0 1
	 {'up':false,'down':true,'left':true,'right':false},	//0 2
	 {'up':false,'down':true,'left':false,'right':true},	//0 3
	 {'up':false,'down':false,'left':true,'right':true},	//0 4
	 {'up':false,'down':true,'left':true,'right':false},	//0 5
	 {'up':false,'down':true,'left':false,'right':true},	//0 6
	 {'up':false,'down':true,'left':true,'right':false},	//0 7
	 {'up':false,'down':true,'left':false,'right':true},	//0 8
	 {'up':false,'down':false,'left':true,'right':true},	//0 9
	 {'up':false,'down':false,'left':true,'right':true},	//0 10
	 {'up':false,'down':false,'left':true,'right':true},	//0 11
	 {'up':false,'down':false,'left':true,'right':true},	//0 12
	 {'up':false,'down':true,'left':true,'right':true},		//0 13
	 {'up':false,'down':false,'left':true,'right':false},	//0 14
	 {'up':false,'down':true,'left':false,'right':true},	//0 15
	 {'up':false,'down':false,'left':true,'right':true},	//0 16
	 {'up':false,'down':true,'left':true,'right':false},	//0 17
	 {'up':false,'down':true,'left':false,'right':true}, 	//0 18
	 {'up':false,'down':false,'left':true,'right':false}	//0 19
 ],[
	 {'up':true,'down':false,'left':false,'right':true},	//1 0
	 {'up':true,'down':false,'left':true,'right':false},	//1 1
	 {'up':true,'down':true,'left':false,'right':false},	//1 2
	 {'up':true,'down':false,'left':false,'right':true},	//1 3
	 {'up':false,'down':true,'left':true,'right':false},	//1 4
	 {'up':true,'down':false,'left':false,'right':true},	//1 5
	 {'up':true,'down':false,'left':true,'right':false},	//1 6
	 {'up':true,'down':false,'left':false,'right':true},	//1 7
	 {'up':true,'down':false,'left':true,'right':false},	//1 8
	 {'up':false,'down':true,'left':false,'right':true},	//1 9
	 {'up':false,'down':false,'left':true,'right':true},	//1 10
	 {'up':false,'down':false,'left':true,'right':false},	//1 11
	 {'up':false,'down':true,'left':false,'right':true},	//1 12
	 {'up':true,'down':false,'left':true,'right':false},	//1 13
	 {'up':false,'down':true,'left':false,'right':true}, 	//1 14
	 {'up':true,'down':false,'left':true,'right':false},	//1 15
	 {'up':false,'down':true,'left':false,'right':true},	//1 16
	 {'up':true,'down':false,'left':true,'right':false},	//1 17
	 {'up':true,'down':false,'left':false,'right':true}, 	 //1 18
	 {'up':false,'down':true,'left':true,'right':false}		//1 19
 ],[
	 {'up':false,'down':true,'left':false,'right':true},		//2 0
	 {'up':false,'down':true,'left':true,'right':true},		//2 1
	 {'up':true,'down':false,'left':true,'right':false},		//2 2
	 {'up':false,'down':true,'left':false,'right':false},		//2 3
	 {'up':true,'down':false,'left':false,'right':true},		//2 4
	 {'up':false,'down':true,'left':true,'right':false},		//2 5
	 {'up':false,'down':true,'left':false,'right':true},		//2 6
	 {'up':false,'down':true,'left':true,'right':true},		//2 7
	 {'up':false,'down':false,'left':true,'right':false},		//2 8
	 {'up':true,'down':false,'left':false,'right':true},		//2 9
	 {'up':false,'down':false,'left':true,'right':true},		//2 10
	 {'up':false,'down':true,'left':true,'right':false},		//2 11
	 {'up':true,'down':false,'left':false,'right':true},		//2 12
	 {'up':false,'down':false,'left':true,'right':true},		//2 13
	 {'up':true,'down':false,'left':true,'right':false}, 		//2 14
	 {'up':false,'down':true,'left':false,'right':true},		//2 15
	 {'up':true,'down':false,'left':true,'right':false},		//2 16
	 {'up':false,'down':true,'left':false,'right':true},		//2 17
	 {'up':false,'down':false,'left':true,'right':true}, 		//2 18
	 {'up':true,'down':false,'left':true,'right':false}		//2 19
 ],[
	 {'up':true,'down':true,'left':false,'right':false},		//3 0
	 {'up':true,'down':false,'left':false,'right':true},		//3 1
	 {'up':false,'down':false,'left':true,'right':false},		//3 2
	 {'up':true,'down':true,'left':false,'right':true},		//3 3
	 {'up':false,'down':false,'left':true,'right':false},		//3 4
	 {'up':true,'down':true,'left':false,'right':false},		//3 5
	 {'up':true,'down':true,'left':false,'right':false},		//3 6
	 {'up':true,'down':false,'left':false,'right':true},		//3 7
	 {'up':false,'down':true,'left':true,'right':false},		//3 8
	 {'up':false,'down':true,'left':false,'right':true},		//3 9
	 {'up':false,'down':false,'left':true,'right':false},		//3 10
	 {'up':true,'down':false,'left':false,'right':true},		//3 11
	 {'up':false,'down':false,'left':true,'right':true},		//3 12
	 {'up':false,'down':false,'left':true,'right':true},		//3 13
	 {'up':false,'down':false,'left':true,'right':true}, 		//3 14
	 {'up':true,'down':false,'left':true,'right':true},		//3 15
	 {'up':false,'down':true,'left':true,'right':false},		//3 16
	 {'up':true,'down':false,'left':false,'right':true},		//3 17
	 {'up':false,'down':false,'left':true,'right':true}, 		//3 18
	 {'up':false,'down':true,'left':true,'right':false}		//3 19
 ],[
	 {'up':true,'down':true,'left':false,'right':false},		//4 0
	 {'up':false,'down':true,'left':false,'right':true},		//4 1
	 {'up':false,'down':false,'left':true,'right':true},		//4 2
	 {'up':true,'down':false,'left':true,'right':false},		//4 3
	 {'up':false,'down':true,'left':false,'right':true},		//4 4
	 {'up':true,'down':false,'left':true,'right':false},		//4 5
	 {'up':true,'down':false,'left':false,'right':true},		//4 6
	 {'up':false,'down':false,'left':true,'right':false},		//4 7
	 {'up':true,'down':true,'left':false,'right':true},		//4 8
	 {'up':true,'down':false,'left':true,'right':false},		//4 9
	 {'up':false,'down':true,'left':false,'right':true},		//4 10
	 {'up':false,'down':false,'left':true,'right':true},		//4 11
	 {'up':false,'down':false,'left':true,'right':true},		//4 12
	 {'up':false,'down':true,'left':true,'right':false},		//4 13
	 {'up':false,'down':true,'left':false,'right':true}, 		//4 14
	 {'up':false,'down':true,'left':true,'right':false},		//4 15
	 {'up':true,'down':true,'left':false,'right':false},		//4 16
	 {'up':false,'down':true,'left':false,'right':true},		//4 17
	 {'up':false,'down':false,'left':true,'right':true}, 		//4 18
	 {'up':true,'down':true,'left':true,'right':false}		//4 19
 ],[
	 {'up':true,'down':true,'left':false,'right':false},		//5 0
	 {'up':true,'down':false,'left':false,'right':true},		//5 1
	 {'up':false,'down':false,'left':true,'right':true},		//5 2
	 {'up':false,'down':false,'left':true,'right':true},		//5 3
	 {'up':true,'down':true,'left':true,'right':false},		//5 4
	 {'up':false,'down':true,'left':false,'right':true},		//5 5
	 {'up':false,'down':true,'left':true,'right':true},		//5 6
	 {'up':false,'down':true,'left':true,'right':false},		//5 7
	 {'up':true,'down':false,'left':false,'right':true},		//5 8
	 {'up':false,'down':true,'left':true,'right':false},		//5 9
	 {'up':true,'down':false,'left':false,'right':true},		//5 10
	 {'up':false,'down':false,'left':true,'right':true},		//5 11
	 {'up':false,'down':true,'left':true,'right':false},		//5 12
	 {'up':true,'down':false,'left':false,'right':true},		//5 13
	 {'up':true,'down':false,'left':true,'right':false}, 		//5 14
	 {'up':true,'down':false,'left':false,'right':false},		//5 15
	 {'up':true,'down':false,'left':false,'right':true},		//5 16
	 {'up':true,'down':false,'left':true,'right':false},		//5 17
	 {'up':false,'down':true,'left':false,'right':false}, 		//5 18
	 {'up':true,'down':true,'left':false,'right':false}		//5 19
 ],[
	 {'up':true,'down':true,'left':false,'right':true},		//6 0
	 {'up':false,'down':true,'left':true,'right':false},		//6 1
	 {'up':false,'down':true,'left':false,'right':true},		//6 2
	 {'up':false,'down':false,'left':true,'right':false},		//6 3
	 {'up':true,'down':true,'left':false,'right':false},		//6 4
	 {'up':true,'down':false,'left':false,'right':false},		//6 5
	 {'up':true,'down':true,'left':false,'right':false},		//6 6
	 {'up':true,'down':false,'left':false,'right':true},		//6 7
	 {'up':false,'down':true,'left':true,'right':false},		//6 8
	 {'up':true,'down':false,'left':false,'right':true},		//6 9
	 {'up':false,'down':false,'left':true,'right':true},		//6 10
	 {'up':false,'down':true,'left':true,'right':true},		//6 11
	 {'up':true,'down':true,'left':true,'right':false},		//6 12
	 {'up':false,'down':true,'left':false,'right':false},		//6 13
	 {'up':false,'down':true,'left':false,'right':true}, 		//6 14
	 {'up':false,'down':true,'left':true,'right':true},		//6 15
	 {'up':false,'down':false,'left':true,'right':true},		//6 16
	 {'up':false,'down':false,'left':true,'right':true},		//6 17
	 {'up':true,'down':false,'left':true,'right':false}, 		//6 18
	 {'up':true,'down':true,'left':false,'right':false}		//6 19
 ],[
	 {'up':true,'down':false,'left':false,'right':false},		//7 0
	 {'up':true,'down':true,'left':false,'right':false},		//7 1
	 {'up':true,'down':false,'left':false,'right':true},		//7 2
	 {'up':false,'down':true,'left':true,'right':true},		//7 3
	 {'up':true,'down':false,'left':true,'right':false},		//7 4
	 {'up':false,'down':true,'left':false,'right':true},		//7 5
	 {'up':true,'down':false,'left':true,'right':true},		//7 6
	 {'up':false,'down':true,'left':true,'right':false},		//7 7
	 {'up':true,'down':false,'left':false,'right':true},		//7 8
	 {'up':false,'down':false,'left':true,'right':true},		//7 9
	 {'up':false,'down':false,'left':true,'right':true},		//7 10
	 {'up':true,'down':false,'left':true,'right':false},		//7 11
	 {'up':true,'down':true,'left':false,'right':false},		//7 12
	 {'up':true,'down':false,'left':false,'right':true},		//7 13
	 {'up':true,'down':true,'left':true,'right':false}, 		//7 14
	 {'up':true,'down':false,'left':false,'right':true},		//7 15
	 {'up':false,'down':false,'left':true,'right':true},		//7 16
	 {'up':false,'down':true,'left':true,'right':false},		//7 17
	 {'up':false,'down':true,'left':false,'right':true}, 		//7 18
	 {'up':true,'down':false,'left':true,'right':false}		//7 19
 ],[
	 {'up':false,'down':true,'left':false,'right':true},		//8 0
	 {'up':true,'down':true,'left':true,'right':false},		//8 1
	 {'up':false,'down':true,'left':false,'right':true},		//8 2
	 {'up':true,'down':false,'left':true,'right':false},		//8 3
	 {'up':false,'down':true,'left':false,'right':true},		//8 4
	 {'up':true,'down':false,'left':true,'right':false},		//8 5
	 {'up':false,'down':false,'left':false,'right':true},		//8 6
	 {'up':true,'down':false,'left':true,'right':true},		//8 7
	 {'up':false,'down':true,'left':true,'right':false},		//8 8
	 {'up':false,'down':true,'left':false,'right':true},		//8 9
	 {'up':false,'down':true,'left':true,'right':false},		//8 10
	 {'up':false,'down':true,'left':false,'right':false},		//8 11
	 {'up':true,'down':false,'left':false,'right':true},		//8 12
	 {'up':false,'down':true,'left':true,'right':false},		//8 13
	 {'up':true,'down':false,'left':false,'right':true}, 		//8 14
	 {'up':false,'down':true,'left':true,'right':false},		//8 15
	 {'up':false,'down':true,'left':false,'right':false},		//8 16
	 {'up':true,'down':false,'left':false,'right':true},		//8 17
	 {'up':true,'down':true,'left':true,'right':false}, 		//8 18
	 {'up':false,'down':true,'left':false,'right':false}		//8 19
 ],[
	 {'up':true,'down':true,'left':false,'right':false},		//9 0
	 {'up':true,'down':false,'left':false,'right':false},		//9 1
	 {'up':true,'down':false,'left':false,'right':true},		//9 2
	 {'up':false,'down':true,'left':true,'right':false},		//9 3
	 {'up':true,'down':true,'left':false,'right':false},		//9 4
	 {'up':false,'down':true,'left':false,'right':true},		//9 5
	 {'up':false,'down':true,'left':true,'right':false},		//9 6
	 {'up':false,'down':true,'left':false,'right':false},		//9 7
	 {'up':true,'down':false,'left':false,'right':true},		//9 8
	 {'up':true,'down':false,'left':true,'right':false},		//9 9
	 {'up':true,'down':false,'left':false,'right':true},		//9 10
	 {'up':true,'down':false,'left':true,'right':true},		//9 11
	 {'up':false,'down':true,'left':true,'right':false},		//9 12
	 {'up':true,'down':false,'left':false,'right':true},		//9 13
	 {'up':false,'down':true,'left':true,'right':false}, 		//9 14
	 {'up':true,'down':false,'left':false,'right':true},		//9 15
	 {'up':true,'down':true,'left':true,'right':false},		//9 16
	 {'up':false,'down':true,'left':false,'right':true},		//9 17
	 {'up':true,'down':false,'left':true,'right':false}, 		//9 18
	 {'up':true,'down':true,'left':false,'right':false}		//9 19
 ],[
	 {'up':true,'down':true,'left':false,'right':false},		//10 0
	 {'up':false,'down':true,'left':false,'right':true},		//10 1
	 {'up':false,'down':false,'left':true,'right':false},		//10 2
	 {'up':true,'down':true,'left':false,'right':false},		//10 3
	 {'up':true,'down':false,'left':false,'right':true},		//10 4
	 {'up':true,'down':false,'left':true,'right':false},		//10 5
	 {'up':true,'down':false,'left':false,'right':true},		//10 6
	 {'up':true,'down':false,'left':true,'right':true},		//10 7
	 {'up':false,'down':false,'left':true,'right':true},		//10 8
	 {'up':false,'down':false,'left':true,'right':true},		//10 9
	 {'up':false,'down':false,'left':true,'right':true},		//10 10
	 {'up':false,'down':true,'left':true,'right':false},		//10 11
	 {'up':true,'down':false,'left':false,'right':true},		//10 12
	 {'up':false,'down':true,'left':true,'right':false},		//10 13
	 {'up':true,'down':false,'left':false,'right':false}, 		//10 14
	 {'up':false,'down':true,'left':false,'right':true},		//10 15
	 {'up':true,'down':false,'left':true,'right':false},		//10 16
	 {'up':true,'down':false,'left':false,'right':true},		//10 17
	 {'up':false,'down':false,'left':true,'right':true}, 		//10 18
	 {'up':true,'down':false,'left':true,'right':false}		//10 19
 ],[
	 {'up':true,'down':true,'left':false,'right':false},		//11 0
	 {'up':true,'down':false,'left':false,'right':true},		//11 1
	 {'up':false,'down':true,'left':true,'right':false},		//11 2
	 {'up':true,'down':true,'left':false,'right':false},		//11 3
	 {'up':false,'down':true,'left':false,'right':true},		//11 4
	 {'up':false,'down':false,'left':true,'right':true},		//11 5
	 {'up':false,'down':true,'left':true,'right':false},		//11 6
	 {'up':false,'down':false,'left':false,'right':true},		//11 7
	 {'up':false,'down':true,'left':true,'right':false},		//11 8
	 {'up':false,'down':true,'left':false,'right':true},		//11 9
	 {'up':false,'down':true,'left':true,'right':false},		//11 10
	 {'up':true,'down':true,'left':false,'right':false},		//11 11
	 {'up':false,'down':false,'left':false,'right':true},		//11 12
	 {'up':true,'down':false,'left':true,'right':true},		//11 13
	 {'up':false,'down':true,'left':true,'right':true}, 		//11 14
	 {'up':true,'down':false,'left':true,'right':false},		//11 15
	 {'up':false,'down':true,'left':false,'right':true},		//11 16
	 {'up':false,'down':false,'left':true,'right':true},		//11 17
	 {'up':false,'down':false,'left':true,'right':true}, 		//11 18
	 {'up':false,'down':true,'left':true,'right':false}		//11 19
 ],[
	 {'up':true,'down':true,'left':false,'right':true},		//12 0
	 {'up':false,'down':false,'left':true,'right':true},		//12 1
	 {'up':true,'down':false,'left':true,'right':false},		//12 2
	 {'up':true,'down':true,'left':false,'right':false},		//12 3
	 {'up':true,'down':true,'left':false,'right':false},		//12 4
	 {'up':false,'down':true,'left':false,'right':true},		//12 5
	 {'up':true,'down':false,'left':true,'right':true},		//12 6
	 {'up':false,'down':false,'left':true,'right':true},		//12 7
	 {'up':true,'down':false,'left':true,'right':false},		//12 8
	 {'up':true,'down':true,'left':false,'right':false},		//12 9
	 {'up':true,'down':true,'left':false,'right':false},		//12 10
	 {'up':true,'down':false,'left':false,'right':true},		//12 11
	 {'up':false,'down':true,'left':true,'right':false},		//12 12
	 {'up':false,'down':false,'left':false,'right':true},		//12 13
	 {'up':true,'down':false,'left':true,'right':false}, 		//12 14
	 {'up':false,'down':true,'left':false,'right':true},		//12 15
	 {'up':true,'down':false,'left':true,'right':false},		//12 16
	 {'up':false,'down':true,'left':false,'right':true},		//12 17
	 {'up':false,'down':false,'left':true,'right':true}, 		//12 18
	 {'up':true,'down':false,'left':true,'right':false}		//12 19
 ],[
	 {'up':true,'down':true,'left':false,'right':false},		//13 0
	 {'up':false,'down':true,'left':false,'right':true},		//13 1
	 {'up':false,'down':true,'left':true,'right':false},		//13 2
	 {'up':true,'down':true,'left':false,'right':false},		//13 3
	 {'up':true,'down':true,'left':false,'right':false},		//13 4
	 {'up':true,'down':true,'left':false,'right':false},		//13 5
	 {'up':false,'down':true,'left':false,'right':false},		//13 6
	 {'up':false,'down':true,'left':false,'right':true},		//13 7
	 {'up':false,'down':false,'left':true,'right':true},		//13 8
	 {'up':true,'down':false,'left':true,'right':false},		//13 9
	 {'up':true,'down':false,'left':false,'right':true},		//13 10
	 {'up':false,'down':true,'left':true,'right':true},		//13 11
	 {'up':true,'down':false,'left':true,'right':false},		//13 12
	 {'up':false,'down':true,'left':false,'right':true},		//13 13
	 {'up':false,'down':false,'left':true,'right':true}, 		//13 14
	 {'up':true,'down':false,'left':true,'right':false},		//13 15
	 {'up':false,'down':true,'left':false,'right':true},		//13 16
	 {'up':true,'down':false,'left':true,'right':false},		//13 17
	 {'up':false,'down':true,'left':false,'right':true}, 		//13 18
	 {'up':false,'down':true,'left':true,'right':false}		//13 19
 ],[
	 {'up':true,'down':false,'left':false,'right':true},		//14 0
	 {'up':true,'down':false,'left':true,'right':false},		//14 1
	 {'up':true,'down':true,'left':false,'right':false},		//14 2
	 {'up':true,'down':true,'left':false,'right':false},		//14 3
	 {'up':true,'down':true,'left':false,'right':false},		//14 4
	 {'up':true,'down':true,'left':false,'right':true},		//14 5
	 {'up':true,'down':false,'left':true,'right':false},		//14 6
	 {'up':true,'down':true,'left':false,'right':true},		//14 7
	 {'up':false,'down':false,'left':true,'right':true},		//14 8
	 {'up':false,'down':true,'left':true,'right':false},		//14 9
	 {'up':false,'down':false,'left':false,'right':true},		//14 10
	 {'up':true,'down':false,'left':true,'right':false},		//14 11
	 {'up':false,'down':true,'left':false,'right':true},		//14 12
	 {'up':true,'down':false,'left':true,'right':false},		//14 13
	 {'up':false,'down':true,'left':false,'right':true}, 		//14 14
	 {'up':false,'down':false,'left':true,'right':true},		//14 15
	 {'up':true,'down':false,'left':true,'right':false},		//14 16
	 {'up':false,'down':false,'left':false,'right':true},		//14 17
	 {'up':true,'down':false,'left':true,'right':false}, 		//14 18
	 {'up':true,'down':true,'left':false,'right':false}		//14 19
 ],[
	 {'up':false,'down':true,'left':false,'right':true},		//15 0
	 {'up':false,'down':false,'left':true,'right':true},		//15 1
	 {'up':true,'down':true,'left':true,'right':false},		//15 2
	 {'up':true,'down':true,'left':false,'right':false},		//15 3
	 {'up':true,'down':true,'left':false,'right':false},		//15 4
	 {'up':true,'down':false,'left':false,'right':true},		//15 5
	 {'up':false,'down':true,'left':true,'right':false},		//15 6
	 {'up':true,'down':false,'left':false,'right':true},		//15 7
	 {'up':false,'down':false,'left':true,'right':false},		//15 8
	 {'up':true,'down':false,'left':false,'right':true},		//15 9
	 {'up':false,'down':true,'left':true,'right':true},		//15 10
	 {'up':false,'down':false,'left':true,'right':true},		//15 11
	 {'up':true,'down':false,'left':true,'right':false},		//15 12
	 {'up':false,'down':false,'left':false,'right':true},		//15 13
	 {'up':true,'down':false,'left':true,'right':false}, 		//15 14
	 {'up':false,'down':true,'left':false,'right':true},		//15 15
	 {'up':false,'down':false,'left':true,'right':true},		//15 16
	 {'up':false,'down':true,'left':true,'right':true},		//15 17
	 {'up':false,'down':false,'left':true,'right':true}, 		//15 18
	 {'up':true,'down':false,'left':true,'right':false}		//15 19
 ],[
	 {'up':true,'down':false,'left':false,'right':true},		//16 0
	 {'up':false,'down':true,'left':true,'right':false},		//16 1
	 {'up':true,'down':true,'left':false,'right':false},		//16 2
	 {'up':true,'down':true,'left':false,'right':false},		//16 3
	 {'up':true,'down':true,'left':false,'right':false},		//16 4
	 {'up':false,'down':true,'left':false,'right':false},		//16 5
	 {'up':true,'down':true,'left':false,'right':false},		//16 6
	 {'up':false,'down':true,'left':false,'right':true},		//16 7
	 {'up':false,'down':true,'left':true,'right':false},		//16 8
	 {'up':false,'down':true,'left':false,'right':false},		//16 9
	 {'up':true,'down':false,'left':false,'right':true},		//16 10
	 {'up':false,'down':false,'left':true,'right':true},		//16 11
	 {'up':false,'down':false,'left':true,'right':true},		//16 12
	 {'up':false,'down':true,'left':true,'right':true},		//16 13
	 {'up':false,'down':true,'left':true,'right':false}, 		//16 14
	 {'up':true,'down':true,'left':false,'right':false},		//16 15
	 {'up':false,'down':false,'left':false,'right':true},		//16 16
	 {'up':true,'down':true,'left':true,'right':false},		//16 17
	 {'up':false,'down':true,'left':false,'right':true}, 		//16 18
	 {'up':false,'down':true,'left':true,'right':false}		//16 19
 ],[
	 {'up':false,'down':false,'left':false,'right':true},		//17 0
	 {'up':true,'down':true,'left':true,'right':false},		//17 1
	 {'up':true,'down':false,'left':false,'right':true},		//17 2
	 {'up':true,'down':false,'left':true,'right':false},		//17 3
	 {'up':true,'down':true,'left':false,'right':false},		//17 4
	 {'up':true,'down':true,'left':false,'right':true},		//17 5
	 {'up':true,'down':false,'left':true,'right':false},		//17 6
	 {'up':true,'down':true,'left':false,'right':false},		//17 7
	 {'up':true,'down':false,'left':false,'right':true},		//17 8
	 {'up':true,'down':false,'left':true,'right':false},		//17 9
	 {'up':false,'down':true,'left':false,'right':true},		//17 10
	 {'up':false,'down':false,'left':true,'right':true},		//17 11
	 {'up':false,'down':false,'left':true,'right':true},		//17 12
	 {'up':true,'down':false,'left':true,'right':false},		//17 13
	 {'up':true,'down':true,'left':false,'right':false}, 		//17 14
	 {'up':true,'down':true,'left':false,'right':false},		//17 15
	 {'up':false,'down':true,'left':false,'right':true},		//17 16
	 {'up':true,'down':false,'left':true,'right':false},		//17 17
	 {'up':true,'down':true,'left':false,'right':false}, 		//17 18
	 {'up':true,'down':true,'left':false,'right':false}		//17 19
 ],[
	 {'up':false,'down':true,'left':false,'right':true},		//18 0
	 {'up':true,'down':false,'left':true,'right':false},		//18 1
	 {'up':false,'down':true,'left':false,'right':true},		//18 2
	 {'up':false,'down':true,'left':true,'right':false},		//18 3
	 {'up':true,'down':true,'left':false,'right':false},		//18 4
	 {'up':true,'down':false,'left':false,'right':true},		//18 5
	 {'up':false,'down':true,'left':true,'right':false},		//18 6
	 {'up':true,'down':true,'left':false,'right':false},		//18 7
	 {'up':false,'down':true,'left':false,'right':true},		//18 8
	 {'up':false,'down':false,'left':true,'right':true},		//18 9
	 {'up':true,'down':false,'left':true,'right':false},		//18 10
	 {'up':false,'down':true,'left':false,'right':false},		//18 11
	 {'up':false,'down':true,'left':false,'right':true},		//18 12
	 {'up':false,'down':false,'left':true,'right':false},		//18 13
	 {'up':true,'down':true,'left':false,'right':false}, 		//18 14
	 {'up':true,'down':true,'left':false,'right':false},		//18 15
	 {'up':true,'down':true,'left':false,'right':false},		//18 16
	 {'up':false,'down':true,'left':false,'right':true},		//18 17
	 {'up':true,'down':false,'left':true,'right':false}, 		//18 18
	 {'up':true,'down':true,'left':false,'right':false}		//18 19
 ],[
	 {'up':true,'down':true,'left':false,'right':false},		//19 0
	 {'up':false,'down':false,'left':false,'right':true},		//19 1
	 {'up':true,'down':false,'left':true,'right':false},		//19 2
	 {'up':true,'down':false,'left':false,'right':true},		//19 3
	 {'up':true,'down':false,'left':true,'right':false},		//19 4
	 {'up':false,'down':true,'left':false,'right':false},		//19 5
	 {'up':true,'down':true,'left':false,'right':false},		//19 6
	 {'up':true,'down':true,'left':false,'right':false},		//19 7
	 {'up':true,'down':false,'left':false,'right':true},		//19 8
	 {'up':false,'down':true,'left':true,'right':true},		//19 9
	 {'up':false,'down':false,'left':true,'right':true},		//19 10
	 {'up':true,'down':true,'left':true,'right':false},		//19 11
	 {'up':true,'down':true,'left':false,'right':false},		//19 12
	 {'up':false,'down':true,'left':false,'right':true},		//19 13
	 {'up':true,'down':false,'left':true,'right':false}, 		//19 14
	 {'up':true,'down':true,'left':false,'right':false},		//19 15
	 {'up':true,'down':true,'left':false,'right':false},		//19 16
	 {'up':true,'down':true,'left':false,'right':false},		//19 17
	 {'up':false,'down':true,'left':false,'right':true}, 		//19 18
	 {'up':true,'down':false,'left':true,'right':false}		//19 19
 ],[
	 {'up':true,'down':false,'left':false,'right':true},		//20 0
	 {'up':false,'down':true,'left':true,'right':true},		//20 1
	 {'up':false,'down':true,'left':true,'right':true},		//20 2
	 {'up':false,'down':true,'left':true,'right':false},		//20 3
	 {'up':false,'down':false,'left':false,'right':true},		//20 4
	 {'up':true,'down':false,'left':true,'right':true},		//20 5
	 {'up':true,'down':true,'left':true,'right':false},		//20 6
	 {'up':true,'down':false,'left':false,'right':true},		//20 7
	 {'up':false,'down':true,'left':true,'right':false},		//20 8
	 {'up':true,'down':true,'left':false,'right':false},		//20 9
	 {'up':false,'down':true,'left':false,'right':false},		//20 10
	 {'up':true,'down':true,'left':false,'right':false},		//20 11
	 {'up':true,'down':true,'left':false,'right':false},		//20 12
	 {'up':true,'down':true,'left':false,'right':true},		//20 13
	 {'up':false,'down':true,'left':true,'right':false}, 		//20 14
	 {'up':true,'down':false,'left':false,'right':false},		//20 15
	 {'up':true,'down':true,'left':false,'right':false},		//20 16
	 {'up':true,'down':true,'left':false,'right':false},		//20 17
	 {'up':true,'down':false,'left':false,'right':true}, 		//20 18
	 {'up':false,'down':true,'left':true,'right':false}		//20 19
 ],[
	 {'up':false,'down':true,'left':false,'right':true},		//21 0
	 {'up':true,'down':false,'left':true,'right':false},		//21 1
	 {'up':true,'down':true,'left':false,'right':false},		//21 2
	 {'up':true,'down':false,'left':false,'right':true},		//21 3
	 {'up':false,'down':false,'left':true,'right':true},		//21 4
	 {'up':false,'down':true,'left':true,'right':false},		//21 5
	 {'up':true,'down':false,'left':false,'right':true},		//21 6
	 {'up':false,'down':true,'left':true,'right':false},		//21 7
	 {'up':true,'down':true,'left':false,'right':true},		//21 8
	 {'up':true,'down':false,'left':true,'right':false},		//21 9
	 {'up':true,'down':true,'left':false,'right':false},		//21 10
	 {'up':true,'down':false,'left':false,'right':true},		//21 11
	 {'up':true,'down':false,'left':true,'right':false},		//21 12
	 {'up':true,'down':true,'left':false,'right':false},		//21 13
	 {'up':true,'down':false,'left':false,'right':true}, 		//21 14
	 {'up':false,'down':true,'left':true,'right':false},		//21 15
	 {'up':true,'down':true,'left':false,'right':false},		//21 16
	 {'up':true,'down':false,'left':false,'right':true},		//21 17
	 {'up':false,'down':true,'left':true,'right':false}, 		//21 18
	 {'up':true,'down':true,'left':false,'right':false}		//21 19
 ],[
	 {'up':true,'down':true,'left':false,'right':true},		//22 0
	 {'up':false,'down':false,'left':true,'right':false},		//22 1
	 {'up':true,'down':false,'left':false,'right':true},		//22 2
	 {'up':false,'down':true,'left':true,'right':false},		//22 3
	 {'up':false,'down':false,'left':false,'right':true},		//22 4
	 {'up':true,'down':false,'left':true,'right':false},		//22 5
	 {'up':false,'down':true,'left':false,'right':false},		//22 6
	 {'up':true,'down':true,'left':false,'right':false},		//22 7
	 {'up':true,'down':false,'left':false,'right':true},		//22 8
	 {'up':false,'down':false,'left':true,'right':false},		//22 9
	 {'up':true,'down':true,'left':false,'right':true},		//22 10
	 {'up':false,'down':false,'left':true,'right':true},		//22 11
	 {'up':false,'down':true,'left':true,'right':false},		//22 12
	 {'up':true,'down':true,'left':false,'right':false},		//22 13
	 {'up':false,'down':false,'left':false,'right':true}, 		//22 14
	 {'up':true,'down':false,'left':true,'right':true},		//22 15
	 {'up':true,'down':false,'left':true,'right':false},		//22 16
	 {'up':false,'down':true,'left':false,'right':true},		//22 17
	 {'up':true,'down':false,'left':true,'right':false}, 		//22 18
	 {'up':true,'down':true,'left':false,'right':false}		//22 19
 ],[
	 {'up':true,'down':false,'left':false,'right':true},		//23 0
	 {'up':false,'down':false,'left':true,'right':true},		//23 1
	 {'up':false,'down':false,'left':true,'right':false},		//23 2
	 {'up':true,'down':false,'left':false,'right':true},		//23 3
	 {'up':false,'down':true,'left':true,'right':true},		//23 4
	 {'up':false,'down':true,'left':true,'right':false},		//23 5
	 {'up':true,'down':true,'left':false,'right':true},		//23 6
	 {'up':true,'down':false,'left':true,'right':false},		//23 7
	 {'up':false,'down':true,'left':false,'right':true},		//23 8
	 {'up':false,'down':true,'left':true,'right':false},		//23 9
	 {'up':true,'down':false,'left':false,'right':true},		//23 10
	 {'up':false,'down':true,'left':true,'right':false},		//23 11
	 {'up':true,'down':true,'left':false,'right':false},		//23 12
	 {'up':true,'down':false,'left':false,'right':true},		//23 13
	 {'up':false,'down':true,'left':true,'right':false}, 		//23 14
	 {'up':false,'down':true,'left':false,'right':true},		//23 15
	 {'up':false,'down':false,'left':true,'right':true},		//23 16
	 {'up':true,'down':false,'left':true,'right':false},		//23 17
	 {'up':false,'down':true,'left':false,'right':false}, 		//23 18
	 {'up':true,'down':true,'left':false,'right':false}		//23 19
 ],[
	 {'up':false,'down':true,'left':false,'right':true},		//24 0
	 {'up':false,'down':false,'left':true,'right':true},		//24 1
	 {'up':false,'down':false,'left':true,'right':true},		//24 2
	 {'up':false,'down':false,'left':true,'right':false},		//24 3
	 {'up':true,'down':true,'left':false,'right':false},		//24 4
	 {'up':true,'down':true,'left':false,'right':false},		//24 5
	 {'up':true,'down':true,'left':false,'right':false},		//24 6
	 {'up':false,'down':true,'left':true,'right':true},		//24 7
	 {'up':true,'down':false,'left':true,'right':false},		//24 8
	 {'up':true,'down':true,'left':false,'right':false},		//24 9
	 {'up':false,'down':true,'left':false,'right':false},		//24 10
	 {'up':true,'down':true,'left':false,'right':false},		//24 11
	 {'up':true,'down':false,'left':false,'right':true},		//24 12
	 {'up':false,'down':false,'left':true,'right':true},		//24 13
	 {'up':true,'down':true,'left':true,'right':false}, 		//24 14
	 {'up':true,'down':true,'left':false,'right':false},		//24 15
	 {'up':false,'down':false,'left':false,'right':true},		//24 16
	 {'up':false,'down':false,'left':true,'right':true},		//24 17
	 {'up':true,'down':false,'left':true,'right':true}, 		//24 18
	 {'up':true,'down':false,'left':true,'right':false}		//24 19
 ],[
	 {'up':true,'down':false,'left':false,'right':true},		//25 0
	 {'up':false,'down':false,'left':true,'right':true},		//25 1
	 {'up':false,'down':true,'left':true,'right':false},		//25 2
	 {'up':false,'down':true,'left':false,'right':true},		//25 3
	 {'up':true,'down':false,'left':true,'right':false},		//25 4
	 {'up':true,'down':false,'left':false,'right':false},		//25 5
	 {'up':true,'down':true,'left':false,'right':false},		//25 6
	 {'up':true,'down':true,'left':false,'right':false},		//25 7
	 {'up':false,'down':false,'left':false,'right':true},		//25 8
	 {'up':true,'down':false,'left':true,'right':true},		//25 9
	 {'up':true,'down':false,'left':true,'right':false},		//25 10
	 {'up':true,'down':false,'left':false,'right':true},		//25 11
	 {'up':false,'down':true,'left':true,'right':false},		//25 12
	 {'up':false,'down':true,'left':false,'right':true},		//25 13
	 {'up':true,'down':false,'left':true,'right':false}, 		//25 14
	 {'up':true,'down':false,'left':false,'right':true},		//25 15
	 {'up':false,'down':true,'left':true,'right':true},		//25 16
	 {'up':false,'down':false,'left':true,'right':true},		//25 17
	 {'up':false,'down':false,'left':true,'right':true}, 		//25 18
	 {'up':false,'down':true,'left':true,'right':false}		//25 19
 ],[
	 {'up':false,'down':false,'left':false,'right':true},		//26 0
	 {'up':false,'down':false,'left':true,'right':true},		//26 1
	 {'up':true,'down':false,'left':true,'right':true},		//26 2
	 {'up':true,'down':false,'left':true,'right':true},		//26 3
	 {'up':false,'down':false,'left':true,'right':true},		//26 4
	 {'up':false,'down':false,'left':true,'right':true},		//26 5
	 {'up':true,'down':false,'left':true,'right':false},		//26 6
	 {'up':true,'down':false,'left':false,'right':true},		//26 7
	 {'up':false,'down':false,'left':true,'right':true},		//26 8
	 {'up':false,'down':false,'left':true,'right':true},		//26 9
	 {'up':false,'down':false,'left':true,'right':true},		//26 10
	 {'up':false,'down':false,'left':true,'right':true},		//26 11
	 {'up':true,'down':false,'left':true,'right':false},		//26 12
	 {'up':true,'down':false,'left':false,'right':true},		//26 13
	 {'up':false,'down':false,'left':true,'right':true}, 		//26 14
	 {'up':false,'down':false,'left':true,'right':true},		//26 15
	 {'up':true,'down':false,'left':true,'right':false},		//26 16
	 {'up':false,'down':false,'left':false,'right':true},		//26 17
	 {'up':false,'down':false,'left':true,'right':true}, 		//26 18
	 {'up':true,'down':false,'left':false,'right':false}		//26 19
 ]
 ];