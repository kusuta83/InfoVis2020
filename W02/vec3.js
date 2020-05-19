class Vec3 {
    //constructor
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    // Add method
    add = function (v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }

    // Sum method
    sum = function () {
        return this.x + this.y + this.z;
    }

    min = function (v) {
        const m = this.x = this.x < this.y ? this.x : this.y;
        return m < this. z ? m : this.z;
    }

    mid = function (v) {

    }

    max = function (v) {
        
    }
}
