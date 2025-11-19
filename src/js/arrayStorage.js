'use strict'

// Local storage for tasks

class ArrayStorage {
    // the constructor to initialize the object with the key name and its content
    constructor (name) {
        this.name = name;
        this.list = this.get();

    }
// a method , which allows me to retrieve a values array  or by default , to create one.
    get () {
        if(!localStorage.getItem(this.name)){
            localStorage.setItem(this.name, '[]')
        }
        return JSON.parse(localStorage.getItem(this.name))
    }

    // a method to add a values to the array
    set (value) {

    this.list.push(value)
    localStorage.setItem(this.name, JSON.stringify(this.list))
    }

    // A method for removing  a value from an array
    remove(value) {
        const index = this.list.indexOf(value)
        this.list.splice(index,1)
    }

    // a method to clear all the contents of an array
    clear () {
        localStorage.removeItem(this.name)
    }
}