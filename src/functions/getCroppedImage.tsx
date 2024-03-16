import noImage from "../assets/no-image-placeholder.webp"
function getCroppedImage(imgUrl : string){
    if (!imgUrl){
        return noImage
    }
    let index = imgUrl.indexOf("media/")
    index += "media/".length
    return imgUrl.slice(0,index) + "crop/600/400/" + imgUrl.slice(index)

}
export default getCroppedImage