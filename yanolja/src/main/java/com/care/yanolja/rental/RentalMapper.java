package com.care.yanolja.rental;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RentalMapper {
	ArrayList<RentalDTO> rentalSelectProc(String adminId);
}
