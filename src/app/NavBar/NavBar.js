import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Icon from 'stremio-icons/dom';
import styles from './styles';

class NavBar extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextContext.router !== this.context.router;
    }

    render() {
        return (
            <nav className={styles['nav-bar']}>
                <NavLink className={styles['nav-tab']} activeClassName={styles['active']} to={'/'} exact={true} replace={false}>
                    <Icon
                        className={styles['nav-tab-icon']}
                        icon={'ic_board'}
                    />
                    Board
                </NavLink>
                <NavLink className={styles['nav-tab']} activeClassName={styles['active']} to={'/discover'} replace={false}>
                    <Icon
                        className={styles['nav-tab-icon']}
                        icon={'ic_discover'}
                    />
                    Discover
                </NavLink>
                <NavLink className={styles['nav-tab']} activeClassName={styles['active']} to={'/library'} replace={false}>
                    <Icon
                        className={styles['nav-tab-icon']}
                        icon={'ic_library'}
                    />
                    Library
                </NavLink>
            </nav>
        );
    }
}

NavBar.contextTypes = {
    router: PropTypes.object.isRequired
};

export default NavBar;
