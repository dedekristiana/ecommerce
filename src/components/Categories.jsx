function Categories(props) {
  return (
    <div className="flex justify-between mt-4 text-sm">
      <p className="p-1">{props.menu}</p>
      <p className="bg-green-200 p-1 rounded-lg text-green-600">{props.stok}</p>
    </div>
  );
}

export default Categories;
