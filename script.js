document.addEventListener('DOMContentLoaded', function() {
  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs"
    },
    {
      text: "Stay hungry, stay foolish.",
      author: "Steve Jobs"
    },
    {
      text: "Your time is limited, so don’t waste it living someone else’s life.",
      author: "Steve Jobs"
    },
    {
      text: "Design is not just what it looks like and feels like. Design is how it works.",
      author: "Steve Jobs"
    }
  ];

  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  function displayQuote() {
    const { text, author } = getRandomQuote();
    document.getElementById('text').textContent = text;
    document.getElementById('author').textContent = `- ${author}`;
  }

  document.getElementById('new-quote').addEventListener('click', displayQuote);

  document.getElementById('tweet-quote').addEventListener('click', function() {
    const currentQuote = document.getElementById('text').textContent;
    const currentAuthor = document.getElementById('author').textContent;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${currentQuote}" ${currentAuthor}`)}`;
    window.open(tweetUrl, '_blank');
  });

  displayQuote();
});

