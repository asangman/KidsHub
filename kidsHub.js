var at = 0;
var song;
let bgFirst;
var bgMainMenu;
var bi;
var locationx;
var locationy;
var ex4_buttonAtMain;
var ex4_buttonAtMain1;
var ex4_buttonAtMain2;
var ex3_buttonAtMain;
var ex3_buttonAtMain1;
var ex3_buttonAtMain2;
var ex2_buttonAtMain;
var ex2_buttonAtMain1;
var ex2_buttonAtMain2;
var ex1_buttonAtMain;
var ex1_buttonAtMain1;
var ex1_buttonAtMain2;
var soundMainOn = false;
///////////////////////////////exercise 2///////////////////////////////////////////


var ex2_bg1
var ex2_bg2
var ex2_bearBlow
var ex2_currentBG

//---Bubbles--- :D

var ex2_bubbleArray = []    //stores bubble sprites
var ex2_pos = []            //stores locations of each bubble. x1,y1,x2,y2,....
var ex2_num = 150     //number of bubbles to be spawned

//-------------

//--collision_Detection-
var ex2_active = []         // stores if a bubble is veing hovered over

var ex2_crosshair           //cursor

//---------

var ex2_score
var ex2_timer
var ex2_gameStatus = 1         //1 means main menu ,2 means load, 3 means game , 4 means game over

//---ui
var ex2_logo
var ex2_startGameButton
var ex2_retryButton
var ex2_exitButton
//------------
var ex2_currentGroup
var ex2_group1
var ex2_group2
var ex2_group3
var ex2_groupLoad

var ex2_timer2

var ex2_startSound
var ex2_popSound
var ex2_overSound
var ex2_ost

var ex2_soundMainOn = false

////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////  exercise 4    /////////////////////////////////////
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
var ex4_monsterPic;

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

//////////Score counting/////////
var ex4_scoreCount = 0;
let ex4_colorCount;


//////////////////////////////////////////////////////////////////////////////////////
/**
 * @author Aphimon Sangmanee, Abhyuday Srivastava
 * 
 * @description This function will preload all of the necessary files 
 * for the program.
 */
function preload()
{
  bgFirst = loadImage('firstPic.png');
  song = loadSound('mainSong.mp3');
  bgMainMenu = loadImage('nevigatorPic.png')
  ex1_buttonAtMain1 = loadImage('res\\mainMenu\\button1.png');
  ex1_buttonAtMain2 = loadImage('res\\mainMenu\\button2.png')
  ex2_buttonAtMain1 = loadImage('res\\mainMenu\\button1.png');
  ex2_buttonAtMain2 = loadImage('res\\mainMenu\\button2.png')
  ex3_buttonAtMain1 = loadImage('res\\mainMenu\\button1.png');
  ex3_buttonAtMain2 = loadImage('res\\mainMenu\\button2.png')
  ex4_buttonAtMain1 = loadImage('res\\mainMenu\\button1.png');
  ex4_buttonAtMain2 = loadImage('res\\mainMenu\\button2.png');
  ex4_mouseOverSound = loadSound('res\\exercise4\\mouseOverSound.mp3');

 ////////////////////////Excercise_2///////////////////////////////////////////////

 ex2_bg1 = loadImage('res\\exercise2\\bg1.png')
 ex2_bg2 = loadImage('res\\exercise2\\bg2.png')
 // bg3 = loadImage('art\\bg3.png')

 ex2_bearBlow = createSprite(1400,700)
 ex2_bearBlow.addAnimation('blowing','res\\exercise2\\bearBlow1.png','res\\exercise2\\bearBlow2.png','res\\exercise2\\bearBlow3.png','res\\exercise2\\bearBlow4.png','res\\exercise2\\bearBlow5.png','res\\exercise2\\bearBlow6.png')

  //---ui

  ex2_logo = createSprite(400,200)
  ex2_logo.addAnimation('idle','res\\exercise2\\logo.png')

  ex2_startGameButton = createSprite(300,200)
  ex2_startGameButton.addAnimation('idle','res\\exercise2\\button1.png')

  ex2_exitButton = createSprite(300,200)
  ex2_exitButton.addAnimation('idle','res\\exercise2\\button2.png')

  ex2_retryButton = createSprite(300,200)
  ex2_retryButton.addAnimation('idle','res\\exercise2\\button3.png')
  //------------
  
  //bubbles
  for (var i = 0; i< ex2_num; i++) {

    ex2_bubbleArray[i] = createSprite(128,128)
    ex2_bubbleArray[i].addAnimation('normal','res\\exercise2\\bubbleAnim1.png')
    ex2_bubbleArray[i].addAnimation('popping','res\\exercise2\\bubbleAnim1.png','res\\exercise2\\bubbleAnim2.png','res\\exercise2\\bubbleAnim3.png','res\\exercise2\\bubbleAnim4.png','res\\exercise2\\bubbleAnim5.png')

    ex2_active[i] = false

    ex2_pos[i*2] = 0
    ex2_pos[i*2+1] = 0
  }
  
  //--------------

  //crosshair

  ex2_crosshair = createSprite(2,2)
  ex2_crosshair.addAnimation('normal', 'res\\exercise2\\crosshair.png')
  ex2_crosshair.changeAnimation('normal')
 
  ex2_startSound = loadSound('res\\exercise2\\tring.mp3')
  ex2_popSound = loadSound('res\\exercise2\\pop.mp3')
  ex2_overSound = loadSound('res\\exercise2\\wow.mp3')
  ex2_ost = loadSound('res\\exercise2\\theme.mp3')

  


///////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////exercise 4///////////////////////////////////////////
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
  //////////////////////////////////////////////////////////////////////////
}

