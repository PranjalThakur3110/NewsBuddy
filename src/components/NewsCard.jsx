import React, { Component } from 'react'

export class NewsCard extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div className="card d-flex flex-column justify-content-between" style={{height: "600px",overflow:'hidden'}}>
                <img src={imageUrl ? imageUrl : "https://unsplash.com/s/photos/tech"} className="card-img-top" alt="" />
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read Full</a>
                </div>
            </div>
        )
    }
}

export default NewsCard