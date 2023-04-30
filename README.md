# พัฒนาโปรเจค KMITL Kin Duay Kan

![Cover](frontend/src/images/banner.png)

โปรเจคนี้พัฒนาส่งวิชา Web Application and Software Development

## ผู้พัฒนา

```
64010009 กร โรจน์รัตนปัญญา
64010232 ณัฐฌา สารมะโน
64010312 ธนทัต จงกิตติสกุล
64010359 ธัญชนก จรุงพัฒนานนท์
64010451 บดินทร์ภัทร์ ราชัย
```

## File Structure คร่าว ๆ

```
.#
 |- /backend (โปรเจค ASP.NET Core MVC)
 |  |- /Controllers
 |  |- /Models
 |  |- /Services
 |  \- Program.cs
 |
 \- /frontend (โปรเจค React.js) 
    |- /public
    \- /src
       |- /components (React Components)
       |- /images
       |- /routes (React Router DOM Routes)
       |  |- /authentication (สำหรับหน้า Login)
       |  \- /main (สำหรับหน้าหลัก)
       |
       \- index.js
```

## การ Setup Project

### `git clone git@github.com:kornyellow/kmitl-kin-duay-kan.git`

### `cd ./kmitl-kin-duay-kan`

### `cd ./frontend`

### `npm install`

เมื่อ Clone โปรเจคครั้งแรก ให้ทำการติดตั้ง Package Node โดยใช้คำสั่งด้านบนก่อนเสมอ ไม่งั้นจะเริ่มทำงานไม่ได้

### `cd ../`

### `npm start --prefix ./frontend`

เริ่มการทำงาน Frontend

### `dotnet run --project ./backend`

เริ่มการทำงาน Backend

### User

`GET /api/user/sort` ดึงข้อมูลผู้ใช้ทั้งหมดโดยเรียงจากคะแนนที่ได้รับ

`POST /api/user/[token]` ดึงข้อมูลผู้ใช้จาก `[token]`<br>
`POST /api/user/edit` แก้ไขข้อมูลผู้ใช้<br>
`POST /api/user/signup` สมัครผู้ใช้<br>
`POST /api/user/signin` เข้าสู่ระบบผู้ใช้<br>
`POST /api/user/signout` ออกจากระบบผู้ใช้<br>

### Location

`GET /api/location` ดึงร้านค้าทั้งหมด<br>

### Order

`GET /api/order` ดึงออเดอร์ที่กำลังดำเนินการอยู่ทั้งหมด<br>
`GET /api/order/all` ดึงออเดอร์ทั้งหมด<br>
`GET /api/order/complete/[username]` ดึงออเดอร์ที่เสร็จแล้วของผู้ใช้ `[username]` ทั้งหมด<br>

`POST /api/order/create` สร้างออเดอร์ใหม่<br>
`POST /api/order/complete` ปรับสถานะออเดอร์ให้เป็น เสร็จสิ้น<br>

### OrderRecipient

`GET /api/orderRecipient/[id]` ดึงออเดอร์การฝากจากออเดอร์หลักของรหัส `[id]` ทั้งหมด<br>
`GET /api/orderRecipient/complete/[username]` ดึงออเดอร์การฝากจากออเดอร์หลักของผู้ใช้ `[username]`
ที่เสร็จแล้วทั้งหมด<br>

`POST /api/orderRecipient/create` สร้างออเดอร์การฝากใหม่<br>