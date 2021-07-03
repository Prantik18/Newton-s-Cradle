class Roof{
constructor(x,y,w,h){
this.body = Bodies.rectangle(x,y,w,h,{isStatic : true});
this.w = w;
this.h = h;
World.add(world, this.body);
}

display(){
push();
rectMode(CENTER);
ellipseMode(CENTER);
fill(128,128,128);
rect(this.body.position.x, this.body.position.y, this.w, this.h);
pop();
}

}