# API Quiz Master 🎯

Ứng dụng luyện tập trắc nghiệm về Node.js, MongoDB, Express, EJS, Handlebars và RESTful APIs với giao diện hiện đại và đẹp mắt.

## 📋 Tính năng

- ✅ **40 câu hỏi trắc nghiệm** về Node.js và các công nghệ liên quan
- 🎨 **Giao diện hiện đại** với gradient đẹp mắt và animations mượt mà
- 📊 **Thanh tiến trình** theo dõi quá trình làm bài
- 🔄 **Điều hướng linh hoạt** giữa các câu hỏi
- 📈 **Kết quả chi tiết** với biểu đồ tròn và thống kê
- 📝 **Xem lại đáp án** sau khi hoàn thành
- 📱 **Responsive design** hoạt động tốt trên mọi thiết bị
- 🎭 **Hiệu ứng động** và micro-animations

## 🚀 Cách sử dụng

### Phương pháp 1: Mở trực tiếp

1. Mở file `index.html` bằng trình duyệt web (Chrome, Firefox, Edge, Safari...)
2. Nhấn "Bắt đầu làm bài" để bắt đầu

### Phương pháp 2: Sử dụng Live Server (Khuyến nghị)

1. Cài đặt extension **Live Server** trong VS Code
2. Click chuột phải vào file `index.html`
3. Chọn "Open with Live Server"

## 📁 Cấu trúc thư mục

```
quiz-app/
│
├── index.html      # File HTML chính
├── style.css       # File CSS với thiết kế hiện đại
├── script.js       # File JavaScript chứa logic quiz
└── README.md       # File hướng dẫn này
```

## 🎮 Hướng dẫn làm bài

1. **Màn hình chào mừng**: Đọc thông tin về bài quiz và nhấn "Bắt đầu làm bài"
2. **Làm bài**:
   - Đọc câu hỏi và chọn đáp án
   - Sử dụng nút "Câu tiếp theo" hoặc "Câu trước" để điều hướng
   - Có thể nhấn vào số thứ tự câu hỏi ở phía dưới để nhảy đến câu bất kỳ
3. **Hoàn thành**: Nhấn "Hoàn thành" ở câu hỏi cuối cùng
4. **Xem kết quả**:
   - Xem điểm số và thống kê
   - Nhấn "Xem lại đáp án" để xem chi tiết
   - Nhấn "Làm lại" để bắt đầu lại từ đầu

## 📊 Hệ thống chấm điểm

- Mỗi câu đúng: **2.5 điểm**
- Tổng điểm tối đa: **100 điểm**
- Tổng số câu hỏi: **40 câu**

### Đánh giá kết quả:

- 🎉 **80-100 điểm**: Xuất sắc!
- 👍 **60-79 điểm**: Khá tốt!
- 📚 **40-59 điểm**: Cần cố gắng thêm!
- 💪 **0-39 điểm**: Hãy tiếp tục học!

## 🎨 Thiết kế

- **Font chữ**: Inter (Google Fonts)
- **Màu sắc chủ đạo**: Gradient tím (#667eea → #764ba2)
- **Hiệu ứng**:
  - Floating circles animation
  - Smooth transitions
  - Hover effects
  - Progress animations
  - Score circle animation

## 📝 Nội dung câu hỏi

Bài quiz bao gồm **40 câu hỏi** được chia theo các chủ đề:

### Slot 3 - API & HTTP Fundamentals (10 câu)

- Định nghĩa và khái niệm API
- API Gateway workflow
- HTTP Protocol
- Node.js modules và syntax
- JSON vs XML
- Express framework
- SOAP vs REST
- RESTful APIs

### Slot 4 - MongoDB Basics (5 câu)

- MongoDB connection với async/await
- Express middleware
- Express Generator
- MongoDB data storage
- Embedded documents vs References

### Slot 5 - MongoDB & Mongoose (10 câu)

- BSON format
- MongoDB driver vs Mongoose
- Mongoose Schema
- CRUD operations
- MVC pattern
- Population và performance
- REST methods (PATCH, PUT)
- HTTP status codes

### Slot 7 - EJS Template Engine (10 câu)

- EJS basics và vai trò
- EJS syntax và tags
- Data passing với res.render()
- Loops và control flow
- EJS vs JSX

### Slot 8 - Handlebars (5 câu)

- Handlebars template engine
- Handlebars syntax
- Helpers
- Iteration với {{#each}}
- Partials

## 👥 Người tạo

**Slot 3:**

- PhuongDVH, KhangTN
- ThoHP
- HanNN
- ThuanPVH

**Slot 4:**

- DuyQH

**Slot 5:**

- DienPT, HungPT
- HiepHNP, ThanhNT

**Slot 7:**

- LongNH
- NghiLTT

**Slot 8:**

- KhoaNN, KiemDA

**SDN302 - FPT University**

## 🔧 Tùy chỉnh

### Thêm câu hỏi mới

Mở file `script.js` và thêm câu hỏi vào mảng `quizData`:

```javascript
{
    id: 11,
    question: "Câu hỏi của bạn?",
    options: [
        "Đáp án A",
        "Đáp án B",
        "Đáp án C",
        "Đáp án D"
    ],
    correctAnswer: 0, // Index của đáp án đúng (0-3)
    unit: "Slot 3",
    creator: "Tên của bạn"
}
```

### Thay đổi màu sắc

Mở file `style.css` và chỉnh sửa các biến CSS trong `:root`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  /* ... các màu khác */
}
```

## 📱 Tương thích

- ✅ Chrome (khuyến nghị)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 📄 License

Dự án này được tạo ra cho mục đích học tập tại FPT University.

---

**Chúc bạn làm bài tốt! 🎓**
