// Paul C. Laibach
   // Introduction to Programming
   // Final Project - Game v1.0
   // Due 2014.12.11

//
// DEFINE CLASS-PROTOTYPES, INSTANTIATE INSTANCES, AND CONFIGURE ARRAYS
//

   // BEGIN MAPLOCALE CLASS-PROTOTYPE, INSTANCES, AND ARRAY

      // Define MapLocale class-prototype.
         function MapLocale() {
            this.localeID = 0;
            this.localeVisits = 0;
            this.localeName = "localeName";
            this.localeDesc = "localeDesc";
            this.localeDirBlocked = "Erm... sorry, you can't go that way.";
         }

      // Instantiate MapLocale class-prototype instances.
         var locale_0 = new MapLocale();
            locale_0.localeID = 0;
            locale_0.localeVisits = 1;
            locale_0.localeName = "Utility Yard";
            locale_0.localeDesc = "After a night of drunken debauchery, you wake to find yourself trapped in the utility enclosure of what appears to be an abandoned shopping mall. The gate leading to the parking lot and freedom is chained and locked. All the surrounding fencing and gate are topped with razor wire. To the north there is a doorway to the interior of the building.";
            locale_0.localeDirBlocked = "Chained and locked, remember?";
         var locale_1 = new MapLocale();
            locale_1.localeID = 1;
            // locale_1.localeVisits = 0; // Use
            locale_1.localeName = "Maintenance Room";
            locale_1.localeDesc = "You have just entered an unmarked door at the south end of a nondescript building. The door swings gently shut behind you and latches with a slight, yet somehow ominous \"click.\"";
            locale_1.localeDirBlocked = "Sorry, the door locked behind you when you stepped in. There is a keyhole, but you don't have any keys. It seems there's only one way to go.";
         var locale_2 = new MapLocale();
            locale_2.localeID = 2;
            // locale_2.localeVisits = 0;
            locale_2.localeName = "Room 2";
            locale_2.localeDesc = "Description for Room 2";
            // locale_2.localeDirBlocked = ; // Inherit generic text from class-prototype.
         var locale_3 = new MapLocale();
            locale_3.localeID = 3;
            // locale_3.localeVisits = 0;
            locale_3.localeName = "Room 3";
            locale_3.localeDesc = "Description for Room 3";
            // locale_3.localeDirBlocked = ; // Inherit generic text from class-prototype.
         var locale_4 = new MapLocale();
            locale_4.localeID = 4;
            // locale_4.localeVisits = 0;
            locale_4.localeName = "Pit of Despair";
            locale_4.localeDesc = "You have fallen a long distance straigt down to land on something cold, lumpy, and... moist. Welcome to THE PIT OF DESPAIR!\nThere is no way out :-O (Or... is there?)";
            locale_4.localeDirBlocked = "It rubs the lotion on its skin or else it gets the hose again.";
         var locale_5 = new MapLocale();
            locale_5.localeID = 5;
            // locale_5.localeVisits = 0;
            locale_5.localeName = "Room 5";
            locale_5.localeDesc = "Description for Room 5";
            // locale_5.localeDirBlocked = ; // Inherit generic text from class-prototype.
         var locale_6 = new MapLocale();
            locale_6.localeID = 6;
            // locale_6.localeVisits = 0;
            locale_6.localeName = "Suspended Animation";
            locale_6.localeDesc = "The scent of the lotion overwhelms you. You fight to hold on to consciousness, but become dizzy and confused. It seems you are tumbling through space; through a blurred jumble of doors and passages.\n\nYour flight halts abruptly and you find yourself suspended and spinning slowly in a room with glowing walls and ceiling. There is no floor below, just a shaft leading downward and away out of sight.\n\nThere is a bright flash and you are released to fall painfully into the chute, tumbling and landing in a heap. Congratulations! You have successfully employed the portal - you escaped the pit, traversed Room 6 and the chute, and made it to the Annex.";
            // locale_6.localeDirBlocked = ; // Inherit generic text from class-prototype.
         var locale_7 = new MapLocale();
            locale_7.localeID = 7;
            // locale_7.localeVisits = 0;
            locale_7.localeName = "Room 7";
            locale_7.localeDesc = "Description for Room 7";
            // locale_7.localeDirBlocked = ; // Inherit generic text from class-prototype.
         var locale_8 = new MapLocale();
            locale_8.localeID = 8;
            // locale_8.localeVisits = 0;
            locale_8.localeName = "Room 8";
            locale_8.localeDesc = "Description for Room 8";
            // locale_8.localeDirBlocked = ; // Inherit generic text from class-prototype.
         var locale_9 = new MapLocale();
            locale_9.localeID = 9;
            // locale_9.localeVisits = 0;
            locale_9.localeName = "Room 9";
            locale_9.localeDesc = "Description for Room 9";
            // locale_9.localeDirBlocked = ; // Inherit generic text from class-prototype.
         var locale_10 = new MapLocale();
            locale_10.localeID = 10;
            // locale_10.localeVisits = 0;
            locale_10.localeName = "Room 10";
            locale_10.localeDesc = "Description for Room 10";
            // locale_10.localeDirBlocked = ; // Inherit generic text from class-prototype.

      // Store MapLocale instances in global array.
         var localeArray = [];
            localeArray[0] =  locale_0
            localeArray[1] =  locale_1
            localeArray[2] =  locale_2
            localeArray[3] =  locale_3
            localeArray[4] =  locale_4
            localeArray[5] =  locale_5
            localeArray[6] =  locale_6
            localeArray[7] =  locale_7
            localeArray[8] =  locale_8
            localeArray[9] =  locale_9
            localeArray[10] = locale_10

   // END MAPLOCALE CLASS-PROTOTYPE, INSTANCES, AND ARRAY


   // BEGIN USEFULITEM CLASS-PROTOTYPE, INSTANCES, AND ARRAY

      // Define UsefulItem class-prototype.
         function UsefulItem() {
            this.itemID = 0;
            this.itemName = "itemName";
            this.itemLocale = 0;
            this.itemStatus = true;
            this.itemWeight = 0;
            this.itemVolume = 0;
            this.toString = function() {
               var itemToString = "";
               itemToString = this.itemName;
               return itemToString;}
         }

      // Instantiate UsefulItem class-prototype instances.
         var item_0 = new UsefulItem();
            item_0.itemID = 0;
            item_0.itemName = "Foo Bar";
            item_0.itemLocale = -1;
            item_0.itemStatus = false;
            item_0.itemWeight = 0;
            item_0.itemVolume = 0;
         var item_1 = new UsefulItem();
            item_1.itemID = 1;
            item_1.itemName = "Flannel Pajamas";
            item_1.itemLocale = 2;
            // item_1.itemStatus = ; // Inherit true/false from class-prototype
            item_1.itemWeight = 5;
            item_1.itemVolume = 5;
         var item_2 = new UsefulItem();
            item_2.itemID = 2;
            item_2.itemName = "Wrench";
            item_2.itemLocale = 3;
            // item_2.itemStatus = ; // Inherit true/false from class-prototype
            item_2.itemWeight = 15;
            item_2.itemVolume = 8;
         var item_3 = new UsefulItem();
            item_3.itemID = 3;
            item_3.itemName = "Goldfinger DVD";
            item_3.itemLocale = 1;
            // item_3.itemStatus = ; // Inherit true/false from class-prototype
            item_3.itemWeight = 3;
            item_3.itemVolume = 3;
         var item_4 = new UsefulItem();
            item_4.itemID = 4;
            item_4.itemName = "Yoga Pants";
            item_4.itemLocale = 3;
            // item_4.itemStatus = ; // Inherit true/false from class-prototype
            item_4.itemWeight = 5;
            item_4.itemVolume = 5;
         var item_5 = new UsefulItem();
            item_5.itemID = 5;
            item_5.itemName = "Dodgeball Ball";
            item_5.itemLocale = 4;
            // item_5.itemStatus = ; // Inherit true/false from class-prototype
            item_5.itemWeight = 10;
            item_5.itemVolume = 30;
         var item_6 = new UsefulItem();
            item_6.itemID = 6;
            item_6.itemName = "Dog Biscuit";
            item_6.itemLocale = 3;
            // item_6.itemStatus = ; // Inherit true/false from class-prototype
            item_6.itemWeight = 3;
            item_6.itemVolume = 3;

      // Store UsefulItem instances in global array.
         var itemArray = [];
            itemArray[0] =  item_0
            itemArray[1] =  item_1
            itemArray[2] =  item_2
            itemArray[3] =  item_3
            itemArray[4] =  item_4
            itemArray[5] =  item_5
            itemArray[6] =  item_6

   // END USEFULITEM CLASS-PROTOTYPE, INSTANCES, AND ARRAY
