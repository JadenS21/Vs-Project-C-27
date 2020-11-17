class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.String = Constraint.create(options);
        World.add(world, this.String);   
    }
        
    display(){
        if (this.String.bodyA){
        var pointA = this.String.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        fill("grey");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}