var ex4At = 0;
var ex4_BGStartPage;
var ex4_BGPlayPage;
var ex4_BGScorePage;
var ex4_songFirstPage;
var ex4_songPalyPage;
var monster;
let fruits = [];
let spikes = [];
var ex4_logo;
var ex4_logo1;
var ex4_logo2;
var ex4_jumpSound;
var ex4_bellSound1;
var ex4_bellSound2;
var ex4_mouseOverSound;
var ex4_diedSound;
var ex4_startPageSound;

////////// Start Page //////////////
var ex4_playbutton;
var ex4_backbutton;
var ex4_buttonToStart;
var ex4_buttonPlay1;
var ex4_buttonPlay2;
var ex4_buttonBack1;
var ex4_buttonBack2;
var ex4_buttonToStart1;
var ex4_buttonToStart2;

///////////// PrePlay //////////////
var ex4_preCount = 0;
var ex4_jump;
var ex4_jump1;
var ex4_jump2;
var ex4_mouseMove;
var ex4_px;
var ex4_py;
var ex4_pSpeed = 10;


/////////// PlayPage ///////////////
var ex4_gameSpeed = 5;
var ex4_speedx1 = 0;
var ex4_speedx2;
var ex4_speedx3 = 0;
var ex4_speedx4;
var ex4_speedx5 = 0;
var ex4_speedx6;
var ex4_speedx7 = 0;
var ex4_speedx8;
var ex4_speedx9 = 0;
var ex4_speedx10;
var ex4_fruitShow;
var ex4_f0;
var ex4_f1;
var ex4_f2;
var ex4_f3;
var ex4_f4;
var ex4_f5;
var ex4_f6;
var ex4_f7;
var ex4_f8;
var ex4_f9;
var ex4_f10;
var ex4_f11;
var ex4_f12;
var ex4_f13;
var ex4_f14;
var ex4_f15;
var ex4_f16;
var ex4_f17;
var ex4_f;
var ex4_s1;
var ex4_s2;
var ex4_s3;
var ex4_s4;
var ex4_s5;
var ex4_s6;
var ex4_s7;
var ex4_s8;
var ex4_s9;
var ex4_s;
var c;
var ex4_bg1;
var ex4_bg2;
var ex4_bg3;
var ex4_bg4;
var ex4_bg5;
var ex4_bg1s = 0.5;
var ex4_bg2s = 0.5;
var ex4_bg3s = 1;
var ex4_bg4s = 2;
var ex4_bg5s = 3;
var ex4_bg = [];
var ex4_monster;

/////////////////Score counting//////////////////////////
var ex4_scoreCount = 0;
let ex4_colorCount;

