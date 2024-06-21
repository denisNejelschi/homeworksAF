export default function Lesson07() {
  //типизация строк
  let user: string = "Denis";
  user = "Alex";
  user = "12";
  let importantNumber = 5;
  importantNumber = 89;
  let truth: boolean | "Dima" = true;
  let fruits: string[] = ["apple", "banana", "orange"];
  fruits.push("kiwi"); //добавление в массив
  fruits[0] = "pineapple"; //изменение элемента массива
  //типизация функции
  const showMessage = (): void => {
    console.log("Hello");
    // return "Hello";
  };

  showMessage();

  const arUser = (user: string, age: number): [string, number] => {
    return [user, age];
  };

  console.log(arUser("Denis", 25));

  //типизация объекта через интерфейс

  interface IUser {
    name: string;
    //? показтель необязательного ключа!
    age?: number | string;
    role: string
  }
  const userData: IUser = {
    name: "Denis",
    age: 31,
    role: 'Admin'
  };
  interface IFrontendDev extends IUser{
    isFrontDev: boolean;
  }

  const userData1: IFrontendDev = {
    name: "Sasha",
    age: 31,
    role: 'Admin',
    isFrontDev: false
  };

  const {role, name, age} = userData;
  console.log(role,name,age);

  type Person = {
    name: string
    age: number
  }
type Employe = Person &{role:string};

const driver:Employe = {
    name: 'Dima',
    age:19,
    role: 'driver'
}

  return (
    <>
      <h1>Lesson 07, React on TS</h1>
      <p>{user}</p>
      <p>{importantNumber}</p>
      <p>{truth}</p>
      <p>
        {fruits.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </p>
      <p>User: {userData.name}</p>
      <p>{userData1.isFrontDev}</p>
      <p>Employe
        <li>{driver.name}</li>
        <li>{driver.age}</li>
        <li>{driver.role}</li>
      </p>
    </>
  );
}
