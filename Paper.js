class Paper {
    constructor(x,y,radius,) {
        var options = {
            isStatic: false,
            'restitution': 0.3,
            'friction':0,
            'density':1.2
        }
        this.radius = radius
        this.x = x
        this.y = y
        this.image = loadImage("paper.png")
        this.body = Bodies.circle(this.x,this.y,this.radius, options);
        
       

        World.add(world, this.body);
    }
    display(){

        var paperPos=this.body.position;

        push()

        translate(paperPos.x,paperPos.y)

       // rotate(this.body.angle)

        rectMode(CENTER)

        fill(255,0,255);

        image(this.image,paperPos.x,paperPos.y, this.radius);

        pop()


    }       
};
