class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,//angry bird
            pointB:pointB,
            stifness:0.04,
            length:10
        }
        this.chain=Constraint.create(options);
        this.pointB = pointB
        World.add(world,this.chain);
        
    }
    fly(){
        //null means nothing()
        this.chain.bodyA = null; 
    }
    display(){
        if(this.chain.bodyA){
        var pointA=this.chain.bodyA.position;//namespacing
        var pointB=this.pointB;
           strokeWeight(5);
           line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}