function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }
    const member = new Person('Ayush', 'Verma'); 
    Person.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
    };
    console.log(member.getFullName());