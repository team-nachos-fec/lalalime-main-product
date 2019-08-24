import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            name: '',
            price: '',
            description: '',
            sizes: [],
            breadcrumbs: []
        }
    }


    render() {
        return (
            <div>
                Rendering the App! Woo
            </div>
        )
    }
}

export default App;