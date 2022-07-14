import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <span>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/466c70fb9e094cd8ffad1a3e39155a22~c5_100x100.jpeg?x-expires=1657958400&x-signature=Y2tL7BK4zR3Y7D7hHWLd4%2FCGiWY%3D"
                    alt="huychau"
                ></img>
            </span>
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    huychaupro
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <p className={cx('name')}>Chau Ngoc Huy</p>
            </div>
        </div>
    );
}

export default AccountItem;
