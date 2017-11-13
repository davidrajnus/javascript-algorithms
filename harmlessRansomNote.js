function harmlessRansomNote(noteText, magazineText) {
  var noteArr     = noteText.split(' '),
      magazineArr = magazineText.split(' '),
      magazineObj = {};
  
  //function to count instances of each word    
  magazineArr.forEach(function(word) {
    if (!magazineObj[word]){
      magazineObj[word] = 0;
    }
    magazineObj[word]++
  });
  
  var noteIsPossible = true;
  
  noteArr.forEach(function(word){
    if(magazineObj[word]){
      magazineObj[word]--;
      if (magazineObj[word] < 0){
        //means note has more words than magazine
        noteIsPossible = false;
      }
    } else {
      noteIsPossible = false;
    }
  });
  return noteIsPossible;
}

harmlessRansomNote("this is text of al text", "this is text for all")

//function has a Linear Time Complexity O(n) + O(m)