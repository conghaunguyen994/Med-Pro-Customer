import React from "react";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function CustomerFormPage() {
  const MySwal = withReactContent(Swal);

  const handleConfirmClick = () => {
    MySwal.fire({
      icon: "success",
      text: "Đặt lịch hẹn thành công.",
    });
  };

  return (
    <div className="container mx-auto md:px-20">
      <div className="flex flex-row gap-6">
        <div className="flex-1">
          <div className="p-6 border rounded-lg bg-white">
            <div className="mb-2 font-bold text-xl">Nhập thông tin cá nhân</div>
            <div className="mb-8 text-base">
              Những thông tin này dùng để xác nhận lịch hẹn với bác sĩ. Chúng
              tôi sẽ không chia sẽ thông tin cá nhân của bạn với bên thứ 3.
            </div>
            <div className="mb-6 w-full block">
              <label htmlFor="full_name" className="inline-block mb-2">
                Họ Tên
              </label>
              <input
                id="full_name"
                type="text"
                className="block border rounded w-full px-4 py-2"
              />
            </div>
            <div className="mb-6 w-full block">
              <label htmlFor="full_name" className="inline-block mb-2">
                Số Điện Thoại
              </label>
              <input
                id="full_name"
                type="text"
                className="block border rounded w-full px-4 py-2"
              />
            </div>
            <div className="mb-6 w-full block">
              <label htmlFor="full_name" className="inline-block mb-2">
                Email
              </label>
              <input
                id="full_name"
                type="text"
                className="block border rounded w-full px-4 py-2"
              />
            </div>
            <div className="mb-6 w-full block">
              <label htmlFor="full_name" className="inline-block mb-2">
                Số CMND
              </label>
              <input
                id="full_name"
                type="text"
                className="block border rounded w-full px-4 py-2"
              />
            </div>
            <div className="mb-6 w-full block">
              <label htmlFor="full_name" className="inline-block mb-2">
                Số CMND
              </label>
              <select
                id="full_name"
                className="block border rounded w-full p-3"
              >
                <option value="MALE">Nam</option>
                <option value="FEMALE">Nữ</option>
                <option value="UNKNOWN">Không biết</option>
              </select>
            </div>
            <div className="mb-12 w-full block">
              <label htmlFor="full_name" className="inline-block mb-2">
                Ngày Sinh
              </label>
              <DatePicker className="block border rounded w-full px-4 py-2" />
            </div>
            <button
              className="px-6 py-2 font-semibold text-lg text-white rounded text-center bg-sky-400"
              onClick={handleConfirmClick}
            >
              Xác Nhận
            </button>
          </div>
        </div>
        <div className="p-6 border rounded-lg w-80 bg-white">
          <div className="mb-3 font-bold">Thông tin lịch hẹn</div>
          <div className="p-3 rounded border bg-slate-100">
            <div className="mb-2">
              Bác sĩ: <b>ThS.BS Nguyễn Chí Thành</b>
            </div>
            <div className="mb-2">
              Chuyên khoa: <b>Đa Khoa</b>
            </div>
            <div>
              Ngày giờ: <b>08:00 12-02-2022</b>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="p-6 border rounded-lg bg-white text-center">
        <div className="">Đặt Lịch Thành Công</div>
        <div>
          Cảm ơn bạn đã sử dụng hệ thống đặt lịch hẹn của MedPro, vui lòng chờ
          bác sĩ xác nhận.
        </div>
      </div> */}
    </div>
  );
}
