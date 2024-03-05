const majorProjects={
    "projects": [
        {
            "id": "1",
            "name": "Goodreads Clone",
            "image_url": "https://assets.ccbp.in/frontend/react-js/projects-showcase/fruits-counter-img.png"
        },
        {
            "id": "2",
            "name": "Nxt Trendz App(Flipkart,Amazon Clone",
            "image_url": "https://assets.ccbp.in/frontend/react-js/projects-showcase/gallery-app-img.png"
        },
        {
            "id": "3",
            "name": "Jobby App(Job Portal)",
            "image_url": "https://assets.ccbp.in/frontend/react-js/projects-showcase/blogs-list-img.png"
        },
        {
            "id": "4",
            "name": "NxtWatch App(Youtube Clone)",
            "image_url": "https://assets.ccbp.in/frontend/react-js/projects-showcase/emoji-game-img.png"
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

