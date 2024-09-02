/* Given a word, "getLengthOfWord" returns the length of the given word. */

function getLengthOfWord(word1) {
	///Your code Starts here 
	{
		if (String(word1) == word1) {
			return word1.length
		} else if (Number(word1) == word1) {
			return -1
		} else {
			return -1
		}
	}
	
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

getLengthOfWord("GUVI");
getLengthOfWord("");
getLengthOfWord();
getLengthOfWord(9);
*/