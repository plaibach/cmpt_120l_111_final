// Paul C. Laibach
   // Introduction to Programming
   // Final Project - Game v1.0
   // Due 2014.12.11

//
// GAME PROCESSING USING ARRAYS
//

   // Functions we will be expecting here:
      // attemptGoWest(playerAction)
      // attemptGoNorth(playerAction)
      // attemptGoSouth(playerAction)
      // attemptGoEast(playerAction)
      // attemptGoCLimb(playerAction)
      // lookSee(playerAction)
      // takeItem(playerAction)
      // dropItem(playerAction)
      // findItem(playerAction)

   // BEGIN DIRECTIONAL FUNCTIONS

      // Establish navigational permissions array.
      var navArray = [ // W   N   S   E   Climb
              /* 0 */ [  -1,  1, -1, -1, -1],
              /* 1 */ [  -1,  2, -1, -1, -1],
              /* 2 */ [   5,  3,  1, -1, -1],
              /* 3 */ [  -1,  4,  2, -1, -1],
              /* 4 */ [  -1, -1, -1, -1, -1],
              /* 5 */ [  -1, -1, -1,  2, -1],
              /* 6 */ [  -1, -1, -1, -1, -1],
              /* 7 */ [  -1, -1, -1, -1, -1],
              /* 8 */ [  -1, -1, -1, -1, -1],
              /* 9 */ [  -1, -1, -1, -1, -1],
             /* 10 */ [  -1, -1, -1, -1, -1]
      ];

      // Comments here apply to all directional functions in this section.
      function attemptGoWest(playerAction) {
         // Check validity of attempted direction.
         if (navArray[currentLocale][west] >=0) {
         // If attempted direction is valid...
            // Change to current localeID.
            currentLocale = navArray[currentLocale][west];
            // Assign updated current LocaleDesc to message as game response.
            message = this.localeArray[currentLocale].localeDesc;
            // Increment updated current localeVisits by one.
            localeArray[currentLocale].localeVisits++;
         // If attempted direction is not valid...
            // Assign current localeDirBlocked to message as game response.
         }  else message = this.localeArray[currentLocale].localeDirBlocked;
         updateAllDisplays (playerAction, message);
      }

      function attemptGoNorth(playerAction) {
         if (navArray[currentLocale][north] >=0) {
            currentLocale = navArray[currentLocale][north];
            message = this.localeArray[currentLocale].localeDesc;
            localeArray[currentLocale].localeVisits++;
         }  else message = this.localeArray[currentLocale].localeDirBlocked;
         updateAllDisplays (playerAction, message);
      }

      function attemptGoSouth(playerAction) {
         if (navArray[currentLocale][south] >=0) {
            currentLocale = navArray[currentLocale][south];
            message = this.localeArray[currentLocale].localeDesc;
            localeArray[currentLocale].localeVisits++;
         }  else message = this.localeArray[currentLocale].localeDirBlocked;
         updateAllDisplays (playerAction, message);
      }

      function attemptGoEast(playerAction) {
         if (navArray[currentLocale][east] >=0) {
            currentLocale = navArray[currentLocale][east];
            message = this.localeArray[currentLocale].localeDesc;
            localeArray[currentLocale].localeVisits++;
         }  else message = this.localeArray[currentLocale].localeDirBlocked;
         updateAllDisplays (playerAction, message);
      }

      function attemptGoClimb(playerAction) {
         if (navArray[currentLocale][climb] >=0) {
            currentLocale = navArray[currentLocale][climb];
            message = this.localeArray[currentLocale].localeDesc;
            localeArray[currentLocale].localeVisits++;
         }  else message = "Nope, you can't do anything up there!";
         updateAllDisplays (playerAction, message);
      }         

   // END DIRECTIONAL FUNCTIONS


   // BEGIN INVENTORY FUNCTIONS

      function lookSee() {
         var playerAction = "txtCommand \"" + txtCommand.value + "\"";
         var message = "lookSee message";
         var multiPurposeText = "lookSee multiPurposeText";
         updateMultiPurposeTextArea (playerAction, message, multiPurposeText);
      }

      function takeItem() {
         var playerAction = "txtCommand \"" + txtCommand.value + "\"";
         var message = "takeItem message";
         var multiPurposeText = "takeItem multiPurposeText";
         updateMultiPurposeTextArea (playerAction, message, multiPurposeText);
      }

      function dropItem() {
         var playerAction = "txtCommand \"" + txtCommand.value + "\"";
         var message = "Ehhh... You better hang on to that.";
         var multiPurposeText = "dropItem multiPurposeText";
         updateMultiPurposeTextArea (playerAction, message, multiPurposeText);
      }

      function findItem() {
         var playerAction = "txtCommand \"" + txtCommand.value + "\"";
         var message = "Find it yourself, bitch.";
         var multiPurposeText = "findItem multiPurposeText";
         updateMultiPurposeTextArea (playerAction, message, multiPurposeText);
      }

   // END INVENTORY FUNCTIONS


/*
// BEGIN JUNK I'M KEEPING AROUND FOR REFERENCE
//

   // This is where we end up after "rub and "lotion" are parsed while in Room4, the Abyss.
      function escapedAbyss(playerAction) {
         var message = "The scent of the lotion overwhelms you. You fight to hold on to consciousness, but become dizzy and confused. It seems you are tumbling through space; through a blurred jumble of doors and passages.\n\nYour flight halts abruptly and you find yourself suspended and spinning slowly in a room with glowing walls and ceiling. There is no floor below, just a shaft leading downward and away out of sight.\n\nThere is a bright flash and you are released to fall painfully into the chute, tumbling and landing in a heap. Congratulations! You have successfully employed the portal - you escaped the pit, traversed Room 6 and the chute, and made it to the Annex.";
         currentLocale = "Room5";
         if (hasVisitedRoom6 === false) {
            totalScore = totalScore + 5;
         }
         if (hasVisitedRoom5 === false) {
            totalScore = totalScore + 5;
         }
         hasVisitedRoom6 = true;
         hasVisitedRoom5 = true;
         updateAllDisplays (playerAction, message);
      }

   // This is left over from the guessing exercise, and may be utilized a bit later on.
      function mustGuess(playerAction) {
         var secretNumber = 7;
         var stillGuessing = true;
         var guessedNumber = prompt("Guess a freakin' number.") ;
         guessedNumber = parseInt(guessedNumber);
         alert (guessedNumber);
      }

//
// END JUNK I'M KEEPING AROUND FOR REFERENCE
*/

