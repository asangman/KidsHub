////////////////////////////////// Main menu ///////////////////////////////////////
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
var ex1_textAtMain;
var ex2_textAtMain;
var ex3_textAtMain;
var ex4_textAtMain;
var soundMainOn = false;
///////////////////////////////////////////////////////////////////////////////////

/////////////////////////////// exercise 1 ////////////////////////////////////////
var rY = 150
var rX = 40

let x = 613
let y = 100

let x2 = 650
let y2 = 50

let x3 = 640
let y3 = 150

let x4 = 610
let y4 = 100
  
let x5 = 650
let y5 = 50
  
let hit=false
let hit2=false
let lives=0

var heart1 = true
var heart2 = true
var heart3 = true
var heart4 = true
var heart5 = true
  
var enemy1 = true
var enemy2 = true
var enemy3 = true
var enemy4 = true
  
var charaTint = false
  
var screen = 1
  
let counter = 0
var ex1_backbutton;
///////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////  exercise 3   ///////////////////////////////////
//initialising variables
let ex3scores = [];
let i = 0;
let ex3score = 0; 
let ex3test = 0;
let ex3mode;
var ex3carIm;
var ex3buttonStart;
var ex3buttonBack;
var ex3buttonMainMenu;
var ex3Instructions;
var ex3Title;
var ex3Car1Im;
var ex3Car2Im;
var ex3Car3Im;
var ex3Car4Im;
var ex3Car5Im;
var ex3Car6Im;
var ex3GameOver;
var ex3restart = false;
var ex3restart1 = false;
let ex3collide = false;
let ex3collide2 = false;
let ex3collide3 = false;
let ex3collide4 = false;
let ex3collide5 = false;
let ex3collide6 = false;
let ex3count =100001;


//Display Game Over
 let ex3txt = {
   ex3_textScore: "Your score is: ",
   color: 255,
   stroke: 255,
   size: 58,
   size1: 24,
   x: 400,
   y: 350,
   x1: 1400,
   y1: 700,
 }


 //Loading images
let bordL;
let bordR;

/////////////////////////////////////////////////////////////////////////////////////


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
var ex4_startPagesoundOn = false;
var ex4_gameSong;
var ex4_gameSong1;
var ex4_gameSong2;
var ex4_gameSong3;
var ex4_gameSong4;
var ex4_gameSongOn = false;
var ex4_gameHight = [225,250,275,300,325,350,375,400,425,450,475,500,525,150];

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
var ex4_levelOfDif;
var ex4_levelOfDifObject;
var ex4_buttonLevel1;
var ex4_buttonLevel2;
var ex4_buttonLevel3;
var ex4_buttonLevel4;
var ex4_buttonLevel1Big = false;
var ex4_buttonLevel2Big = false;
var ex4_buttonLevel3Big = false;
var ex4_buttonLevel4Big = false;

/////////// PlayPage ///////////////
var ex4_gameSpeed = 3;
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
var ex4_sAnimation;
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
var ex4_difficalty = 0.01;
var ex4_oldM;
var ex4_soundWinning

/////////////////Score counting//////////////////////////
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
  ///////////////////////////////// main menu //////////////////////////////////////////
  bgFirst = loadImage('firstPic.png');
  song = loadSound('mainSong.mp3');
  bgMainMenu = loadImage('nevigatorPic.png')
  ex1_buttonAtMain1 = loadImage('res\\mainMenu\\ex1_buttonAtMain.jpg');
  ex1_buttonAtMain2 = loadImage('res\\mainMenu\\ex1_buttonAtMain.jpg')
  ex2_buttonAtMain1 = loadImage('res\\mainMenu\\ex2_buttonAtMain.jpg');
  ex2_buttonAtMain2 = loadImage('res\\mainMenu\\ex2_buttonAtMain.jpg')
  ex3_buttonAtMain1 = loadImage('res\\mainMenu\\ex3_buttonAtMain.png');
  ex3_buttonAtMain2 = loadImage('res\\mainMenu\\ex3_buttonAtMain.png')
  ex4_buttonAtMain1 = loadImage('res\\mainMenu\\ex4_buttonAtMain.jpg');
  ex4_buttonAtMain2 = loadImage('res\\mainMenu\\ex4_buttonAtMain.jpg');
  ex4_mouseOverSound = loadSound('res\\exercise4\\mouseOverSound.mp3');
  // ex1_textAtMain =loadImage('');
  // ex2_textAtMain =loadImage('');
  // ex3_textAtMain =loadImage('');
  // ex4_textAtMain =loadImage('');

  /////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////Exercise 1////////////////////////////////////////
  back=loadImage("res\\exercise1\\Background.gif") 
	heart01=loadImage("res\\exercise1\\Potion.gif")
	bat=loadImage("res\\exercise1\\LittleWitch1.gif")
	enemy=loadImage("res\\exercise1\\Monster.gif")
	lightstar=loadImage("res\\exercise1\\star3.gif")
	win=loadImage("res\\exercise1\\WinScreen.gif")
	start=loadImage("res\\exercise1\\startscreen1.gif")
	death=loadImage("res\\exercise1\\LoseScreen.gif")
  ex1_backbutton = loadImage("res\\exercise1\\ex1_backButton.jpg");

  //////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////exercise 3/////////////////////////////////////////
