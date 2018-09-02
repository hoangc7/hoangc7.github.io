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

- [XAMPP](https://www.apachefriends.org/index.html) - Phổ biến
- [WAMP](http://www.wampserver.com/en/) - Ít phổ biến hơn WAMP
- [Uniserver](http://www.uniformserver.com/) - Nhỏ nhẹ hơn 2 cái trên do chỉ include những thứ cần thiết cho lập trình trên local.


## Version Control - Quản lý code

Quản lý phiên bản (mã nguồn) là hệ thống lưu trữ các thay đổi của files theo thời gian, giúp cho việc lưu trữ (backup) code, kiểm soát lỗi dễ dàng hơn, phục vụ cho team work tốt hơn.

Hiện tại team đang sử dụng [Bitbucket](https://bitbucket.org/product) để quản lý code. Bitbacket là một hệ thống sử dụng Git để quản lý code cũng tương tự như Github, tuy nhiên hỗ trợ private reposity free :)

Để dễ dàng cho việc sử dụng, chúng ta sẽ sử dụng [SourceTree](https://www.sourcetreeapp.com/) thay cho việc dùng command lines. Trong quá trình cài đặt, SourceTree sẽ tự động cài git Git. Tuy nhiên nếu ai muốn sử dụng cả Git Bash thì có thể cài riêng Git vào máy.

Quy trình cơ bản của một lần push code là:

1. Add files
1. Commit
1. Pull code (nếu có)
1. Push

Lưu ý, nên chia mỗi thay đổi thành 1 lần commit cụ thể để tiện cho việc debug về sau này. Viết commit nên viết cụ thể, không nên viết chung chung là "Sửa file", "Fix lỗi", "Fix CSS", ... Nên viết cụ thể là làm gì, thay đổi gì. Việc viết chung chung như vậy sẽ gây khó khăn cho các thành viên trong team nếu xảy ra lỗi.


## Editor & IDE

- IDE: [PHPStorm](https://www.jetbrains.com/phpstorm/) - Hiện tại PHPStorm có lẽ là IDE duy nhất hỗ trợ WordPress mặc định. Sau khi cài đặt, có thể làm theo tài liệu này để config support cho WordPress.

https://confluence.jetbrains.com/display/PhpStorm/WordPress+Development+using+PhpStorm

- Editors: [Sublime Text](https://www.sublimetext.com/3) - Rất nhanh và nhẹ. Sau khi cài đặt ST, nên cài thêm các plugin sau để hỗ trợ code WordPress nhanh hơn.
    - Package Control
    - DocBlockr
    - WordPress
    - Alignment
    - SublimeCodeIntel
    - Sass
