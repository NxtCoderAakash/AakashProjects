const majorProjects={
    "projects": [
        {
            "id": "2",
            "name": "Nxt Trendz (Shooping App)",
            "image_url": "https://res.cloudinary.com/dfqs9as0v/image/upload/v1709811498/Nxttrenz_screen_sxmobo.png",
            "localLink":"/nxttrendz"
        },
        {
            "id": "3",
            "name": "Jobby App (Job Portal)",
            "image_url": "https://res.cloudinary.com/dfqs9as0v/image/upload/v1709811614/jobby_screenshot_ivpdut.png",
            "localLink":"/jobby"
        },
        {
            "id": "4",
            "name": "NxtWatch (Streaming App)",
            "image_url": "https://res.cloudinary.com/dfqs9as0v/image/upload/v1709811594/nxtWatch_screenshot_nt4xhb.png",
            "localLink":"/nxtwatch"
        },
        {
            "id": "1",
            "name": "Bookhub (Goodreads Clone)",
            "image_url": "https://res.cloudinary.com/dfqs9as0v/image/upload/v1709811203/bookhub_screenshot_mi9mg8.png",
            "localLink":"/bookhub",
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

