import { BigHead } from "@bigheads/core";

export default function ShowHead({head, styles={}, deleteHead, moveLeft, moveRight, moveUp, moveDown, generateRandomClothing})
{
    return (
        <>
            <li>
                <button onClick={() => {deleteHead(head.id)}}>
                    Delete
                </button>

                <button onClick={() => {moveLeft(head.id)}}>
                    Move Left
                </button>

                <button onClick={() => {moveRight(head.id)}}>
                    Move Right
                </button>

                <button onClick={() => {moveUp(head.id)}}>
                    Move Up
                </button>

                <button onClick={() => {moveDown(head.id)}}>
                    Move Down
                </button>

                <button onClick={() => {generateRandomClothing(head.id)}}>
                    Generate Random Clothing
                </button>

                <div>
                    <BigHead {...head.headStyle} className={styles.head} style={{transform: `translate(${head.x}px)`}}/>
                </div>
            </li>
        </>
    );
};