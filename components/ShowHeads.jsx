import {getRandomClothing, getRandomClothingColor, getRandomGraphic} from "../utils/bigHeadDataRandomizer"
import ShowHead from "./ShowHead";

export default function ShowHeads({heads, setHeads, styles})
{
    const deleteHead = (id) => {
        setHeads(heads.filter((h) => h.id !== id));
    };
    
    const moveLeft = (id) => {
        setHeads(heads.map((h) => {
            if(h.id === id){
                return {
                    ...h,
                    x: h.x - 25,
                };
            }
            return h;
        }));
    };
    
    const moveRight = (id) => {
        setHeads(heads.map((h) => {
            if(h.id === id){
                return {
                    ...h,
                    x: h.x + 25,
                };
            }
            return h;
        }));
    };
    
    const generateRandomClothing = (id) => {
        setHeads(heads.map((h) => {
            if(h.id === id){
                return {
                    ...h,
                    headStyle: {
                        ...h.headStyle,
                        clothing: getRandomClothing(),
                        clothingColor: getRandomClothingColor(),
                        graphic: getRandomGraphic(),
                    }
                };
            }
            return h;
        }));
    };

    const moveUp = (id) => {
        const index = heads.findIndex((h) => h.id === id);
        if(index > 0){
            const temp = heads[index];
            heads[index] = heads[index - 1];
            heads[index - 1] = temp;
            setHeads([...heads]);
        }
    };

    const moveDown = (id) => {
        const index = heads.findIndex((h) => h.id === id);
        if(index < heads.length - 1){
            const temp = heads[index];
            heads[index] = heads[index + 1];
            heads[index + 1] = temp;
            setHeads([...heads]);
        }
    };

    return (
        <>
            <ul>
                {heads.map((head) => (
                     <ShowHead key={head.id} head={head} styles={styles} deleteHead={deleteHead} moveLeft={moveLeft} moveRight={moveRight} moveUp={moveUp} moveDown={moveDown} generateRandomClothing={generateRandomClothing} />
                ))}
            </ul>
        </>
    )
}