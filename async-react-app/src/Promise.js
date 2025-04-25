import { useEffect,useState } from "react";

export const PromiseDemo = () => {

    const [result, setResult] = useState(null);
    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            console.log(typeof resolve);
            console.log(typeof reject);
            resolve('완료');
        })
        promise
            .then(value => {
                console.log('promise fullfilled with : ', value);
            })
            .catch(error => {
                console.log('promise rejected with : ', error);
            })
    }, [])

    return(
        <div>
            <h2>결과</h2>
            <p>Promise 결과 : {result || '로딩중...'}</p>
        </div>
    )
}