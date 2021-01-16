import GalleryItem from '../GalleryItem/GalleryItem.jsx'
import './GalleryList.css'
import Container from 'react-bootstrap/Container'
import CardColumns from 'react-bootstrap/CardColumns'

function GalleryList ({photoList, lovePhoto}) {
    return (
        <Container>
            <CardColumns>
                {photoList.map((photo) => (
                    <GalleryItem
                        key={photo.id}
                        photo={photo}
                        lovePhoto={lovePhoto}
                    />
                ))}
            </CardColumns>
        </Container>
    )
}

export default GalleryList