import './GalleryItem.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function GalleryItem ({photo}) {

    return (
        <Card border="dark">
            <Card.Img variant="top" src={photo.path} className="image"/>
            <Card.Body>
                <Button variant="dark" block>Love It!</Button>
            </Card.Body>

        </Card>
    )
}

export default GalleryItem