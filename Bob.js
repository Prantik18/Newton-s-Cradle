class Bob{

constructor(x,y,r){
    var Bob_options ={
        restitution : 1.4,
        isStatic : false,
        friction : 0,
        density : 0.8
    }

    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, Bob_options);
    World.add(world, this.body);
}

display(){

var bobPos = this.body.position;
push();
ellipseMode(CENTER);
fill(6,253,199);
ellipse(0,0,this.r, this.r);
pop();

}

}