function Container({children}) {
    return (
        <div>
            <h3>Ini adalah container</h3>
            {children}
            <footer>
                <p>Ini adalah footer</p>
            </footer>
        </div>
    )
}

export default Container;
