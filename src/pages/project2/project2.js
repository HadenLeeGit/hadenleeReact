import React from 'react';
const gridContainer = {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto auto auto",
    gridGap: "10px",
    padding: "10px",
};

const prime = {
    backgroundColor: "red",
    border: "5px solid black",
    padding: "20px",
    fontSize: "30px",
    textAlign: "center",
};

const even = {
    backgroundColor: "green",
    padding: "20px",
    fontSize: "30px",
    textAlign: "center",
};

const odd = {
    backgroundColor: "yellow",
    padding: "20px",
    fontSize: "30px",
    textAlign: "center",
};

function showStyle(probs) {
    if (probs === 1) {
        //odd
        return odd;
    }

    if (isPrime(probs)) {
        //prime
        return prime;
    } else if (probs % 2 === 0) {
        //even
        return even;
    } else {
        //odd
        return odd;
    }
}

function isPrime(number) {
    var isPrime = true;
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
        }
    }
    return isPrime;
}

var numbers = new Array();
for(var i = 1; i <= 80; i++){
    numbers.push(i);
}

const items = numbers.map((number) =>
    <div style={showStyle(number)} key={number.toString()}>
        {number}
    </div>
);
export class Project2 extends React.Component {



render() {return (
    <div className="App" style={{marginTop:84}}>
        <div style={gridContainer}>
            {items}
        </div>
    </div>
    );}
}