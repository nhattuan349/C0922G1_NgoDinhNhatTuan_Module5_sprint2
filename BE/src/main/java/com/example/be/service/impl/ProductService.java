package com.example.be.service.impl;

import com.example.be.dto.IProductDto;
import com.example.be.repository.IProductRepository;
import com.example.be.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService {

    @Autowired
    private IProductRepository productRepository;

    @Override
    public Page<IProductDto> findAllProductDto(String keySearch1, Pageable pageable) {
        return productRepository.findAllProductDto(keySearch1, pageable);
    }
}
