class Shape{
    constructor(color, filled){
        this.color = color;
        this.filled = filled;
    }

    set Color(color){
        this.color = color;
    }

    set isFilled(filled){
        this.filled = filled;
    }
    
    toString(){
        `Color = ${this.color} \n isFilled = ${this.filled}`
    }
}


class Circle extends Shape{
    constructor(radius , color , filled){
        super(color , filled);
        this.radius = radius;
    }

    set Radius(radius){
        this.radius = radius;
    }

    get Area(){
        return Math.PI * Math.pow(this.radius , 2);
    }

    get Perimeter(){
        return Math.PI * 2 * this.radius;
    }
    
    circleInfo(){
        return `Color = ${this.color} \n isFilled = ${this.filled}
        Radius = ${this.radius} \n Area = ${Math.PI * Math.pow(this.radius , 2)}
        \n Perimeter = ${Math.PI * 2 * this.radius}`
    }
}

class Rectangle extends Shape{
    constructor(length , width , color , filled){
        super(color, filled);
        this.length = length;
        this.width = width;
    }

    set Length(length){
        this.length = length;
    }

    set Width(width){
        this.width = width;
    }

    get Area(){
        return this.length * this.width;
    }

    get Perimeter(){
        return (this.length + this.width) * 2;
    }
    
    rectangleInfo(){
        return `Color = ${this.color} \n isFilled = ${this.filled}
        \n Length = ${this.length} \n Width = ${this.width}
        \n Area = ${this.length * this.width} \n Perimeter = ${(this.length + this.width) * 2}`
    }
}

class Square extends Rectangle{
    constructor(side , color , filled){
        super(color, filled);
        this.side = side;
    }

    set Side(side){
        this.side = side;
    }




    set Width(width){
        this.width = width;
    }

    set Length(length){
        this.length = length;
    }

    squareInfo(){
        return `Color = ${this.color} \n isFilled = ${this.filled}
        \n Length = ${this.length} \n Width = ${this.width}
        Side = ${this.side}`
    }
}





let cir = new Circle(1, "blue", true);
cir.Radius = 3;
cir.Color = "yellow";
cir.isFilled = false;
console.log(cir.Area);
console.log(cir.Perimeter);
console.log(cir.circleInfo())


let rect = new Rectangle(6 , 3, "green", true);
rect.length = 4;
rect.width = 2;
rect.Color = "yellow";
rect.isFilled = false;
console.log(rect.Area);
console.log(rect.Perimeter);
console.log(rect.rectangleInfo())



let sq = new Square(2, "red", false);
sq.Side = 4;
sq.Color = "yellow";
sq.isFilled = true;
sq.length = 2;
sq.width = 2;
console.log(sq.squareInfo())