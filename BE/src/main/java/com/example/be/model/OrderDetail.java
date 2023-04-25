package com.example.be.model;

import javax.persistence.*;

@Entity
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_detail_id")
    private Long orderDerailId;
    private Long amount;
    @ManyToOne
    @JoinColumn(name = "product_id" , referencedColumnName = "product_id")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "order_id" , referencedColumnName = "order_id")
    private Orders orders;

    public OrderDetail() {
    }

    public OrderDetail(Long orderDerailId, Long amount, Product product, Orders orders) {
        this.orderDerailId = orderDerailId;
        this.amount = amount;
        this.product = product;
        this.orders = orders;
    }

    public Long getOrderDerailId() {
        return orderDerailId;
    }

    public void setOrderDerailId(Long orderDerailId) {
        this.orderDerailId = orderDerailId;
    }

    public Long getAmount() {
        return amount;
    }

    public void setAmount(Long amount) {
        this.amount = amount;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Orders getOrders() {
        return orders;
    }

    public void setOrders(Orders orders) {
        this.orders = orders;
    }

}
