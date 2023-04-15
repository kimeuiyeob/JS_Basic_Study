var animal = new Object();

animal.kind = '어류';
animal.feed = '지렁이';
animal.color = '파란색';
animal.size = '20cm';
animal.taste = '감칠맛';
animal.name = '고등어';

console.log(animal);

animal.swim = function() {
    console.log("첨벙첨벙");
}
animal.jump = function () {
    console.log("쩌어엄프으으");
}

animal.jump();