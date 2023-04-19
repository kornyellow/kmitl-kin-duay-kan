import React, {Component} from "react";

class BannerCarousel extends Component {
	render() {
		return <div className="banner-carousel">
			<div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<div className="img-container">
							<img
								src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
								className="img-fluid" alt="Carousel banner"/>
							<div className="img-caption-container">
								<div className="img-caption w-100">
									<h2 className="fs-4 fw-semibold">
										<div className="text-center">
											<span className="fs-1 me-2 fw-bold">WEB</span>APPLICATION
										</div>
										<div className="text-center">
											DEVELOPMENT<span className="fs-1 ms-2 fw-bold">PROJECT</span>
										</div>
									</h2>
									<div className="text-center mt-4">
										<a href="/" className="btn btn-warning fs-5">Click here</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>;
	}
}

export default BannerCarousel;