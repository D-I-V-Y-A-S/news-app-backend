const data = require('../Data/newsData')
const newsModel = require('../Model/newsModel')
const path = require('path')

const getAllnews = async (request, response) => {
    try {
        const news = await newsModel.find()

        if (news.length === 0) {
            const news = await newsModel.insertMany(data)
        }
        response.status(200).json(news)
    }
    catch (error) {
        response.status(500).send({ message: error.message })
    }
}
const addnews = async (request, response) => {
    try {
        // ✅ Access fields directly (not request.body.formData)
        const { newsID, newsTitle, newsArticle, newsAuthor, newsDate, newsCategory } = request.body;

        // ✅ Check for existing news
        const existingnews = await newsModel.findOne({ newsID });
        if (existingnews) {
            return response.status(400).json({ ErrorMessage: 'News already exists' });
        }

        // ✅ Ensure file exists
        if (!request.file) {
            return response.status(400).json({ ErrorMessage: 'No image uploaded' });
        }

        // ✅ Construct image URL
        const { filename } = request.file;
        const newsImage = filename;

        // ✅ Create news object
        const newsData = {
            newsID,
            newsTitle,
            newsArticle,
            newsAuthor,
            newsDate,
            newsImage,
            newsCategory
        };

        // ✅ Insert news
        await newsModel.insertMany(newsData);
        console.log('News Added:', newsData);

        // ✅ Send success response
        response.status(201).json({ message: `${newsTitle} added successfully`, news: newsData });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

const image_url = process.env.BACKEND_URL

const updatenews = async (request, response) => {
    try {
        const { newsID, newsTitle, newsArticle, newsAuthor, newsDate, newsCategory } = request.body
        let newsImage = null
        const existingnews = await newsModel.findOne({ newsID: newsID })

        if (!existingnews) {
            return response.status(404).json({ ErrorMessage: 'news with this ID does not exists!' })
        }
        if (request.file) {
            const { filename } = request.file
            newsImage = `${image_url}/images/` + filename
        }
        else {
            newsImage = existingnews.newsImage
        }

        existingnews.newsID = newsID,
            existingnews.newsTitle = newsTitle,
            existingnews.newsArticle = newsArticle,
            existingnews.newsAuthor = newsAuthor,
            existingnews.newsDate = newsDate,
            existingnews.newsImage = newsImage,
            existingnews.newsCategory = newsCategory
        await existingnews.save()
        response.status(201).json({ message: "data updated successfully!" })
    }
    catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const deletenews = async (request, response) => {
    const newsToBeDeleted = request.query.newsID;
    try {
        const news = await newsModel.findOne({ newsID: newsToBeDeleted })
        console.log(news)
        if (news) {
            const newsName = news.newsTitle
            await newsModel.deleteOne({ newsID: newsToBeDeleted })
            response.status(200).send({ message: `${newsName} deleted successfully!` })
        }
        else {
            response.status(404).send({ message: "news not found!" })
        }
    }
    catch (error) {
        response.status(500).send({ message: error.message });
    }
}

module.exports = { getAllnews, addnews, updatenews, deletenews }