package com.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.web.modal.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
