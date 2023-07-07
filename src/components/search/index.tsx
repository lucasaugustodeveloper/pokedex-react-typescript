export type SearchProps = {
  value: string;
  onChange?: () => void
}

const Search = ({ value, onChange }: SearchProps) => (
  <div className="max-w-4xl m-auto my-10">
    <input
      type="text"
      placeholder="Enter name of pokemon"
      className="rounded-md p-2 w-full"
      value={value}
      onChange={onChange}
    />
  </div>
)

export default Search
