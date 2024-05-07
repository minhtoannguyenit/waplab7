// 5. Using wrapper function and apply/bind/call method

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
      function showStudent(student) {
          console.log(this.title + ": " + student);
      }
      this.students.forEach(student => showStudent.apply(this, [student])); // using apply
      //this.students.forEach(student => showStudent.call(this, student)); // using call
      //this.students.forEach(student => showStudent.bind(this, student)); // using bind
  }
};

group.showList();