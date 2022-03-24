import { ShoppingOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";

function HeaderDua() {
  return (
    <>
      <div className="font-bold text-3xl">
        <h1>
          LOKAL-<span className="text-green-400">IN</span>
        </h1>
      </div>
      <div className="flex items-center">
        <input type="text" className="w-96 h-8 bg-gray-100 rounded-lg p-2" />
        <SearchOutlined className="rotate-90 -ml-6" />
      </div>
      <div className="flex gap-5">
        <UserOutlined className="text-[23px] self-center" />
        <div className="relative self-center">
          <ShoppingOutlined className="text-[25px]" />
          <div className="absolute bg-red-500 -bottom-2 -left-1 text-center text-xs text-white w-4 h-4 rounded-3xl">
            4
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderDua;
