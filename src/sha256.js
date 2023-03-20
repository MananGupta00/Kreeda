//SHA 1 implementation by Manan Gupta
var blocks= [];

function convertStrtoBytes(text) {
    // function to convert string datatype to bytes array
    var str = text;
    var bytes = []; 
    var bytesv2 = []; 

    for (var i = 0; i < str.length; ++i) {
        var code = str.charCodeAt(i)        // get integer value of ith character

        bytes = bytes.concat([code])        

        bytesv2 = bytesv2.concat([code & 0xff, code / 256 >>> 0])      // char is 2 bytes in js, so correct version for special character passwords checked by 256 bits
    }

    console.log('bytesv2', bytesv2.join(', '))

    return bytesv2

}

function padding(bytes){
    // function to pad 1's and 0's at the end of the string
    if(bytes.length > 64)
        return ("Invalid: Password too long")          // we dont support long passwords for ease
    if(bytes.length < 64){
        bytes.push(1)                               // initial 1 padding (algo)
        while(bytes.length < 64)
            bytes.push(0);                               // pad until 512 bits are achieved in total
    }
    return bytes

}
export const SHA1= (str) => {
    console.log(str)
    var bytes = convertStrtoBytes(str)
    console.log(bytes.join(', '))
    bytes = padding(bytes)
    console.log(bytes.join(','))
    console.log('bytes length:',bytes.length);
    return bytes;
}