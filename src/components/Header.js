const Header = () => {
    return (
        <header className="header">
            <img src={require("../images/troll-face.png")} alt="" className="header--image" />
            <h1 className="header--title">meme generator</h1>
            <h4 className="header--project">react course - project 3</h4>
        </header>
    )
}

export default Header