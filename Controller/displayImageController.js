const path = require('path')
const fs = require('fs')

const directory = (__dirname).split('\\Controller')[0]

//like array so [0]['C:\\Users\\Divya\\mern\\app\\03-news-app\\news-app-backend\Controller' ]
// console.log(directory)=>C:\Users\Divya\mern\app\03-news-app\news-app-backend

const getPostImage = (request, response) => {
    const fileName = request.params.fileName
    const filePath = path.join(directory, 'images', fileName);
    fs.stat(filePath, (error, stat) => {
        if (stat) {
            response.status(201).sendFile(filePath)
            console.log(filePath)
        }
        else {
            response.status(409).send("wrong path!!")
        }
    })
}

module.exports = { getPostImage }