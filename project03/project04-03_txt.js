/*    JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Application to count the number of characters in a review comment
      Author: Shyam Prasad Reddy Musani
      Date:   2/17/2024

      Filename: project04-03.js
*/

// Maximum Length of Review
const MAX_REVIEW = 1000;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elemets in the web page
wordCountBox = document.getElementById("countValue");
warningBox = document.getElementById("warningBox");


// Event listener for typing into the comment box
document.getElementById("comment").addEventListener("keyup", updateCount);

// Function to update the count with each keyup event
function updateCount() {
   // Set the warning box to an empty text string 
   warningBox.innerHTML = "";
   
   // Count the number of characters in the comment box
  let  commentText = document.getElementById("comment").value;
  let  charCount = countCharacters(commentText);
  wordCountBox.innerHTML = charCount;

   // Check if the character count exceeds the maximum review limit
   if (charCount > MAX_REVIEW) {
      warningBox.innerHTML = "You have exceeded the maximum review limit.";
   }
   
}


/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
} 