const majorProjects={
    "projects": [
        {
            "id": "1",
            "name": "Bookhub (Goodreads Clone)",
            "image_url": "https://assets.ccbp.in/frontend/react-js/projects-showcase/fruits-counter-img.png",
            "localLink":"/bookhub",
        },
        {
            "id": "2",
            "name": "Nxt Trendz App(Flipkart,Amazon Clone",
            "image_url": "https://assets.ccbp.in/frontend/react-js/projects-showcase/gallery-app-img.png",
            "localLink":"/nxttrendz"
        },
        {
            "id": "3",
            "name": "Jobby App(Job Portal)",
            "image_url": "https://assets.ccbp.in/frontend/react-js/projects-showcase/blogs-list-img.png",
            "localLink":"/jobby"
        },
        {
            "id": "4",
            "name": "NxtWatch App(Youtube Clone)",
            "image_url": "https://assets.ccbp.in/frontend/react-js/projects-showcase/emoji-game-img.png",
            "localLink":"/nxtwatch"
        },
    ],
    "total": 4
}

const getMajorProjectsList=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(majorProjects)
        },1000)
    })
}

export default getMajorProjectsList

