function getCroppedImage(imgUrl : string){
    if (!imgUrl){
        return ""
    }
    let index = imgUrl.indexOf("media/")
    index += "media/".length
    return imgUrl.slice(0,index) + "crop/600/400/" + imgUrl.slice(index)

}
export default getCroppedImage