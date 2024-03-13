console.log("hello world");

const { createApp } = Vue

createApp({
    data(){
        return{
            todo : [{
                task : "Learn js",
                done : "false"
            },
            {
                task : "Learn js"
            },
            {
                task : "Learn js",
                done : "false"
            },
            {
                task : "Learn js",
                done : "false"
            },
            {
                task : "Learn js",
                done : "false"
            },
        ]
        }

    },
    
    methods: {
    }
}).mount("#app")

