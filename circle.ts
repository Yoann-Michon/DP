import { Shape } from "./shape";

export class Circle extends Shape{
    radius: number;
    
    constructor(x:number,y:number,radius:number){
        super(x,y);
        this.radius=radius;
        console.log("nouveau cercle");
    }

    clone(){
        return new Circle(this.x,this.y,this.radius);
    }
    
}