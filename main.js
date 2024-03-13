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
                done : true
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

        addEelement(){
            console.log("element added");
        },

        removeElement(index){
            index = this.todo[index]
            console.log(this.todo.index);
        }
    }
}).mount("#app")


