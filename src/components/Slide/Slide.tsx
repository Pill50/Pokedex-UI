import { ReactNode, SyntheticEvent, useState } from 'react';
import className from 'classnames/bind';
import styles from './Slide.module.scss';

const cx = className.bind(styles);

type SlideProps = {
    children: ReactNode;
};

function Slide({ children }: SlideProps) {
    return <div>Slide</div>;
}

export default Slide;
