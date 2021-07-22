/* eslint-disable no-restricted-globals,react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import HeaderSection from '../../components/HeaderSection/index';
import Header from '../../components/Header';


class QaengineClass extends React.PureComponent {
    static propTypes = {
        activeLang: PropTypes.string.isRequired,
    };
    state = {
        isOpen: false,
        isCompleted: false,
    }
    componentDidMount() {
        document.body.scrollTop = 0;
    }
    didCompleted = () => {
        this.setState({ isCompleted: !this.state.isCompleted });
    }
    hanleClick = () => {
        this.setState({ isOpen: !this.state.isOpen });
        document.getElementById('float_form').style.display = 'none';
        document.getElementById('grey').style.display = 'none';
    }

    showForm = () => {
        this.setState({ isOpen: !this.state.isOpen });
        document.getElementById('float_form').style.display = 'initial';
        document.getElementById('grey').style.display = 'initial';
    }

    changeIsOpen = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        const {
            // i18n: { locale },
            res: { width },
        } = this.props;
        return (
            <div className="main_container">
                {/*<Helmet>*/}
                {/*    <title>{HELMET_ROUTE_MAP[locale].courses}</title>*/}
                {/*</Helmet>*/}
                {/*<HeaderSection*/}
                {/*    title="courses.header"*/}
                {/*    backgroundImage={backgroundImageDark}*/}
                {/*/>*/}
                <div className="wrapper">
                    <Header
                        width={width}
                        hanleClick={this.hanleClick}
                        isOpen={this.state.isOpen}
                        showForm={this.showForm}
                        didCompleted={this.didCompleted}
                        isCompleted={this.state.isCompleted}
                    />
                </div>
                <QaengineBlock lang={this.props.activeLang} width={width} />
                <QaengineFooterForm
                    didCompleted={this.didCompleted}
                    isCompleted={this.state.isCompleted}
                    hanleClick={this.hanleClick}
                    changeIsOpen={this.changeIsOpen}
                />
            </div>
        );
    }
}
