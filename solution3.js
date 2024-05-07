// Solution 4: adding "this" as a second argument to forEach

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    this.students.forEach(function (student) {
      console.log(this.title + ": " + student);
    },
    this);
  }
};

group.showList();