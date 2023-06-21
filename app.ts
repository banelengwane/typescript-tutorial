let variable = 'string';

variable = 'hi'

let age = ;

// age = 'nine'

let ageWithType: number = 9;

ageWithType = 0

// other types
//strings
let testString: string;
testString = 'banele'
//boolean
let testBool: boolean;
testBool = true;

//union types
let testStringOrNumber: string | number;
testStringOrNumber = 'hello';
testStringOrNumber = 1000;

//arrays
let names = ['john', 'james', 'jane' ];
names.push('tom');

let numbers = [11, 12, 13];
numbers.push(4);

// array with types
let testStringArray : string[];

testStringArray = ['eggs', 'fish']

let testNumberArray : number[];

testNumberArray = [12, 33, 1]

// union types
let testStringOrNumberArray: (string|number)[]
testStringOrNumberArray = [1, 'number', 3]

//objets
let user = {
    username:'banele',
    age: 33,
    isAdmin: false
}

user.username = 'brabrabra'
// user.age = 'nine' ... wont work because age is of type number

// types in objects
let userObj: {
    username: string,
    age: number, 
    isAdmin: boolean
}

// in use:
userObj = {
    username: 'kitty',
    age: 1,
    isAdmin: true
}

// objects with conditional types 
let userObj2: {
    username: string,
    age: number, 
    isAdmin: boolean,
    phone?:string // this is not required
}

//example
userObj2 = {
    username: 'mango',
    age: 4,
    isAdmin: false
}

//example 2
userObj2 = {
    username: 'mango',
    age: 4,
    isAdmin: false,
    phone: '+27723456789'
}

// type ANY
let testANY;

testANY = 12;
testANY = 'me';
testANY = true
testANY = []
testANY = [{}];

let testAnyArray: any[]
testAnyArray = [1, 'two', {}, []]

//Functions

let sayHi = () => {
    console.log("Hi, welcome")
}

let functionReturnString = ():string => {
    return 'abcdefg'
}

let multiple = (num:number)  => {
    return num * 2;
}

let multiple2 = (num:number): number => {
    return num * 2;
}

let multiple3 = (num:number): void => {
    num * 2;
}

let sum = (num1:number, num2:number, another?:number) =>{
    return num1 + num2;
}

sum(2, 3)

let func = (user:{username:string, age:number, phone?:string}) => {
    console.log(user.username);
}

//Aliases
type UserType = {
    username:string,
    age:number,
    phone?:string
}

let betterFunc = (user: UserType) => {
    console.log(user.age);    
}

// prototypes

type myFunc = (a: number, b:string) => void;

let write : myFunc = (num, str) => {
    console.log(num+str);    
}

//with optoions
type UserType2 = {
    username: string,
    age:number,
    phone?:string,
    theme:'dark' | 'light'
};

const userWithTheme : UserType2 = {
    username: 'baas',
    age: 67,
    theme: "dark"
}

//interfaces

interface IUser {
    username:string,
    email:string,
    age:number
}

interface IEmployee extends IUser {
    employeeId:number
}

const emp : IEmployee = {
    username:'tom',
    email: 'tom@jerry.com',
    age:88,
    employeeId:10002
}

const client : IUser = {
    username:'tom',
    email: 'tom@jerry.com',
    age:88
}

// Generics

interface IAuthor{
    id:number,
    username:String
}

interface ICategory {
    id: number, 
    title: string
}

interface IPost{
    id:number;
    title: string;
    desc: string;
    extra: IAuthor[] | ICategory[];
}

interface IPostBetter<T>{
    id:number,
    title: string,
    desc: string,
    extra: T[]
}

const testMe : IPostBetter<String> =  {
    id:1,
    title:'banana',
    desc:'post desc',
    extra: ['1', '2']
}

interface IPostEvenBetter <T extends object> {
    id:number,
    title: string,
    desc: string,
    extra: T[]
}

const testMe2 : IPostEvenBetter<IAuthor> =  {
    id:1,
    title:'banana',
    desc:'post desc',
    extra: [{id: 1, username:'banele'}]
}

