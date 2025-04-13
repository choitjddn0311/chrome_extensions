setInterval(() => {
    let imgs = document.querySelectorAll("img");
    imgs.forEach((img) => {
        img.src = "https://i.playboard.app/p/AIdro_kNSKuSvdPzqphInf8WX65jtrCFY9nWKSWr4K2RjDzvMw/default.jpg";
    })


    let body = document.body;
    body.style.backgroundColor = 'red';
}, 100)