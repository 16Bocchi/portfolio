import "./index.scss";

const AnimatedLetters = ({ letterClass, stringArray, iDx }) => {
    return (
        <span>
            {stringArray.map((char, i) => (
                <span key={char + i} className={`${letterClass} _${i + iDx}`}>
                    {char}
                </span>
            ))}
        </span>
    );
};

export default AnimatedLetters;
