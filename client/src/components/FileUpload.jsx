import { useState } from "react";
import './admin.css'
import {MdCloudUpload,MdDelete} from 'react-icons/md'
import {AiFillFileImage} from 'react-icons/ai'


function FileUpload(){
    return(
        <main>
            <form action="">
                <input type="file" accept="image/*"></input>
                <input type="submit" value="Submit"></input><br />
            </form>
        </main>
    )
}
export default FileUpload