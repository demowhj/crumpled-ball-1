class Dustbin {
    constructor(x,y,width,height){
        var options = {
            friction:0.5,
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        fill(255);
        stroke(255);
        rect(this.body.position.x, this.body.position.y, this.width,this.height);
    }
}