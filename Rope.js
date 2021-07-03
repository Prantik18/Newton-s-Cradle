class Rope{
constructor(bodyA, pointB){
    var Rope_options = {
        bodyA : bodyA,
        pointB : pointB,
        stiffness : 0.9,
        length : 200    
    }

    this.pointB = pointB
    this.Rope = Constraint.create(Rope_options);
    World.add(world, this.Rope);
}

display(){
    if(this.Rope.bodyA){
        var pointA = this.Rope.bodyA.position
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}

  }