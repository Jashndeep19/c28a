class Tree{
    constructor(x,y,w,h){
        
        var options={
        isStatic:true}		
                
        this.x=x;
        this.y=y;
        this.w=w
        this.h=h
        this.body=Bodies.rectangle(x, y, w, h , options);
        this.image = loadImage("Plucking mangoes/tree.png");
        this.body.hide
        World.add(world, this.body);}
     
         
    display(){
        var treePos=this.body.position;
        
        push()
        
        translate(treePos.x,treePos.y);
        rectMode(CENTER)
        imageMode(CENTER)
        image(this.image, 0, 0, this.r, this.r)
        
        
        pop()
        }
        }
