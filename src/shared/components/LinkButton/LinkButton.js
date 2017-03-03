import React, { PureComponent, PropTypes } from 'react';
import classnames from 'classnames';
import '../Button/Button.css';

class ButtonLink extends PureComponent {
    render() {
        const { link, title, target, className, animation, icon } = this.props;

        const buttonClass = classnames({
            button: true,
            [`${className}`]: className,
            [`animation-${animation}`]: animation,
        });

        return (
            <a
                className={ buttonClass }
                href={ link }
                target={ target || '_self' }>
                { icon }
                { title }
            </a>
        );
    }
}

ButtonLink.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string,
    target: PropTypes.string,
    className: PropTypes.string,
    animation: PropTypes.string,
    icon: PropTypes.object,
};

module.exports = ButtonLink;
