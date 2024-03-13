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
        ],
        newTask : {
            task: "",
            done: false
        }
        }
        
    },
    
    methods: {

        addElement(){
            console.log("element added");
            const newerTask = {...this.newTask} // grazie ai pokemon e all'operatore 
            this.todo.unshift(newerTask)
            this.newTask.task = "";
        },

        removeElement(index){
            index = this.todo[index]
            this.todo.splice(index, 1)
        }
    }
}).mount("#app")


