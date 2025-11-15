class Student {
    constructor(name , notes){
        this.name = name;
        this.notes = notes ;

    }

    getAverage () {
        let total = 0 ;
        this.notes.forEach(x => {
            total += x ;
           
        });
        return total / this.notes.length; 
    }
}

const s1 = new Student("Ephraims" , [15, 12, 18])
console.log(s1.getAverage());