function preload()
{
  ex4_jumpSound = loadSound('res\\exercise4\\jumpSound.mp3');
  ex4_bellSound1 = loadSound('res\\exercise4\\bell1.mp3');
  ex4_bellSound2 = loadSound('res\\exercise4\\bell2.mp3');
  ex4_mouseOverSound = loadSound('res\\exercise4\\mouseOverSound.mp3');
  ex4_diedSound = loadSound('res\\exercise4\\diedSound.mp3');
  ex4_startPageSound = loadSound('res\\exercise4\\startPageSound.mp3');
  ex4_BGStartPage = loadImage('res\\exercise4\\background.png');
  ex4_buttonPlay1 = loadImage('res\\exercise4\\button1.png');
  ex4_buttonPlay2 = loadImage('res\\exercise4\\button2.png');
  ex4_buttonBack1 = loadImage('res\\exercise4\\toMainbutton1.png');
  ex4_buttonBack2 = loadImage('res\\exercise4\\toMainbutton2.png');
  ex4_buttonToStart1 = loadImage('res\\exercise4\\backButton1.png');
  ex4_buttonToStart2 = loadImage('res\\exercise4\\backButton2.png');
  ex4_f0 = loadImage('res\\exercise4\\1.png');
  ex4_f1 = loadImage('res\\exercise4\\2.png');
  ex4_f2 = loadImage('res\\exercise4\\3.png');
  ex4_f3 = loadImage('res\\exercise4\\4.png');
  ex4_f4 = loadImage('res\\exercise4\\5.png');
  ex4_f5 = loadImage('res\\exercise4\\6.png');
  ex4_f6 = loadImage('res\\exercise4\\7.png');
  ex4_f7 = loadImage('res\\exercise4\\8.png');
  ex4_f8 = loadImage('res\\exercise4\\9.png');
  ex4_f9 = loadImage('res\\exercise4\\10.png');
  ex4_f10 = loadImage('res\\exercise4\\11.png');
  ex4_f11 = loadImage('res\\exercise4\\12.png');
  ex4_f12 = loadImage('res\\exercise4\\13.png');
  ex4_f13 = loadImage('res\\exercise4\\14.png');
  ex4_f14 = loadImage('res\\exercise4\\15.png');
  ex4_f15 = loadImage('res\\exercise4\\16.png');
  ex4_f16 = loadImage('res\\exercise4\\17.png');
  ex4_s1 = loadImage('res\\exercise4\\s1.png');
  ex4_s2 = loadImage('res\\exercise4\\s2.png');
  ex4_s3 = loadImage('res\\exercise4\\s3.png');
  ex4_s4 = loadImage('res\\exercise4\\s4.png');
  ex4_s5 = loadImage('res\\exercise4\\s5.png');
  ex4_s6 = loadImage('res\\exercise4\\s6.png');
  ex4_s7 = loadImage('res\\exercise4\\s7.png');
  ex4_s8 = loadImage('res\\exercise4\\s8.png');
  ex4_s9 = loadImage('res\\exercise4\\s9.png');
  ex4_bg1 = loadImage('res\\exercise4\\bg1.png');
  ex4_bg2 = loadImage('res\\exercise4\\bg2.png');
  ex4_bg3 = loadImage('res\\exercise4\\bg3.png');
  ex4_bg4 = loadImage('res\\exercise4\\bg4.png');
  ex4_bg5 = loadImage('res\\exercise4\\bg5.png');
  ex4_colorCount = color('hsl(160, 100%, 50%)')
  ex4_logo1 = loadImage('res\\exercise4\\logo3.png');
  ex4_logo2 = loadImage('res\\exercise4\\logo2.png');
  ex4_jump1 = loadImage('res\\exercise4\\key1.png');
  ex4_jump2 = loadImage('res\\exercise4\\key2.png');
  ex4_mouseMove = loadImage('res\\exercise4\\mouse.png');
  ex4_monsterPic = loadImage('res\\exercise4\\monster0.png');
}

function setup() 
{
  createCanvas(1400, 700);
  ex4_speedx2 = width;
  ex4_speedx4 = width;
  ex4_speedx6 = width;
  ex4_speedx8 = width;
  ex4_speedx10 = width;
  monster = new Monster(ex4_monsterPic);
  ex4_f = [ex4_f0,ex4_f1,ex4_f2,ex4_f3,ex4_f4,ex4_f5,ex4_f6,
    ex4_f7,ex4_f8,ex4_f9,ex4_f10,ex4_f11,ex4_f12,ex4_f13,ex4_f14,ex4_f15,ex4_f16];
  ex4_s = [ex4_s1,ex4_s2,ex4_s3,ex4_s4,ex4_s5,ex4_s6,ex4_s7,ex4_s8,ex4_s9]
  c = 0;
  ex4_bg = [ex4_bg1,ex4_bg2,ex4_bg3,ex4_bg4,ex4_bg5]
  ex4_logo = ex4_logo1;
  ex4_jump = ex4_jump1;
  ex4_px = 800;
}

function draw() 
{
  switch(ex4At)
  {
    case 0:
      //ex4_startPageSound.play();
      ex4_scoreCount = 0;
      fruits = [];
      spikes = [];
      ex4_startPage();
      break;
    case 1:
      //ex4_startPageSound.stop();
      ex4At = 2;
      //prePlayPage();
      break;
    case 2:
      ex4_playPage();
      break;
    case 3:
      ex4_scorePage();
      break;
    default:
      ex4At = 0;
  }
}

//////////////////////////////////// Commom action ///////////////////////////////////////

function keyPressed()
{
  switch(ex4At)
  {
    case 0:
      break;
    case 1:
      if(key == ' ')
      {
        ex4At = 2;
      }
      break;
    case 2:
      if(key == ' ')
      {
        monster.jump();
        ex4_jumpSound.play();
      }
      break;  
    case 3:
      break; 
    default:
      ex4At = 0;
  }
}

