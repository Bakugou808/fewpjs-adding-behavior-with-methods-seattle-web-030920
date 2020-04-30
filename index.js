class Cat {
    constructor(name, sex){
        this.name = name, 
        this.sex = sex
    }
    speak(){
        return `${this.name} says meow!`
    }
}

class Dog {
    constructor(name, sex){
        this.name = name, 
        this.sex = sex
    }
    speak(){
        return `${this.name} says woof!`
    }
}

class Bird {
    constructor(name, sex){
        this.name = name, 
        this.sex = sex
    }
    speak(){
        debugger
        switch (true){
            case this.sex === "male":
                debugger
                return `It's me! ${this.name}, the parrot!`
                break 
            case this.sex === "female":
                return `${this.name} says squawk!`
                break 
        }
    }
}