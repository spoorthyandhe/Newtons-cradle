 class Pendulum{
    constructor(x, y,w,h) {
        var options = {
           restitution:1,
           friction:0,
           frictionAir:0.0,
           slop:1,
           inertia:Infinity

        }
        this.x=x;
        this.y=y;
         this.w=w;
         this.h=h;
          this.body=Bodies.rectangle(this.x, this.y,this.w,this.h, options)
          World.add(world, this.body);
      }
      display(){
        var angle=this.body.angle;
         push();
          translate(this.body.position.x,this.body.position.y);
           rotate(angle);
           stroke(255,255,255);
           fill("black");
         ellipse(0,0,this.w,this.h);
          pop();
      }
}