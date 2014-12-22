// Paul C. Laibach
   // Introduction to Programming
   // Final Project - Game v1.0
   // Due 2014.12.11

//
// COMMAND VALIDATION, TEXT PARSING, DISPLAY FUNCTIONS, AND NAVIGATION CALLS
//

   // BEGIN VERIFY TEXT COMMAND INPUT IS PRESENT BEFORE CONTINUING TO PARSING FUNCTIONS

      // If text is not present and player presses [Enter] key, do nothing except set placeholder message.
         function verifyTxtPresent() {
            if (txtCommand.value === "") {
               txtCommand.placeholder = "Dude. Just type \"Help\" and press [Enter]!";
               document.getElementById("btnTxtCommand").disabled = true;
               focusOnTxtCommand();
            }  else {
                  processTxtCommand();
               }
         }

   // END VERIFY TEXT COMMAND INPUT IS PRESENT BEFORE CONTINUING TO PARSING FUNCTIONS


   // BEGIN PARSING AND PROCESSING OF TEXT COMMAND STRINGS

      // We arrived here because
         // text was present and [Enter} key was pressed, or
         // text was present (therefore [Go] was enabled) and [Go] was clicked.

      // Starting here we pass playerAction downstream for display in the historyTextArea.

      // Check txtCommand for single character shortcuts; e.g., "w", "n", "c", "i", "l", etc.
      // These point to the same functions as corresponding buttons and simple word substrings. 
         function processTxtCommand() {
            var playerAction = "txtCommand \"" + txtCommand.value + "\"";
            // Convert string to lower case for analysis
            var txtCommandLowcase = txtCommand.value.toLowerCase();
            switch(txtCommandLowcase) {
               case "w": attemptGoWest(playerAction);  break;
               case "n": attemptGoNorth(playerAction); break;
               case "s": attemptGoSouth(playerAction); break;
               case "e": attemptGoEast(playerAction);  break;
               case "c": attemptGoClimb(playerAction); break;
               case "i": showInventory(playerAction);  break;
               case "l": lookSee(playerAction);        break;
               default: parsedTxtCommands(playerAction);
            }
         }

      // Check txtCommand for simple word substrings; e.g., "west", "climb", "help", "look", etc.
         function parsedTxtCommands(playerAction) {
            switch(true) {
            // These point to the same functions as single character shortcuts and navigation buttons.
               case txtCommand.value.search(/west/i)  !== -1: attemptGoWest(playerAction);     break;
               case txtCommand.value.search(/north/i) !== -1: attemptGoNorth(playerAction);    break;
               case txtCommand.value.search(/south/i) !== -1: attemptGoSouth(playerAction);    break;
               case txtCommand.value.search(/east/i)  !== -1: attemptGoEast(playerAction);     break;
            // This points to the same function as the single character shortcut.
               case txtCommand.value.search(/climb/i) !== -1: attemptGoClimb(playerAction);    break;
            // These have specialty functions associated with them.
               case txtCommand.value.search(/help/i)  !== -1: showHelp(playerAction);          break;
               case txtCommand.value.search(/scor/i)  !== -1: showScoring(playerAction);       break;
               case txtCommand.value.search(/hint/i)  !== -1: showHint(playerAction);          break;
               case txtCommand.value.search(/inv/i)   !== -1: showInventory(playerAction);     break;
               case txtCommand.value.search(/look/i)  !== -1: lookSee(playerAction);           break;
            // These are combination substring commands further validated against applicable keywords.
               case txtCommand.value.search(/take/i)  !== -1: validateTakeCombo(playerAction); break;
               case txtCommand.value.search(/drop/i)  !== -1: validateDropCombo(playerAction); break;
               case txtCommand.value.search(/find/i)  !== -1: validateFindCombo(playerAction); break;
               case txtCommand.value.search(/use/i)   !== -1: validateUseCombo(playerAction);  break;
               case txtCommand.value.search(/rub/i)   !== -1: validateRubCombo(playerAction);  break;
               default: unknownTxtCommand(playerAction);
            }
         }

      // Inventory functions that must be checked for valid command and keyword substring combinations.
         function validateTakeCombo(playerAction) {
            var parsedItemID = -1;
            for (i = 0; i < itemArray.length; i++) {
               if (txtCommand.value.toLowerCase().search(itemArray[i].itemName.toLowerCase()) !== -1) {
                  parsedItemID = itemArray[i].itemID;
               }
            }
            takeItem(playerAction, parsedItemID);
         }
         function validateDropCombo(playerAction) {
            var parsedItemID = -1;
            for (i = 0; i < itemArray.length; i++) {
               if (txtCommand.value.toLowerCase().search(itemArray[i].itemName.toLowerCase()) !== -1) {
                  parsedItemID = itemArray[i].itemID;
               }
            }
            dropItem(playerAction, parsedItemID);
         }
         function validateFindCombo(playerAction) {
            var parsedItemID = -1;
            for (i = 0; i < itemArray.length; i++) {
               if (txtCommand.value.toLowerCase().search(itemArray[i].itemName.toLowerCase()) !== -1) {
                  parsedItemID = itemArray[i].itemID;
               }
            }
            findItem(playerAction, parsedItemID);
         }
         function validateUseCombo(playerAction) {
            var parsedItemID = -1;
            for (i = 0; i < itemArray.length; i++) {
               if (txtCommand.value.toLowerCase().search(itemArray[i].itemName.toLowerCase()) !== -1) {
                  parsedItemID = itemArray[i].itemID;
               }
            }
            useItem(playerAction, parsedItemID);
         }

      // Command and keyword substring combination "rub" && "lotion" to escape the Pit of Despair.
         function validateRubCombo(playerAction) {
            if (txtCommand.value.search(/rub/i) !== -1 && txtCommand.value.search(/lotion/i) !== -1) {
               rubLotion(playerAction);
            }
         }

   // END PARSING AND PROCESSING OF TEXT COMMAND STRINGS


   // BEGIN FUNCTIONS FOR TEXT COMMANDS THAT DO NOT REQUIRE NAVIGATION OR INVENTORY PROCESSING

      // Update text area displays with message or requested information only.

         function showHelp(playerAction) {
            var message = "Help displayed at right -->";
            var multiPurposeText = helpText;
            updateMultiPurposeTextArea(playerAction, message, multiPurposeText);
         }

         function showScoring(playerAction) {
            var message = "Scoring displayed at right -->";
            var multiPurposeText = scoringText;
            updateMultiPurposeTextArea(playerAction, message, multiPurposeText);
         }

      // Provide in-line help prompt when text commands are unrecognized by any other function.
         function unknownTxtCommand(playerAction) {
            var message = "Please type a command and then press [Enter] or click [Go].\nUse the \"Help\" command to view examples of options available.";
            updateAllDisplays(playerAction, message);
         }

   // END FUNCTIONS FOR TEXT COMMANDS THAT DO NOT REQUIRE NAVIGATION OR INVENTORY PROCESSING
