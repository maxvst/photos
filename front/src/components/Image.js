import React from 'react'
import { connect } from 'react-redux'

// TODO: Объединить ImageList и BaseList единую компоненту.
class Image extends React.Component {
    // TODO: поднять обработку клика по картинке по крайней мере до этого уровня
    handleImageClick(image) {
        console.log ('on image clicked', image);
    }
    
    render() {
        const image = this.props.image;
        return (
            <div>
                <h1> Название: { image.title } </h1>
                <h2> База: { image.base } </h2>
                <img
                    src={`data:image/jpeg;base64,${image.image}`}
                    alt={image.title}
                ></img>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    image: state.image.response
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Image)
