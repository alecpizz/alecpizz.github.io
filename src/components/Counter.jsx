import { useEffect, useState } from "react";

export const Counter = () => {
    useEffect(() => {
        getData();
    }, []);

    const [count, setCount] = useState(0);

    const getData = async () => {
        const dataFetch = async () => {
            await fetch(`https://abacus.jasoncameron.dev/hit/alecpizz.com/visitors`).then((res) => res.json()).then((data) => {
                setCount(data.value);
            });
        }
        await dataFetch();
    };

    return (
        <div className="counter-container">
            <span className="visitor-counter-header-background">
                88888888
                <span className="visitor-counter-header">VISITORS</span>
            </span>
            <span className="visitor-counter-background">
                8888
                <span className="visitor-counter">{count}</span>
                </span>
        </div>
    )
}