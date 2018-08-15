---
layout: post
title: Đặt tên theo chuẩn
category: standards
---

Mục đích của bài viết này là để tạo ra 1 chuẩn chung cho cách đặt tên file, function, class và CSS class trong quá trình làm theme.

## Lợi ích của việc đặt tên theo chuẩn

Việc đặt tên theo chuẩn cũng giống như việc tuân theo coding standards, sẽ giúp code chuyên nghiệp hơn, trình độ code sẽ tiến bộ nhanh hơn, dễ dàng debug hơn, tối ưu code hơn, hiểu sâu về code của mình và người khác hơn, vân vân và mây mây... Tuy nhiên, điều quan trọng nhất là các thành viên trong team sẽ dễ dàng làm việc với nhau hơn. Các thành viên trong team khi tham gia vào cùng một theme có thể dễ dàng hỗ trợ nhau.

## Những yêu cầu đầu tiên

Trước khi đi vào chi tiết, mọi người cần nắm vững các tiêu chuẩn cơ bản về coding standards mà WordPress yêu cầu. Tất cả có ở trong link này:

[WordPress Coding Standards](https://codex.wordpress.org/WordPress_Coding_Standards)

Có 3 phần chính trong việc code WordPress themes/plugins, gồm PHP, CSS và Javascript. Về cơ bản, WordPress cũng chỉ tuân thủ theo quy tắc chung của từng ngôn ngữ. Tuy nhiên có một vài yêu cầu riêng mà WordPress tự đặt ra, mọi người nên nắm rõ các yêu cầu đó.

> Nói riêng về coding standards, khi sử dụng PHPStorm để code, mọi người có thể import coding standards của WordPress ngay trong IDE này. Khi đó việc viết code theo standards sẽ dễ dàng hơn.

## Hướng dẫn đặt tên

Tiếp theo sẽ là phần hướng dẫn cụ thể về cách đặt tên trong quá trình làm theme. Trước tiên, chúng ta cần thống nhất việc đặt tên này đều theo quy tắc phân chia theo chức năng. 

### 1. Đặt tên folder

Cấu trúc 1 theme của team chúng ta có những folder với tên được quy định như sau:

- **images**: Lưu trữ những ảnh cần dùng trong theme. Thường thì thư mục này chứa rất ít file. Chủ yếu là logo mặc định và có thể là một vài image cho phần settings của theme. 
- **sass*: Chứa file `.scss`, được chia theo thư mục cụ thể. Có thể tạo thêm thư mục con bên trong nếu cần.
- **images**: Lưu trữ những ảnh cần dùng trong theme. Thường thì thư mục này chứa rất ít file. Chủ yếu là logo mặc định và có thể là một vài image cho phần settings của theme.
- **css**: Chứa các thư viện CSS mà theme sẽ dùng. Ví dụ như: boostrap.css, font-awesome.css, animate.css.
- **fonts**: Chứa những web font cần dùng trong theme. Thông thường sẽ có font của font icons và custom fonts nếu theme đang code có dùng font không có trong Google fonts.
- **js**: Chứa những file javascript cần dùng trong theme. File script của theme sẽ tên là **scripts.js**.
- **languages**: Chứa file language template của theme (.POT). Dùng plugin **Loco Translate** để generate ra file `.POT` này. Tên file sẽ là `<textdomain>.pot`. Ví dụ textdomain của theme là `supro` thì tên file sẽ là `supro.pot`.
- **template-parts**: Chứa các file template parts của theme. Nên chia theo folder nếu có nhiều file.
- **templates**: Chứa các file custom page template của theme.
- **inc**: Đây là folder chứa nhiều thứ nhất của theme. Tất cả các file bên trong thư mục này sẽ được load trong file `functions.php`.
    - **backend**: Chứa những file xử lý về backend.
    - **frontend**: Chứa những file xử lý về frontend.
    - **functions**: Chứa những file dùng để định nghĩa ra các function riêng của theme.
    - **libs**: Chứa những thư viện PHP của bên thứ 3. Hiện tại mình chỉ dùng TGMPA.
    - **woocommerce**: với những theme shop thì sẽ có thêm folder này.
    
### 2. Đặt tên file.

Ngoài các file template mặc định của WordPress (tham khảo https://wphierarchy.com/), trong quá trình làm theme thường phải tạo thêm các file riêng, chủ yếu là file PHP. Hầu hết các file đã được tạo sẵn trong theme. Trong trường hợp cần thêm file mới, mọi người nên hỏi ý kiến của project leader.

Cụ thể hơn, việc đặt tên file phải thể hiện được file đó được sử dụng với mục đích gì. Từ đó chúng ta sẽ biết cần đặt file đó trong folder nào.

Ví dụ cần tạo 1 file mới để tuỳ biến cấu trúc của menu. 
- Vì việc này liên quan đến tuỳ biến hiển thị của menu, nên file mới sẽ để trong thư mục **inc/frontend**
- Vì file này dùng để xử lý phần menu, nên đặt tên là **menu.php** để dễ nhận biết chức năng.

### 3. Đặt tên function và PHP Class

**Các quy tắc đặt tên function:**

- Tên mọi function phải có prefix là tên theme. Ví dụ theme là _Supro_ thì prefix cho function phải là `supro_`.
- Tên viết thường và nối nhau bằng ký tự `_`. Ví dụ `supro_enqueue_scripts`.
- Tên function phải thể hiện được chức năng của nó. Do đó tên function nên là một động từ hoặc bắt đầu bằng một động từ. Ví dụ `supro_get_product_thumbnail`.
- Tránh đặt tên function quá dài. Tuy nhiên điều quan trọng hơn là tên function phải thể hiện được chức năng của nó, nên nếu bắt buộc thì có thể để tên function dài.

**Các quy tắc đặt tên PHP class:**

- Cũng giống function, WordPress yêu cầu tất cả các class đều phải có prefix. Điều khác nhau là tên class phải viết hoa chữ cái đầu. Ví dụ tên theme là _Supro_ thì tên class phải có prefix là `Supro_`. 
- Khác với function, tên class phải thể hiện được đối tượng mà nó xử lý. Do đó tên class nên là danh từ. Ví dụ như class cho mega menu của theme _Supro_ sẽ là `Supro_Mega_Menu`.

### 4. Đặt tên biến

Không có quá nhiều quy tắc cho việc đặt tên biến, tuy nhiên cũng nên tuân thủ theo các yêu cầu sau:

- Tên biến phải là một danh từ và đại diện cho giá trị mà nó lưu trữ. Ví dụ để lưu trữ tên của một người thì thên biến sẽ là `$name`.
- Tên biến không được viết hoa và nối với nhau bởi dấu `_`. Ví dụ `$first_name`.


### 5. Đặt tên CSS class

Các quy tắc cơ bản trong việc đặt tên CSS class.


- Tên phải viết thường, nối với nhau bởi dấu `-` (Chi tiết hơn bên dưới).
- Mỗi class phải thể hiện rõ chức năng của nó. Điều này hơi giống với function nhưng khác ở chỗ tên class CSS nên là danh từ.
- Đối với CSS cho shortcodes thì nên thêm prefix giống tên shortcode.

Dạo gần đây quy tắc BEM cho việc đặt tên class CSS đang phát triển và thể hiện nhiều ưu điểm. Cụ thể là trong những bản update gần đây của WooCommerce, plugin này đã dùng quy tắc này để đặt tên cho các element của mình.

Chi tiết về BEM ở link này: [http://getbem.com/naming/](http://getbem.com/naming/)

Đây là một bài viết khá hay và rõ ràng về BEM:

[CSS BEM Naming convention](https://medium.freecodecamp.org/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849)

**Ví dụ**

Ví dụ cụ thể cho một shortcode "Icon Box" dùng để hiển thị một box có icon ở trên, tên box ở giữa và phần content bên dưới cùng.

Cấu trúc HTML của shortcode này sẽ như sau:

```
<div class="supro-icon-box supro-icon-box--small">
    <span class="supro-icon-box__icon"><i class="fa fa-man"></i></span>
    <h3 class="supro-icon-box__title">Human Resources</h3>
    <div class="supro-icon-box__content"></div>
</div>
```

- Tên class của block chính sẽ là `.supro-icon-box`
- Tên của các phần tử con sẽ được nối thêm bằng dấu `__`
- Tên của box khi có style small sẽ được nối bằng dấu `--`.
- Phần còn lại vẫn theo quy tắc chung.

Như vậy khi làm CSS chúng ta không phải viết các CSS selector phức tạp, chỉ cần làm CSS đơn giản:

```
.supro-icon-box {} // Style block

.supro-icon-box__icon {} // Style icon

.supro-icon-box__title {} // Style title

.supro-icon-box__content {} // Style box content

.supro-icon-box--small {} // Style cho box với kích thước small

.supro-icon-box--small .supro-icon-box__icon {} // Style icon của box có kích thước small
```

### 6. Đặt tên shortcode và attribute.

**Việc đặt tên shortcode cần tuân theo các quy tắc sau:**

- Viết thường và nối với nhau bằng dấu `_`.
- Là danh từ và thể hiện rõ chức năng của shortcode.
- Phải có prefix là slug của theme. Prefix này giống với prefix của function.

**Tên attributes của shortcode cần tuân theo các quy tắc sau**:

- Viết thường và nối với nhau bằng dấu `_`.
- Là danh từ và thể hiện rõ chức năng của attribute.

** Danh sách tên các shortcode hay gặp (tên không có prefix)**

```
messenger
posts
post_grid
post_carousel
post_slider
post_masonry
post_tabs
products
product_grid
product_carousel
product_slider
portfolio
portfolio_grid
portfolio_carousel
portfolio_masonry
button
chart
progress_bar
checklist
countdown
divider
faq
icon
icon_box
slider
image_slider
carousel
google_map
team_member
pricing_table
tabs
accordions
testimonials
banner
promotion
cta
```

** Danh sách tên các attribute thường dùng **

```
limit
per_page
columns
rows
style
layout
type
image
image_size
link
text
color
align
position
css
el_class
```
