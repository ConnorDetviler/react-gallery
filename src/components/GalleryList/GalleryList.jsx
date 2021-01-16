import GalleryItem from '../GalleryItem/GalleryItem.jsx'
import './GalleryList.css'

function GalleryList ({photoList}) {
    return (
        photoList.map((photo) => (
            <GalleryItem
                key={photo.id}
                photo={photo}
            />
        ))
    )
}

export default GalleryList