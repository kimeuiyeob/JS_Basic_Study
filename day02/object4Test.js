function Animal(name, size, color, food) {
    this.name = name;
    this.size = size;
    this.color = color;
    this.food = food;
    this.intro = function () {

        with (console) {
            log(this.name);
            log(this.size);
            log(this.color);
            log(this.food);
        }
    }
}

lion = new Animal ("사자","300KG","노랭이","고기");
tiger = new Animal ("호랭이","400KG","노랭이","고기");

lion.intro();
tiger.intro();
console.log(lion.name);