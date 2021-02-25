import React, {useState} from 'react';
import dynamic from "next/dynamic";
import {POST} from "@/utils/request";
const Editor = dynamic<any>(import ('for-editor'),{ ssr: false});

interface Interface {

}

const Index: React.FC<Interface> = (props) => {
    const [md, setMd] = useState('');

    const save = (value) => {
        POST('blog/md', {text: value})
    }

    return (
        <div>
            <Editor
                value={md}
                onChange={setMd}
                onSave={save}
            />
        </div>
    );
}

export default Index
