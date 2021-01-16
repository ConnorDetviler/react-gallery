import './GalleryItem.css'
import Button from 'react-bootstrap/Button'

function GalleryItem ({photo}) {

    return (
        <div>
            <img src={photo.path} alt="" className="image"/>
            <>
                <Button variant="primary">Love It!</Button>{' '}
            </>
        </div>
    )
}

export default GalleryItem