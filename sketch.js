let stroke_counter=0;

//width is a default parameter equal to the canvas width
//Same is Height
//FrameRate control by default

function setup()
{
  //createCanvas(1536,792); // Numbers specific to my screen
  cnv=createCanvas(1536,792); // Numbers specific to my screen

  //createCanvas(750, 650, WEBGL)
  x=random()*width
  y=random()*height
  
  fill('aqua');
  //noFill()
  //fill(0);
  
  // To reduce speed
  //frameRate(2);
  direction_back_r=1
  direction_back_g=1
  direction_back_b=1
  back_r=random(0,255)
  back_g=random(0,255)
  back_b=random(0,255)
  ground=random(0,3)
  background(back_r,back_g,back_b,ground);
  noStroke();

  a_direction=1;
  b_direction=1;
  c_direction=1;
  d_direction=1;
  a=random(0,255);
  b=random(0,255);
  c=random(0,255);
  d=random(0,255);
  c1x=random(width);
  c1y=random(height);

  c2x=random(width);
  c2y=random(height);
  i_direction=1;
  j_direction=1;
  k_direction=1;
  l_direction=1;
  i=random(0,255);
  j=random(0,255);
  k=random(0,255);
  l=random(0,255);
  
  c3x=random(width);
  c3y=random(height);
  m_direction=1;
  n_direction=1;
  o_direction=1;
  p_direction=1;
  m=random(0,255);
  n=random(0,255);
  o=random(0,255);
  p=random(0,255);

  c4x=random(width);
  c4y=random(height);
  q_direction=1;
  r_direction=1;
  s_direction=1;
  t_direction=1;
  q=random(0,255);
  r=random(0,255);
  s=random(0,255);
  t=random(0,255);
  
  c5x=random(width);
  c5y=random(height);
  u_direction=1;
  v_direction=1;
  w_direction=1;
  z_direction=1;
  u=random(0,255);
  v=random(0,255);
  w=random(0,255);
  z=random(0,255);

  const_vertical_line=random()*width
  const_horizontal_line=random()*height
  
  h_direction=1
  g_direction=1
  f_direction=1
  e_direction=1
  h=random(0,255);
  g=random(0,255);
  f=random(0,255);
  e=random(0,255);

  h_line_direction=1;
  v_line_direction=1
  line_circ_radius=random()*10

  one_per_prog_run=random(); // BackGround Colour Control              =0
  two_per_prog_run=random(); // Background Opacity Control              =0
  three_per_prog_run=random(); // Stroke and Width Control                =1
  
  four_per_prog_run=random(); // Congested Circular Cloud                     =1
  ten_per_prog_run=random(); // Another Congested Circular Cloud                =1
  thirteen_per_prog_run=random(); // Another Congested Circular Cloud             =1
  eleven_per_prog_run=random(); // Another Congested Circular Cloud                  =1
  twelve_per_prog_run=random(); // Another Congested Circular Cloud                   =1
  
  five_per_prog_run=random(); // 0 would disable any Line to be created                                                       =0
  six_per_prog_run=random(); // Horizontal Line Creation Randomly if >0.75 , slowly and closely if >0 and not created if <0   =0.5
  seven_per_prog_run=random(); // Vertical Line Creation Randomly if >0.75 , slowly and closely if >0 and not created if <0   =0.5
  eight_per_prog_run=random(); // Arbitrary Line creation with similar logics as above                                        =1
  
  nine_per_prog_run=random() // Arbitrary circles anywhere      =1
}

