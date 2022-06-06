import memesData from "../memesData"
import { useState } from "react"

const Meme = () => {
    // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg")
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomIndex = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomIndex].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        <main>
            <div className="form">
                <input
                    className="form--input"
                    type="text"
                    placeholder="Top Text"
                />
                <input
                    className="form--input"
                    type="text"
                    placeholder="Bottom Text"
                />
                <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <img src={meme.randomImage} alt="" className="meme--image" />
        </main>
    )
}

export default Meme