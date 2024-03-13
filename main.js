console.log("hello world");

const { createApp } = Vue

createApp({
    data(){
        return{
            todo : [{
                task : "Learn js"
            },
            {
                task : "Learn js"
            },
            {
                task : "Learn js"
            },
            {
                task : "Learn js"
            },
            {
                task : "Learn js"
            },
        ]
        }
    }
}).mount("#app")