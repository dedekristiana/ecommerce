function OrderBy(props) {
  const handleOrder = (e) => {
    console.log(e.target.value);
  };
  // const value = [
  //   {
  //     value: Alphabet,
  //   },
  //   {
  //     value: Termurah,
  //   },
  //   {
  //     value: Termahal,
  //   },
  // ];

  return (
    <div className="mt-4">
      <input
        type="radio"
        value="Termurah"
        className="mr-6"
        onChange={(e) => handleOrder(e)}
      />
      <label>{props.radio}</label>
    </div>
  );
}

export default OrderBy;
