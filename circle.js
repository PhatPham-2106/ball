class Circle{
    constructor(x,y,radius,color,speed){
        this.x=x
        this.y=y 
        this.radius=radius
        this.color=color 
        this.speed=speed
    }
    render(paper){
        let pen=paper.getContext('2d');
        pen.beginPath();
        pen.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        pen.fillStyle = this.color;
        pen.fill();
        pen.closePath()
    }
    renderImage(paper){
        let img= new Image();
        img.src='ball2.jpg';
        pen.drawImage(img,this.x,this.y,this.radius,this.radius)
    }
    moveRight(){
        this.x+=this.speed;
    }
}