import { DownOutlined } from "@ant-design/icons";

function HeaderTiga(props) {
  return (
    <>
      <li className="flex items-center font-semibold">
        {props.title}
        <DownOutlined className="text-xs p-1 text-green-500" />
      </li>
    </>
  );
}

export default HeaderTiga;
