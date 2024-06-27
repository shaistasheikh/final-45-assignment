function create_car(manufacturer: any, model: any, ...options: string[]): { [key: string]: any } {
    let car: { [key: string]: any } = {
        manufacturer: manufacturer,
        model: model,
    };

    options.forEach((option: string) => {  // Explicitly type 'option'
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();  // Corrected syntax
    });

    return car;
}

let my_car = create_car("Toyota", "Corolla", "color:Black", "Sunroof:true");
console.log(my_car);
