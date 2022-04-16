import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <div className="py-20 bg-sky-300">
        <div className="container mx-auto md:px-20">
          <div className="text-2xl font-bold">
            Đặt lịch hẹn với bác sĩ dễ dàng
          </div>
          <div className="text-lg">
            Giúp bạn đơn giản hóa việc tìm kiếm bác sĩ và dịch vụ y tế phù hợp
            với nhu cầu sức khoẻ, dù ở bất kỳ đâu.
          </div>
        </div>
      </div>
      <div className="flex justify-center" style={{ marginTop: -32 }}>
        <input
          type="text"
          placeholder="Nhập tên chuyên khoa hoặc bác sĩ cần tìm ..."
          className="bg-white px-6 py-5 drop-shadow-lg rounded-md w-3/5"
        />
      </div>
      <div className="py-20">
        <div className="container mx-auto md:px-20">
          <div className="text-2xl font-bold text-center">
            Tìm bác sĩ và bệnh viện theo chuyên khoa
          </div>
          <div className="mt-10 grid grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Link
                to={"/chuyen-khoa/da-khoa"}
                className="p-3 grid justify-items-center bg-white drop-shadow rounded-md"
                key={i}
              >
                <img
                  src="/assets/img/da-khoa.png"
                  alt=""
                  style={{
                    height: 80,
                  }}
                />
                <div className="mt-2 font-bold">Đa Khoa</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
