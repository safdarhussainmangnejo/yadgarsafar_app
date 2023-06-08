import axios from 'axios';
import { useState } from 'react';
import { Navigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
// utils
import fakeRequest from '../utils/fakeRequest';
import { verify, sign } from '../utils/jwt';
//
import mock from './mock';

// ----------------------------------------------------------------------

const JWT_SECRET = 'minimal-secret-key';
const JWT_EXPIRES_IN = '5 days';

// const users = [
//   {
//     id: '8864c717-587d-472a-929a-8e5f298024da-0',
//     displayName: 'Jaydon Frankie',
//     email: 'demo@minimals.cc',
//     password: 'demo1234',
//     photoURL: '/static/mock-images/avatars/avatar_default.jpg',
//     phoneNumber: '+40 777666555',
//     country: 'United States',
//     address: '90210 Broadway Blvd',
//     state: 'California',
//     city: 'San Francisco',
//     zipCode: '94116',
//     about: 'Praesent turpis. Phasellus viverra nulla ut metus varius laoreet. Phasellus tempus.',
//     role: 'admin',
//     isPublic: true
//   }
// ];

const searchAgencybyId = (userLocalEmail) => {
  let agency;
  fetch(`http://localhost:8080/searchAgencybyEmail/${userLocalEmail}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data) {
        console.log('User Not found----------');
      } else {
        agency = data;
       setTimeout( localStorage.setItem('agency', JSON.stringify(data)), 1000);
        console.log('User in Login--------: ', data);
      }
    });
  return agency;
};

const agencyLocalStorage = JSON.parse(localStorage.getItem("agency"));
const agencyLogin = JSON.parse(localStorage.getItem("user"));
const users = [
  {
    id: agencyLocalStorage?._id,
    displayName: agencyLocalStorage?.companyName,
    companyname: agencyLogin?.companyname,
    email: agencyLogin?.email,
    password: agencyLogin?.password,
    photoURL: agencyLocalStorage?.companyImage,
    phoneNumber: agencyLocalStorage?.companyNumber,
    country: 'Pakistan',
    address: agencyLocalStorage?.companyCity,
    state: agencyLocalStorage?.companyProvince,
    city: agencyLocalStorage?.companyCity,
    zipCode: '94116',
    about: agencyLocalStorage?.companyDescription,
    role: agencyLogin?.role,
    isPublic: true
  }
];

// ----------------------------------------------------------------------
mock.onPost('/api/account/login').reply(async (config) => {
  try {
    
    await fakeRequest(1000);
    const { email, password } = JSON.parse(config.data);
    console.log("Config Data: ", config.data);

    const user  =  await axios.post("http://localhost:8080/agency/directlogin", JSON.parse(config.data))
     console.log("Received User: ", user);
     console.log("Received User.Data.id: ", user.data._id);
     const matchPassword = user.data.password;
     console.log("Received User.password: ", matchPassword);
    if (!user) {
      return [400, { message: 'There is no user corresponding to the email address.' }];
    }

    if (matchPassword !== password) {
      return [400, { message: 'Wrong password' }];
    }

    localStorage.setItem('user', JSON.stringify(user.data));
    const userLocalEmail = email;
    const agency  =  await axios.get(`http://localhost:8080/searchAgencybyEmail/${userLocalEmail}`);
    console.log("agency.data: ",agency.data );
    localStorage.setItem('agency', JSON.stringify(agency.data));
    const accessToken = sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN
    });

    return [200, { accessToken, user, agency }];
  } catch (error) {
    console.error(error);
    return [500, { message: 'Internal server error' }];
  }
});

// ----------------------------------------------------------------------

mock.onPost('/api/account/register').reply(async (config) => {
  try {
    await fakeRequest(1000);

    const { email, password, firstName, lastName } = JSON.parse(config.data);
    let user = users.find((_user) => _user.email === email);

    if (user) {
      return [400, { message: 'There already exists an account with the given email address.' }];
    }

    user = {
      id: uuidv4(),
      displayName: `${firstName} ${lastName}`,
      email,
      password,
      photoURL: null,
      phoneNumber: null,
      country: null,
      address: null,
      state: null,
      city: null,
      zipCode: null,
      about: null,
      role: 'user',
      isPublic: true
    };

    const accessToken = sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN
    });

    return [200, { accessToken, user }];
  } catch (error) {
    console.error(error);
    return [500, { message: 'Internal server error' }];
  }
});

// ----------------------------------------------------------------------

mock.onGet('/api/account/my-account').reply((config) => {
  try {
    const { Authorization } = config.headers;

    if (!Authorization) {
      return [401, { message: 'Authorization token missing' }];
    }

    const accessToken = Authorization.split(' ')[1];
    const data = verify(accessToken, JWT_SECRET);
    const userId = typeof data === 'object' ? data?.userId : '';
    const user = users.find((_user) => _user.id === userId);

    if (!user) {
      return [401, { message: 'Invalid authorization token' }];
    }

    return [200, { user }];
  } catch (error) {
    console.error(error);
    return [500, { message: 'Internal server error' }];
  }
});
