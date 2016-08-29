import React, {Component} from 'react';

class Reviews extends Component {
    render(){
        
        var reviews = this.props.review.guest_reviews.map((review) => {
            return (
                <div>
                    <h4 className="userTitle">{review.title}</h4>
                    <h5 className="userRating">Rating: {review.rating}</h5>
                    <p className="userSummary">{review.summary}</p>
                    <br />
                </div>
            );
        });
        
        var rating = this.props.review.guest_rating;
        return (
            <div id="reviews">
                <h3 id='reviewTitle'>Overall Guest Rating: {rating}</h3>
                <h4 id="recentReviewTitle">Recent Reviews: </h4>
                <br/>
                <div className="userReviews">
                    {reviews}
                </div>
            </div>
        );
    }
}

export default Reviews;