class Paper {
    constructor(){
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(200,200,40,options);
        World.add(world, this.body);
    }

    display(){
        fill("pink");
        stroke("pink");
        circle(this.body.position.x, this.body.position.y, 40);
    }
}