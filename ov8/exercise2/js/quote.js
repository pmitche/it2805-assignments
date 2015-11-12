var array_of_quotes = ["'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.' - Helen Keller",
						"'I can't change the direction of the wind, but I can adjust my sails to always reach my destination.' - Jimmy Dean",
						"'Nothing is impossible, the word itself says 'I'm possible'!' - Audrey Hepburn",
						"'Try to be a rainbow in someone's cloud.' - Maya Angelou",
						"'It is during our darkest moments that we must focus to see the light.' - Aristotle Onassis",
						"'We know what we are, but know not what we may be.' - William Shakespeare",
						"'Flæ is like the essence of youth for a student. Embrace it.' - Paul Mitchell",
						"'Believe you can and you're halfway there.' - Theodore Roosevelt",
						"'A compliment is something like a kiss through a veil.' - Victor Hugo",
						"'We can't help everyone, but everyone can help someone.' - Ronald Reagan"];

var print_quotes = function(){
	var get_quote = array_of_quotes[Math.floor(Math.random() * array_of_quotes.length)];
	document.getElementById("quote").value = get_quote;
}

window.addEventListener('load', print_quotes)