function mouseClicked()
{
  switch(ex4At)
  {
    case 0:
      if(mouseX>550 && mouseY>375 && mouseX<850 && mouseY<450)
      {
        ex4At = 1;
      }
        else if(mouseX>550 && mouseY>475  && mouseX<850  && mouseY<550  )
      {
        at = 1;
      }
      break;
    case 1:

      break;
    case 2:
      
      break;
    case 3:
      if(mouseX>550 && mouseY>375 && mouseX<850 && mouseY<450)
      {
        ex4At = 0;
      }
      break;
    default:
      ex4At = 0;
  }
}

function mouseOver1()
{
  switch(ex4At)
  {
    case 0:
      if(mouseX>550 && mouseY>375 && mouseX<850 && mouseY<450)
      {
        ex4_playbutton = ex4_buttonPlay2;
      }
      else
      {
        ex4_playbutton = ex4_buttonPlay1;
      }

      if(mouseX>550 && mouseY>475  && mouseX<850  && mouseY<550  )
      {
        ex4_backbutton = ex4_buttonBack2;
      }
      else
      {
        ex4_backbutton = ex4_buttonBack1;
      }
      break;
    case 3:
      if(mouseX>550 && mouseY>375 && mouseX<850 && mouseY<450)
      {
        ex4_buttonToStart = ex4_buttonToStart2;
      }
      else
      {
        ex4_buttonToStart = ex4_buttonToStart1;
      }
      break;
  }
}

/////////////////////////////////////// Exercise 4 ///////////////////////////////////////////////

/**
 * @author Aphimon Sangmanee
 * 
 * @description This page is the first page the user will see
 * after clicking the 4th exercise on the main menu.
 * This page also contain the information and fuctionality such as
 * Blurry background,
 * Start button, and
 * Return to MainPage button
 */
function ex4_startPage()
{
  background(ex4_BGStartPage);
  image(ex4_logo,350,50,700,250);
  if(ex4_logo == ex4_logo1 )
  {
    ex4_logo = ex4_logo2;
  }
  else
  {
    ex4_logo = ex4_logo1;
  }
  let oldS = ex4_playbutton;
  let oldS1 = ex4_backbutton;
  mouseOver1();
  let newS = ex4_playbutton;
  let newS1 = ex4_backbutton;

  if(oldS != newS)
  {
    if(newS != ex4_buttonPlay1)
    {
      ex4_mouseOverSound.play();
    }
  }

  if(ex4_playbutton == ex4_buttonPlay1)
  {
    image(ex4_playbutton,557,365,300,75);
  }
  else
  {
    image(ex4_playbutton,540,367.5,350,100);
  }

  if(oldS1 != newS1)
  {
    if(newS1 != ex4_buttonBack1)
    {
      ex4_mouseOverSound.play();
    }
  }

  if(ex4_backbutton == ex4_buttonBack1)
  {
    image(ex4_backbutton,535,475,350,75);
  }
  else
  {
    image(ex4_backbutton,520,467.5,400,100);
  } 
}

// function prePlayPage()
// {
//   background(ex4_BGStartPage);
//   image(ex4_jump,250,450,250,100);
//   ex4_preCount++
//   fill(0)
//   if(ex4_jump == ex4_jump1)
//   {
//     rect(325,50,100,100);
//     ex4_jump = ex4_jump2;
//     ex4_preCount = 0;
//   }
//   else
//   {
//     rect(325,300,100,100);
//     ex4_jump = ex4_jump1;
//     ex4_preCount = 0;
//   }

//   // fill(0)
//   // rect(50,450,250,100);
//   if(ex4_px < 800 || ex4_px > 1250)
//   {
//     ex4_pSpeed = ex4_pSpeed * (-1);
//   }
//   ex4_px += ex4_pSpeed;
//   image(ex4_mouseMove,ex4_px,380,100,125);
//   rect(ex4_px,150,100,100);
//   // rect(1300,475,50,75);
// }

/**
 * @author Aphimon Sangmanee
 * 
 * @description This page contains all of the implementation for the playPage
 */
