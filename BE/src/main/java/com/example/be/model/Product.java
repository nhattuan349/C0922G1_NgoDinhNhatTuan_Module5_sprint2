package com.example.be.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long productId;
    private String productCode;
    private Integer productQuantity;
    private String productName;
    private Integer productPrice;
    private String description;
    private String productImage;
    private Integer productPromotionalPrice;
    private Boolean productFlagDelete;
    private String productStatus;
    private String productConfiguration;
    private String productCPU;
    private String productCartVGA;
    private String productRAM;
    private String productHardDrive;
    private String productScreen;


    @ManyToOne
    @JoinColumn(name = "product_type_id",referencedColumnName = "product_type_id")
    @JsonBackReference
    private ProductType productType;



    public Product() {
    }

    public Product(Long productId, String productCode, Integer productQuantity, String productName, Integer productPrice, String description, String productImage, Integer productPromotionalPrice, Boolean productFlagDelete, String productStatus, String productConfiguration, String productCPU, String productCartVGA, String productRAM, String productHardDrive, String productScreen, ProductType productType) {
        this.productId = productId;
        this.productCode = productCode;
        this.productQuantity = productQuantity;
        this.productName = productName;
        this.productPrice = productPrice;
        this.description = description;
        this.productImage = productImage;
        this.productPromotionalPrice = productPromotionalPrice;
        this.productFlagDelete = productFlagDelete;
        this.productStatus = productStatus;
        this.productConfiguration = productConfiguration;
        this.productCPU = productCPU;
        this.productCartVGA = productCartVGA;
        this.productRAM = productRAM;
        this.productHardDrive = productHardDrive;
        this.productScreen = productScreen;
        this.productType = productType;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public Integer getProductQuantity() {
        return productQuantity;
    }

    public void setProductQuantity(Integer productQuantity) {
        this.productQuantity = productQuantity;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Integer getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(Integer productPrice) {
        this.productPrice = productPrice;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getProductImage() {
        return productImage;
    }

    public void setProductImage(String productImage) {
        this.productImage = productImage;
    }

    public Integer getProductPromotionalPrice() {
        return productPromotionalPrice;
    }

    public void setProductPromotionalPrice(Integer productPromotionalPrice) {
        this.productPromotionalPrice = productPromotionalPrice;
    }

    public Boolean getProductFlagDelete() {
        return productFlagDelete;
    }

    public void setProductFlagDelete(Boolean productFlagDelete) {
        this.productFlagDelete = productFlagDelete;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }

    public String getProductStatus() {
        return productStatus;
    }

    public void setProductStatus(String productStatus) {
        this.productStatus = productStatus;
    }

    public String getProductConfiguration() {
        return productConfiguration;
    }

    public void setProductConfiguration(String productConfiguration) {
        this.productConfiguration = productConfiguration;
    }

    public String getProductCPU() {
        return productCPU;
    }

    public void setProductCPU(String productCPU) {
        this.productCPU = productCPU;
    }

    public String getProductCartVGA() {
        return productCartVGA;
    }

    public void setProductCartVGA(String productCartVGA) {
        this.productCartVGA = productCartVGA;
    }

    public String getProductRAM() {
        return productRAM;
    }

    public void setProductRAM(String productRAM) {
        this.productRAM = productRAM;
    }

    public String getProductHardDrive() {
        return productHardDrive;
    }

    public void setProductHardDrive(String productHardDrive) {
        this.productHardDrive = productHardDrive;
    }

    public String getProductScreen() {
        return productScreen;
    }

    public void setProductScreen(String productScreen) {
        this.productScreen = productScreen;
    }
}
