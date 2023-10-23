const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]



function render(){
    
    let htmlToRender = ``
    posts.map( (e,index)=> {

        htmlToRender +=`  
    <section class="post-content">
  
    <div class="container">
    ${index !== 0 ? "<hr/>" : ""}         
    <div class="profile-info">
                <img  class="profile-picture" src=${e.avatar}>
                <div class="user-info">  
                    <p  class="bold name" >${e.name} </p>
                    <p  class="location">${e.location}</p>
                </div> 
            <div>

        </div>     
    </section> 

    <section class="image">
            <div class="container">
                <img  class="post-img" src=${e.post}>
            </div>
    </section>

    <section class="comments-section">
        <div class="container">
            <img id="likes-icon${index}" class="icons like-icon" src="/images/icon-heart.png">
            <img  class="icons comment-icon" src="/images/icon-comment.png" >
            <img  class="icons pm-icon"   src="/images/icon-dm.png">
            <div class="comment-info">
                <div class="likes-text bold">
                    <p  id="likes${index}" class="likes">${e.likes}</p>
                    <p>likes</p>
                </div>
                <p  class="bold username"> ${e.username}</p>
                <p  class="comments">${e.comment}</span>
            <div>
        </div>
    </section>
    

`


    })
    main.innerHTML = htmlToRender
}
render()


posts.map( (e,index) => {

const likesEl = document.querySelector(`#likes${index}`);
const likeIconEl = document.querySelector(`#likes-icon${index}`);
let likes = Number(likesEl.textContent)
let liked =false

likeIconEl.addEventListener("click",function(){
    if (liked === false){
          liked= true
          likes += 1
          likesEl.textContent = likes
          likeIconEl.classList.add("liked")
          
    
        
    }
    
    else if (liked === true){
        liked = false
        likes -= 1
        likesEl.textContent =  likes
        likeIconEl.classList.remove("liked")
          
    }
     
})

})



