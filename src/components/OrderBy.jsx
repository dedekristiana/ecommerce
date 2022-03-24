function OrderBy(props) {
  return (
    <div className="mt-4">
      <input type="radio" value="Termurah" className="mr-6" />
      <label>{props.radio}</label>
    </div>
  );
}

export default OrderBy;
