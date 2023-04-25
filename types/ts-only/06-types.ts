/* 
// union types

let userId: string | number;

userId = 'user01';
userId = 20;

let users: (string | number)[];

users = ['user01', 25];

let userInfo: {
  id: string | number;
  phoneNumber: string | number;
  email: string;
} = {
  id: 'user01',
  phoneNumber: 987626829,
  email: 'user01@gmail.com'
} 
*/

// Para no hacerlo tan verboso, podemos usar un Type
type stringOrNumber = string | number;

let userId: stringOrNumber;

userId = 'user01';
userId = 20;

let users: stringOrNumber[];

users = ['user01', 25];

// uso en propiedades de un objeto
let userInfo: {
  id: stringOrNumber;
  phoneNumber: stringOrNumber;
  email: string;
} = {
  id: 'user01',
  phoneNumber: 987626829,
  email: 'user01@gmail.com',
};

// TYPE ALIAS

type TMedia = 'image' | 'video' | 'audio'; // tipo literal (específico)
const isImage = (media: TMedia): boolean => media === 'image';
console.log(isImage('video'));

type UserInfo = {
  id: stringOrNumber;
  name: string;
  email: string;
};

let user01: UserInfo = {
  id: 'user01',
  name: 'Lorena',
  email: 'user01@gmail.com',
};

// extender un type
let user02: UserInfo & { phoneNumber: stringOrNumber } = {
  id: 'user02',
  name: 'Katia',
  phoneNumber: 987626829,
  email: 'user01@gmail.com',
};
