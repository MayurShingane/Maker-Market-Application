package com.web.service;

import com.web.exception.ProductException;
import com.web.modal.Cart;
import com.web.modal.CartItem;
import com.web.modal.User;
import com.web.request.AddItemRequest;

public interface CartService {
	
	public Cart createCart(User user);
	
	public CartItem addCartItem(Long userId,AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);

}
