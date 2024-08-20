function Assign() {
    /*
    (구조) 분해 할당
    - 배열 분해 할당
    - 객체 분해 할당
    */

    // 1. 배열 분해 할당
    //     - ES5

    const points = [20,30,40];
    const x1 = points[0];
    const y1 = points[1];
    const z1 = points[2];

    //     - ES6
    const [x2,y2,z2] = points;
    console.log(`x2 = ${x2}, y2 = ${y2}, z2 = ${z2}`);

    // 두번째 값 무시
    const [x3,z3] = points;
    console.log(`x3 = ${x3}, z3 = ${z3}`);



    // 2. 객체 분해 할당
    const car = {
        model : 'SM7',
        color : 'black',
        year : 2024
    }
        // - ES5에서 분해 할당
        const model1 = car.model;
        const color1 = car.color;
        const year1 = car.year;

        // - ES6에서 분해 할당
        //   키 값과 동일한 이름으로 분해 할당 해야 함
        const {model,color,year} = car;
        console.log{`model = ${model}, color = ${color}, year = ${year}`};

}

export default Assign;