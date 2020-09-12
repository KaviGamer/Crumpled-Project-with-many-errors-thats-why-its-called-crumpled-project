class Paper {
    constructor(x, y) {
      var options = {
          isStatic : false,
          restitution : 0.3,
          friction : 0.5,
          density : 1.2
      }
      this.body = Matter.Bodies.circle(x, y, 30, options);
      this.r = 30;
      this.x = x;
      this.y = y;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      strokeWeight(4);
      fill("pink");
      ellipse(0,0,this.r,this.r)
      pop();
    }
  };