

const Renderer = function(){

    const renderPosts = (tweets) => {
        $('#posts').empty()
        for(let i=tweets.length-1; i>=0; i--){
            let deletePost = `<button class=delete-post>X</button>`
            let element= `<div class=post data-id=${tweets[i].getId()}><div class=tweet >`
            element+=deletePost
            element+=`<p>${tweets[i].getId()}: ${tweets[i].getTweetContent()}</p></div>`
            let comments = tweets[i].getComments()
            for(let j=0; j<comments.length; j++){
                // Comment id is the index the same as the index of the comment
                element+=`<div class=comment-section data-id=${comments[j].getId()}><button class=delete-comment>x</button><p class=comment>id: ${comments[j].getId()} - ${comments[j].getcommentContent()}</p></div>`
            }
            element+=`<div class=add-comment-section><input class=add-comment-text placeholder="add a comment..."><button class=add-comment>Add</button></div>`
            element+=`</div>`
            $('#posts').append(element)
        }


    }


    return {
        renderPosts
    }

}