import "./searchbar.css";
/**
 * Searchbar component for allowing users to input text in search
 * @component
 */
export default function Searchbar() {
  return (
    <div className="search">
      <input type="text" placeholder="Search..." />
    </div>
  );
}
