// Paul C. Laibach
   // Introduction to Programming
   // Final Project - Game v .0
   // Due 20 4. 2.  

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
      var navArray = [ // W   N   S   E  Climb
               /* 0 */ [ - ,   , - , - , - ],
               /*   */ [ - ,  2, - , - , - ],
               /* 2 */ [  5,  3,   , - , - ],
               /* 3 */ [ - ,  4,  2, - , - ],
               /* 4 */ [ - , - , - , - , - ],
               /* 5 */ [ - , - , - ,  2, - ],
               /* 6 */ [ - , - , - , - , - ],
               /* 7 */ [ - , - , - , - , - ],
               /* 8 */ [ - , - , - , - , - ],
               /* 9 */ [ - , - , - , - , - ],
              /*  0 */ [ - , - , - , - , - ]
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
            // Copy attempted direction locale value from navArray to currentLocale,
            currentLocale = navArray[currentLocale][navAttempt];
            // Copy updated LocaleDesc to 'message' for game response.
            message = this.localeArray[currentLocale].localeDesc;
            // Increment updated (new) current localeVisits by one.
            localeArray[currentLocale].localeVisits++;
            // Add newVisitPoints value for first visit to MapLocale.
            if (localeArray[currentLocale].localeVisits ===  ) {
               totalScore = totalScore + firstVisitPoints;
            // Subtract increasing points each time player returns to a MapLocale.
            // Use localeVisits +   so player does not lose a point for the initial visit.
            }  else {
               totalScore = totalScore - localeArray[currentLocale].localeVisits +  ;
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

      // Establish Usefultems locale array.
      // X:itemID Y:mapLocale
      var itemLocaleArray = [ // 0  1  2  3  4  5  6
                      /* 0 */ [  ,  ,  ,  ,  ,  ,  ],  
                      /* 1 */ [  , 2,  ,  ,  ,  ,  ],
                      /* 2 */ [ 5, 3,  ,  ,  ,  ,  ],
                      /* 3 */ [  , 4, 2,  ,  ,  ,  ],
                      /* 4 */ [  ,  ,  ,  ,  ,  ,  ],
                      /* 5 */ [  ,  ,  , 2,  ,  ,  ],
                      /* 6 */ [  ,  ,  ,  ,  ,  ,  ],
                      /* 7 */ [  ,  ,  ,  ,  ,  ,  ],
                      /* 8 */ [  ,  ,  ,  ,  ,  ,  ],
                      /* 9 */ [  ,  ,  ,  ,  ,  ,  ],
                     /* 10 */ [  ,  ,  ,  ,  ,  ,  ]
      ];

      function showInventory() {
         var playerAction = "txtCommand \"" + txtCommand.value + "\"";
         var message = "Inventory displayed at right -->";
         var multiPurposeText = "showInventory multiPurposeText";
         updateMultiPurposeTextArea(playerAction, message, multiPurposeText);
      }

      // Putting this with logic for possible contextual interaction.
      function showHint() {
         var playerAction = "txtCommand \"" + txtCommand.value + "\"";
         var message = "Hints displayed at right -->";
         var multiPurposeText = hintText;
         updateMultiPurposeTextArea(playerAction, message, multiPurposeText);
      }

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

