import { DownOutlined } from "@ant-design/icons";

function HeaderTiga(props) {
  return (
    <>
      <li className="flex items-center">
        {props.title}
        <DownOutlined className="text-xs p-1" />
      </li>
    </>
  );
}

export default HeaderTiga;
