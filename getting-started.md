---
layout: page
title: Tạo theme mới từ theme core
---

Để làm một theme WordPress mới theo chuẩn của team, tối ưu nhất là sử dụng theme **drcore** trên _bitbucket_ của team. Các bước để khởi tạo một theme mới như sau:

## Các bước để tạo một theme mới

1. Download hoặc clone theme **drcore** trên Bitbucket về.
1. Tạo thư mục cho theme mới trong folder `themes` của wordpress.
1. Copy toàn bộ file trong theme **drcore** sang theme mới.
1. Click đúp vào file `npm-links.bat` để link các module cần thiết của nodejs vào theme.
1. Sửa file `package.json` như sau:
    - Sửa `name` thành tên folder của theme mới
    - Sửa `pkgname` thành tên của theme.
    - Sửa `prefix` theo format:
        - Sửa `text` thành textdomain của theme mới
        - Sửa `func` thành function prefix của theme mới
        - Sửa `class` thành class prefix của theme mới
        - Sửa `widget` thành widget prefix của theme mới.
1. Mở **cmd** ở thư mục của theme mới và chạy lệnh `grunt buildstart`.

## Ví dụ minh hoạ

Ví dụ theme mới cần tạo có tên là **Clean Pro**, tên thư mục theme sẽ là **clean-pro**. Khi đó file `package.json` sẽ có các dòng sau:

```
{
  "name": "clean-pro",
  "version": "1.0.0",
  "prefix": {
    "text": "clean-pro",
    "func": "clean_pro_",
    "class": "Clean_Pro_",
    "widget": "Clean Pro - "
  },
  "pkgname": "Clean Pro",
  "date": "20170801",
  "repository": {
    "type": "git",
    "url": "https://daoanh250788@bitbucket.org/themealien/clean-pro.git"
  },
  "devDependencies": {
    "grunt": "~0.4.5",
    "grunt-autoprefixer": "~0.8.2",
    "grunt-contrib-sass": "~0.11.4",
    "grunt-contrib-watch": "~0.6.1",
    "grunt-text-replace": "^0.3.12"
  },
  "dependencies": {
    "sass": "^1.10.2"
  }
}
```
