angular.module('quoteBook').service('dataService', function(){

    var quotes = [
            { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
            { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
            { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
            { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
            { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
            { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
            { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
        ];


    this.getQuotes = function(){
        var quotesString = localStorage.getItem('quotes')
        if (!quotesString) {
            localStorage.setItem('quotes', JSON.stringify(quotes))
            return quotes;
        }

        return JSON.parse(quotesString)
    }

    this.addData = function(newQuote){
        if(newQuote.text && newQuote.author){
            var updatedQuotes = JSON.parse(localStorage.getItem('quotes'))
            updatedQuotes.push(newQuote);

            var quotesAsString = JSON.stringify(updatedQuotes)
            localStorage.setItem('quotes', quotesAsString)
            return true;
        }
        return false;
    }

    this.removeData = function(textToRemove){
        var updatedQuotes = JSON.parse(localStorage.getItem('quotes'))
        for (var i = 0; i < updatedQuotes.length; i++){
            if(updatedQuotes[i].text.toLowerCase() === textToRemove.toLowerCase()){
                updatedQuotes.splice(i, 1);
                i--;
            }
        }
        localStorage.setItem('quotes', JSON.stringify(updatedQuotes));
        return updatedQuotes;
    }
})