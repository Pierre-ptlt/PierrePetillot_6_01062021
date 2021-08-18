class Image {

    constructor(data, photographer)
    {
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.image = data.image;
        this.image = data.image;
        this.tags = data.tags;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
        this.photographerName = photographer.name;
    }

    render()
    {
        return `<div class="mediaItem" media-id="${this.id}">
        <a href="#" class="mediaWrapper">
        <img class="media" src="../../images/Sample-Photos/${this.photographerName}/${this.image}">
        </a>
        <div class="mediaInfos">
            <p class="mediaTitle">${this.title}</p>
            <div class="likes">
                <div class="mediaLikes">${this.likes}</div>
                <button class="likeButton"><i class="fas fa-heart"></i></button>
            </div>
        </div>
    </div>`;
    }

    listenLike()
    {
        let likeButton = document.querySelectorAll("likeButton");
        likeButton.forEach(button => {
            console.log('like ajouté');
        });
    }
}

export default Image;