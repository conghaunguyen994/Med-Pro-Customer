import React from "react";
import { Link } from "react-router-dom";

export default function DepartmentPage() {
  return (
    <div>
      <div className="container mx-auto md:px-20">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Nhập tên chuyên khoa hoặc bác sĩ cần tìm ..."
            className="bg-white px-6 py-5 drop-shadow rounded-md w-full"
          />
        </div>
        {[1, 2, 3, 4, 5, 6].map((i) => (
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
            <div>
              <Link to={"/bac-si/da-khoa"}>
                <button className="px-4 py-2 font-semibold text-lg bg-sky-500 text-white rounded">
                  Đặt lịch hẹn
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
