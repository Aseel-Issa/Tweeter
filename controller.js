

const Controller = function(){

    const run = function(){
        deletePost()
        deleteComment()
        addComment()
    }

    const deletePost = function(){
        $('#posts').on('click', '.delete-post', function(){
            //const tweetsList = Tweets()
            console.log($(this).closest('.post').data('id') + " has been removed ")
            tweetsList.removeTweetById($(this).closest('.post').data('id'))
            let posts = tweetsList.getPosts()
            Renderer().renderPosts(posts)
            
        })
    }

    const deleteComment = function(){
        $('#posts').on('click', '.delete-comment', function(){
            let tweetId = $(this).closest('.post').data('id')
            let commentId = $(this).closest('.comment-section').data('id')
           // console.log($(this).closest('.post').data('id') + " has been removed ")
            let tweet = tweetsList.getTweetById(tweetId)
            tweet.removeCommentById(commentId)
            let posts = tweetsList.getPosts()
            Renderer().renderPosts(posts)
            
        })
    }

    const addComment = function(){
        $('#posts').on('click', '.add-comment', function(){
            let tweetId = $(this).closest('.post').data('id')
          //  let commentId = $(this).closest('.comment-section').data('id')
           // console.log($(this).closest('.post').data('id') + " has been removed ")
            let tweet = tweetsList.getTweetById(tweetId)
            let content = $(this).closest('.post').find('.add-comment-text').val()
            tweet.addComment(content)
            let posts = tweetsList.getPosts()
            Renderer().renderPosts(posts)
            
        })
    }

    return {
        run
    }
}

