import React from 'react';
import axios from 'axios';
import ScrollingImages from './ScrollingImages.js';
import ImagesList from './ImagesList.js';
import Breadcrumbs from './Breadcrumbs.js';
import ProductDetail from './ProductDetail.js';
import '../../dist/styles/app.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            name: '',
            price: '',
            description: '',
            sizes: [],
            currentSize: 'Select Size',
            breadcrumbs: [],
            currentImages: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.getData = this.getData.bind(this);
        this.toggleSizes = this.toggleSizes.bind(this);
        this.onClickSize = this.onClickSize.bind(this);
        this.toggleFabric = this.toggleFabric.bind(this);
        this.toggleCare = this.toggleCare.bind(this);
        this.toggleFeatures = this.toggleFeatures.bind(this);
        this.toggleSocialMedia = this.toggleSocialMedia.bind(this);
        this.firstBox = this.firstBox.bind(this);
        this.secondBox = this.secondBox.bind(this);
        this.thirdBox = this.thirdBox.bind(this);
    }

    // Get a specific product from database
    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get('/api/products')
        .then((response) => {
            console.log('Yay got data', response.data[0])
            this.setState({
                images: response.data[0].images,
                name: response.data[0].name,
                price: response.data[0].price,
                description: response.data[0].description,
                sizes: response.data[0].sizes,
                breadcrumbs: response.data[0].breadcrumbs,
                currentImages: response.data[0].images[0]
            })
            console.log('State has been set', this.state);
        })
        .catch((err) => {
            console.error('Uh oh did not work', err)
        })
    }

    firstBox() {
        this.setState({
            currentImages: this.state.images[0]
        })
    }

    secondBox() {
        this.setState({
            currentImages: this.state.images[1]
        })
    }

    thirdBox() {
        this.setState({
            currentImages: this.state.images[2]
        })
    }

    toggleSizes() {
        document.getElementById('sizes-dropdown').classList.toggle('show');
    }

    onClickSize(event) {
        this.setState({
            currentSize: event.target.innerText
        })
    }

    toggleSocialMedia() {
        document.getElementById('social-media-links').classList.toggle('show-social-media')
    }

    toggleFabric() {
        document.getElementById('fabric-box').classList.toggle('fabric-space')
        document.getElementById('fabric-dropdown').classList.toggle('show-fabric')
    }

    toggleCare() {
        document.getElementById('care-dropdown').classList.toggle('show')
    }

    toggleFeatures() {
        document.getElementById('features-dropdown').classList.toggle('show-features')
    }

    
    render() {
        return (
            <div>
              <Breadcrumbs breadcrumbs={this.state.breadcrumbs}/>
              <div className="container">
                <ScrollingImages currentImages={this.state.currentImages.slice(2)} />
                <ImagesList currentImages={this.state.currentImages.slice(2)} />
                <ProductDetail name={this.state.name} price={this.state.price} description={this.state.description} allColors={this.state.images} currentColor={this.state.currentImages.slice(0, 2)} firstColor={this.state.images.slice(0, 1)} secondColor={this.state.images.slice(1, 2)} thirdColor={this.state.images.slice(2, 3)} sizes={this.state.sizes} toggleSizes={this.toggleSizes} currentSize={this.state.currentSize} onClickSize={this.onClickSize} toggleFabric={this.toggleFabric} toggleCare={this.toggleCare} toggleFeatures={this.toggleFeatures} toggleSocialMedia={this.toggleSocialMedia} firstBox={this.firstBox} secondBox={this.secondBox} thirdBox={this.thirdBox}/>
              </div>
            </div>
        )
    }
}

export default App;