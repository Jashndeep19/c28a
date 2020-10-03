class Boy{
    constructor(x,y,w,h){
        
        var options={
        isStatic:true}		
                
        this.x=x;
        this.y=y;
        this.w=w
        this.h=h
        this.body=Bodies.rectangle(x, y, w, h , options);
        this.image = loadImage("Plucking mangoes/boy.png");
        World.add(world, this.body);}
     
         
    display(){
        var boyPos=this.body.position;
        
        push()
        
        translate(boyPos.x,boyPos.y);
        rectMode(CENTER)
        imageMode(CENTER)
        image(this.image, 0, 0, this.r, this.r)
       // rect(0,0,this.w, this.h);
        
        pop()
        }
        }