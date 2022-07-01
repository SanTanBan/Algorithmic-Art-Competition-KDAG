let rad=10;
let dir=1;
let cx,cy,step=5;
let k=1,l=1,m=1,n=1;
let x=0;
let stroke_counter=0;


function setup() 
{
  createCanvas(600,600);
  fill('aqua');
  background(240);
  noStroke();
  //noFill()
  // To reduce speed
  //frameRate(2);
}
function draw()
{
  //frameRate(random(2,200));
  fill(random(255),random(255),random(255),random(255));
  circle(random(width),random(height),random(2,20));
}

//width is a default parameter equal to the canvas width

//Same is height

//FrameRate control by defaul






function setup()
{
  createCanvas(400, 400);
  background(220);
  fill(0);
  noStroke();
}

function draw()
{
  background(220,9);
  circle(x,200,random(7,17));
  x=x+1;
  if(x>width)
    {
      x=0;
      //fill(random(255,random(255),random(255))
    }
  //rad=random(2,20);
  fill(random(255))
}


//When we are writing a new variable; we need to write above the setup as there is a variable scope




function setup()
{
  createCanvas(400,400);
  fill('aqua');
  
}

function draw()
{
  background(240);
  circle(x,200,rad);
  //fill('aqua');
  if(dir>0){x=x+2;}
  else{x=x-2;}
  if((x>width) || (x<0))
  {
    dir=dir*-1;
    rad=random(10,50);
    //fill('aqua');
  }
  
}
  
  
  
  
  
  
  
  
  
function setup() 
{
  createCanvas(600,600);
  fill('aqua');
  background(240);
  //noStroke();
  //noFill()
  // To reduce speed
  //frameRate(-5);
}


function setup()
{
  createCanvas(750,650);
  //createCanvas(750, 650, WEBGL)
  back_r=random(0,256)
  back_g=random(0,256)
  back_b=random(0,256)
  ground=random(0,10)
  background(back_r,back_g,back_b,ground);
  cx=random(width);
  cy=random(height);
  noStroke();
  a=random(0,256);
  b=random(0,256);
  c=random(0,256);
  d=random(0,256);
  k=random()
  l=random()
  
  const_w=random()*width
  const_h=random()*height
  
  one_per_prog_run=random();
  two_per_prog_run=random();
  three_per_prog_run=random();
  four_per_prog_run=random();
  five_per_prog_run=random();
  six_per_prog_run=random();
  seven_per_prog_run=random();
}
  

function draw()
{
  if (two_per_prog_run<0.5)
    {
      back_r_step=random()*5
      back_g_step=random()*5
      back_b_step=random()*5
      back_r+=random(-back_r_step,back_r_step)
      back_g+=random(-back_g_step,back_g_step)
      back_b+=random(-back_b_step,back_b_step)
      ground=random(0,1)
      background(back_r,back_g,back_b,ground);
    }

  if (one_per_prog_run>0.5)
  {
    if (random()>0.99)
      {stroke_counter++;
       if (stroke_counter%2==0)
         noStroke();
       else
       {
         strokeWeight(random());
         stroke(256*random(),256*random,256*random);
       }
      }
  }
  fill(a,b,c,d);
  a=a+k
  if(a==255 || a==0)
  {
    k=-1*k
    b=b+l
    if(b==255 || b==0)
      {
        l=-1*l
        c=c+m
        if(c==255 || c==0)
        {
          m=-1*m
          d=d+n
          if(d==255||d==0)
            n=-1*n
        }
        
      }
  }
    
  if (three_per_prog_run>0.5)
  {
    circle(cx,cy,random()*25);
    step=random()*15;
    cx=cx+random(-step,step);
    cy=cy+random(-step,step);
    //cx=cx+2*int(random(0,2))-1;
    //cy=cy+2*int(random(0,2))-1;

    if(cx>width)
      {cx=cx-width;}
    if(cx<0)
      {cx=cx+width;}

    if(cy>height)
      {cy=cy-height;}
    if(cy<0)
      {cy=cy+height;}
  }
    
    
  if (four_per_prog_run>0.5)
    {
      //rotateX(frameCount * 0.01);
      //rotateZ(frameCount * 0.01);
      if (five_per_prog_run>0.5)
        circle(x+random()*width,const_h,rad);
      else
        circle(x,200,rad);
      //fill('aqua');
      if(dir>0){x=x+2;}
      else{x=x-2;}
      if((x>width) || (x<0))
      {
        dir=dir*-1;
        rad=random(10,50);
        fill('aqua');
      }
    }
  else
    {circle(cx,cy,random()*25);
    step=random()*15;
    cx=cx+random(-step,step);
    cy=cy+random(-step,step);
    //cx=cx+2*int(random(0,2))-1;
    //cy=cy+2*int(random(0,2))-1;

    if(cx>width)
      {cx=cx-width;}
    if(cx<0)
      {cx=cx+width;}

    if(cy>height)
      {cy=cy-height;}
    if(cy<0)
      {cy=cy+height;}}
  
  
  if(six_per_prog_run>0.5)
  {//frameRate(random(10,20000));
  if (random()>0.99)
  {
    fill(random(255),random(255),random(255),random(255));
    circle(random(width),random(height),random(2,20));
  }}
  

  
  
  if (seven_per_prog_run>0.5)
    {
      //rotateX(frameCount * 0.01);
      //rotateZ(frameCount * 0.01);
      if (five_per_prog_run>0.5)
        circle(x+random()*width,const_h,rad);
      else
        circle(x,200,rad);
      //fill('aqua');
      if(dir>0){x=x+2;}
      else{x=x-2;}
      if((x>width) || (x<0))
      {
        dir=dir*-1;
        rad=random(10,50);
        fill('aqua');
      }
    }
  else
    {circle(cx,cy,random()*25);
    step=random()*15;
    cx=cx+random(-step,step);
    cy=cy+random(-step,step);
    //cx=cx+2*int(random(0,2))-1;
    //cy=cy+2*int(random(0,2))-1;

    if(cx>width)
      {cx=cx-width;}
    if(cx<0)
      {cx=cx+width;}

    if(cy>height)
      {cy=cy-height;}
    if(cy<0)
      {cy=cy+height;}}
  
  
  if(six_per_prog_run>0.5)
  {//frameRate(random(10,20000));
  if (random()>0.99)
  {
    fill(random(255),random(255),random(255),random(255));
    circle(random(width),random(height),random(2,20));
  }}
  
  
  
  
  
  
  
  
  
}
/*
function draw() {
  background(0);
  //noStroke();
  fill(240, 150, 150);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(555, 45, 45);
  describe('black canvas with pink cube spinning');
}

function draw() {
  background(205, 105, 94);
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  //noStroke();
  cylinder(200, 50);
}
*/
  
