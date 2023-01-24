import React from "react";

export default class MyButton extends React.Component {

    getMode() {
        return this.props.dark ? 'dark' : 'light';
    }

    getStyle() {
        return ['btn', this.getMode()].join(' ');
    }

    getLabel() {
        return this.props.label || 'Button Label';
    }

    render() {

        const _this = this;

        return (
            <button className={this.getStyle.call(_this)}>{this.getLabel.call(_this)}</button>
        )
    }
}