function Footer(props) {
  return (
    <div className="flex flex-col text-green-400 gap-5">
      <a href="#">{props.page}</a>
    </div>
  );
}

export default Footer;
