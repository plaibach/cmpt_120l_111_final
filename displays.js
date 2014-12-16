// Paul C. Laibach
   // Introduction to Programming
   // Final Project - Game v1.0
   // Due 2014.12.11

//
// DOCUMENT INPUT AND DISPLAY ELEMENT UPDATES
//

   // BEGIN COMMENTS SUMMARIZING FUNCTIONS AVAILABLE AND REQUIRED PARAMETERS

      // updateMultiPurposeTextArea(playerAction, message, multiPurposeText)
      // updateAllDisplays(playerAction, message)

         // (...playerAction...)     // Player action type with any raw command text  // Appended to taHistory
         // (...message ...)         // Responses from game logic                     // Appended to taHistory
         // (...multiPurposeText...) // Temporary text displayed outside game history // Displayed in taMultiPurpose

      // Use of the updateAllDisplays function clears any prior multiPurposeText

   // END COMMENTS SUMMARIZING FUNCTIONS AVAILABLE AND REQUIRED PARAMETERS


   // BEGIN DOCUMENT INPUT AND DISPLAY ELEMENT UPDATE FUNCTIONS

      // Function initializeOnLoad is called only from the html <body> tag onload event.
      // Used to establish historyTextArea display when first landing at page or upon subsequent refresh.
         function initializeOnLoad() {
            // Indicate "Refresh" as 'playerAction' for refresh onload.
            var playerAction = "Refresh";
            // Use initial/default refresh 'message' for onload game response to "Refresh" playerAction.
            updateCoreDisplays(playerAction, message);
         }

      // Display "Help" or "Inventory" or any other temporary text we don't want to include in taHistory or taStatus.
         function updateMultiPurposeTextArea(playerAction, message, multiPurposeText) {
            var multiPurposeTextArea = document.getElementById("taMultiPurpose");
            multiPurposeTextArea.value = multiPurposeText;
            // Continue passing along local variables for processing by updateCoreDisplays function.
            updateCoreDisplays(playerAction, message);
         }

      // Update document input and display elements with results from game navigation and command processing.
         function updateAllDisplays(playerAction, message) {
            clearMultiPurposeTextArea();
            // Continue passing along local variables for processing by updateCoreDisplays function.
            updateCoreDisplays(playerAction, message);
         }

      // Clear out the temporary use multiPurposeTextArea when processing any subsequent input.
         function clearMultiPurposeTextArea() {
            var multiPurposeTextArea = document.getElementById("taMultiPurpose");
            multiPurposeTextArea.value = "";
         }

      // Package functions to follow initializeOnLoad, updateMultiPurposeTextArea, and updateAllDisplays functions.
         function updateCoreDisplays(playerAction, message) {
            updateHistoryTextArea(playerAction, message);
            updateStatusTextArea();
            clearTxtCommand();
            setBtnTxtCommand();
            resetTxtCommandPlaceHolder();
            focusOnTxtCommand();
            setBtnState();
            // Display currentLocale and localeVisits in debug textarea during development.
            updateDebugTextArea();
         }

      // Recursively concatenate (append) player actions and response messages for display in main history textarea.
         function updateHistoryTextArea(playerAction, message) {
            var historyTextArea = document.getElementById("taHistory");
            if (historyTextArea.value === "") {
               historyTextArea.value = "[" + playerAction + "]" + "\n\n" + message + "\n";
            }  else {
                  historyTextArea.value = historyTextArea.value + "\n" + "[" + playerAction + "]" + "\n\n" + message + "\n";
               }
            historyTextArea.scrollTop = historyTextArea.scrollHeight
         }

      // Display totalScore and localeName in status textarea.
         function updateStatusTextArea() {
            var statusTextArea = document.getElementById("taStatus");
            statusTextArea.value = "Score: " + totalScore + "\n" + "Current Location: " + this.localeArray[currentLocale].localeName;
         }

      // Display currentLocale and localeVisits in debug textarea during development.
         function updateDebugTextArea() {
            var debugTextArea = document.getElementById("taDebug");
            debugTextArea.value = "[ currentLocale:" + currentLocale + " | localeVisits:" + this.localeArray[currentLocale].localeVisits + " ]";
         }

      // Since we are here, user text command input has either been evaluated and utilized, or discarded (and possibly dirty), so reset field to blank.
         function clearTxtCommand() {
            txtCommand.value = "";
         }

      // Since we are here, some form of valid button or user text command input has been processed, so reset any special placeholders.
         function resetTxtCommandPlaceHolder() {
            txtCommand.placeholder="Type a command or \"Help\" then press [Enter].";
         }

      // Always return focus to user text command input field.
         function focusOnTxtCommand() {
            document.getElementById("txtCommand").focus();
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

      // Set navigation button status using navArray navigational permissions array
         function setBtnState() {
            if (navArray[currentLocale][west] >=0) {
               document.getElementById("btnWest").disabled = false;
            }  else {
               document.getElementById("btnWest").disabled = true;
               }
            if (navArray[currentLocale][north] >=0) {
               document.getElementById("btnNorth").disabled = false;
            }  else {
               document.getElementById("btnNorth").disabled = true;
               }
            if (navArray[currentLocale][south] >=0) {
               document.getElementById("btnSouth").disabled = false;
            }  else {
               document.getElementById("btnSouth").disabled = true;
               }
            if (navArray[currentLocale][east] >=0) {
               document.getElementById("btnEast").disabled = false;
            }  else {
               document.getElementById("btnEast").disabled = true;
               }
         }

   // END DOCUMENT INPUT AND DISPLAY ELEMENT UPDATE FUNCTIONS
