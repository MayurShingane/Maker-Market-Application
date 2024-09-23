package com.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.web.modal.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
