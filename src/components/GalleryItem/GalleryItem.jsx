import './GalleryItem.css'
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

    return (
        <Card border="dark">
            <Card.Img variant="top" src={photo.path} className="image"/>
            <Card.Body>
                <Button
                    variant="dark"
                    onClick={handleLove}
                    block
                >Love It!</Button>
                <Card.Text>{likeText()}</Card.Text>
            </Card.Body>

        </Card>
    )
}

export default GalleryItem