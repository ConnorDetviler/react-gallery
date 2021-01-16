import './GalleryItem.css'

function GalleryItem ({photo}) {

    return (
        <img src={photo.path} alt="" className="image"/>
    )
}

export default GalleryItem