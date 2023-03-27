import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Uczymy się Angulara!';
  description = 'Angular jest super!';
  brand: string = 'Angular';
  message: string = 'Uczymy się ${brand}';
  age: number = 3;
  isAvailable: boolean = true;
  items: string[] = ['Angular', 'React', 'Vue'];
  ages: number[] = [1, 2, 3, 4, 5];
  tablica: any[] = ['Angular', 1, true];
  // type Animal = 'dog' | 'cat' | 'bird';
  // animal: Animal = 'dog';
  // enum Animal { Dog, Cat, Bird };
  // animal: Animal = Animal.Dog;
  // enum Brands { Angular = 1, React = 2, Vue = 3 };
  // brand: Brands = Brands.Angular;
  // function test(): void {
  //   a = 9;
  // }
  // function hello(name:string):string {
  //   return 'Hello ${name}'

  // }
  // hello = function(name:string):string {
  //   return 'Hello ${name}'

  // }

  hello: (name: string) => string = function (name: string): string {
    return 'Hello ${name}';
  }

  // function test(name: string, greeting?: string): string {
  //   if (!greeting) {
  //     greeting = 'Hello';
  //   }
  //   return 'Hello ${name}';
  // }

  // function hello(names:string):string 
  // function hello(names:string[]):string 
  // function hello(names:any,greeting:string):string 

  newItem = 3;
  oldArray = [1, 2];
  newArray = [...this.oldArray, this.newItem];

  url = 'https://path/to/image' +
    '&size=large' +
    '&format=png';

    // class Person extends Animal {
    //   name: string;
    //   age: number;

    //   constructor(name: string, age: number = 1){
    //     this.name = name;
    //     this.age = age;
    //   }

    //   hello(): string {
    //     return 'Hello ${this.name}';
    //   }


}

