"use strict";
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
let userId;
userId = 'user01';
userId = 20;
let users;
users = ['user01', 25];
// uso en propiedades de un objeto
let userInfo = {
    id: 'user01',
    phoneNumber: 987626829,
    email: 'user01@gmail.com',
};
const isImage = (media) => media === 'image';
console.log(isImage('video'));
let user01 = {
    id: 'user01',
    name: 'Lorena',
    email: 'user01@gmail.com',
};
// extender un type
let user02 = {
    id: 'user02',
    name: 'Katia',
    phoneNumber: 987626829,
    email: 'user01@gmail.com',
};
