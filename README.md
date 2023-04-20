# พัฒนาโปรเจค KMITL Kin Duay Kan

โปรเจคนี้พัฒนาส่งวิชา Web Application and Software Development

## การ Setup Project

### `git clone git@github.com:kornyellow/kmitl-kin-duay-kan.git`

### `cd ./kmitl-kin-duay-kan`

## การเริ่มการทำงาน Frontend

### `npm start --prefix ./frontend`

เพื่อเริ่มการทำงานระบบ Frontend

## การเริ่มการทำงาน Backend

### `dotnet run --project ./backend`

เพื่อเริ่มการทำงานระบบ Backend

## Backend Service ต่าง ๆ

### Order

### User

`POST /api/user/[token]` ดึงข้อมูลผู้ใช้จาก `[token]`<br>
`POST /api/user/signup` สมัครผู้ใช้งาน<br>
`POST /api/user/signin` เข้าสู่ระบบผู้ใช้งาน<br>
`POST /api/user/signout` ออกจากระบบผู้ใช้งาน<br>

### Location

`GET /api/location` ดึงร้านค้าทั้งหมด<br>
`GET /api/location/sort` ดึงร้านค้าเรียงตามความโด่งดัง<br>

### Order

`GET /api/order` ดึงออเดอร์ที่ดำเนินการอยู่<br>
`POST /api/order/create` สร้างออเดอร์ใหม่<br>
`POST /api/order/complete` จบออเดอร์<br>
`POST /api/order/cancel` ลบออเดอร์<br>
`POST /api/order/history/[token]` ดูประวัติออเดอร์ของผู้ใช้จาก `[token]`<br>