/**
 * @author Aphimon Sangmanee
 * 
 * @description This function will setup the page to be 
 * ready to use.
 */
function setup() 
{
  createCanvas(1400, 700);
  ex1_buttonAtMain = ex1_buttonAtMain1
  ex2_buttonAtMain = ex2_buttonAtMain1
  ex3_buttonAtMain = ex3_buttonAtMain1
  ex4_buttonAtMain = ex4_buttonAtMain1;
  
  //////////////////////////////excercise2////////////////////////////////////////////

  ex2_group1 = new Group()
  ex2_group2= new Group()
  ex2_group3= new Group()
  ex2_groupLoad = new Group()

  ex2_timer = 30
  ex2_timer2 = 2.9
  ex2_score = 0


  ex2_group1.add(ex2_logo)
  ex2_group1.add(ex2_startGameButton)
  ex2_group1.add(ex2_exitButton)

  ex2_groupLoad.add(ex2_bearBlow)

  //assigning default animations for bubbles
  for (var i = 0; i< ex2_num; i++) {
    ex2_bubbleArray[i].changeAnimation('normal')   
    ex2_group2.add(ex2_bubbleArray[i]) 
  }

  //randomising bubble positions
  for (var i = 0; i< ex2_num*2; i+=2) {
    ex2_pos[i] = random(0,1400)
    ex2_pos[i+1] = random(0,4000)
  }


  ex2_group3.add(ex2_retryButton)

  ex2_logo.position.x = 1000
  ex2_startGameButton.position.y = 100

  ex2_startGameButton.position.x = 1000
  ex2_startGameButton.position.y = 400

  ex2_exitButton.position.x = 1000
  ex2_exitButton.position.y = 600

  ex2_bearBlow.position.x = 700
  ex2_bearBlow.position.y = 350



  ex2_retryButton.position.x = 600
  ex2_retryButton.position.y = 500

  
  




  ///////////////////////////////////////////////////////////////////////////////

  //////////////////////////exercise4////////////////////////////////////////
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

  ////////////////////////////////////////////////////////////////////////////
}

/**
 * @author Aphimon Sangmanee
 * 
 * @description This function will execute 30 times a second.
 */
function draw() 
{
  switch(at)
  {
    //Case 0 pulls up the first page.
    case 0:
      firstPage();
      break;
    
    //Case 1 pulls up the mainMenu 
    case 1:
      
      if(!soundMainOn)
      {
        song.play();
        soundMainOn = true;
      }
      mainMenu();
      break;
      
    //Case 2 = exercise 1
    case 2:
      song.stop();
      frameRate(30)
      
      background(200);

      break;

    //Case 3 = exercise 2
    case 3:
      song.stop();  

      if(!ex2_soundMainOn)
      {
        ex2_ost.play()
        ex2_soundMainOn = true;
      }
      
      frameRate(24)
      ex2_gameLoop()
      ex2_ui()
      
    
      break;
    //Case 4 = exercise 3
    case 4:
      frameRate(30)
      song.stop();
      background(200);
      break;
    //Case 5 = exercise 4
    case 5:
      frameRate(30) 

      song.stop();
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
      break;
    default:
      at = 0;
  }
}


/**
 * @author Aphimon Sangmanee
 * 
 * @description This is the function that will bring up the first page.
 * Users need to click on the first page in order to go to the main manu.
 * 
 */
function firstPage()
{
  background(bgFirst);
}

/**
 * @author Abhyuday Srivastava, Aphimon Sangmanee
 * 
 * @description This is the main menu that will bring users to each exercises.
 */
