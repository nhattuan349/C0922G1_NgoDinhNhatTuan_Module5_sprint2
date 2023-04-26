package com.example.be.service;

import com.example.be.dto.IProductDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

public interface IProductService {
    Page<IProductDto> findAllProductDto(@Param("keySearch1") String keySearch1, Pageable pageable);
}
