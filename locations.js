// Paul C. Laibach
   // Introduction to Programming
   // Final Project - Game v1.0
   // Due 2014.12.11

//
// GAME PROCESSING USING ARRAYS
//

   // BEGIN COMMENTS LISTING FUNCTIONS WE WILL BE EXPECTING TO FIND HERE

      // attemptGoWest(playerAction)
      // attemptGoNorth(playerAction)
      // attemptGoSouth(playerAction)
      // attemptGoEast(playerAction)
      // attemptGoCLimb(playerAction)
      // lookSee(playerAction)
      // takeItem(playerAction)
      // dropItem(playerAction)
      // findItem(playerAction)

   // END COMMENTS LISTING FUNCTIONS WE WILL BE EXPECTING TO FIND HERE


   // BEGIN NAVIGATION PROCESSING AND SCORING

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

      // Package directional attempts for consolidated processing.
      // Pick up and pass playerAction downstream for display in the historyTextArea.
      function attemptGoWest(playerAction) {
         navLogic(playerAction, west)
      }
      function attemptGoNorth(playerAction) {
         navLogic(playerAction, north)
      }
      function attemptGoSouth(playerAction) {
         navLogic(playerAction, south)
      }
      function attemptGoEast(playerAction) {
         navLogic(playerAction, east)
      }
      function attemptGoClimb(playerAction) {
         navLogic(playerAction, climb)
      }

      // Summary of the things we will be doing in the consolidated navigation logic.

         // Check validity of attempted direction.
         // Update previousLocale as appropriate.
         // Update currentLocale as appropriate.
         // Update 'message' for game response in historyTextArea,
         // Increment localeVisits as appropriate.
         // Add newVisitPoints value for first visit to MapLocale.
         // Subtract increasing points each time returning to a MapLocale.
         // Subtract navFailPoints each time a navigation attempt is denied.
         // Pass playerAction and message downstream for display in the historyTextArea.

      function navLogic(playerAction, navAttempt) {
         if (navArray[currentLocale][navAttempt] >=0) {
         // If attempted direction is valid...
            // Copy currentLocale to previousLocale,
            previousLocale = currentLocale;
            // Copy attempted location value from navArray to currentLocale,
            currentLocale = navArray[currentLocale][navAttempt];
            // Copy updated LocaleDesc to 'message' for game response.
            message = this.localeArray[currentLocale].localeDesc;
            // Increment updated (new) current localeVisits by one.
            localeArray[currentLocale].localeVisits++;
            // Add newVisitPoints value for first visit to MapLocale.
            if (localeArray[currentLocale].localeVisits === 1) {
               totalScore = totalScore + newVisitPoints;
            // Subtract increasing points each time returning to a MapLocale.
            }  else {
               totalScore = totalScore - localeArray[currentLocale].localeVisits + 1;
               }
         }  else {
         // If attempted direction is not valid...
            // Copy current localeDirBlocked to 'message' for game response.
            message = this.localeArray[currentLocale].localeDirBlocked;
            // Subtract navFailPoints each time a navigation attempt is denied.
            totalScore = totalScore - navFailPoints;
            }
         // Pass playerAction and message downstream.
         updateAllDisplays(playerAction, message);
      }

   // END NAVIGATION PROCESSING AND SCORING


   // BEGIN INVENTORY PROCESSING AND SCORING

      function lookSee() {
         var playerAction = "txtCommand \"" + txtCommand.value + "\"";
         var message = "lookSee message";
         var multiPurposeText = "lookSee multiPurposeText";
         updateMultiPurposeTextArea(playerAction, message, multiPurposeText);
      }

      function takeItem() {
         var playerAction = "txtCommand \"" + txtCommand.value + "\"";
         var message = "takeItem message";
         var multiPurposeText = "takeItem multiPurposeText";
         updateMultiPurposeTextArea(playerAction, message, multiPurposeText);
      }

      function dropItem() {
         var playerAction = "txtCommand \"" + txtCommand.value + "\"";
         var message = "Ehhh... You better hang on to that.";
         var multiPurposeText = "dropItem multiPurposeText";
         updateMultiPurposeTextArea(playerAction, message, multiPurposeText);
      }

      function findItem() {
         var playerAction = "txtCommand \"" + txtCommand.value + "\"";
         var message = "Find it yourself, bitch.";
         var multiPurposeText = "findItem multiPurposeText";
         updateMultiPurposeTextArea(playerAction, message, multiPurposeText);
      }

   // END INVENTORY PROCESSING AND SCORING

/*
// BEGIN JUNK FOR REFERENCE
//

   // This is where we end up after "rub and "lotion" are parsed while in Room4, the Abyss.
      function escapedAbyss(playerAction) {
         var message = ;
      }

   // This is left over from the guessing exercise, and may be utilized a bit later on.
      function mustGuess(playerAction) {
         var secretNumber = 7;
         var stillGuessing = true;
         var guessedNumber = prompt("Guess a freakin' number.") ;
         guessedNumber = parseInt(guessedNumber);
         alert(guessedNumber);
      }

//
// END JUNK FOR REFERENCE
*/

