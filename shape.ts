export abstract class Shape{
    x:number;
    y:number;
    color:string;

    constructor(x:number,y:number){
        this.x=x;
        this.y=y;
        this.color="noir";
        console.log("nouvelle forme créé");
    }

    abstract clone():Shape;
}