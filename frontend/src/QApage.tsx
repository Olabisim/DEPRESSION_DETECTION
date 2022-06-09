

import { useState } from 'react'



interface questions {
        question: String,
        options: String[]
}

interface quiztyppe  {
        title: String,
        questions: questions[]
}

const quiz:quiztyppe[] = [
        {
                title: "main",
                questions: [
                        { question: "what are you doing", options: ["a", "b", "c"]},
                        { question: "what are you doing", options: ["a", "b", "c"]},
                        { question: "what are you doing", options: ["a", "b", "c"]},
                ]
        },
        {
                title: "main2",
                questions: [
                        { question: "what are you doing", options: ["a", "b", "c"]},
                        { question: "what are you doing", options: ["a", "b", "c"]},
                        { question: "what are you doing", options: ["a", "b", "c"]},
                ]
        },
        {
                title: "main3",
                questions: [
                        { question: "what are you doing", options: ["a", "b", "c"]},
                        { question: "what are you doing", options: ["a", "b", "c"]},
                        { question: "what are you doing", options: ["a", "b", "c"]},
                ]
        },
]


export const QApage = () => {


        const [total1, setTotal1] = useState<number>(0)
        const [total2, setTotal2] = useState<number>(0)
        const [total3, setTotal3] = useState<number>(0)


        // to handle click once
        let question1:number = 0;



        return (
                <div>
                        <div>
                                <div>
                                        <h2>total1: {`${total1}`}</h2>
                                        <h2>total2: {`${total2}`}</h2>
                                        <h2>total3: {`${total3}`}</h2>

                                </div>

                        </div>
                        
                        <div>



                                {quiz.map((each, mainIndex) => (
                                        <div>
                                                {each.title}
                                                {each.questions.map((each) => (
                                                        <>
                                                        
                                                                <div>{each.question}</div>
                                                                {
                                                                        mainIndex === 0 
                                                                        ?
                                                                        (
                                                                                <div>
                                                                                        {
                                                                                                each.options.map(
                                                                                                        (each, subIndex) => (
                                                                                                                

                                                                                                        <div>
                                                                                                                
                                                                                                                {
                                                                                                                subIndex === 0 
                                                                                                                ? 
                                                                                                                (
                                                                                                                        <button onClick={() => setTotal1(total1 + 1) } disabled>
                                                                                                                                {each}
                                                                                                                        </button>
                                                                                                                )
                                                                                                                :
                                                                                                                subIndex === 1 
                                                                                                                ?
                                                                                                                (
                                                                                                                        <button onClick={() => setTotal1(total1 + 2) }>
                                                                                                                                {each}
                                                                                                                        </button>
                                                                                                                )
                                                                                                                :
                                                                                                                (
                                                                                                                        <button onClick={() => setTotal1(total1 + 3) }>
                                                                                                                                {each}
                                                                                                                        </button>
                                                                                                                )
                                                                                                                }

                                                                                                        </div>

                                                                                                        )
                                                                                                )
                                                                                        }
                                                                                </div>
                                                                        )  
                                                                        :
                                                                        mainIndex === 1
                                                                        ?
                                                                        (
                                                                                
                                                                                <div>
                                                                                        {
                                                                                                each.options.map(
                                                                                                        (each, subIndex) => (
                                                                                                                

                                                                                                        <div>
                                                                                                                
                                                                                                                {
                                                                                                                subIndex === 0 
                                                                                                                ? 
                                                                                                                (
                                                                                                                        <button onClick={() => setTotal2(total2 + 1) }>
                                                                                                                                {each}
                                                                                                                        </button>
                                                                                                                )
                                                                                                                :
                                                                                                                subIndex === 1 
                                                                                                                ?
                                                                                                                (
                                                                                                                        <button onClick={() => setTotal2(total2 + 2) }>
                                                                                                                                {each}
                                                                                                                        </button>
                                                                                                                )
                                                                                                                :
                                                                                                                (
                                                                                                                        <button onClick={() => setTotal2(total2 + 3) }>
                                                                                                                                {each}
                                                                                                                        </button>
                                                                                                                )
                                                                                                                }

                                                                                                        </div>

                                                                                                        )
                                                                                                )
                                                                                        }
                                                                                </div>
                                                                        )
                                                                        : 
                                                                        (
                                                                                
                                                                                <div>
                                                                                        {
                                                                                                each.options.map(
                                                                                                        (each, subIndex) => (
                                                                                                                

                                                                                                        <div>
                                                                                                                
                                                                                                                {
                                                                                                                subIndex === 0 
                                                                                                                ? 
                                                                                                                (
                                                                                                                        <button onClick={() => setTotal3(total3 + 1) }>
                                                                                                                                {each}
                                                                                                                        </button>
                                                                                                                )
                                                                                                                :
                                                                                                                subIndex === 1 
                                                                                                                ?
                                                                                                                (
                                                                                                                        <button onClick={() => setTotal3(total3 + 2) }>
                                                                                                                                {each}
                                                                                                                        </button>
                                                                                                                )
                                                                                                                :
                                                                                                                (
                                                                                                                        <button onClick={() => setTotal3(total3 + 3) }>
                                                                                                                                {each}
                                                                                                                        </button>
                                                                                                                )
                                                                                                                }

                                                                                                        </div>

                                                                                                        )
                                                                                                )
                                                                                        }
                                                                                </div>
                                                                        )
                                                                }
                                                                
                                                        </>
                                                ))}
                                        </div>
                                ))}
                        </div>
                </div>
        )
}