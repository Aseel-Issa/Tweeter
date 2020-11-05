
// The tweeter module is initialized once here so all the controllers files can access the same instance
const tweetsList = Tweeter()

// The only function that is defined here is the post() because it is declared in the index.html
const post = function(){
    tweetsList.postTweet($('#container').find('#input').val())
    $('#container').find('#input').val('')
    const renderer = Renderer()
    renderer.renderPosts(tweetsList.getPosts())
}

// The first function that will be called when the index.html file is opened
const initPage = function(){
    const renderer = Renderer()
    const controller = Controller()
    controller.run()
    const tweet = tweetsList.postTweet("My first tweet")
    tweet.addComment("My first comment")
    tweet.addComment("My Second comment")
    tweet.addComment("My Third comment")

    const tweet2 = tweetsList.postTweet("My second tweet")
    tweet2.addComment("My first comment")
    renderer.renderPosts(tweetsList.getPosts())
}

initPage()