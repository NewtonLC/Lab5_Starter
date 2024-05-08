// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('is (111)111-1111 a phone number', () => {
  expect(isPhoneNumber('(111)111-1111')).toBe(true);
});
test('is (111)111-1111 a phone number', () => {
  expect(isPhoneNumber('111-1111')).toBe(true);
});
test('is 1111111111 a phone number', () => {
  expect(isPhoneNumber('1111111111')).toBe(false);
});
test('is 1111111111 a phone number', () => {
  expect(isPhoneNumber('(111)Hih-hihi')).toBe(false);
});

test('is newtonsayshi@gmail.com an email', () => {
  expect(isEmail('newtonsayshi@gmail.com')).toBe(true);
});
test('is dummy@hi.com an email', () => {
  expect(isEmail('dummy@hi.com')).toBe(true);
});
test('is mymom an email', () => {
  expect(isEmail('mymom')).toBe(false);
});
test('is 123@gmail1.com an email', () => {
  expect(isEmail('123@gmail1.com')).toBe(false);
});

test('is password123456 a strong password', () => {
  expect(isStrongPassword('password123456')).toBe(true);
});
test('is password a strong password', () => {
  expect(isStrongPassword('password')).toBe(true);
});
test('is 12345678 a strong password', () => {
  expect(isStrongPassword('12345678')).toBe(false);
});
test('is hi a strong password', () => {
  expect(isStrongPassword('hi')).toBe(false);
});

test('is 01/01/2000 a valid date', () => {
  expect(isDate('01/01/2000')).toBe(true);
});
test('is 5/7/2024 a valid date', () => {
  expect(isDate('5/7/2024')).toBe(true);
});
test('is New Year\'s a valid date', () => {
  expect(isDate('New Year\'s')).toBe(false);
});
test('is 5/7/24 a valid date', () => {
  expect(isDate('5/7/24')).toBe(false);
});

test('is FFFFFF a hex color', () => {
  expect(isHexColor('FFFFFF')).toBe(true);
});
test('is FFF a hex color', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('is green a hex color', () => {
  expect(isHexColor('green')).toBe(false);
});
test('is 0000000 a hex color', () => {
  expect(isHexColor('0000000')).toBe(false);
});