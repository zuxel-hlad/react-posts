const MySelect = ({ options, defaultValue, style, value, onChange }) => {
  const option = options.map((item) => {
      console.log(item)
    return <option key={item.value}>{item.value}</option>;
  });
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={style}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {option}
    </select>
  );
};

export default MySelect;
