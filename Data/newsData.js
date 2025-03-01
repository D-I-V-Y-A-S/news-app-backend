
const image_url=process.env.BACKEND_URL
const initialData = [
    {
        "newsID": "N001",
        "newsTitle": "Scientists Make Breakthrough in Cancer Treatment",
        "newsArticle": "Researchers have discovered a new therapy that shows promising results in treating certain types of cancer.",
        "newsAuthor": "John Doe",
        "newsCategory": "Health",
        "newsImage": `${image_url}/images/tech.jpg`,
        "comments": 1,
        "likes": 1,
        "newsDate": new Date()
    },
    {
        "newsID": "N002",
        "newsTitle": "Global Summit Addresses Climate Change Crisis",
        "newsArticle": "World leaders gathered to discuss urgent measures to combat climate change and its impact on the planet.",
        "newsAuthor": "Jane Smith",
        "newsCategory": "Environment",
        "newsImage": `${image_url}/images/tech.jpg`,
        "comments": 1,
        "likes": 1,
        "newsDate": new Date()
    },
    {
        "newsID": "N003",
        "newsTitle": "Stock Market Reaches Record Highs",
        "newsArticle": "The stock market surged today, setting new records as investor confidence remains strong.",
        "newsAuthor": "David Johnson",
        "newsCategory": "Finance",
        "newsImage": `${image_url}/images/tech.jpg`,
        "comments": 1,
        "likes": 1,
        "newsDate": new Date()
    },
    {
        "newsID": "N004",
        "newsTitle": "New Technology Unveiled at Tech Expo",
        "newsArticle": "Cutting-edge gadgets and innovations were showcased at the annual technology expo in Silicon Valley.",
        "newsAuthor": "Sara Lee",
        "newsCategory": "Technology",
        "newsImage": `${image_url}/images/tech.jpg`,
        "comments": 1,
        "likes": 1,
        "newsDate": new Date()
    },
    {
        "newsID": "N005",
        "newsTitle": "Political Unrest in Eastern Europe",
        "newsArticle": "Tensions escalate as protests erupt in several Eastern European countries over government policies.",
        "newsAuthor": "Michael Brown",
        "newsCategory": "World",
        "newsImage": `${image_url}/images/tech.jpg`,
        "comments": 1,
        "likes": 1,
        "newsDate": new Date()
    },
    {
        "newsID": "N006",
        "newsTitle": "New Study Reveals Benefits of Mediterranean Diet",
        "newsArticle": "A study shows that the Mediterranean diet can reduce the risk of heart disease and improve overall health.",
        "newsAuthor": "Emily White",
        "newsCategory": "Health",
        "newsImage": `${image_url}/images/tech.jpg`,
        "comments": 1,
        "likes": 1,
        "newsDate": new Date()
    },
    {
        "newsID": "N007",
        "newsTitle": "Space Agency Plans Mission to Mars",
        "newsArticle": "NASA announces ambitious plans to send humans to Mars by the end of the decade.",
        "newsAuthor": "Alex Turner",
        "newsCategory": "Science",
        "newsImage": `${image_url}/images/tech.jpg`,
        "comments": 1,
        "likes": 1,
        "newsDate": new Date()
    },
    {
        "newsID": "N008",
        "newsTitle": "Education Reform Bill Passes Senate",
        "newsArticle": "The Senate approves a comprehensive education reform bill aimed at improving schools nationwide.",
        "newsAuthor": "Chris Adams",
        "newsCategory": "Politics",
        "newsImage": `${image_url}/images/tech.jpg`,
        "comments": 1,
        "likes": 1,
        "newsDate": new Date()
    },
    {
        "newsID": "N009",
        "newsTitle": "New Art Exhibition Opens in New York City",
        "newsArticle": "Art enthusiasts flock to the city to attend the opening of a new contemporary art exhibition.",
        "newsAuthor": "Sophie Clark",
        "newsCategory": "Culture",
        "newsImage": `${image_url}/images/brand.jpg`,
        "comments": 1,
        "likes": 1,
        "newsDate": new Date()
    },
    {
        "newsID": "N010",
        "newsTitle": "Rising Star Wins Best Actor Award",
        "newsArticle": "A young actor receives critical acclaim and wins a prestigious award for his role in a new film.",
        "newsAuthor": "Mark Roberts",
        "newsCategory": "Entertainment",
        "newsImage": `${image_url}/images/tech.jpg`,
        "comments": 1,
        "likes": 1,
        "newsDate": new Date()
    }
];

module.exports = initialData;
