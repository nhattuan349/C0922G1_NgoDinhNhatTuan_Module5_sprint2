drop database if exists `sprint_2`;
create database `sprint_2`;
use `sprint_2`;

create table role(
id_role  int auto_increment primary key,
name_role  varchar(45) 
);

create table account(
id_account   int auto_increment primary key,
email varchar(45),
encrypt_password varchar(45),
name varchar(255),
username varchar(45),
flag_delete tinyint,
avata varchar(255)
);

create table account_role(
id_account_role  int auto_increment primary key,
id_role int, 
id_account int,
foreign key (id_account) references account(id_account),
foreign key (id_role) references role(id_role)
);

create table `order`(
id_order   int auto_increment primary key,
code_order  varchar(45), 
day_order  VARCHAR(45),
flag_delete bit(1),
id int,
delivery_status varchar(45),
id_account int,
foreign key (id_account) references account(id_account)
);

create table product_type (
id_product_type int auto_increment primary key,
name_product_type varchar(45)
);

create table origin (
id_origin int auto_increment primary key,
name_origin varchar(45)
);

create table product (
id_product int auto_increment primary key,
code varchar(45), 
quantity int,
name_product varchar(45),
price int,
origin varchar(45),
description varchar(45),
image varchar(45),
promotional_price varchar(45),
flag_delete bit(1),
id_product_type int,
id_origin int,
foreign key (id_product_type) references product_type(id_product_type),
foreign key (id_origin) references origin(id_origin)
);

create table order_detail (
id_order_detail int auto_increment primary key,
amount int,
id_product int,
id_order int,
foreign key (id_product) references product(id_product),
foreign key (id_order) references `order`(id_order)
);