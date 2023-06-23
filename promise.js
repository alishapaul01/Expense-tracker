const posts = [{title: 'Post One', body: 'This is Post One'}]
const user = [{lastactivitytime: new Date().getTime()}]

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

try{
Promise.all([createPost({title:'Post Five', body: 'This is Post Five'}), updateuserlastactivitytime()]).then(deletePost).then(deletePost)

}

catch(err){ 
    console.log(err)
}