ex3carIm = loadImage("res\\exercise3\\ex3_car.png");
  ex3buttonStart = loadImage("res\\exercise3\\ex3Start.png");
  ex3buttonBack = loadImage("res\\exercise3\\ex3BackToStart.png");
  ex3buttonMainMenu = loadImage("res\\exercise3\\ex3MainMenu.png");
  ex3_tree = loadImage("res\\exercise3\\ex3Tree.png")
  ex3GameOver = loadImage("res\\exercise3\\GameOverex3.png");
  ex3Car1Im = loadImage("res\\exercise3\\Car1Ex3.png");
  ex3Car2Im = loadImage("res\\exercise3\\Car2Ex3.png");
  ex3Car3Im = loadImage("res\\exercise3\\Car3Ex3.png");
  ex3Car4Im = loadImage("res\\exercise3\\Car4Ex3.png");
  ex3Car5Im = loadImage("res\\exercise3\\Car5Ex3.png");
  ex3Car6Im = loadImage("res\\exercise3\\Car6Ex3.png");
  ex3Title =  loadImage("res\\exercise3\\Ex3Title.png");
  ex3Instructions = loadImage("res\\exercise3\\Ex3Instructions.png");


//////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////exercise 4///////////////////////////////////////////
  ex4_jumpSound = loadSound('res\\exercise4\\jumpSound.mp3');
  ex4_bellSound1 = loadSound('res\\exercise4\\bell1.mp3');
  ex4_bellSound2 = loadSound('res\\exercise4\\bell2.mp3');
  ex4_mouseOverSound = loadSound('res\\exercise4\\mouseOverSound.mp3');
  ex4_diedSound = loadSound('res\\exercise4\\diedSound.mp3');
  ex4_startPageSound = loadSound('res\\exercise4\\startPageSound.mp3');
  ex4_gameSong1 = loadSound('res\\exercise4\\gameSong1.mp3');
  ex4_gameSong2 = loadSound('res\\exercise4\\gameSong2.mp3');
  ex4_gameSong3 = loadSound('res\\exercise4\\gameSong3.mp3');
  ex4_gameSong4 = loadSound('res\\exercise4\\gameSong4.mp3');
  ex4_BGStartPage = loadImage('res\\exercise4\\background.png');
  ex4_buttonPlay1 = loadImage('res\\exercise4\\button1.png');
  ex4_buttonPlay2 = loadImage('res\\exercise4\\button2.png');
  ex4_buttonBack1 = loadImage('res\\exercise4\\toMainbutton1.png');
  ex4_buttonBack2 = loadImage('res\\exercise4\\toMainbutton2.png');
  ex4_buttonToStart1 = loadImage('res\\exercise4\\backButton1.png');
  ex4_buttonToStart2 = loadImage('res\\exercise4\\backButton2.png');
  // ex4_sAnimation = loadAnimation('res\\exercise4\\s1.png','res\\exercise4\\s2.png','res\\exercise4\\s3.png',
  // 'res\\exercise4\\s4.png','res\\exercise4\\s5.png','res\\exercise4\\s6.png','res\\exercise4\\s7.png','res\\exercise4\\s8.png',
  // 'res\\exercise4\\s9.png');
  ex4_sAnimation = loadAnimation('res\\exercise4\\s2.png','res\\exercise4\\s4.png','res\\exercise4\\s6.png','res\\exercise4\\s8.png');
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
  ex4_jumpLogo1 = loadImage('res\\exercise4\\jump1.png');
  ex4_jumpLogo2 = loadImage('res\\exercise4\\jump2.png');
  ex4_moveLogo1 = loadImage('res\\exercise4\\moveLogo1.png');
  ex4_moveLogo2 = loadImage('res\\exercise4\\moveLogo2.png');
  ex4_mouseMove = loadImage('res\\exercise4\\mouse.png');
  ex4_monsterPic = loadImage('res\\exercise4\\monster2.png');
  ex4_monsterPic2 = loadImage('res\\exercise4\\monster1.png');
  ex4_buttonLevel1 = loadImage('res\\exercise4\\buttonLevel1.png');
  ex4_buttonLevel2 = loadImage('res\\exercise4\\buttonLevel2.png');
  ex4_buttonLevel3 = loadImage('res\\exercise4\\buttonLevel3.png');
  ex4_buttonLevel4 = loadImage('res\\exercise4\\buttonLevel4.png');
  ex4_soundWinning = loadSound('res\\exercise1\\ex4_soundWinning.mp3')
  ///////////////////////////////////////////////////////////////////////////////////////
}

