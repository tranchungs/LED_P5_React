import React, { Component } from 'react';
import '../Css/toast.css';
class Toast extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div id="snackbar"></div>
            </div>
        );
    }
}
export default Toast;
