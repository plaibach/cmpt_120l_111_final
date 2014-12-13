// Paul C. Laibach
   // Introduction to Programming
   // Final Project - Game v1.0
   // Due 2014.12.11

//
// DECLARE GLOBAL VARIABLE DEFAULT/REFRESH VALUES
//

   // BEGIN SET MISCELLANEOUS GLOBAL VARIABLES
   
      // Set variables used for status textarea
         var totalScore = 0;
         var currentLocale = 0;

      // Set variables to facilitate navigation via arrays
         var west  = 0;
         var north = 1;
         var south = 2;
         var east  = 3;
         var climb = 4;
         var navBlock = "Erm... sorry. You can't go that way.";

      // Variables for rucksack inventory carrying limits
         var rucksackMaxItems = 4;
         var rucksackMaxWeight = 30;
         var rucksackMaxVolume = 40;

      // Set initial/default refresh game response to display in historyTextArea onload in response to "Refresh" playerAction.
         var message = this.localeArray[currentLocale].localeDesc;

      // Set text for showHelp function.
         var helpText = "You may navigate by clicking the directional buttons. You may also navigate by entering \n\"W\", \"N\", \"S\", or \"E\" in the command bar and then pressing [Enter] or clicking [Go].\n\nAll other actions are available only through use of the command bar. For example, your rucksack inventory may be displayed by typing \"Inventory\" in the command bar and then pressing [Enter] or clicking [Go].\n\nTry commands and phrases using keywords such as \"Look\", \"Take\", \"Drop\", or \"Find\".\n\nFor example, if you find a possibly useful item while stumbling about, a \"take [item]\" command might work. Even so, it's still up to you to figure out what is useful and how to use it.";

      // Set text for showInventory function when rucksack is empty.
         var inventoryList = "Dude, you ain't got shit!\n Nothin' but an empty rucksack.";

   // END SET MISCELLANEOUS GLOBAL VARIABLES
