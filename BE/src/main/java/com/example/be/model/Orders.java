package com.example.be.model;

import javax.persistence.*;

@Entity
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Long orderId;
    private String orderCode;
    private String orderDate;
    private Boolean orderFlagDelete;
    private String deliveryStatus;

    @ManyToOne
    @JoinColumn(name = "account_id",referencedColumnName = "account_id")
    private Account account;

    public Orders() {
    }

    public Orders(Long orderId, String orderCode, String orderDate, Boolean orderFlagDelete, String deliveryStatus, Account account) {
        this.orderId = orderId;
        this.orderCode = orderCode;
        this.orderDate = orderDate;
        this.orderFlagDelete = orderFlagDelete;
        this.deliveryStatus = deliveryStatus;
        this.account = account;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public String getOrderCode() {
        return orderCode;
    }

    public void setOrderCode(String orderCode) {
        this.orderCode = orderCode;
    }

    public String getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(String orderDate) {
        this.orderDate = orderDate;
    }

    public Boolean getOrderFlagDelete() {
        return orderFlagDelete;
    }

    public void setOrderFlagDelete(Boolean orderFlagDelete) {
        this.orderFlagDelete = orderFlagDelete;
    }

    public String getDeliveryStatus() {
        return deliveryStatus;
    }

    public void setDeliveryStatus(String deliveryStatus) {
        this.deliveryStatus = deliveryStatus;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

}
