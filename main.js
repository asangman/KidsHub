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
var ex4_mouseOverSound;
var soundMainOn = false;
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
  bi = loadImage("res\\mainMenu\\button1.png")
  ex1_buttonAtMain1 = loadImage('res\\mainMenu\\button1.png');
  ex1_buttonAtMain2 = loadImage('res\\mainMenu\\button2.png')
  ex2_buttonAtMain1 = loadImage('res\\mainMenu\\button1.png');
  ex2_buttonAtMain2 = loadImage('res\\mainMenu\\button2.png')
  ex3_buttonAtMain1 = loadImage('res\\mainMenu\\button1.png');
  ex3_buttonAtMain2 = loadImage('res\\mainMenu\\button2.png')
  ex4_buttonAtMain1 = loadImage('res\\mainMenu\\button1.png');
  ex4_buttonAtMain2 = loadImage('res\\mainMenu\\button2.png');
  ex4_mouseOverSound = loadSound('mouseOverSound.mp3');
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
  // song.play();
  // userStartAudio();

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
      background(200);

      break;

    //Case 3 = exercise 2
    case 3:
      song.stop();
      background(100);
    
      break;
    //Case 4 = exercise 3
    case 4:
      song.stop();
      background(50);

      break;
    //Case 5 = exercise 4
    case 5:
      song.stop();
      background(0);
    
      break;
    
    default:
      at = 0;
  }
}

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

      break;

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

function mouseOver1()
{
  switch(at)
  {
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

  }
}

/**
 * @author Basair Kadhim
 * 
 * @description
 */
function exercise1()
{

}

/**
 * @author Abhyuday Srivastava
 * 
 * @description
 */
function exercise2()
{

}

/**
 * @author Sathvika Uppuluri
 * 
 * @description
 */
function exercise3()
{

}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @author Aphimon Sangmanee
 * 
 * @description
 */
function exercise4()
{

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
