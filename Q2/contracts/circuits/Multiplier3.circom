pragma circom 2.0.0;

// [assignment] Modify the circuit below to perform a multiplication of three signals

template Multiplier2(){

   signal input in1;
   signal input in2;
   signal output out1;

   out1 <== in1 * in2;
}

template Multiplier3 () {  

   signal input in1;
   signal input in2;
   signal input in3;
   signal output out;
   component mult1 = Multiplier2();
   component mult2 = Multiplier2();

   //Statements.
   mult1.in1 <== in1;
   mult1.in2 <== in2;
   mult2.in1 <== mult1.out1;
   mult2.in2 <== in3;
   out <== mult2.out1;
}

component main = Multiplier3();
