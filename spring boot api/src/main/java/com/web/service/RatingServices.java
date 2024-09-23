package com.web.service;

import java.util.List;

import com.web.exception.ProductException;
import com.web.modal.Rating;
import com.web.modal.User;
import com.web.request.RatingRequest;

public interface RatingServices {
	
	public Rating createRating(RatingRequest req,User user) throws ProductException;
	
	public List<Rating> getProductsRating(Long productId);

}
