import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ data }) {
    return (
        <li className={cx('menu-item')}>
            <span className={cx('icon')}>{data.icon}</span>
            <span>{data.title}</span>
        </li>
    );
}

export default MenuItem;
