import MyInput from "../component/UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  const sortOptions = [
    {
      value: "title",
      name: "По названию",
    },
    {
      value: "body",
      name: "По описанию",
    },
  ];
  return (
    <form>
      <MyInput
        type="text"
        placeholder="Поиск..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
        style={{ margin: "20px 0 0 0" }}
        defaultValue="Сортировать по:"
        options={sortOptions}
      />
    </form>
  );
};

export default PostFilter;
