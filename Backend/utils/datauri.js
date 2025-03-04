import DataURIParser from "datauri/parser.js";

import path from "path";

const getDataUri =(file)=>{
    const paraser =new DataURIParser();
    const extName =path.extname(file.orinalname).toString();
    return paraser.format(extName, file.buffer);
};

export default getDataUri;