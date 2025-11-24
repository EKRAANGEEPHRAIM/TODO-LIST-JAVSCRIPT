'use strict'

// Local storage for tasks

class ArrayStorage {
    constructor(name) {
        this.name = name;
        this.list = this.get();
    }

    // Retrieve the array or create one if missing
    get() {
        if (!localStorage.getItem(this.name)) {
            localStorage.setItem(this.name, '[]');
        }
        return JSON.parse(localStorage.getItem(this.name));
    }

    // Save the internal list into localStorage
    save() {
        localStorage.setItem(this.name, JSON.stringify(this.list));
    }

    // Add a value and save
    set(value) {
        this.list.push(value);
        this.save();
    }

    // Remove a value and save
    remove(value) {
        const index = this.list.indexOf(value);
        if (index !== -1) {
            this.list.splice(index, 1);
            this.save();  // 🔥 FIX : now removal is saved
        }
    }

    // Clear everything
    clear() {
        this.list = []; // 🔥 FIX : reset the array in memory
        this.save();    // or localStorage.removeItem(this.name)
    }
}