function mainMenu()
{ 
  background(bgMainMenu)
  fill("black")
  textSize(21)
  let text1 = ["excercise 1","excercise 2","excercise 3","excercise 4"]
  locationx = [525,1025,525,1025]
  locationy = [350,350,650,650]

  offset = 280
  for(i = 0; i<4;i++)
  {
    //image(bi,locationx[i] - offset,locationy[i] - offset)
    text(text1[i],locationx[i],locationy[i])
  }

  let oldEx1 = ex1_buttonAtMain;
  let oldEx2 = ex2_buttonAtMain;
  let oldEx3 = ex3_buttonAtMain;
  let oldEx4 = ex4_buttonAtMain;
  mouseOver1();
  let newEx1 = ex1_buttonAtMain;
  let newEx2 = ex2_buttonAtMain;
  let newEx3 = ex3_buttonAtMain;
  let newEx4 = ex4_buttonAtMain;

  if(oldEx1 != newEx1)
  {
    if(newEx1 != ex1_buttonAtMain1)
    {
      ex4_mouseOverSound.play();
    }
  }
  if(ex1_buttonAtMain == ex1_buttonAtMain1)
  {
    image(ex1_buttonAtMain,244,70,389,235);
  }
  else
  {
    image(ex1_buttonAtMain,230,60,419,260);
  }

  if(oldEx2 != newEx2)
  {
    if(newEx2 != ex2_buttonAtMain1)
    {
      ex4_mouseOverSound.play();
    }
  }
  if(ex2_buttonAtMain == ex2_buttonAtMain1)
  {
    image(ex2_buttonAtMain,745,70,389,235);
  }
  else
  {
    image(ex2_buttonAtMain,730,60,419,260);
  }

  if(oldEx3 != newEx3)
  {
    if(newEx3 != ex3_buttonAtMain1)
    {
      ex4_mouseOverSound.play();
    }
  }
  if(ex3_buttonAtMain == ex3_buttonAtMain1)
  {
    image(ex3_buttonAtMain,244,370,389,235);
  }
  else
  {
    image(ex3_buttonAtMain,230,360,419,260);
  }

  if(oldEx4 != newEx4)
  {
    if(newEx4 != ex4_buttonAtMain1)
    {
      ex4_mouseOverSound.play();
    }
  }
  if(ex4_buttonAtMain == ex4_buttonAtMain1)
  {
    image(ex4_buttonAtMain,745,370,389,235);
  }
  else
  {
    image(ex4_buttonAtMain,730,360,419,260);
  }

}

//////////////////////////////// Common action //////////////////////////////////////////////

/**
 * @author Aphimon Sangmanee, Abhyuday Srivastava
 * 
 * @description This mouse clicked will first determine the page.
 * Once the page is identified, the program will behave according to 
 * the interface shown in the page.
 */
 function mouseClicked()
 {
   switch(at)
   {
     // Tab First page to go to Main menu
     case 0:
       at = 1;
       break;
 
     // Choose exercise
     case 1:
       if(mouseX>244 && mouseY>70 && mouseX<634 && mouseY<305)
       {
         at = 2
       }
         else if(mouseX>745 && mouseY>70  && mouseX<1134   && mouseY<305  )
       {
         at = 3
       }
        else if(mouseX>244 && mouseY>370 && mouseX<634 && mouseY<605)
       {
         at = 4
       }
       else if(mouseX>745 && mouseY>370 && mouseX<1134  && mouseY< 605)
       {
        at = 5
       }
       break;
     case 2:
 
       break;
 
     case 3:
 
       break;
 
     case 4:
 
       break;
 
     case 5:
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
            soundMainOn = false;
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
       break;
 
   }
 }

 function keyPressed()
 {
  switch(at)
  {
    case 0:
      break;
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
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
    break;
    }
 }
 
