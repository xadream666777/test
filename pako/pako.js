/*
 * @FilePath: /test/pako.js
 * @Description: 
 */
/*
 * @Author: success
 * @Description: PB数据解密
 *
 * PB加密数据
 *  * 解密方法
 * pako_pb.unzip_data(data)
 *
 */
const pako = require("pako");
const fs = require("fs");

// let data = fs.readFileSync("./data.txt", "utf-8");
let data = "H4sIAAAAAAAAAKtWSkksSVSyio7VUSpITE+F8WoBIuRVrhkAAAA="
const pako_pb = {
    /**
     * @description: base64编码转换
     * @param {String} data  base64编码PB数据
     * @return {Object} 转换后的Json对象数据
     */
    unzip_data(data) {
        let res = null;
        try {
            if (data) {
                let binData = this.to_Uint8Array(data);
                if (binData) {
                    data = pako.inflate(binData);
                    //  var string = new TextDecoder("utf-8").decode(data)
                    //  new TextDecoder().decode(uint8array);
                    // let res= String.fromCharCode.apply(null, new Uint16Array(data));
                    if (data) {
                        res = new TextDecoder().decode(data);
                        if (res) {
                            // let res= String.fromCharCode.apply(null, new Uint16Array(binData));
                            res = JSON.parse(res);
                        }
                    }
                }
            } else {
                res = data;
            }
        } catch (error) {
            console.log("unzip_data error!");
        }
        return res;
    },
    /**
     * @description: base64编码PB数据转换
     * @param {String} b64Data  base64编码PB数据
     * @return {Array} 转换后的字节数组
     */
    to_Uint8Array(b64Data) {
        let ret = null;
        // Decode base64 (convert ascii to binary)
        var strData = atob(b64Data);
        if (strData) {
            // Convert binary string to character-number array
            var charData = strData.split("").map(function (x) {
                return x.charCodeAt(0);
            });
            if (charData) {
                // Turn number array into byte-array
                var binData = new Uint8Array(charData);
                ret = binData;
            }
        }
        return ret;
    },
};

const res = pako_pb.unzip_data(data);
console.log(res);
module.export = pako_pb;
