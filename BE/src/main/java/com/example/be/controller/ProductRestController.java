package com.example.be.controller;

import com.example.be.dto.IProductDto;
import com.example.be.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/product")
public class ProductRestController {

    @Autowired
    private IProductService productService;


    @GetMapping("")
    public ResponseEntity<Page<IProductDto>> getAllAndSearchDocument(
            @RequestParam(defaultValue = "", required = false) String keySearch1,
            @PageableDefault(value = 40) Pageable pageable) {
        Page<IProductDto> productDto = productService.findAllProductDto(keySearch1, pageable);
        if (productDto.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(productDto, HttpStatus.OK);
    }

}
