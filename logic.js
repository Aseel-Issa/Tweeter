
// Outer functions (to be reused as if they were inheretend from a parent class)
// remove element from the array
const removeElementById = function(array, id) {
    console.log('Before iterating over the array:')
            for (let m=0; m<array.length; m++){
                console.log(array[m].getId())
            }
    console.log('While iterating over the array:')
    for(let i=0; i<array.length; i++){
        if(array[i].getId() == id){
            // splice function does not remove the last item in the mutated array, that's why we have to reassign an empty array
            if(array.length == 1){
                array = []
                break
            }
            console.log('the element that should be removed is of id: '+array[i].getId())
            console.log('i: '+i)
            let deleted = array.splice(i, 1)
            
            for(let k=0; k<deleted.length; k++){
                console.log('spliced item is '+deleted[k].getId())
            }
            
            console.log('Remaining elements:')
            for (let j=0; j<array.length; j++){
                console.log(array[j].getId())
            }
            break;
        }
    }
    return array
}

// get element from an array, returns null of not found 
const getElementById = (array, id) => {
    for(let i=0; i<array.length; i++){
        console.log(`tweet id = ${array[i].getId()} ${id}`)
        if(array[i].getId() == id){
            return array[id]
        }
    }
    return null
}

// add element to the end of the array
const addElement = (array, element) => {
    array.push(element);
} 

// Tweets module which is the list of all posted tweets
// ===================================================================
const Tweets = function(){
    // List of all tweets
    let allTweets = []

    // tweet module
    /* it is configured inside Tweets module, because a tweet can not exist without Tweets modules
       which refers to the list of all the tweets*/
    // ========================================================
    const Tweet = function(tweetContent){
        let tweetText = tweetContent
        let tweetId = 0
        let comments = []
        // comment module
        /*it is configured inside Tweet module, because a cooment can not exist without the post
        that it is refering to*/
        // ====================================================
        const Comment = function(commentContent) {
            let commentText = commentContent
            let commentId = 0
            const getcommentContent = ()=> commentText
            const setcommentContent = (value) => {
                commentText= value
            }
            const getcommentId = ()=> commentId
            const setcommentId = (value) => {
                commentId= value
            }
            return{
                getcommentContent,
                setcommentContent,
                getId: getcommentId,
                setId: setcommentId
            }
        }
        // =====================End of comment module==================================
        const getTweetContent = () => tweetText
        const setTweetContent = (value) => {
            tweetText = value;
        }

        const getTweetId = () => tweetId
        const setTweetId = (value) => {
            tweetId = value;
        }

        // add a comment to the tweet
        const addComment = function(value) {
            const comment  = Comment(value)
            comment.setId("T"+getTweetId()+"-C"+comments.length)
            addElement(comments, comment)
            return comment
        } 
        // remove comment from the tweet
        const removeCommentById = (id) => {
            comments = removeElementById(comments, id)
        }

        // get specific comment by its id/index
        const getCommentById = (id) => {
            return getElementById(comments, id)
        }

        const getNumberOfComments = () => {
            return comments.length
        }

        const getComments = () => {
            return comments
        }

        return{
            getTweetContent,
            setTweetContent,
            getId: getTweetId,
            setId : setTweetId,
            addComment,
            removeCommentById,
            getCommentById,
            getNumberOfComments,
            getComments
        }

    }
    // =======================End of tweet module=========================================

    // Post a tweet
    const postTweet = (tweetContent) => {
        const tweet = Tweet(tweetContent)
        tweet.setId(allTweets.length)
        addElement(allTweets, tweet)
        return tweet
    }

    // get specific tweet by its id/index
    const getTweetById = (id) => {
        return getElementById(allTweets, id)
    }

    // delete a specific tweet based on its id/index
    const removeTweetById = (id) => {
        // allTweets array is being called as value, and not as reference, that's why it has been reassigned again
        allTweets = removeElementById(allTweets, id)
        if(allTweets.length == 0){
            console.log(' there are no posts ')
        }
        for(let i=0; i<allTweets.length; i++){
            console.log('Tweet of id: '+ allTweets[i].getId()+' exists')
        }
    }

    const getAllTweets = () => {
        return allTweets
    }

    return {
        postTweet,
        getTweetById,
        removeTweetById,
        getPosts: getAllTweets
    }

}
// ================End of Tweets module================================================

