import { Hello } from 'components';

const hello = new Hello('Hello Typescript ❤️');
document.querySelector('.container')?.appendChild(hello.element);
