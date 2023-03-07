import './index.css'

export const SearchInput = ({ onInput, results, value }) => (
    <input 
        type="search"
        onInput={onInput}
        results={results}
        value={value}>
    </input>
)
