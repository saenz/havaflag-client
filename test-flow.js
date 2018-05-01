// @flow
var jeff : number = 1
var kim : string = "kim"
//var christi : string = jeff + kim

//(jeff + kim) 

function method(): boolean {
  if (Math.random() > 0.5) {
    return true
  }
  else {
    return false
  }
}

function acceptsNull(value: null) {
  /* ... */
}

function acceptsUndefined(value: void) {
  /* ... */
}

acceptsNull(null);      // Works!
//acceptsNull(undefined); // Error!
//acceptsUndefined(null);      // Error!
acceptsUndefined(undefined); // Works!

//var nancy = "foo" + String({})

type Paypal = { id: number, type: 'Paypal' };
type CreditCard = { id: number, type: 'CreditCard' };
type Bank = { id: number, type: 'Bank' };

//type PaymentMethod = Paypal | CreditCard | Bank;

var message: ?string = null;

type Name = string;
type Email = string;

var myName: Name = 'Preethi';
var myEmail: Email = 'iam.preethi.k@gmail.com';

var myPaypal: PaymentMethod = {
  id: 123456,
  name: 'Preethi Paypal',
  limit: 10000,
	jeff: 1
};

type PaymentMethod = {
  id: number,
  name: string,
  limit?: number,
};

var messages: Array<string> = ['hello', 'world', '!'];

var aboutMe: { name: string, age: number } = {
  name: 'Preethi',
  age: 26,
	town: 'cypress'
};

var calculateArea = (radius: number): number => {
  return 3.14 * radius * radius
};
