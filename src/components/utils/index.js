
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

export const getImageListByString = (string) => {
    var newString = ""
    const arr_image = pri_cutUrlinImage_list(string)
    for (let i = 0; i < arr_image.length; i++) {
        const val = pri_getFormatImageSource(arr_image[i])
        if (i != (arr_image.length - 1)) {
            newString = newString + val + ";"
        } else {
            newString = newString + val
        }
    }
    return newString
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
const pri_cutUrlinImage_list = (string) => {
    var list_index = []
    var temp = string
    while (true) {
        var len = temp.length;
        var a = 0
        var b = temp.search(".jpg")
        if (b == -1) {
            break;
        }
        list_index.push(temp.slice(a, b + 4))
        temp = temp.slice(b + 5, len)
    }
    return list_index
}
const pri_getFormatImageSource = (imageSource) => {
    let customImageSource = imageSource.trim();

    if (!customImageSource.startsWith('http')) {
        customImageSource = `http://127.0.0.1:8000/${customImageSource}`
    }

    return customImageSource;
}