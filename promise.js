const posts = [{title: 'Post One', body: 'This is Post One'}]
const user = [{lastactivitytime: new Date().getTime()}]
function getPosts(){

        posts.forEach((post) => {
            console.log(post.title)
        })
    }
function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post)
            resolve();
        },2000)

        })
    }
function updateuserlastactivitytime(){
   return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           user.lastactivitytime = new Date().getTime();
           resolve(user.lastactivitytime)
         },1000 )
    })
}

function deletePost(){
    return  new Promise ((resolve, reject)=>{
        setTimeout(()=>{
           const popped= posts.pop();
           if(posts.length>0){
            resolve(popped)
           }
           else{
            reject('ERROR: Array is empty')
           }

    },1000)
})
}

async function display() {

    try {

            await createPost({title : 'Post Two', body : 'This is Post Two'})
            
            await updateuserlastactivitytime()
            console.log('user last activity time:', user.lastactivitytime)
            await deletePost();
            getPosts()
            await deletePost();
            getPosts()

        

    }catch(err) {

        console.log(err);

    }

}
display();
           
/*try{
Promise.all([createPost({title:'Post Five', body: 'This is Post Five'}), updateuserlastactivitytime()]).then(deletePost).then(deletePost)

}

catch(err){ 
    console.log(err)
}*/
