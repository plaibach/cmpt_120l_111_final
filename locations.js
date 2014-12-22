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
         // Increment localeVisitCount as appropriate.
         // Add newVisitPoints value for first visit to MapLocale.
         // Subtract increasing points each time returning to a MapLocale.
         // Subtract navAttemptFailPoints each time a navigation attempt is denied.
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
            // Increment updated (new) current localeVisitCount by one.
            localeArray[currentLocale].localeVisitCount++;
            // Add newVisitPoints value for first visit to MapLocale.
            if (localeArray[currentLocale].localeVisitCount === 1) {
               totalScore = totalScore + firstVisitPoints;
            }  else {
            // Subtract increasing points each time player returns to a MapLocale.
               // Use localeVisitCount + 1 so player does not lose a point for the initial visit.
               totalScore = totalScore - localeArray[currentLocale].localeVisitCount + 1;
               }
         }  else {
         // If attempted direction is not valid...
            // Copy current localeDirBlocked to 'message' for game response.
            message = this.localeArray[currentLocale].localeDirBlocked;
            // Subtract navAttemptFailPoints each time a navigation attempt is denied.
            totalScore = totalScore - navAttemptFailPoints;
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
            // Increment updated (new) current localeVisitCount by one.
            localeArray[currentLocale].localeVisitCount++;
            // Add newVisitPoints value for first visit to MapLocale.
            if (localeArray[currentLocale].localeVisitCount === 1) {
               totalScore = totalScore + firstVisitPoints;
            }  else {
            // Subtract increasing points each time player returns to a MapLocale.
               // Use localeVisitCount + 1 so player does not lose a point for the initial visit.
               totalScore = totalScore - localeArray[currentLocale].localeVisitCount + 1;
               }
            // Pass playerAction and message downstream.
            updateAllDisplays(playerAction, message);
         }  else unknownTxtCommand();
      }

      // Putting this with navigation logic for possible contextual interaction.
      function showHint(playerAction) {
         var message = "Hints displayed at right -->";
         var multiPurposeText = hintText;
         updateMultiPurposeTextArea(playerAction, message, multiPurposeText);
      }

   // END NAVIGATION PROCESSING AND SCORING


   // BEGIN INVENTORY PROCESSING AND SCORING

      // This code is similar to function lookSee and can be combined.
      function showInventory(playerAction) {
         var message = "Inventory displayed at right -->";
         // Items carried in rucksack are set to "-1" for itemLocale attribute.
         // Filter the itemArray using "-1" as itemLocale attribute criterion.
         var itemsFilterResult = itemArray.filter(function (listItems) {
            return listItems.itemLocale === -1});
         if (String(itemsFilterResult) === "") {
            itemsFilterResult = rucksackEmptyText
         } else
            // Take the comma separated list and replace commas with returns.
            itemsFilterResult = String(itemsFilterResult).replace(/,/g,"\n");
         var multiPurposeText = "--- Items in Rucksack ---" + "\n\n" + itemsFilterResult;
         updateMultiPurposeTextArea(playerAction, message, multiPurposeText);
      }

      // This code is similar to function showInventory and can be combined.
      function lookSee(playerAction) {
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

      function takeItem(playerAction, parsedItemID) {
         switch(true) {
            case parsedItemID === -1:
               totalScore = totalScore - takeItemFailPoints;
               message = commandDenied;
               multiPurposeText = "-- DOH! --\n\n" + "\""+ txtCommand.value + "\"\n" + message + "\n\Include something legit to take!\n\nY'all gotta at least try to play coherently.\n\nThat's " + takeItemFailPoints + " off your score.\nRemember, taking a look around is free.";
               break;
            case itemArray[parsedItemID].itemLocale === -1:
               totalScore = totalScore - takeItemFailPoints;
               message = "You already have the " + itemArray[parsedItemID].itemName + ".";
               multiPurposeText = "-- DOH! --\n\n" + message + "\n\nKeep better track of your shit, yo.\n\nThat's " + takeItemFailPoints + " off your score.\nRemember, taking inventory is free.";
               break;
            case currentLocale === itemArray[parsedItemID].itemLocale:
               itemArray[parsedItemID].itemLocale = -1;
               message = "You now have the " + itemArray[parsedItemID].itemName + ".";
               multiPurposeText = "--- Noice! ---\n\n" + message;
               break;
            default:
               message = borkMessage;
               multiPurposeText = message + "\n\n" + borkMultiPurposeText; 
         }
         updateMultiPurposeTextArea(playerAction, message, multiPurposeText);
      }

      function dropItem(playerAction, parsedItemID) {
         switch(true) {
            case parsedItemID === -1:
               totalScore = totalScore - dropItemFailPoints;
               message = commandDenied;
               multiPurposeText = "-- DOH! --\n\n" + "\""+ txtCommand.value + "\"\n" + message + "\n\Include something legit to drop!\n\nAnd I don't mean the acid, 'cause, Dude, you're already trippin'.\n\nThat's " + dropItemFailPoints + " off your score.\nRemember, taking inventory is free.";
               break;
            case itemArray[parsedItemID].itemLocale !== -1:
               totalScore = totalScore - dropItemFailPoints;
               message = "You don't have the " + itemArray[parsedItemID].itemName + ".";
               multiPurposeText = "-- DOH! --\n\n" + message + "\n\nKeep better track of your shit, yo.\n\nThat's " + dropItemFailPoints + " off your score.\nRemember, taking inventory is free.";
               break;
            case itemArray[parsedItemID].itemLocale === -1:
               itemArray[parsedItemID].itemLocale = currentLocale;
               message = "You no longer have the " + itemArray[parsedItemID].itemName + ".";
               multiPurposeText = "--- Remember! ---\n\n" + message;
               break;
            default:
               message = borkMessage;
               multiPurposeText = message + "\n\n" + borkMultiPurposeText; 
         }
         updateMultiPurposeTextArea(playerAction, message, multiPurposeText);
      }

      function findItem(playerAction, parsedItemID) {
         switch(true) {
            case parsedItemID === -1:
               totalScore = totalScore - findItemFailPoints;
               message = commandDenied;
               multiPurposeText = "-- DOH! --\n\n" + "\""+ txtCommand.value + "\"\n" + message + "\n\Include something legit to find!\n\nYou better figure out what you're really looking for, 'cause every invalid find request costs you " + findItemFailPoints + " off your score.\n\nYou think this sucked? Well, guess what. A successful search will cost you " + findItemPoints + " off your score. Have a great day.";
               break;
            case itemArray[parsedItemID].itemLocale === -1:
               totalScore = totalScore - findItemFailPoints;
               message = "You already have the " + itemArray[parsedItemID].itemName + ".";
               multiPurposeText = "-- DOH! --\n\n" + message + "\n\nThat's some brilliant gameplay there, Jerky.\n\nThat'll be " + findItemFailPoints + " off your score.\nRemember, taking inventory and looking around is free.";
               break;
            case itemArray[parsedItemID].itemLocale === currentLocale:
               totalScore = totalScore - findItemPoints;
               message = "The " + itemArray[parsedItemID].itemName + " is in this room.";
               multiPurposeText = "--- DOH! ---\n\n" + message + "\n\nYou know, this is actually very entertaining...\n\nThank you for putting you plodding buffoonery out there for our amusement.\n\nRemember, taking a look around is free. Duh.";
               break;
            case itemArray[parsedItemID].itemLocale !== -1:
               totalScore = totalScore - findItemPoints;
               message = "The " + itemArray[parsedItemID].itemName + " is in the " + localeArray[itemArray[parsedItemID].itemLocale].localeName + ".";
               multiPurposeText = "--- Remember! ---\n\n" + message + "\n\nI hope it was worth it. That little tidbit of trivia cost you " + findItemPoints + " off your score.\nLove ya! :-*";
               break;
            default:
               message = borkMessage;
               multiPurposeText = message + "\n\n" + borkMultiPurposeText; 
         }
         updateMultiPurposeTextArea(playerAction, message, multiPurposeText);
      }

      function useItem(playerAction, parsedItemID) {
         switch(true) {
            case parsedItemID === -1:
               totalScore = totalScore - useItemFailPoints;
               message = commandDenied;
               multiPurposeText = "-- DOH! --\n\n" + "\""+ txtCommand.value + "\"\n" + message + "\n\Include something legit to use!\n\nYou better figure out what you're really looking for, 'cause every invalid use request costs you " + useItemFailPoints + " off your score.\n\nYou think this sucked? Well, guess what. A successful search will cost you " + useItemPoints + " off your score. Have a great day.";
               break;
            case itemArray[parsedItemID].itemLocale === -1:
               totalScore = totalScore - useItemFailPoints;
               message = "You already have the " + itemArray[parsedItemID].itemName + ".";
               multiPurposeText = "-- DOH! --\n\n" + message + "\n\nThat's some brilliant gameplay there, Jerky.\n\nThat'll be " + useItemFailPoints + " off your score.\nRemember, taking inventory and looking around is free.";
               break;
            case itemArray[parsedItemID].itemLocale === currentLocale:
               totalScore = totalScore - useItemPoints;
               message = "The " + itemArray[parsedItemID].itemName + " is in this room.";
               multiPurposeText = "--- DOH! ---\n\n" + message + "\n\nYou know, this is actually very entertaining...\n\nThank you for putting you plodding buffoonery out there for our amusement.\n\nRemember, taking a look around is free. Duh.";
               break;
            case itemArray[parsedItemID].itemLocale !== -1:
               totalScore = totalScore - useItemPoints;
               message = "The " + itemArray[parsedItemID].itemName + " is in the " + localeArray[itemArray[parsedItemID].itemLocale].localeName + ".";
               multiPurposeText = "--- Remember! ---\n\n" + message + "\n\nI hope it was worth it. That little tidbit of trivia cost you " + useItemPoints + " off your score.\nLove ya! :-*";
               break;
            default:
               message = borkMessage;
               multiPurposeText = message + "\n\n" + borkMultiPurposeText; 
         }
         updateMultiPurposeTextArea(playerAction, message, multiPurposeText);
      }

   // END INVENTORY PROCESSING AND SCORING
