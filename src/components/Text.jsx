function Text({className, color, size, As, children}) {
    return (
        <As className={className} style={{"fontSize": size + "px", "color": color}}>
            {children}
        </As>
    )
}

export default Text;