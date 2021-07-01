class Cannon{
    constructor(x,y,W,H,A){
     this.x = x;
     this.y = y;
     this.width = W;
     this.height = H;
     this.angle = A;
    }
    diskall(){
        fill("#654321")
        push();
        translate(this.x,this.y);
        rotate(this.angle);
        rect(-90,0,this.width,this.height,this.angle);
        pop();
        arc(this.x,this.y,100,100,PI,TWO_PI)
    }
}