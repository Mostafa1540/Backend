let coursesList = new Vue({
    el : "#courses-list",
    data : {
        header : "Courses List App" ,
        newCourse : '',
        state : 'default' ,
        noOfChars : 140 ,
        courses : [
            // 'HTML5 Course',
            // 'CSS3 Course',
            // 'Javascript Course'
        ],
        d: false
    },
    methods : {
        saveCourse : function(){
            //Push New Course
            this.courses.push(this.newCourse);
            //Reset Input
            this.newCourse = '';
        },
        deleteCourse : function(key){
            this.courses.splice(key, 1)
        },
        changeState : function(newState){
            this.state = newState;
        }
    },
    computed :{
        charCounter : function(){
            return this.newCourse.length;
        },
        reverseCourses : function(){
            return this.courses.reverse();
        }

    }

});