function draw()
{
  if (one_per_prog_run>0.5)
    {

      back_r_step=random()*7
      back_g_step=random()*7
      back_b_step=random()*7

      if (back_r>255)
        direction_back_r=-1
      else
      {
        if(back_r<0)
        direction_back_r=+1
      }

      if (back_g>255)
        direction_back_g=-1
      else
      {
        if(back_g<0)
        direction_back_g=+1
      }

      if (back_b>255)
        direction_back_b=-1
      else
      {
        if(back_b<0)
        direction_back_b=+1
      }

      back_r+=direction_back_r*random(0,back_r_step)
      back_g+=direction_back_g*random(0,back_g_step)
      back_b+=direction_back_b*random(0,back_b_step)

      if (two_per_prog_run>0.88)
        ground=random(0,7*random())
      else
        ground=random(0,1)
      background(back_r,back_g,back_b,ground);
  }

  if (three_per_prog_run>0.5)
  {
    if (random()>0.9)
      {stroke_counter++;
       if (stroke_counter%2==0)
         noStroke();
       else
       {
         strokeWeight(random());
         stroke(255*random(),255*random(),255*random());
       }
      }
  }
    
  if (four_per_prog_run>0.33)
  {
    a_step=random()*7;
    b_step=random()*7;
    c_step=random()*7;
    d_step=random()*7;

    if(a>=255)
      a_direction=-1;
    else
      {if (a<=0)
      a_direction=+1;}
    
    if(b>=255)
      b_direction=-1;
    else
      {if (b<=0)
      b_direction=+1;}
    
    if(c>=255)
      c_direction=-1;
    else
      {if (c<=0) c_direction=+1;}

    if(d>=255)
      d_direction=-1;
    else
      {if (d<=0) d_direction=+1;}

    a+=a_direction*random(a_step);
    b+=b_direction*random(b_step);
    c+=c_direction*random(c_step);
    d+=d_direction*random(d_step);
    fill(a,b,c,d);

    step=random()*17;
    c1x=c1x+random(-step,step);
    c1y=c1y+random(-step,step);
    //c1x=c1x+2*int(random(0,2))-1;
    //c1y=c1y+2*int(random(0,2))-1;

    if(c1x>width)
      {c1x=c1x-width;}
    if(c1x<0)
      {c1x=c1x+width;}

    if(c1y>height)
      {c1y=c1y-height;}
    if(c1y<0)
      {c1y=c1y+height;}
    
    circle(c1x,c1y,random()*44);
  }

  if(five_per_prog_run>0.33)
  {
    e_step=random(7);
    f_step=random(7);
    g_step=random(7);
    h_step=random(7);


    if(e>=255)
      e_direction=-1;
    else
      {if(e<=0) e_direction=+1;}
    
    if(f>=255)
      f_direction=-1;
    else
      {if(f<=0) f_direction=+1;}
    
    if(g>=255)
      g_direction=-1;
    else
      {if (g<=0)
        g_direction=+1;}

    if(h>=255)
      h_direction=-1;
    else
      {if (h<=0)
        h_direction=+1;}

    e+=e_direction*random(e_step);
    f+=f_direction*random(f_step);
    g+=g_direction*random(g_step);
    h+=h_direction*random(h_step);
    fill(e,f,g,h);
    //fill('aqua');

    line_circ_radius=random(0,33);

    if (six_per_prog_run>0.77)
      circle(x+random()*width,const_horizontal_line,line_circ_radius);
    else {if (six_per_prog_run>0) circle(x,const_horizontal_line,line_circ_radius)};

    if (seven_per_prog_run>0.77)
      circle(const_vertical_line,y+random()*height,line_circ_radius);
    else {if (seven_per_prog_run>0) circle(const_vertical_line,y,line_circ_radius);}

    if (eight_per_prog_run>0.77)
      circle(x,y,line_circ_radius);  
    else {if(eight_per_prog_run>0) circle(x+random()*width,y+random()*height,line_circ_radius);}
    
    //if(h_line_direction>0){x=x+random(3);}
    //else{x=x-random(3);}
    //if(v_line_direction>0){y=y+random(3);}
    //else{y=y-random(3);}

    if(x>width)
      {h_line_direction=-3*random();}
    if (x<0)
      {h_line_direction=3*random();}

    if(y>height)
      {v_line_direction=-3*random();}
    if (y<0)
      {v_line_direction=+3*random();}

    x=x+random(3)*h_line_direction
    y=y+random(3)*v_line_direction
  }

  if(nine_per_prog_run>0.66)
  {//frameRate(random(10,20000));
  if (random()>0.99)
  {
    fill(random(255),random(255),random(255),random(255));
    circle(random(width),random(height),random(2,20));
  }}

  if (ten_per_prog_run>0.33)
  {
    i_step=random()*10;
    j_step=random()*10;
    k_step=random()*10;
    l_step=random()*10;

    if(i>=255)
      i_direction=-1;
    else
      {if (i<=0)
      i_direction=+1;}
    
    if(j>=255)
      j_direction=-1;
    else
      {if (j<=0)
      j_direction=+1;}
    
    if(k>=255)
      k_direction=-1;
    else
      {if (k<=0) k_direction=+1;}

    if(l>=255)
      l_direction=-1;
    else
      {if (l<=0) l_direction=+1;}

    i+=i_direction*random(i_step);
    j+=j_direction*random(j_step);
    k+=k_direction*random(k_step);
    l+=l_direction*random(l_step);

    step=random()*23;
    c2x=c2x+random(-step,step);
    c2y=c2y+random(-step,step);
    //c1x=c1x+2*int(random(0,2))-1;
    //c1y=c1y+2*int(random(0,2))-1;

    if(c2x>width)
      {c2x=c2x-width;}
    if(c2x<0)
      {c2x=c2x+width;}

    if(c2y>height)
      {c2y=c2y-height;}
    if(c2y<0)
      {c2y=c2y+height;}
    
    fill(i,j,k,l);
    circle(c2x,c2y,random()*33);
  }

  if (eleven_per_prog_run>0.33)
  {
    m_step=random()*13;
    n_step=random()*13;
    o_step=random()*13;
    p_step=random()*13;

    if(m>=255)
      m_direction=-1;
    else
      {if (m<=0)
      m_direction=+1;}
    
    if(n>=255)
      n_direction=-1;
    else
      {if (n<=0)
      n_direction=+1;}
    
    if(o>=255)
      o_direction=-1;
    else
      {if (o<=0) o_direction=+1;}

    if(p>=255)
      p_direction=-1;
    else
      {if (p<=0) p_direction=+1;}

    m+=m_direction*random(m_step);
    n+=n_direction*random(n_step);
    o+=o_direction*random(o_step);
    p+=p_direction*random(p_step);

    step=random()*11;
    c3x=c3x+random(-step,step);
    c3y=c3y+random(-step,step);
    //c1x=c1x+2*int(random(0,2))-1;
    //c1y=c1y+2*int(random(0,2))-1;

    if(c3x>width)
      {c3x=c3x-width;}
    if(c3x<0)
      {c3x=c3x+width;}

    if(c3y>height)
      {c3y=c3y-height;}
    if(c3y<0)
      {c3y=c3y+height;}
    
    fill(m,n,o,p);
    circle(c3x,c3y,random()*11);
  }

  if (twelve_per_prog_run>0.33)
  {
    q_step=random()*7;
    r_step=random()*7;
    s_step=random()*7;
    t_step=random()*7;

    if(q>=255)
      q_direction=-1;
    else
      {if (q<=0)
      q_direction=+1;}
    
    if(r>=255)
      r_direction=-1;
    else
      {if (r<=0)
      r_direction=+1;}
    
    if(s>=255)
      s_direction=-1;
    else
      {if (s<=0) s_direction=+1;}

    if(t>=255)
      t_direction=-1;
    else
      {if (t<=0) t_direction=+1;}

    q+=q_direction*random(q_step);
    r+=r_direction*random(r_step);
    s+=s_direction*random(s_step);
    t+=t_direction*random(t_step);

    step=random()*13;
    c4x=c4x+random(-step,step);
    c4y=c4y+random(-step,step);
    //c1x=c1x+2*int(random(0,2))-1;
    //c1y=c1y+2*int(random(0,2))-1;

    if(c4x>width)
      {c4x=c4x-width;}
    if(c4x<0)
      {c4x=c4x+width;}

    if(c4y>height)
      {c4y=c4y-height;}
    if(c4y<0)
      {c4y=c4y+height;}
    
    fill(q,r,s,t);
    circle(c4x,c4y,random()*17);
  }

  if (thirteen_per_prog_run>0.33)
  {
    u_step=random()*3;
    v_step=random()*3;
    w_step=random()*3;
    z_step=random()*3;

    if(u>=255)
      u_direction=-1;
    else
      {if (u<=0)
      u_direction=+1;}
    
    if(v>=255)
      v_direction=-1;
    else
      {if (v<=0)
      v_direction=+1;}
    
    if(w>=255)
      w_direction=-1;
    else
      {if (w<=0) w_direction=+1;}

    if(z>=255)
      z_direction=-1;
    else
      {if (z<=0) z_direction=+1;}

    z+=z_direction*random(z_step);
    u+=u_direction*random(u_step);
    v+=v_direction*random(v_step);
    w+=w_direction*random(w_step);

    step=random()*7;
    c5x=c5x+random(-step,step);
    c5y=c5y+random(-step,step);
    //c1x=c1x+2*int(random(0,2))-1;
    //c1y=c1y+2*int(random(0,2))-1;

    if(c5x>width)
      {c5x=c5x-width;}
    if(c5x<0)
      {c5x=c5x+width;}

    if(c5y>height)
      {c5y=c5y-height;}
    if(c5y<0)
      {c5y=c5y+height;}
    
    fill(u,v,w,z);
    circle(c5x,c5y,random()*11);
  }
}

function keyTyped()
{
  if (key === 's')
  {
    var name="CyBorG Art "+str(int(random()*10000))+".jpg"
    save(cnv, name);
    //photo.save('C:/CyBorG/IIT Kharagpur/Algorithmic Art Competition/p5js/Pictures'+name, 'png');
  }
}