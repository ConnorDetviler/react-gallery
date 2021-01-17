import './GalleryItem.css'
import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function GalleryItem ({photo, lovePhoto}) {

    // likeText function singularizes and plurizes depending on number of likes
    const likeText = () => {
        let text = (photo.likes === 1) ? '1 person loves this' : `${photo.likes} people love this`;
        return text;
    }

    const handleLove = () => {
        lovePhoto(photo.id)
    }

    const [descriptionVisible, setDescriptionVisible] = useState(false);

    const handleClick = () => {
        setDescriptionVisible(!descriptionVisible);
    }

    return (
        <Card border="dark" className="card">

            {/* conditional rendering to switch between image and description text */}
            {descriptionVisible ?
                                    <Card.Body onClick={handleClick} className="photo-description-body">
                                        <Card.Text className="photo-description">{photo.description}</Card.Text>
                                    </Card.Body>
                                :
                                    <Card.Img onClick={handleClick} variant="top" src={photo.path} className="image"/>
                                }

            <Card.Body className="lower-card-body">
                <Button
                    className="like-button"
                    variant="dark"
                    onClick={handleLove}
                    block
                >Love It!</Button>
                <Card.Text className="like-text">{likeText()}</Card.Text>
            </Card.Body>

        </Card>
    )
}

export default GalleryItem