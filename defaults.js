// Paul C. Laibach
   // Introduction to Programming
   // Final Project - Game v1.0
   // Due 2014.12.11

//
// DECLARE GLOBAL VARIABLE DEFAULT/REFRESH VALUES
//

   // BEGIN SET MISCELLANEOUS GLOBAL VARIABLES

      // Set variables used for scoring.
         var startingScore = 10;
         var totalScore = startingScore;
         var firstVisitPoints = 10;
         var navFailPoints = 1;

      // Set variables used for navigation and other weird-ass shit.
         var previousLocale = 0;
         var currentLocale = 0;

      // Set variables to facilitate navigation via arrays
         var west  = 0;
         var north = 1;
         var south = 2;
         var east  = 3;
         var climb = 4;

      // Set variables for rucksack inventory carrying limits
         var rucksackMaxItems = 4;
         var rucksackMaxWeight = 30;
         var rucksackMaxVolume = 40;

      // Set initial/default refresh game response to display in historyTextArea onload in response to "Refresh" playerAction.
         var message = this.localeArray[currentLocale].localeDesc;

      // Set text for showHelp display function.
         var helpText = "You may navigate by clicking the directional buttons. You may also navigate by entering\n\"W\", \"N\", \"S\", or \"E\" in the command bar and then pressing [Enter] or clicking [Go].\n\nAll other actions are available only through use of the command bar. For example, the command \"Scoring\" will provide an explanation of how the journey is scored. The command \"Hint\" will provide some suggestions for completing the journey.\n\nRemember to press [Enter] or click [Go] after typing your command.";

      // Set text for showHint display function.
         var hintText = "You're going to need various useful items to survive this journey. It's up to you to figure out what is useful and how to use it. Collect these items along your way and carry them in your rucksack.\n\nTry commands and phrases using keywords such as \"Look\", \"Take\", \"Use\", \"Drop\", or \"Find\".\nFor example, if you find a possibly useful item while stumbling about, a \"take [item]\" command might work.\n\nYour rucksack inventory may be displayed by typing the \"Inventory\" command.\n\nRemember to press [Enter] or click [Go] after typing your commands.";

      // Set text for showScoring display function.
         var scoringText = "Player begins the journey with " + startingScore + " points.\n\nThe score increases by " + firstVisitPoints + " each time a new\nlocation is first visited.\n\nReturning to previously visited locations\nincurs independently escalating costs.\nThe first revisit to each location\ndeducts 1 point; the second, 2;\nthe third, 3; and so on.\n\nThe score is reduced by " + navFailPoints + " for each\nunsuccessful navigation attempt.";

      // Set text for showInventory function when rucksack is empty.
         var inventoryList = "Dude, you ain't got shit!\n Nothin' but an empty rucksack.";

   // END SET MISCELLANEOUS GLOBAL VARIABLES
