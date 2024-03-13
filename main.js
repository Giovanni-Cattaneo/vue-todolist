console.log("hello world");

const { createApp } = Vue

createApp({
    data(){
        return{
            todo : [{
                task : "Learn js",
                done : true
            },
            {
                task : "Learn php",
                done: false
            },
            {
                task : "Learn laravel",
                done : false
            },
            {
                task : "Learn c++",
                done : false
            },
            {
                task : "Learn vuejs",
                done : false
            },
        ]
        }
        
    },
    
    methods: {

        istrue(){
            if (this.todo.done = true) {
                    this.todo.task.style.textDecoration ="line-through"
            }
        }
    }
}).mount("#app")


