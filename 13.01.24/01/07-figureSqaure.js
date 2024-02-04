function calc(input){
    let figure = input[0];    

    if(figure == "square"){
        let squareSide = Number(input[1]);
        let squareSq =  Math.pow(squareSide, 2);
        console.log(squareSq.toFixed(3));
    }

    if(figure == "rectangle"){
        let rectangleA = Number(input[1]);
        let rectangleB = Number(input[2]);
        let rectangleSquare = rectangleA * rectangleB;
        console.log(rectangleSquare.toFixed(3));
    }

    if(figure == "circle"){
        let radius = Number(input[1]);
        let circleSquare = Math.PI * Math.pow(radius, 2);
        console.log(circleSquare.toFixed(3));
    }

    if(figure == "triangle"){
        let b = Number(input[1]);
        let hb = Number(input[2]);
        let triangleArea = (b * hb) / 2;
        console.log(triangleArea.toFixed(3));
    }
}
calc(["triangle", "4.5", "20"]);