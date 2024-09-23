package com.web.service;

import java.util.List;

import com.web.exception.ProductException;
import com.web.modal.Review;
import com.web.modal.User;
import com.web.request.ReviewRequest;

public interface ReviewService {

	public Review createReview(ReviewRequest req,User user) throws ProductException;
	
	public List<Review> getAllReview(Long productId);
	
	
}
