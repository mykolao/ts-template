import { Hello } from 'components';
import './index.scss';

const hello = new Hello('Hello Typescript ❤️');
document.querySelector('.container')?.appendChild(hello.element);
