
export const add_src_http = (string) => {
    const localhost = 'http://127.0.0.1:8000/'

    var temp = string
    var val = ""
    var b = temp.search("http://")
    if (b == -1) {
        val = localhost + temp
    }
    else {
        val = string
    }
    return val
}
export const getFormatImageSource = (imageSource) => {
    let customImageSource = imageSource.trim();

    if (!customImageSource.startsWith('http')) {
        customImageSource = `http://127.0.0.1:8000/${customImageSource}`
    }

    return customImageSource;
}

export const getImageListByString = (imageString, separator = imageListSeparator, formatImageSource = true) => {
    let imageList = imageString.split(separator).map((x) => x.trim());

    if (formatImageSource) {
        imageList = imageList.map(getFormatImageSource);
    }

    return imageList;
}


export const cutUrlinSpecification = (string) => {
    var list_index = []
    var temp = string
    while (true) {
        var len = temp.length;
        var b = temp.search(";")
        if (b == -1) {
            list_index.push(temp.slice(b + 1, len))
            break;
        } else {
            list_index.push(temp.slice(0, b))
            temp = temp.slice(b + 1, len)
        }

    }
    return list_index
}
export const cutUrlinImage_list = (string) => {
    var list_index = []
    var temp = string
    while (true) {
        var len = temp.length;
        var a = temp.search("https")
        var b = temp.search(".jpg")
        if (a == -1 || b == -1) {
            break;
        }
        list_index.push(temp.slice(a, b + 4))
        temp = temp.slice(b + 5, len)
    }
    return list_index
}