import { useState } from "react";
import ShowHeads from "../components/ShowHeads";
import styles from "./index.module.css"

import { getRandomBighead } from "../utils/bigHeadDataRandomizer";

let nextId = 0;

export default function Home() {

    const [heads, setHeads] = useState([]);

    const addBigHead = () => {
        const bigHead = {
            id: nextId++,
            x: 0,
            headStyle: getRandomBighead(),
        };
        
        setHeads([...heads, bigHead]);
    };

    const deleteHeads = () => {
        setHeads([]);
    };

    const resetHeads = () => {
        setHeads(heads.map((h) => {
            return {
                ...h,
                x: 0,
            };
        }));
    };

    return (
        <>
            <button onClick={addBigHead}>Add BigHead</button>
            <button onClick={deleteHeads}>Delete All BigHeads</button>
            <button onClick={resetHeads}>Reset All BigHeads</button>
            <ShowHeads heads={heads} setHeads={setHeads} styles={styles} />
        </>
    );
};