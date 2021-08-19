
import React, { Component } from 'react';


class Sports extends Component {
	state = {
		posts: []
    }
   
  

	componentDidMount() {
		fetch('https://newsapi.org/v2/top-headlines?country=ng&category=sports&apiKey=efdf0e6b842148d282051bf3469e564f')
			.then((res) => res.json())
			.then((json) => {
				console.log(json.articles);
				this.setState({
					posts: json.articles
				});
				console.log(this.state);
			});
	}
	render() {
		const postsList = this.state.posts.length ? (
			this.state.posts.map((post) => {
				return (
					<div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 text-xs-center flex-item">
						<div className="card-deck">
							<div className="card bg-success">
								<div className="card-body text-center" key={post.id}>
									<img
										src={post.urlToImage}
										className="img-fluid"
										alt="No_Image_For_This_News_Article"
									/>
									<a href={post.url}> 
										<h5 className="text-white">{post.title}</h5>
                                        </a>
									
                                    <p className="text-white">Description : {post.description}....</p>
                                    
                                    
                                    <a href={post.url}> 
                                    <button className='btn btn-dark'>View More Details</button>
                                    </a>
                                   
								</div>
							</div>
						</div>
					</div>
				);
			})
		) : (
            
            <div>
    
           <h3>Loading Latest Sports News ....</h3> 
           
            </div>
            
		);
		return (
            <div>
            <center>
            <h2>Sports Forum</h2>
            
            </center>
               
                <div className="flex-item">
                {postsList}
                  {/*https://newsapi.org/v2/top-headlines?country=ng&category=sports&apiKey=be1939fe6be743508bdf643a5f4708d0*/} 
                  {/*https://newsapi.org/v2/top-headlines?country=ng&category=health&apiKey=be1939fe6be743508bdf643a5f4708d0*/} 
                  {/*https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=be1939fe6be743508bdf643a5f4708d0*/} 
                  {/*https://newsapi.org/v2/top-headlines?country=ng&category=business&apiKey=be1939fe6be743508bdf643a5f4708d0*/} 
                  {/*https://newsapi.org/v2/top-headlines?country=ng&category=technology&apiKey=be1939fe6be743508bdf643a5f4708d0*/} 
                  {/*https://newsapi.org/v2/top-headlines?country=ng&category=general&apiKey=be1939fe6be743508bdf643a5f4708d0*/} 
                  {/*https://newsapi.org/v2/top-headlines?country=ng&category=science&apiKey=be1939fe6be743508bdf643a5f4708d0*/} 
                  {/*https://newsapi.org/v2/everything?q=buhari&apiKey=be1939fe6be743508bdf643a5f4708d0*/} 
                  {/*https://newsapi.org/v2/everything?q=bokoharam&from=2020-01-04&to=2019-11-04&sortBy=popularity&apiKey=be1939fe6be743508bdf643a5f4708d0*/} 
                </div>
				
			</div>
		);
	}
}
export default Sports;