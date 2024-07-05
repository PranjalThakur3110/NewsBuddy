import React, { Component } from 'react';
import NewsCard from './NewsCard';
import PropTypes from 'prop-types';

export class Newsfeed extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 10,
        category: 'general',
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };

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
        this.fetchNews();
    }

    fetchNews = async (page = this.state.page) => {
        this.setState({ loading: true });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c5aa2d02a2274f0eaab8ebeecb2fe5c8&page=${page}&pagesize=${this.props.pageSize}`;
        try {
            const response = await fetch(url);
            const parsedData = await response.json();
            this.setState({
                articles: parsedData.articles || [],
                totalResults: parsedData.totalResults || 0,
                loading: false,
                page,
            });
        } catch (error) {
            console.error('Error fetching news:', error);
            this.setState({ loading: false });
        }
    };

    previousPage = () => {
        if (this.state.page > 1) {
            this.fetchNews(this.state.page - 1);
        }
    };

    nextPage = () => {
        if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
            this.fetchNews(this.state.page + 1);
        }
    };

    render() {
        return (
            <div className="container my-3 d-flex flex-column justify-content-between align-items-center" style={{ transform: 'scale(0.9)' }}>
                <h2 className="text-decoration-underline mb-5">NewsBuddy - Your Friendly News App</h2>
                {this.state.loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="row">
                        {this.state.articles.length > 0 ? (
                            this.state.articles.map((element) => (
                                <div className="d-flex col-md-3" key={element.url}>
                                    <NewsCard
                                        title={element.title ? element.title : 'No title'}
                                        description={element.description ? element.description : 'No description'}
                                        imageUrl={element.urlToImage ? element.urlToImage : 'No image'}
                                        newsUrl={element.url}
                                    />
                                </div>
                            ))
                        ) : (
                            <p>No articles found.</p>
                        )}
                    </div>
                )}
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
                        disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)}
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        );
    }
}

export default Newsfeed;
