const SearchBar = (props) => {
    const {filter, setFilter} = props;

    return (
        <div className="search">
            Search: {' '}
            <input value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
        </div>
    )
}

export default SearchBar;