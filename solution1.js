// Solution 1: using self = this

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    let selft = this;
    this.students.forEach(function (student) {
      console.log(selft.title + ": " + student);
    });
  }
};

group.showList();