function mouseOver1()
{
  switch(at)
  {
    case 0:
      break;
    case 1:
      if(mouseX>244 && mouseY>70 && mouseX<634 && mouseY<305)
      {
        ex1_buttonAtMain = ex1_buttonAtMain2;
      }
      else
      {
        ex1_buttonAtMain = ex1_buttonAtMain1;
      }
      
      if(mouseX>745 && mouseY>70  && mouseX<1134   && mouseY<305  )
      {
        ex2_buttonAtMain = ex2_buttonAtMain2;
      }
      else
      {
        ex2_buttonAtMain = ex2_buttonAtMain1;
      }
      
      if(mouseX>244 && mouseY>370 && mouseX<634 && mouseY<605)
      {
        ex3_buttonAtMain = ex3_buttonAtMain2;
      }
      else
      {
        ex3_buttonAtMain = ex3_buttonAtMain1;
      }
      
      if(mouseX>745 && mouseY>370 && mouseX<1134  && mouseY< 605)
      {
        ex4_buttonAtMain = ex4_buttonAtMain2;
      }
      else
      {
        ex4_buttonAtMain = ex4_buttonAtMain1;
      }
      
      break;

    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
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
      break;

  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @author Basair Kadhim
 * 
 * @description
 */
function exercise1()
{

}

/////////////////////////////////////////////////////// exercise 2 ///////////////////////////////////////////////////////////////


function ex2_ui()
{
  strokeWeight(15)
  stroke("#fec28c")
  fill("#920244")

  if(ex2_gameStatus == 3)
  {
    textSize(40)
    text("SCORE: "+ ex2_score,500,50)
    text((int)(ex2_timer),900,50)
  }

  else if(ex2_gameStatus == 4)
  {
    textSize(40)
    text("GAME OVER \nScore:"+ ex2_score,500,300)
  }
}

function ex2_gameLoop()
{
  
  if (ex2_gameStatus == 1)
  {
    ex2_startScreen()
    ex2_currentBG = ex2_bg1
    ex2_currentGroup = ex2_group1
  }

  else if(ex2_gameStatus == 2)
  {
    ex2_loadScreen()
    ex2_currentGroup = ex2_groupLoad
  }
  else if(ex2_gameStatus  == 3)
  {
    ex2_gameScreen()
   ex2_currentBG = ex2_bg2
   ex2_currentGroup = ex2_group2
  }
  else if(ex2_gameStatus  == 4)
  {
    ex2_endScreen()
   ex2_currentBG = "#fec28c"
   ex2_currentGroup = ex2_group3
  }

  ex2_crosshair.position.x = mouseX
  ex2_crosshair.position.y = mouseY

  background(ex2_currentBG)
 drawSprites(ex2_currentGroup)
}



function ex2_startScreen()
{
  if (ex2_crosshair.overlap(ex2_startGameButton))
  {
    ex2_startGameButton.scale = 1.15
    if(mouseWentDown(LEFT))
    {
      
      ex2_gameStatus = 2
      
    }

  }
  else
  {
    ex2_startGameButton.scale = 1
  }
  if (ex2_crosshair.overlap(ex2_exitButton))
  {
    ex2_exitButton.scale = 1.15
    if(mouseWentDown(LEFT))
    {
      
      ex2_mainMenu()
      
    }
  }
  else
  {
    ex2_exitButton.scale = 1
  }

}

function ex2_loadScreen()
{
  
  ex2_timer2-=1/24
  
  if (ex2_timer2 <0)
  {
    
    ex2_gameStatus = 3
  }
}

function ex2_gameScreen()
{
  for(i = 0; i < ex2_num ; i++)
  {
    ex2_pos[i*2+1]-=5
    ex2_bubbleArray[i].position.x = ex2_pos[2*i]
    ex2_bubbleArray[i].position.y = ex2_pos[2*i+1]

    if(ex2_bubbleArray[i].overlap(ex2_crosshair) && mouseWentDown(LEFT))
    {
      ex2_bubbleArray[i].changeAnimation('popping')
      ex2_bubbleArray[i].life = 10
      ex2_score+=1

      var ex2_t = random(0,1)
      ex2_popSound.play()
      

    }

  }

  ex2_timer-=1/24

  if (ex2_timer<0)
  {
    ex2_gameStatus = 4
    ex2_overSound.play()
  }
}


function ex2_endScreen()
{
  if ( ex2_retryButton.overlap(ex2_crosshair))
  {
    ex2_retryButton.scale = 1.15
    if(mouseWentDown(LEFT))
    { 

      ex2_ost.stop()
      for (var i = 0; i< ex2_num; i++) {
        ex2_bubbleArray[i].life = 0
        ex2_bubbleArray[i] = createSprite(128,128)
        ex2_bubbleArray[i].addAnimation('normal','res\\exercise2\\bubbleAnim1.png')
        ex2_bubbleArray[i].addAnimation('popping','res\\exercise2\\bubbleAnim1.png','res\\exercise2\\bubbleAnim2.png','res\\exercise2\\bubbleAnim3.png','res\\exercise2\\bubbleAnim4.png','res\\exercise2\\bubbleAnim5.png')

        ex2_pos[i*2] = random(0,1400)
        ex2_pos[i*2+1] = random(0,4000)
        ex2_group2.add(ex2_bubbleArray[i]) 

      }

      ex2_ost.play()
    
    
 
   
      ex2_timer = 30
      ex2_timer2 = 2.9
      ex2_score = 0
      ex2_gameStatus = 1

    }

  }
  else
  {
    ex2_retryButton.scale = 1
  }

}


function ex2_mainMenu()
{
  at = 0
  
  ex2_ost.stop()
  
  ex2_soundMainOn = false
  soundMainOn = false

  
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @author Sathvika Uppuluri
 * 
 * @description
 */
function exercise3()
{

}



//////////////////////////////////////////////////////////// exercise 4 //////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
