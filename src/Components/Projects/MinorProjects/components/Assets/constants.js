const minorProjects={
    "projects": [
        {
            "id": "e92bd787-6b17-468c-aac0-873d0e509be8",
            "name": "Fruits Counter",
            "image_url": "https://assets.ccbp.in/frontend/react-js/projects-showcase/fruits-counter-img.png",
            "link":"https://fruitinreact.ccbp.tech/"
        },
        {
            "id": "b5a791fc-6395-4223-8af1-5b161652a166",
            "name": "Gallery App",
            "image_url": "https://assets.ccbp.in/frontend/react-js/projects-showcase/gallery-app-img.png",
            "link":"https://rephotoselector.ccbp.tech/"
        },
        {
            "id": "8371d586-aab3-4b32-968c-29eb2496f7fd",
            "name": "Blog List",
            "image_url": "https://assets.ccbp.in/frontend/react-js/projects-showcase/blogs-list-img.png",
            "link":"https://ReComment.ccbp.tech"
        },
        {
            "id": "44ddf267-4a56-4c34-992d-361770a699c9",
            "name": "Emoji Game",
            "image_url": "https://assets.ccbp.in/frontend/react-js/projects-showcase/emoji-game-img.png",
            "link":"https://ReEmojiGame.ccbp.tech"
        },
        {
            "id": "84aa21e6-96d5-47f6-9911-fda6e00ecc53",
            "name": "Appointments App",
            "image_url": "https://assets.ccbp.in/frontend/react-js/projects-showcase/appointment-app-img.png",
            "link":""
        },
        {
            "id": "38b968fd-8b0e-4919-a899-dc232b4f87ca",
            "name": "App Store",
            "image_url": "https://assets.ccbp.in/frontend/react-js/projects-showcase/app-store-img.png",
            "link":"https://reappstore2.ccbp.tech/"
        },
        {
            "id": "cac8210f-6e35-4ee6-9c98-498c5e658016",
            "name": "Meme Generator",
            "image_url": "https://assets.ccbp.in/frontend/react-js/projects-showcase/meme-generator-img.png",
            "link":"https://ReMemeGenerate.ccbp.tech"
        },
        {
            "id": "add3496a-4bac-44a0-8b1d-6529ddb7525d",
            "name": "Gradient Generator",
            "image_url": "https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png",
            "link":"https://ReGradient.ccbp.tech"
        }
    ],
    "total": 8
}

const getMinorProjectsList=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(minorProjects)
        },1000)
    })
}

export default getMinorProjectsList

