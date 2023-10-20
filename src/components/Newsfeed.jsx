import React, { Component } from 'react';
import NewsCard from './NewsCard';
import PropTypes from 'prop-types'

export class Newsfeed extends Component {
    static defaultProps = {
        country: 'in',
        pageSize:10,
        category:'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string

    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
        };
    }

    async componentDidMount() {
        const url =
            `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c5aa2d02a2274f0eaab8ebeecb2fe5c8&page=1&pagesize=${this.props.pageSize}`;
        const data = await fetch(url);
        const parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
        });
    }

    previousPage = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c5aa2d02a2274f0eaab8ebeecb2fe5c8&page=${this.state.page - 1
            }&pagesize=${this.props.pageSize}`;
        const data = await fetch(url);
        const parsedData = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
        });
    };

    nextPage = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
            return;
        } else {
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c5aa2d02a2274f0eaab8ebeecb2fe5c8&page=${this.state.page + 1
                }&pagesize=${this.props.pageSize}`;
            const data = await fetch(url);
            const parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
            });
        }
    };

    render() {
        return (
            <div className="container my-3 d-flex flex-column justify-content-between align-items-center" style={{transform:"scale(0.9)"}}>
                <h2 className="text-decoration-underline mb-5">NewsBuddy - Your Friendly News App</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-md-3" key={element.url}>
                                <NewsCard
                                    title={element.title ? element.title : null}
                                    description={element.description ? element.description : null}
                                    imageUrl={element.urlToImage ? element.urlToImage : null}
                                    newsUrl={element.url ? element.url : null}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="container my-4 d-flex justify-content-between">
                    <button
                        disabled={this.state.page <= 1}
                        className="btn btn-dark"
                        onClick={this.previousPage}
                    >
                        &larr; Previous
                    </button>
                    <button
                        className="btn btn-dark"
                        onClick={this.nextPage}
                        disabled={this.state.page >= Math.ceil(this.state.totalResults / 20)}
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        );
    }
}

export default Newsfeed;
