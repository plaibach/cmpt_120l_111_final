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

      // Establish navigational logic array.
         // Y:currentLocale
         // X:direction navAttempt 
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

      // Process navigation using directional logic array. 
      function navLogic(playerAction, navAttempt) {
         if (navArray[currentLocale][navAttempt] >=0) {
         // If attempted direction is valid...
            // Copy currentLocale to previousLocale,
            previousLocale = currentLocale;
            // Copy attempted direction locale value from navArray to currentLocale,
            currentLocale = navArray[currentLocale][navAttempt];
            // Copy updated LocaleDesc to 'message' for game response.
            message = this.localeArray[currentLocale].localeDesc;
            // Increment updated (new) current localeVisits by one.
            localeArray[currentLocale].localeVisits++;
            // Add newVisitPoints value for first visit to MapLocale.
            if (localeArray[currentLocale].localeVisits === 1) {
               totalScore = totalScore + firstVisitPoints;
            }  else {
            // Subtract increasing points each time player returns to a MapLocale.
               // Use localeVisits + 1 so player does not lose a point for the initial visit.
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

      // Process navigation invoked by special comboTxtCommands.
      function escapePit(playerAction) {
         if (currentLocale === 4) {
            // Copy currentLocale to previousLocale,
            previousLocale = currentLocale;
            // Transport player to locale_6
            // THIS NEEDS TO BE FIXED !!!
            currentLocale = 5;
            // Copy updated LocaleDesc to 'message' for game response.
            message = this.localeArray[currentLocale].localeDesc;
            // Increment updated (new) current localeVisits by one.
            localeArray[currentLocale].localeVisits++;
            // Add newVisitPoints value for first visit to MapLocale.
            if (localeArray[currentLocale].localeVisits === 1) {
               totalScore = totalScore + firstVisitPoints;
            }  else {
            // Subtract increasing points each time player returns to a MapLocale.
               // Use localeVisits + 1 so player does not lose a point for the initial visit.
               totalScore = totalScore - localeArray[currentLocale].localeVisits + 1;
               }
            // Pass playerAction and message downstream.
            updateAllDisplays(playerAction, message);
         }  else unknownTxtCommand();
      }

      // Putting this with navigation logic for possible contextual interaction.
      function showHint() {
         var playerAction = "txtCommand \"" + txtCommand.value + "\"";
         var message = "Hints displayed at right -->";
         var multiPurposeText = hintText;
         updateMultiPurposeTextArea(playerAction, message, multiPurposeText);
      }

   // END NAVIGATION PROCESSING AND SCORING


   // BEGIN INVENTORY PROCESSING AND SCORING

      // This code is similar to function lookSee and can be combined.
      function showInventory() {
         var playerAction = "txtCommand \"" + txtCommand.value + "\"";
         var message = "Inventory displayed at right -->";
         // Items carried in rucksack are set to "-1" for itemLocale attribute.
         // Filter the itemArray using "-1" as itemLocale attribute criterion.
         var itemsFilterResult = itemArray.filter(function (listItems) {
            return listItems.itemLocale === -1});
         if (String(itemsFilterResult) === "") {
            itemsFilterResult = lookSeeNothingText
         } else
            // Take the comma separated list and replace commas with returns.
            itemsFilterResult = String(itemsFilterResult).replace(/,/g,"\n");
         var multiPurposeText = "--- Items in Rucksack ---" + "\n\n" + itemsFilterResult;
         updateMultiPurposeTextArea(playerAction, message, multiPurposeText);
      }

      // This code is similar to function showInventory and can be combined.
      function lookSee() {
         var playerAction = "txtCommand \"" + txtCommand.value + "\"";
         var message = "What you see around displayed at right -->";
         // Filter the itemArray using currentLocale as itemLocale attribute criterion.
         var itemsFilterResult = itemArray.filter(function (listItems) {
            return listItems.itemLocale === currentLocale});
         if (String(itemsFilterResult) === "") {
            itemsFilterResult = lookSeeNothingText
         } else
            // Take the comma separated list and replace commas with returns.
            itemsFilterResult = String(itemsFilterResult).replace(/,/g,"\n");
         var multiPurposeText = "--- Looking Around ---" + "\n\n" + itemsFilterResult;
         updateMultiPurposeTextArea(playerAction, message, multiPurposeText);
      }

      function takeItem() {
         var playerAction = "txtCommand \"" + txtCommand.value + "\"";
         var message = "takeItem message";
         var multiPurposeText = "takeItem multiPurposeText";
         updateMultiPurposeTextArea(playerAction, message, multiPurposeText);
      }

      function useItem() {
         var playerAction = "txtCommand \"" + txtCommand.value + "\"";
         var message = "useItem message";
         var multiPurposeText = "useItem multiPurposeText";
         updateMultiPurposeTextArea(playerAction, message, multiPurposeText);
      }

      // This is an abusive placeholder function for future development.
      function dropItem() {
         var playerAction = "txtCommand \"" + txtCommand.value + "\"";
         var message = "Bad idea... keep what you have, fool.";
         // var multiPurposeText = "dropItem multiPurposeText";
         updateMultiPurposeTextArea(playerAction, message);
      }

      // This is an abusive placeholder function for future development.
      function findItem() {
         var playerAction = "txtCommand \"" + txtCommand.value + "\"";
         var message = "Find it yourself, bitch.";
         // var multiPurposeText = "findItem multiPurposeText";
         updateMultiPurposeTextArea(playerAction, message);
      }

   // END INVENTORY PROCESSING AND SCORING

/*
// BEGIN JUNK FOR REFERENCE
//

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

