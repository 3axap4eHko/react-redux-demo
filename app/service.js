'use strict';

export default (layout) => ({
    showMessage(message) {
        layout.setState({message, showMessage: true})
    }
});