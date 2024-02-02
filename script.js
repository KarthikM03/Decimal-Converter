function fun() {
  let a = document.getElementById("from").value;
  let b = document.getElementById("to").value;
  let input = document.getElementById("input").value;
  if (input != "") {
    if (a == 1 && b == 2) {
      DtB(input);
    } else if (a == b) {
      alert("Choose the Option to Change the Number");
    } else if (a == 2 && b == 1) {
      BtD(input);
    } else if (a == 1 && b == 3) {
      DtO(input);
    } else if (a == 3 && b == 1) {
      OtD(input);
    } else if (a == 1 && b == 4) {
      DtH(input);
    } else if (a == 4 && b == 1) {
      HtD(input);
    } else if (a == 2 && b == 4) {
      BtH(input);
    } else if (a == 4 && b == 2) {
      HtB(input);
    } else if (a == 3 && b == 4) {
      OtH(input);
    } else if (a == 4 && b == 3) {
      HtO(input);
    } else if (a == 3 && b == 2) {
      OtB(input);
    } else if (a == 2 && b == 3) {
      BtO(input);
    }
  } else {
    alert("Enter the Input");
  }
}
function DtB(N) {
    k =parseInt(N)
    let D = k.toString(2);
    document.getElementById("output").value = D;
}
function BtD(N) {
  B = parseInt(N, 2);
  document.getElementById("output").value = B;
}


function DtO(N) {
  k = parseInt(N);
  let D = k.toString(8);
  document.getElementById("output").value = D;
}
function OtD(N) {
  B = parseInt(N, 8);
  document.getElementById("output").value = B;
}


function DtH(N) {
  k = parseInt(N);
  let D = k.toString(16);
  document.getElementById("output").value = D.toUpperCase();
}
function HtD(N) {
  B = parseInt(N, 16);
  document.getElementById("output").value = B;
}


function BtH(N) {
  let m = parseInt(N, 2);
  D = m.toString(16);
  document.getElementById("output").value = D;
}
function HtB(N) {
  B = parseInt(N, 16);
  k = B.toString(2);
  document.getElementById("output").value = k;
}


function OtH(N) {
  let m = parseInt(N, 8);
  D = m.toString(16);
  document.getElementById("output").value = D.toUpperCase();
}
function HtO(N) {
  B = parseInt(N, 16);
  k = B.toString(8);
  document.getElementById("output").value = k;
}


function OtB(N) {
  let m = parseInt(N, 8);
  D = m.toString(2);
  document.getElementById("output").value = D;
}
function BtO(N) {
  B = parseInt(N, 2);
  k = B.toString(8);
  document.getElementById("output").value = k;
}