/**
 * @author Aphimon Sangmanee
 * 
 * @description This function will setup the page to be 
 * ready to use.
 */
function setup() 
{
  //////////////////////////// Main menu ////////////////////////////////////////////////
  frameRate(60);
  createCanvas(1400, 700);
  ex1_buttonAtMain = ex1_buttonAtMain1
  ex2_buttonAtMain = ex2_buttonAtMain1
  ex3_buttonAtMain = ex3_buttonAtMain1
  ex4_buttonAtMain = ex4_buttonAtMain1

  //////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////// exercise 1//////////////////////////////////////////
  //code//

  //////////////////////////////////////////////////////////////////////////////////////
  
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
 
  //////////////////////////// exercise 3 //////////////////////////////
  //storing the scores
  ex3mode=0;
  for(let i=0; i<100;i++){
    ex3test += 10;
    ex3scores[i] = ex3test;
 }
 
  
  bordL = new Borders();
  bordR = new Borders();
  bordR.x = 1250;

  ////////////////////////////////////////////////////////////////////////////

  //////////////////////////exercise4////////////////////////////////////////
  ex4_speedx2 = width;
  ex4_speedx4 = width;
  ex4_speedx6 = width;
  ex4_speedx8 = width;
  ex4_speedx10 = width;
  monster = new Monster(ex4_monsterPic, ex4_monsterPic2);
  ex4_f = [ex4_f0,ex4_f1,ex4_f2,ex4_f3,ex4_f4,ex4_f5,ex4_f6,
    ex4_f7,ex4_f8,ex4_f9,ex4_f10,ex4_f11,ex4_f12,ex4_f13,ex4_f14,ex4_f15,ex4_f16];
  ex4_bg = [ex4_bg1,ex4_bg2,ex4_bg3,ex4_bg4,ex4_bg5]
  ex4_logo = ex4_logo1;
  ex4_jump = ex4_jump1;
  ex4_px = 800;
  ex4_gameSong = ex4_gameSong1;

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
    ///////Case 0 pulls up the first page.//////////
    case 0:
      firstPage();
      break;
    
    ////////Case 1 pulls up the mainMenu //////////////
    case 1:
      
      if(!soundMainOn)
      {
        song.loop();
        soundMainOn = true;
      }
      mainMenu();
      break;
      
    //////////Case 2 = exercise 1 //////////////////////
    case 2:
      song.stop();
      if(screen==1)
      {
        startScreen()
      }
      else if(screen==2){playScreen()}
      else if(screen==3){winScreen()} 
      else if(screen==4){deathScreen()}
      break;

    ///////////////Case 3 = exercise 2/////////////////////
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
    ////////////////Case 4 = exercise 3/////////////////////
    case 4:
      song.stop();
      if(ex3mode===0)
      {
        
        background(canv.col);
        image(ex3buttonStart,820,125,350,150);
        image(ex3buttonMainMenu,750,400,500,150);
        image(ex3Title, 150, 90, 450, 350);
        image(ex3Instructions,150, 485, 450, 150);
        
    
      }
      if(ex3mode===1)
      {
      background(canv.col);
      moveLines();
      moveTrees();
      design();
      moveCars();
      levelUp();
      fill(0);
      rect(0,0,1400,80);
      displayScore();
      }
    
      if(ex3mode===2)
      {
        background(0);
    
        image(ex3buttonBack,370,440,650,150);
        displayScore();
        image(ex3GameOver, 500, 150, 400, 240);
    
      }
      break;

    /////////////////Case 5 = exercise 4////////////////////
    case 5:
      frameRate(60);
      song.stop();
      switch(ex4At)
      {
        case 0:
          if(!ex4_startPagesoundOn)
          {
            ex4_gameSong.stop();
            ex4_startPageSound.loop();
            ex4_startPagesoundOn = true;
          }
          ex4_scoreCount = 0;
          fruits = [];
          spikes = [];
          ex4_startPage();
          break;
        case 1:
          prePlayPage();
          break;
        case 2:
          if(!ex4_gameSongOn)
          {
            ex4_startPageSound.stop();
            ex4_gameSong.loop();
            ex4_gameSongOn = true;
          }
          ex4_playPage();
          break;
        case 3:
          ex4_gameSong.stop();
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
 * There are four exercises for users to pick.
 */
function mainMenu()
{ 
  background(bgMainMenu)
  fill("black")
  textSize(21)
  let text1 = ["excercise 1","excercise 2","excercise 3","excercise 4"]
  // let text1 = [ex1_textAtMain,ex2_textAtMain,ex3_textAtMain,ex4_textAtMain]
  locationx = [390,900,390,900]
  locationy = [350,350,650,650]

  
  offset = 280
  for(i = 0; i<4;i++)
  {
    //image(bi,locationx[i] - offset,locationy[i] - offset)
    //rect(locationx[i],locationy[i],100,25)
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
        ex4_startPagesoundOn = false;
        at = 5
       }
       break;
     case 2:
 
       break;
 
     case 3:
       if(ex2_gameStatus == 1)
       {
        if (ex2_crosshair.overlap(ex2_exitButton))
        {
            at = 1
            ex2_ost.stop()
            ex2_soundMainOn = false
            soundMainOn = false
        }
       }
       break;
 
     case 4:
      switch(ex3mode)
      {
        case 0:
          if(mouseX > 820 && mouseY > 125 && mouseX < 1170 && mouseY < 275)
          {
            ex3mode = 1;
          }
          if(mouseX > 750 && mouseY > 400 && mouseX < 1250 && mouseY < 550)
          {
            at = 1;
            soundMainOn = false
          }
          break;
    
        case 1:
    
          break;
    
        case 2:
          if(mouseX > 370 && mouseY > 440 && mouseX < 1020 && mouseY < 590)
          {
            ex3restart = true;
            //ex3count = 0;
            ex3mode = 0;
            ex3score = 0;
            ex3collide = false;
            ex3collide2 = false;
            ex3collide3 = false;
            ex3collide4 = false;
            ex3collide5 = false;
            ex3collide6 = false;
            myCar.resetPosition();
            car1.resetPosition();
            car2.resetPosition();
            car3.resetPosition();
            car4.resetPosition();
            car5.resetPosition();
            car6.resetPosition();
            i = 0;
            _line.sp = 5;
          _line1.sp = 5;
          }
          break;
      }
       break;
 
     case 5:
      switch(ex4At)
      {
        case 0:
          if(mouseX>550 && mouseY>375 && mouseX<850 && mouseY<450)
          {
            ex4At = 1;
            ex4_startPagesoundOn = false;
            ex4_gameSongOn = false;
          }
            else if(mouseX>550 && mouseY>475  && mouseX<850  && mouseY<550  )
          {
            ex4_startPageSound.stop();
            soundMainOn = false
            at = 1;
          }
          break;
        case 1:

          if(mouseX>1000 && mouseY>100 && mouseX<1350 && mouseY<175)
          {
            ex4_gameSpeed = 3;
            ex4_bg1s = 0.5;
            ex4_bg2s = 0.5;
            ex4_bg3s = 1;
            ex4_bg4s = 2;
            ex4_bg5s = 3;
            ex4_difficalty = 0.01;
            ex4_gameSong = ex4_gameSong1;
            ex4At = 2;
          }

          if(mouseX>1000 && mouseY>250 && mouseX<1350 && mouseY<325)
          {
            ex4_gameSpeed = 5;
            ex4_bg1s = 2;
            ex4_bg2s = 2;
            ex4_bg3s = 3;
            ex4_bg4s = 4;
            ex4_bg5s = 5;
            ex4_difficalty = 0.01;
            ex4_gameSong = ex4_gameSong2;
            ex4At = 2;
          }

          if(mouseX>1000 && mouseY>400 && mouseX<1350 && mouseY<475)
          {
            ex4_gameSpeed = 7;
            ex4_bg1s = 4;
            ex4_bg2s = 4;
            ex4_bg3s = 5;
            ex4_bg4s = 6;
            ex4_bg5s = 7;
            ex4_difficalty = 0.02;
            ex4_gameSong = ex4_gameSong3;
            ex4At = 2;
          }

          if(mouseX>1000 && mouseY>550 && mouseX<1350 && mouseY<625)
          {
            ex4_gameSpeed = 10;
            ex4_bg1s = 7;
            ex4_bg2s = 7;
            ex4_bg3s = 8;
            ex4_bg4s = 9;
            ex4_bg5s = 10;
            ex4_difficalty = 0.05;
            ex4_gameSong = ex4_gameSong4;
            ex4At = 2;
          }

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

 /**
  * @author Aphimon Sangmanee
  * 
  * @description This function will received any interections occer with the kayboard
  */
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
      if(keyCode===ENTER && ex3mode===0)
      {
        ex3mode=1;
      }
      break;
    case 5:
      switch(ex4At)
      {
        case 0:
          break;
        case 1:
          
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

/**
* @author Aphimon Sangmanee
*
*@description This function will detect the movement of users withina a certain area using mouseX and mouseY
*/
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

        case 1:
          if(mouseX>1000 && mouseY>100 && mouseX<1350 && mouseY<175)
          {
            ex4_buttonLevel1Big = true;
          }
          else
          {
            ex4_buttonLevel1Big = false;
          }

          if(mouseX>1000 && mouseY>250 && mouseX<1350 && mouseY<325)
          {
            ex4_buttonLevel2Big = true;
          }
          else
          {
            ex4_buttonLevel2Big = false;
          }

          if(mouseX>1000 && mouseY>400 && mouseX<1350 && mouseY<475)
          {
            ex4_buttonLevel3Big = true;
          }
          else
          {
            ex4_buttonLevel3Big = false;
          }

          if(mouseX>1000 && mouseY>550 && mouseX<1350 && mouseY<625)
          {
            ex4_buttonLevel4Big = true;
          }
          else
          {
            ex4_buttonLevel4Big = false;
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
/**
 * @author Aphimon Sangmanee
 * 
 * @description This function will detect mouse pressed of each exercises.
 */

function mousePressed()
{
  switch(at)
  {
    case 0:
      break;
    case 1:
      break;
    case 2:
        if(screen==1)
        {
          if(mouseX>600 && mouseY>325 && mouseX<800 && mouseY<400)
          {
            screen=2
          }

          if(mouseX>0 && mouseY>650 && mouseX<150 && mouseY<700)
          {
            soundMainOn = false;
            at = 1;
          }
        }
        else if(screen==3){
        screen=1
        lives=0
        counter=0
        rY = 100
        rX = 30
        x = 650
        y = 150
        x2 = 660
        y2 = 50
        x3 = 640
        y3 = 150
        x4 = 650
        y4 = 100
        x5 = 650
        y5 = 50
        
        hit=false
        hit2=false

        heart1 = true
        heart2 = true
        heart3 = true
        heart4 = true
        heart5 = true
        
        enemy1 = true
        enemy2 = true
        enemy3 = true
        enemy4 = true
        
      }
        else if(screen==4){
        screen=1
        lives=0
        counter=0
        rY = 100
        rX = 30
        x = 650
        y = 150
        x2 = 660
        y2 = 50
        x3 = 640
        y3 = 150
        x4 = 650
        y4 = 100
        x5 = 650
        y5 = 50
        
        hit=false
        hit2=false

        heart1 = true
        heart2 = true
        heart3 = true
        heart4 = true
        heart5 = true
        
        enemy1 = true
        enemy2 = true
        enemy3 = true
        enemy4 = true
      }
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////// exercise 1 ///////////////////////////////////////////////////
function startScreen()
{
  image(start,0,0,1400,700)
  image(ex1_backbutton,0,650,150,50)
}  


function playScreen()
{
  image(back,0,0,1400,700)

  counter++;
  
 
  if(charaTint==true){
  tint(255,50)
  }
  
  

	charaTint==true
  image(bat,rX,rY,250,250)
  if(key=='s'){
    rY=rY+5}
  if(key=="w"){
    rY=rY-5}

  if(rY>500){rY=500}
  if(rY<-10){rY=-10}
  

	if(counter>300){
  if(enemy1==true){
  x=x-7
  fill(200,0,0)
	noTint()
  image(enemy,x,y,250,250)
  if(x==-21){
  x=1400
  y=random(150,350)

  if(x==0 || counter>3000){
  enemy1=false}
}}}
 


  if(enemy3==true){
  x3=x3-5
  fill(0,0,200)
	noTint()
  image(enemy,x3,y3,250,250)
  if(x3==-20){
  x3=1400
  y3=random(0,250)
    
  if(x3==0 || counter>3000){
  enemy3=false}
}}
 
	if(counter>1000){
  if(enemy4==true){
  x4=x4-10
  fill(0)
	noTint()
  image(enemy,x4,y4,250,250)
  if(x4==-20){
  x4=1400
  y4=random(300,450)
		
    
   if(x4==0 || counter>3000){
  enemy4=false}
}}}
   
//hope star
  if(counter>3300){
  x5=x5-2
  fill(0)
	noTint()
  image(lightstar,x5,y5,200,200)
  rY=100
  }
  
  var distanceH = dist(rX,rY,x5,y5)
  if(distanceH<60)
  {
    ex4_soundWinning.play();
    screen=3
  }
  
  
  var distance = dist(rX,rY,x,y)
  var distance2 = dist(rX,rY,x2,y2)
  var distance3 = dist(rX,rY,x3,y3)
  var distance4 = dist(rX,rY,x4,y4)

  if(heart1==true){
  image(heart01,5,5,70,70)
}
  if(heart2==true){
  image(heart01,30,5,70,70)
}
  if(heart3==true){
  image(heart01,55,5,70,70)
}
  if(heart4==true){
  image(heart01,80,5,70,70)
}
  if(heart5==true){
  image(heart01,105,5,70,70)
}
 
  if(hit==true){
  if(distance<40 || distance2<40 || distance3<40 || distance4<40){
  hit=false
  lives=lives+5
	charaTint=true}
}

  if(distance>40 && distance2>40 && distance3>40 && distance4>40){
  hit=true
	charaTint=false}

  if(lives==5){
  heart1=false}
  if(lives==10){
  heart2=false}
  if(lives==15){
  heart3=false}
  if(lives==20){
  heart4=false}
  if(lives==25){
  heart5=false}  
  
  if(lives==25)
  {
    ex4_diedSound.play();
    screen=4
  }
}

function deathScreen(){
image(death,0,0,1400,700)
}

function winScreen(){
  image(win,0,0,1400,700)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
    // if(mouseWentDown(LEFT))
    // {
    //   ex2_mainMenu()
    // }
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


// function ex2_mainMenu()
// {
//   at = 0

//   ex2_ost.stop()
//   ex2_soundMainOn = false
//   soundMainOn = false
// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////// exercise 3 //////////////////////////////////////////////////////////////
function design(){
  bordL.draw();
  bordR.draw();
  trees.drawE();
  myCar.draw(ex3carIm);
  trees.drawR();
  trees2.drawE();
  trees2.drawR();
}
//car moving function
function moveCars(){

   //generating random cars

  if(car1.y<0){
    car1.x = random(255,310);
  }
  
  
   
  if(car2.y<0){
    car2.x = random(455,310);
  }

  
  if(car3.y<0){
    car3.x = random(655,610);
  }

   
  if(car4.y<0){
    car4.x = random(855,610);
  }

   
  if(car5.y<0){
    car5.x = random(1055,910);
  }

  
  if(car6.y<0){
    car6.x = random(1150,910);
  }

  //moving and drawing the cars
  myCar.move();
    car1.draw(ex3Car1Im);
    car1.move();
    car2.draw(ex3Car2Im);
    car2.move();
    car3.draw(ex3Car3Im);
    car3.move();
    car4.draw(ex3Car4Im);
    car4.move();
    car5.draw(ex3Car5Im);
    car5.move();
    car6.draw(ex3Car6Im);
    car6.move();

  ex3collide = collideCar(myCar.x, myCar.y, myCar.w, myCar.h, car1.x, car1.y, car1.w, car1.h);
  ex3collide2 = collideCar(myCar.x, myCar.y, myCar.w, myCar.h, car2.x, car2.y, car2.w, car2.h);
  ex3collide3 = collideCar(myCar.x, myCar.y, myCar.w, myCar.h, car3.x, car3.y, car3.w, car3.h);
  ex3collide4 = collideCar(myCar.x, myCar.y, myCar.w, myCar.h, car4.x, car4.y, car4.w, car4.h);
  ex3collide5 = collideCar(myCar.x, myCar.y, myCar.w, myCar.h, car5.x, car5.y, car5.w, car5.h);
  ex3collide6 = collideCar(myCar.x, myCar.y, myCar.w, myCar.h, car6.x, car6.y, car6.w, car6.h);

  if( ex3collide || ex3collide2 || ex3collide3 || ex3collide4 || ex3collide5 || ex3collide6 ){
    ex3mode = 2;
    ex4_diedSound.play();
    ex3restart = false;
    console.log("collided: ", ex3collide, ex3collide2, ex3collide3, ex3collide4, ex3collide5, ex3collide6);
  }  
}

function collideCar(x, y, w, h, x2, y2, w2, h2) {

  //adding in conditions to detect main car
  if (x + w >= x2 &&    
      x <= x2 + w2 &&    
      y + h >= y2 &&    
      y <= y2 + h2) {    
        return true;
  }
  return false;
}
//moves the lines
function moveLines(){
  _line.draw();
  _line.move();
  _line1.draw();
  _line1.move();
}
//stops the game and displays final score and final speed

function stop()
{
    background(0);
    stroke(ex3txt.stroke);
    fill(ex3txt.color);
    textSize(ex3txt.size);

    image(ex3buttonBack,500,400,400,100);
    // text(txt._text, txt.x, txt.y);
    // textSize(txt.size1);
    // noStroke();
    // text(`${txt._textScore}${score}`, txt.x1, txt.y1);
    noLoop();
}
//trees moving function
function moveTrees(){
  trees.moveE();
  trees.moveR();
  trees2.moveE();
  trees2.moveR();
}

function displayScore(){
    noStroke();
    fill(ex3txt.color);
    textSize(32);
  //displaying the score
    text(`YOUR SCORE: ${ex3score}`, 50, 50);
  //displaying the speed 
    fill(ex3txt.color);
    textSize(32);
    text(`YOUR SPEED: ${car1.sp}0 km/h `, 1000, 50);
}


//this function for increase the speed 
function levelUp(){
  
    if(ex3score === ex3scores[i])
    {
      
      console.log("speeding");
      //increment every objects speed by 1
      car1.sp++;
      car2.sp++;
      car3.sp++;
      car4.sp++;
      car5.sp++;
      car6.sp++;

      trees.esp++;
      trees.rsp++;
      trees2.esp++;
      trees2.rsp++;
      _line.sp++;
      _line1.sp++;
      i++;
      //ex3score++;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
  * @description This page will show the users the way to play
  * the game including jump and move. This page also contain the selection of level.
  * There are 4 available level for users to choose.
  */
function prePlayPage()
{
  background(ex4_BGStartPage);

  let oldButton1 = ex4_buttonLevel1Big;
  let oldButton2 = ex4_buttonLevel2Big;
  let oldButton3 = ex4_buttonLevel3Big;
  let oldButton4 = ex4_buttonLevel4Big;
  mouseOver1()
  let newButton1 = ex4_buttonLevel1Big;
  let newButton2 = ex4_buttonLevel2Big;
  let newButton3 = ex4_buttonLevel3Big;
  let newButton4 = ex4_buttonLevel4Big;

  if(oldButton1 != newButton1 || oldButton2 != newButton2 || oldButton3 != newButton3 || oldButton4 != newButton4)
  {
    if(oldButton1 != true && oldButton2 != true && oldButton3 != true && oldButton4 != true)
    {
      ex4_mouseOverSound.play();
    }
  }

  if(ex4_buttonLevel1Big)
  {
    image(ex4_buttonLevel1,975,90,350,100);
  }
  else
  {
    image(ex4_buttonLevel1,1000,100,300,75);
  }

  if(ex4_buttonLevel2Big)
  {
    image(ex4_buttonLevel2,975,240,350,100); 
  }
  else
  {
    image(ex4_buttonLevel2,1000,250,300,75);  
  }

  if(ex4_buttonLevel3Big)
  {
    image(ex4_buttonLevel3,975,390,350,100);
  }
  else
  {
    image(ex4_buttonLevel3,1000,400,300,75);
  }

  if(ex4_buttonLevel4Big)
  {
    image(ex4_buttonLevel4,975,540,350,100);
  }
  else
  {
    image(ex4_buttonLevel4,1000,550,300,75);
  }

  image(ex4_jump,100,500,250,100);
  ex4_preCount++
  fill(0)
  if(ex4_jump == ex4_jump1)
  {
    ex4_jump = ex4_jump2;
    ex4_preCount = 0;
    image(ex4_jumpLogo1,110,80,250,100);
    image(ex4_moveLogo1,580,80,250,100);
  }
  else
  {
    ex4_jump = ex4_jump1;
    ex4_preCount = 0;
    image(ex4_jumpLogo2,110,80,250,100);
    image(ex4_moveLogo2,580,80,250,100);
  }

  if(ex4_px < 500 || ex4_px > 800)
  {
    ex4_pSpeed = ex4_pSpeed * (-1);
  }
  ex4_px += ex4_pSpeed;
  image(ex4_mouseMove,ex4_px,475,100,125);
  image(ex4_monsterPic,ex4_px,275,100,100)

  monster.showDemo();
  monster.moveDemo();
}

/**
 * @author Aphimon Sangmanee
 * 
 * @description This page contains all of the implementation for the playPage. 
 * 
 */
 function ex4_playPage()
 {
   if(random(1) < (ex4_difficalty))
   {
     fruits.push(new Fruits(ex4_gameSpeed,ex4_f[int(random([0],[17]))]));
   }
 
   if(random(1) < (ex4_difficalty))
   {
     spikes.push(new Spike(ex4_gameSpeed,ex4_sAnimation,ex4_gameHight[int(random([0],[14]))]));
   }
 
   backgroundRunning();
 
   monster.move();
   let newM = mouseX;
   if(ex4_oldM > newM)
   {
     monster.showBack();
   }
   else
   {
     monster.show();
   }
 
   for(let f of fruits)
   {
     f.move();
     f.show();
     if(monster.hitsF(f))
     {
       ex4_scoreCount++;
       for(let i = 0; i < fruits.length; i++)
       {
         if(fruits[i] == f)
         {
           fruits.splice(i,1);
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
     s.show();
     if(monster.hitsS(s))
     {
       ex4_diedSound.play();
       ex4At = 3;
     }
 
   }
 
 
 
   textSize(50);
   fill(ex4_colorCount);
   text('Score ' + ex4_scoreCount , 30, 50);
   ex4_oldM = mouseX;
 }
 
 /**
  * @author Aphimon Sangmanee
  * 
  * @description This page will show the score to the users. This page has 
  * button to go back to the first page of the game.
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
  * @description This fuction integrated 5 layers of background together 
  * and run them at different speed according to the speed of the game and level of difficalty.
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
 
 
   if (ex4_speedx1 < -width + ex4_bg5s){
     ex4_speedx1 = width;
   }
   if (ex4_speedx2 < -width + ex4_bg5s){
     ex4_speedx2 = width;
   }
 
   if (ex4_speedx3 < -width + ex4_bg5s){
     ex4_speedx3 = width;
   }
   if (ex4_speedx4 < -width + ex4_bg5s){
     ex4_speedx4 = width;
   }
 
   if (ex4_speedx5 < -width + ex4_bg5s){
     ex4_speedx5 = width;
   }
   if (ex4_speedx6 < -width + ex4_bg5s){
     ex4_speedx6 = width;
   }
 
   if (ex4_speedx7 < -width + ex4_bg5s){
     ex4_speedx7 = width;
   }
   if (ex4_speedx8 < -width + ex4_bg5s){
     ex4_speedx8 = width;
   }
 
   if (ex4_speedx9 < -width + ex4_bg5s){
     ex4_speedx9 = width;
   }
   if (ex4_speedx10 < -width + ex4_bg5s){
     ex4_speedx10 = width;
   }
 } 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
