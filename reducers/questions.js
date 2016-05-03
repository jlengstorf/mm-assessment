import {Map} from 'immutable';

const questionArray = [
  {
    id: 'Q001',
    question: 'How many separate links, buttons, or banners are on your home page?',
    description: 'Not including your navigation bar.',
    answers: [
      {
        id: 'A001',
        label: '0',
        value: 0,
      },
      {
        id: 'A002',
        label: '1',
        value: 2,
      },
      {
        id: 'A003',
        label: '2',
        value: 1,
      },
      {
        id: 'A004',
        label: '3 or more',
        value: 0,
      },
    ],
    resource: {
      name: 'Resource 1 Name',
      link: 'https://google.com/?q=resource1',
    },
  },
  {
    id: 'Q002',
    question: 'What do your buttons look like?',
    answers: [
      {
        id: 'A001',
        label: 'Flat / same color as the rest of the site',
        value: 0,
      },
      {
        id: 'A002',
        label: 'Shaded / different color / bright',
        value: 2,
      },
      {
        id: 'A003',
        label: 'Standard blue links',
        value: 1,
      },
    ],
    resource: {
      name: 'Resource 2 Name',
      link: 'https://google.com/?q=resource2',
    },
  },
  {
    id: 'Q003',
    question: 'Do you collect information (email, phone, etc.) from your site visitors?',
    answers: [
      {
        id: 'A001',
        label: 'Email',
        value: 2,
      },
      {
        id: 'A002',
        label: 'Email, First Name',
        value: 2,
      },
      {
        id: 'A003',
        label: 'Email, First Name, Phone',
        value: 1,
      },
      {
        id: 'A004',
        label: 'Email, First Name, Last Name, Phone, Age',
        value: 0,
      },
      {
        id: 'A005',
        label: 'We don\'t collect information',
        value: 0,
      },
    ],
    resource: {
      name: 'Resource 3 Name',
      link: 'https://google.com/?q=resource3',
    },
  },
  {
    id: 'Q004',
    question: 'Where can people find your contact information?',
    description: 'Your hours of operation, phone number, address, how to get in touch with you, and so on.',
    answers: [
      {
        id: 'A001',
        label: 'It\'s displayed on every page',
        value: 2,
      },
      {
        id: 'A002',
        label: 'Only on the contact page',
        value: 1,
      },
      {
        id: 'A003',
        label: 'Only on the about page',
        value: 1,
      },
      {
        id: 'A004',
        label: 'Spread across multiple pages',
        value: 0,
      },
      {
        id: 'A005',
        label: 'Contact information is not available on the site',
        value: 0,
      },
    ],
    resource: {
      name: 'Resource 4 Name',
      link: 'https://google.com/?q=resource4',
    },
  },
  {
    id: 'Q005',
    question: 'How do people know what they’re supposed to do next on each of your pages?',
    answers: [
      {
        id: 'A001',
        label: 'Each page has a clear, obvious next step',
        value: 2,
      },
      {
        id: 'A002',
        label: 'Each page asks a question',
        value: 1,
      },
      {
        id: 'A003',
        label: 'There are multiple options on each page',
        value: 1,
      },
      {
        id: 'A004',
        label: 'Spread across multiple pages',
        value: 0,
      },
      {
        id: 'A005',
        label: 'Some pages don\'t have a next step',
        value: 0,
      },
    ],
    resource: {
      name: 'Resource 5 Name',
      link: 'https://google.com/?q=resource5',
    },
  },
];

const questions = (state = questionArray, action) => {
  switch (action.type) {
    default:
  }

  return state;
};

export default questions;
