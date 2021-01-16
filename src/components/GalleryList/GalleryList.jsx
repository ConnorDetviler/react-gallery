import GalleryItem from '../GalleryItem/GalleryItem.jsx'
import './GalleryList.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function GalleryList ({photoList}) {
    return (
        <Container>
            <Row>
                {photoList.map((photo) => (
                    <GalleryItem
                        key={photo.id}
                        photo={photo}
                    />
                ))}
            </Row>
        </Container>
    )
}

export default GalleryList