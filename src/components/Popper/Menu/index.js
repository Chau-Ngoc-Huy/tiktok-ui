import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { Wrapper as PopperWrapper } from '../../Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <ul>{renderItems()}</ul>
                    </PopperWrapper>
                </div>
            )}
            interactive={true}
            placement="bottom-end"
            delay={[0, 700]}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
