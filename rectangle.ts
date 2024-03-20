import { Shape } from "./shape"

export class Rectangle extends Shape{
    width:number;
    height:number;

    constructor(x:number,y:number,width:number,height:number){
        super(x,y);
        this.width=width;
        this.height=height;
        console.log("nouveau rectangle");
    }

    clone(){
        return new Rectangle(this.x,this.y,this.width,this.height);
    }
    
}