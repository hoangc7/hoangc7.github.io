---
layout: post
title: Bài 1 - Giới thiệu các tools cần dùng cho lập trình WordPress
category: theming
---

Để bắt đầu cho việc lập trình WordPress (Theme và Plugins), việc cơ bản đầu tiên là chuẩn bị môi trường và cài đặt các Tools cần thiết. Trong bài viết này sẽ giới thiệu những tools cần thiết.


## Enviroment - Môi trường

Hầu hết (gần như toàn bộ) các server cho PHP đều chạy trên nền Linux (Centos, Ubutunto, Debian,...), nhưng do đa số developers dùng Windows nên ở đây sẽ giới thiệu các tool thường dùng để cài đặt môi trường trên Windows.

Nói riêng về PHP, hiện tại PHP đã ra version 7 tập trung về cải thiện hiệu năng và bảo mật. Do PHP thường được chê là performance thấp và bảo mật kém hơn so với những ngôn ngữ khác nên ở version 7, PHP chỉ tập trung vào cải thiện hiệu năng. Tuy nhiên, để đảm bảo khả năng làm việc, WordPress vẫn yêu cầu developers phải để các sản phẩm của mình hỗ trợ PHP 5.3 trở lên.

Hầu hết các hosting không tự động update lên PHP 7 nên khi code, mọi người nên để PHP ở version 5.3.x hoặc 5.4.x để đảm bảo theme của mình không phát sinh lỗi khi khách hàng sử dụng.

Hiện tại có 2 web server phổ biến cho PHP là Apache và Nginx. Apache ra đời trước với cộng đồng lớn hơn nên thường được dùng phổ biến hơn. Do Nginx ra đời sau nên có cộng đồng nhỏ hơn, tuy nhiên do có performance tốt hơn Apache nên có tốc độ phát triển khá nhanh trong những năm gần đây. Có một nhược điểm ở Nginx là không support file .htacess và việc config phức tạp hơn so với Apache nên hiện nay, Apache vẫn là web server phổ biến nhất cho PHP.

Về cơ sở dữ liệu thì phổ biến nhất vẫn là MySQL, ngoài ra có MariaDB ra đời sau có nhiều cải thiện về hiệu năng hơn. Về bản chất, MariaDB là một bản nâng cấp của MySQL nên không có gì khác biệt nhiều về cấu trúc và các câu lệnh. (Cả MySQL và MariaDB đều chung một founder).

Có 2 combo thường gặp cho server chạy PHP là: Apache + MySQL hoặc Nginx + MariaDB. Tìm hiểu thêm ở [WordPress Requirements](https://wordpress.org/about/requirements/)


Để tiện cho việc cài đặt môi trường, mọi người nên dùng các App all in one để cài Web server và Database server nhanh gọn và đơn giản. Các app thông dụng là:

[XAMPP](https://www.apachefriends.org/index.html) - Phổ biến
[WAMP](http://www.wampserver.com/en/) - Ít phổ biến hơn WAMP
[Uniserver](http://www.uniformserver.com/) - Nhỏ nhẹ hơn 2 cái trên do chỉ include những thứ cần thiết cho lập trình trên local.
