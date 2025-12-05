function Button(props) {
  return (
    <button {...props} className="bg-slate-400 py-2 roudend-md text-white">
      {props.children}
    </button>
  );
}

export default Button;
