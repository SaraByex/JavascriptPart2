

module.exports = {
    courses: ["Python", "CSS", "JS"],
    displayCourse: function() {
        this.courses.forEach((course) => 
            console.log(course)
        );
    }
};