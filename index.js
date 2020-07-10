class Worker {
    constructor(name, surname, rate = 0, days = 0) {
        this.name = name;
        this.surmane = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

const worker1 = new Worker('Ivan', 'Ivanov', 70, 21);
console.log(worker1.getSalary());