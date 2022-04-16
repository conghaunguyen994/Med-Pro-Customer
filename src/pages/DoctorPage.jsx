import React from "react";
import DatePicker from "react-datepicker";

export default function DoctorPage() {
  return (
    <div className="container mx-auto md:px-20">
      <div className="flex flex-row gap-6">
        <div className="flex-1">
          <div className="p-6 mb-6 border flex flex-row rounded-lg">
            <div className="mr-4">
              <img
                src="https://cdn-healthcare.hellohealthgroup.com/doctors/vn/thsbs-nguyen-chi-thanh-phong-kham-da-khoa-quoc-te-golden-healthcare.png"
                alt=""
                style={{
                  height: 160,
                }}
              />
            </div>
            <div className="flex-1">
              <div className="mb-2 text-xl font-bold">
                ThS.BS Nguyễn Chí Thành
              </div>
              <div className="mb-2 text-base font-semibold">Đa Khoa</div>
              <div className="text-lg font-bold text-green-600">
                300.000 VND
              </div>
            </div>
          </div>
          <div className="p-6 border rounded-lg">
            <div className="mb-3 font-bold">Thông tin bác sĩ</div>
            <div>
              Ths.BS Nguyễn Chí Thành là Bác sĩ chuyên khoa Nội Tổng hợp - Nội
              Tiêu hóa - Nguyên Phó trưởng khoa Nội tổng hợp Bệnh viện Thống
              Nhất. Với hơn 20 năm kinh nghiệm trong khám và điều trị các bệnh
              lý về Nội Khoa và các bệnh lý về chuyên khoa Nội Tiêu Hóa.
            </div>
          </div>
        </div>
        <div className="p-6 border rounded-lg w-72">
          <div className="mb-3 font-bold">Chọn giờ khám</div>
          <div className="mb-4 grid grid-cols-4 gap-1">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div className="bg-slate-200 rounded text-center">08:00</div>
            ))}
            <div className="bg-sky-500 text-white rounded text-center">
              08:00
            </div>
          </div>
          <DatePicker />
          <button className="w-full p-1 font-semibold text-lg bg-sky-500 text-white rounded">
            Đặt lịch hẹn
          </button>
        </div>
      </div>
    </div>
  );
}
