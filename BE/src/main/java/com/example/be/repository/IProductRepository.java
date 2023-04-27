package com.example.be.repository;

import com.example.be.dto.IProductDto;
import com.example.be.dto.IProductImage;
import com.example.be.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductRepository extends JpaRepository<Product, Long> {

    @Query(value =
            "SELECT   " +
                    " `product`.product_id as productId, " +
                    " `product`.product_code as productCode, " +
                    " `product`.product_quantity as productQuantity, " +
                    " `product`.product_name as productName, " +
                    " `product`.product_price as productPrice, " +
                    " `product`.description as description, " +
                    " `product`.product_image as productImage, " +
                    " `product`.product_promotional_price as productPromotionalPrice, " +
                    " `product`.product_flag_delete as productFlagDelete , " +
                    " `product`.product_type_id as productTypeId" +
                    " FROM `product` " +
                    " WHERE `product`.product_name LIKE CONCAT('%', :keySearch1, '%')  " +
                    " AND `product`.product_flag_delete = false " +
                    " ORDER BY  `product`.product_id desc",
            countQuery =
                    "SELECT   " +
                            " `product`.product_id as productId, " +
                            " `product`.product_code as productCode, " +
                            " `product`.product_quantity as productQuantity, " +
                            " `product`.product_name as productName, " +
                            " `product`.product_price as productPrice, " +
                            " `product`.description as description, " +
                            " `product`.product_image as productImage, " +
                            " `product`.product_promotional_price as productPromotionalPrice, " +
                            " `product`.product_flag_delete as productFlagDelete , " +
                            " `product`.product_type_id as productTypeId" +
                            " FROM `product` " +
                            " WHERE `product`.product_name LIKE CONCAT('%', :keySearch1, '%')  " +
                            " AND `product`.product_flag_delete = false " +
                            " ORDER BY  `product`.product_id desc",
            nativeQuery = true
    )
    Page<IProductDto> findAllProductDto(@Param("keySearch1") String keySearch1, Pageable pageable);


    @Query(value = "select * from `product` where `product`.product_id =:id",nativeQuery = true)
    Product findProductDetailById(@Param("id") int id);

    @Query(value =
            "select " +
                    "`images`.image_name as imageName, " +
                    "`images`.image as image " +
                    "from `images` " +
                    "where `images`.product_id =:id",nativeQuery = true)
    List<IProductImage> getProductImageList(@Param("id") int id);

}



