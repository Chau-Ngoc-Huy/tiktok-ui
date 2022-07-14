import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    icon,
    children,
    onClick,
    disabled,
    primary,
    outline,
    rounded,
    normal,
    small,
    large,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        delete props.onClick;
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        rounded,
        normal,
        small,
        large,
        disabled,
    });
    return (
        <Comp className={classes} {...props} {...passProps}>
            {icon && <span className={cx('icon')}>{icon}</span>}
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