function ex4_playPage()
{
  if(random(1) < (0.01))
  {
    fruits.push(new Fruits(ex4_gameSpeed,ex4_f[int(random([0],[17]))]));
  }

  if(random(1) < (0.01 ))
  {
    spikes.push(new Spike(ex4_gameSpeed,ex4_s));
  }

  backgroundRunning();
  // house.show();
  monster.show();
  monster.move();

  for(let f of fruits)
  {
    f.move();
    f.show();
    if(monster.hitsF(f))
    {
      for(let i = 0; i < fruits.length; i++)
      {
        if(fruits[i] == f)
        {
          fruits.splice(i,1);
          ex4_scoreCount++;
          if(ex4_scoreCount % 10 == 0)
          {
            ex4_bellSound2.play();
          }
          else
          {
            ex4_bellSound1.play();
          }
        }
      }
    }

  }

  for(let s of spikes)
  {
    s.move();
    if(c > 8)
    {
      c = 0
    }
    s.show(c);
    c = c + 2;

    if(monster.hitsS(s))
    {
      ex4_diedSound.play();
      ex4At = 3;
    }
  }
  
  textSize(50);
  fill(ex4_colorCount);
  text('Score ' + ex4_scoreCount , 30, 50);
}

/**
 * @author Aphimon Sangmanee
 * 
 * @description
 */
function ex4_scorePage()
{
  background(ex4_BGStartPage);
  textSize(150);
  fill(ex4_colorCount);
  text('Score ' + ex4_scoreCount , 450, 250);
  
  let oldB = ex4_buttonToStart;
  mouseOver1();
  let newB = ex4_buttonToStart;

  if(oldB != newB)
  {
    if(newB != ex4_buttonToStart1)
    {
      ex4_mouseOverSound.play();
    }
  }

  if(ex4_buttonToStart == ex4_buttonToStart1)
  {
    image(ex4_buttonToStart,550,375,300,75);
  }
  else
  {
    image(ex4_buttonToStart,537.5,367.5,325,100);
  }
}

//////////////////////////////////// Extra fuctionality /////////////////////////////////////////////////

/**
 * @author Aphimon Sangmanee
 * 
 * @description
 */
function backgroundRunning()
{
  // image(ex4_BGStartPage, ex4_speedx1, 0, width, height);
  // image(ex4_BGStartPage, ex4_speedx2, 0, width, height);
  image(ex4_bg[0], ex4_speedx1, 0, width, height);
  image(ex4_bg[0], ex4_speedx2, 0, width, height);

  image(ex4_bg[1], ex4_speedx3, 0, width, height);
  image(ex4_bg[1], ex4_speedx4, 0, width, height);

  image(ex4_bg[2], ex4_speedx5, 0, width, height);
  image(ex4_bg[2], ex4_speedx6, 0, width, height);

  image(ex4_bg[3], ex4_speedx7, 0, width, height);
  image(ex4_bg[3], ex4_speedx8, 0, width, height);

  image(ex4_bg[4], ex4_speedx9, 0, width, height);
  image(ex4_bg[4], ex4_speedx10, 0, width, height);

  ex4_speedx1 -= ex4_bg1s;
  ex4_speedx2 -= ex4_bg1s;

  ex4_speedx3 -= ex4_bg2s;
  ex4_speedx4 -= ex4_bg2s;

  ex4_speedx5 -= ex4_bg3s;
  ex4_speedx6 -= ex4_bg3s;

  ex4_speedx7 -= ex4_bg4s; 
  ex4_speedx8 -= ex4_bg4s;

  ex4_speedx9 -= ex4_bg5s;
  ex4_speedx10 -= ex4_bg5s;

  if (ex4_speedx1 < -width){
    ex4_speedx1 = width;
  }
  if (ex4_speedx2 < -width){
    ex4_speedx2 = width;
  }

  if (ex4_speedx3 < -width){
    ex4_speedx3 = width;
  }
  if (ex4_speedx4 < -width){
    ex4_speedx4 = width;
  }

  if (ex4_speedx5 < -width){
    ex4_speedx5 = width;
  }
  if (ex4_speedx6 < -width){
    ex4_speedx6 = width;
  }

  if (ex4_speedx7 < -width){
    ex4_speedx7 = width;
  }
  if (ex4_speedx8 < -width){
    ex4_speedx8 = width;
  }

  if (ex4_speedx9 < -width){
    ex4_speedx9 = width;
  }
  if (ex4_speedx10 < -width){
    ex4_speedx10 = width;
  }
}




