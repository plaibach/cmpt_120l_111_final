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
                  processTxtCommands();
               }
         }

      // Monitor whether txtCommand is blank and update status of btnTxtCommand accordingly.
         function setBtnTxtCommand() {
            if (txtCommand.value !== "") {
               document.getElementById("btnTxtCommand").disabled = false;
            }  else {
                  if (txtCommand.value === "") {
                     document.getElementById("btnTxtCommand").disabled = true;
                  }
               }
         }

   // END VERIFY TEXT COMMAND INPUT IS PRESENT BEFORE CONTINUING TO PARSING FUNCTIONS


   // BEGIN PARSING AND PROCESSING OF TEXT COMMAND STRINGS

      // We arrived here because
         // text was present and [Enter} key was pressed, or
         // text was present (therefore [Go] was enabled) and [Go] was clicked.

      // Starting here we pass playerAction downstream for display in the historyTextArea.

      // Check txtCommand for single character directionals "w", "n", "s", or "e".
      // Call directional functions (same as corresponding button clicks) and pass player action variable.
         function processTxtCommands() {
            var playerAction = "txtCommand \"" + txtCommand.value + "\"";
            // Convert string to lower case for analysis
            var txtCommandLowcase = txtCommand.value.toLowerCase();
            switch(txtCommandLowcase) {
               case "w": attemptGoWest(playerAction);  break;
               case "n": attemptGoNorth(playerAction); break;
               case "s": attemptGoSouth(playerAction); break;
               case "e": attemptGoEast(playerAction);  break;
               case "c": attemptGoClimb(playerAction); break;
               default: parsedTxtCommands();
            }
         }

      // Check txtCommand for the substrings
      // "west", "north", "south", "east", "help", "inv", "look", "take", "drop", and "find".
         function parsedTxtCommands() {
            var playerAction = "txtCommand \"" + txtCommand.value + "\"";
            switch(true) {
               case txtCommand.value.search(/west/i)  !== -1: attemptGoWest(playerAction);   break;
               case txtCommand.value.search(/north/i) !== -1: attemptGoNorth(playerAction);  break;
               case txtCommand.value.search(/south/i) !== -1: attemptGoSouth(playerAction);  break;
               case txtCommand.value.search(/east/i)  !== -1: attemptGoEast(playerAction);   break;
               case txtCommand.value.search(/climb/i) !== -1: attemptGoClimb(playerAction);  break;
               case txtCommand.value.search(/help/i)  !== -1: showHelp(playerAction);        break;
               case txtCommand.value.search(/scor/i)  !== -1: showScoring(playerAction);     break;
               case txtCommand.value.search(/inv/i)   !== -1: showInventory(playerAction);   break;
               case txtCommand.value.search(/hint/i)  !== -1: showHint(playerAction);        break;
               case txtCommand.value.search(/look/i)  !== -1: lookSee(playerAction);         break;
               case txtCommand.value.search(/take/i)  !== -1: takeItem(playerAction);        break;
               case txtCommand.value.search(/use/i)   !== -1: useItem(playerAction);         break;
               case txtCommand.value.search(/drop/i)  !== -1: dropItem(playerAction);        break;
               case txtCommand.value.search(/find/i)  !== -1: findItem(playerAction);        break;
               default: specialTxtCommands();
            }
         }

      // Check txtCommand for special combinations of substrings
      // "rub" && "lotion" which is used to escape from the Abyss.
         function specialTxtCommands() {
            var playerAction = "txtCommand \"" + txtCommand.value + "\"";
            if ((currentLocale === "Room4") && (txtCommand.value.search(/rub/i) !== -1) && (txtCommand.value.search(/lotion/i)) !== -1) {
               escapedAbyss(playerAction);
            }  else {
               unknownTxtCommand();
            }
         }

   // END PARSING AND PROCESSING OF TEXT COMMAND STRINGS


   // BEGIN FUNCTIONS FOR TEXT COMMANDS THAT DO NOT REQUIRE NAVIGATION OR INVENTORY PROCESSING

      // Update text area displays with message or requested information only.

         function showHelp() {
            var playerAction = "txtCommand \"" + txtCommand.value + "\"";
            var message = "Help displayed at right -->";
            var multiPurposeText = helpText;
            updateMultiPurposeTextArea(playerAction, message, multiPurposeText);
         }

         function showScoring() {
            var playerAction = "txtCommand \"" + txtCommand.value + "\"";
            var message = "Scoring displayed at right -->";
            var multiPurposeText = scoringText;
            updateMultiPurposeTextArea(playerAction, message, multiPurposeText);
         }

      // Provide in-line help prompt when text commands are unrecognized by any other function.
         function unknownTxtCommand() {
            var playerAction = "txtCommand \"" + txtCommand.value + "\"";
            var message = "Please type a command and then press [Enter] or click [Go].\nUse the \"Help\" command to view examples of options available.";
            updateAllDisplays(playerAction, message);
         }

   // END FUNCTIONS FOR TEXT COMMANDS THAT DO NOT REQUIRE NAVIGATION OR INVENTORY PROCESSING
