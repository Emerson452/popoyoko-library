export const Range = ( { onChange, ...rest }) => (
    <input 
        type="range"
        onChange={(e) => onChange(e.target.value)}
        {...rest}>
    </input>
)
