import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";

export default function DoctorPage() {
  const [date, setDate] = useState(null);
  const [slot, setSlot] = useState(null);

  return (
    <div className="container mx-auto md:px-20">
      <div className="flex flex-row gap-6">
        <div className="flex-1">
          <div className="p-6 mb-6 border flex flex-row rounded-lg bg-white">
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
          <div className="p-6 border rounded-lg bg-white">
            <div className="mb-3 font-bold">Thông tin bác sĩ</div>
            <div>
              Ths.BS Nguyễn Chí Thành là Bác sĩ chuyên khoa Nội Tổng hợp - Nội
              Tiêu hóa - Nguyên Phó trưởng khoa Nội tổng hợp Bệnh viện Thống
              Nhất. Với hơn 20 năm kinh nghiệm trong khám và điều trị các bệnh
              lý về Nội Khoa và các bệnh lý về chuyên khoa Nội Tiêu Hóa.
            </div>
          </div>
        </div>
        <div className="p-6 border rounded-lg w-72 bg-white">
          <div className="mb-3 font-bold">Chọn ngày giờ khám</div>
          <div className="mb-6">
            <DatePicker
              selected={date}
              minDate={new Date()}
              onChange={(newDate) => setDate(newDate)}
              dateFormat="dd-MM-yyyy"
              className="border rounded w-full px-4 py-2"
            />
          </div>
          {date != null && (
            <>
              <div className="mb-6">
                <div className="mb-1">Sáng</div>
                <div className="grid grid-cols-4 gap-1">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <button
                      className={`rounded text-center ${
                        slot == i ? "bg-sky-400" : "bg-slate-200"
                      }`}
                      onClick={() => setSlot(i)}
                    >
                      08:00
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
          <Link
            to={"/xac-nhan"}
            className={`block w-full p-1 font-semibold text-lg text-white rounded text-center ${
              slot != null ? "bg-sky-400" : "bg-slate-300"
            }`}
          >
            Đặt lịch hẹn
          </Link>
        </div>
      </div>
    </div>
  );
}
