

import { useState } from 'react'
import './css/button.css'
import './css/qapage.css'


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
                title: "Persistent depressed (low) mood",
                questions: [
                        { question: "-	Do you feel down or sad regularly", options: ["Very often", "Often", "Never"]},
                        { question: "-	Does it last longer than normal", options: ["Very long ", "Long ", "not Long"]},
                        { question: "-	Can you shake it off", options: ["No", "Not sure ", "Yes"]},
                ]
        },
        {
                title: "Loss of interest in things you once enjoyed",
                questions: [
                        { question: "-	How often do you do things you love to do", options: ["Not at all", "Several Days", "Nearly Everyday"]},
                        { question: "-	How strong is the drive to do what you enjoy", options: ["Very strong ", "strong ", "not strong"]},
                        { question: "-	Do you see thing you do with pleasure before as pointless", options: ["no ", "not sure", "yes"]},
                ]
        },
        {
                title: "Feeling of worthlessness.",
                questions: [
                        { question: "-	Do you often feel you have let you self down.", options: ["Veryoften ", "often", "never"]},
                        { question: "-	Do you temporarily feel fraustrated with your action or behaviour", options: ["Veryoften", "Often", "Never"]},
                        { question: "-	Do you continuously feel unworthy or in adequate in multilple area of your life.", options: ["Veryoften", "not regulary ", "never"]},
                ]
        },
        {
                title: "Poor concentration ",
                questions: [
                        { question: "-	Do you have trouble focusing or concentrating at work or school.  ", options: ["Veryoften ", "Not regularly", "never"]},
                        { question: "-	Do you often have trouble completing simple task.", options: ["Veryoften", "not regularly ", "Never"]},
                        { question: "-	Do you find it hard to manage most familiar or easy activities.", options: ["Yes ", "not sure", "no"]},
                ]
        },
        {
                title: "Thought of harming yourself.",
                questions: [
                        { question: "-	Do you often get thought of not wanting to be alive", options: ["Veryoften ", "Not regularly", "never"]},
                        { question: "-	Do you often get thought of harming yourself in anyway", options: ["Veryoften", "not regularly ", "Never"]},
                        { question: "-	Would you love to change the life you living now", options: ["Yes ", "not sure", "no"]},
                ]
        },
]


export const QApage = () => {


        const [total1, setTotal1] = useState<number>(0)
        const [total2, setTotal2] = useState<number>(0)
        const [total3, setTotal3] = useState<number>(0)
        const [total4, setTotal4] = useState<number>(0)
        const [total5, setTotal5] = useState<number>(0)


        // to handle click once
        let question1:number = 0;



        return (
                <div>
                        <div className='header_main'>

                        </div>
                        <div>
                                <div>
                                        <h2>total1: {`${total1}`}</h2>
                                        <h2>total2: {`${total2}`}</h2>
                                        <h2>total3: {`${total3}`}</h2>
                                        <h2>total4: {`${total4}`}</h2>
                                        <h2>total5: {`${total5}`}</h2>

                                </div>

                        </div>
                        
                        <div>



                                {quiz.map((each, mainIndex) => (
                                        <div>
                                                <h1 className="QApage_h1">{each.title}</h1>

                                                <div className="QApage_question_main">
                                                {each.questions.map((each) => (
                                                        <>
                                                        
                                                                <div className="QApage_question">{each.question}</div>
                                                                {
                                                                        mainIndex === 0 
                                                                        ?
                                                                        (
                                                                                <div className="QApage_options">
                                                                                        {
                                                                                                each.options.map(
                                                                                                        (each, subIndex) => (
                                                                                                                

                                                                                                        <div className="QApage_options_adjust">
                                                                                                                
                                                                                                                {
                                                                                                                subIndex === 0 
                                                                                                                ? 
                                                                                                                (
                                                                                                                        // <button onClick={() => setTotal1(total1 + 1) } disabled>
                                                                                                                        // <button onClick={() => setTotal1(total1 + 1) } >
                                                                                                                        //         {each}
                                                                                                                        // </button>
                                                                                                                        <button className="btn-31" onClick={() => setTotal1(total1 + 6.7) }>
                                                                                                                                <span className="text-container">
                                                                                                                                        <span className="text">{each}</span>
                                                                                                                                </span>
                                                                                                                        </button>
                                                                                                                )
                                                                                                                :
                                                                                                                subIndex === 1 
                                                                                                                ?
                                                                                                                (
                                                                                                                        <button className="btn-31" onClick={() => setTotal1(total1 + 3.35) }>
                                                                                                                                <span className="text-container">
                                                                                                                                        <span className="text">{each}</span>
                                                                                                                                </span>
                                                                                                                        </button>
                                                                                                                )
                                                                                                                :
                                                                                                                (
                                                                                                                        <button className="btn-31" onClick={() => setTotal1(total1 + 0) }>
                                                                                                                                <span className="text-container">
                                                                                                                                        <span className="text">{each}</span>
                                                                                                                                </span>
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
                                                                                
                                                                                <div className="QApage_options">
                                                                                        {
                                                                                                each.options.map(
                                                                                                        (each, subIndex) => (
                                                                                                                

                                                                                                        <div className="QApage_options_adjust">
                                                                                                                
                                                                                                                {
                                                                                                                subIndex === 0 
                                                                                                                ? 
                                                                                                                (
                                                                                                                        <button className="btn-31" onClick={() => setTotal2(total2 + 6.7) }>
                                                                                                                                <span className="text-container">
                                                                                                                                        <span className="text">{each}</span>
                                                                                                                                </span>
                                                                                                                        </button>
                                                                                                                )
                                                                                                                :
                                                                                                                subIndex === 1 
                                                                                                                ?
                                                                                                                (
                                                                                                                        <button className="btn-31" onClick={() => setTotal2(total2 + 3.35) }>
                                                                                                                                <span className="text-container">
                                                                                                                                        <span className="text">{each}</span>
                                                                                                                                </span>
                                                                                                                        </button>
                                                                                                                )
                                                                                                                :
                                                                                                                (
                                                                                                                        <button className="btn-31" onClick={() => setTotal2(total2 + 0) }>
                                                                                                                                <span className="text-container">
                                                                                                                                        <span className="text">{each}</span>
                                                                                                                                </span>
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
                                                                        mainIndex === 2
                                                                        ?
                                                                        (
                                                                                
                                                                                <div className="QApage_options">
                                                                                        {
                                                                                                each.options.map(
                                                                                                        (each, subIndex) => (
                                                                                                                

                                                                                                        <div className="QApage_options_adjust">
                                                                                                                
                                                                                                                {
                                                                                                                subIndex === 0 
                                                                                                                ? 
                                                                                                                (
                                                                                                                        <button className="btn-31" onClick={() => setTotal3(total3 + 6.7) }>
                                                                                                                                <span className="text-container">
                                                                                                                                        <span className="text">{each}</span>
                                                                                                                                </span>
                                                                                                                        </button>
                                                                                                                )
                                                                                                                :
                                                                                                                subIndex === 1 
                                                                                                                ?
                                                                                                                (
                                                                                                                        <button className="btn-31" onClick={() => setTotal3(total3 + 3.35) }>
                                                                                                                                <span className="text-container">
                                                                                                                                        <span className="text">{each}</span>
                                                                                                                                </span>
                                                                                                                        </button>
                                                                                                                )
                                                                                                                :
                                                                                                                (
                                                                                                                        <button className="btn-31" onClick={() => setTotal3(total3 + 0) }>
                                                                                                                                <span className="text-container">
                                                                                                                                        <span className="text">{each}</span>
                                                                                                                                </span>
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
                                                                        mainIndex === 3
                                                                        ?
                                                                        (
                                                                                
                                                                                <div className="QApage_options">
                                                                                        {
                                                                                                each.options.map(
                                                                                                        (each, subIndex) => (
                                                                                                                

                                                                                                        <div className="QApage_options_adjust">
                                                                                                                
                                                                                                                {
                                                                                                                subIndex === 0 
                                                                                                                ? 
                                                                                                                (
                                                                                                                        <button className="btn-31" onClick={() => setTotal4(total4 + 6.7) }>
                                                                                                                                <span className="text-container">
                                                                                                                                        <span className="text">{each}</span>
                                                                                                                                </span>
                                                                                                                        </button>
                                                                                                                )
                                                                                                                :
                                                                                                                subIndex === 1 
                                                                                                                ?
                                                                                                                (
                                                                                                                        <button className="btn-31" onClick={() => setTotal4(total4 + 3.35) }>
                                                                                                                                <span className="text-container">
                                                                                                                                        <span className="text">{each}</span>
                                                                                                                                </span>
                                                                                                                        </button>
                                                                                                                )
                                                                                                                :
                                                                                                                (
                                                                                                                        <button className="btn-31" onClick={() => setTotal4(total4 + 0) }>
                                                                                                                                <span className="text-container">
                                                                                                                                        <span className="text">{each}</span>
                                                                                                                                </span>
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
                                                                                
                                                                                <div className="QApage_options">
                                                                                        {
                                                                                                each.options.map(
                                                                                                        (each, subIndex) => (
                                                                                                                

                                                                                                        <div className="QApage_options_adjust">
                                                                                                                
                                                                                                                {
                                                                                                                subIndex === 0 
                                                                                                                ? 
                                                                                                                (
                                                                                                                        <button className="btn-31" onClick={() => setTotal5(total5 + 6.7) }>
                                                                                                                                <span className="text-container">
                                                                                                                                        <span className="text">{each}</span>
                                                                                                                                </span>
                                                                                                                        </button>
                                                                                                                )
                                                                                                                :
                                                                                                                subIndex === 1 
                                                                                                                ?
                                                                                                                (
                                                                                                                        <button className="btn-31" onClick={() => setTotal5(total5 + 3.35) }>
                                                                                                                                <span className="text-container">
                                                                                                                                        <span className="text">{each}</span>
                                                                                                                                </span>
                                                                                                                        </button>
                                                                                                                )
                                                                                                                :
                                                                                                                (
                                                                                                                        <button className="btn-31" onClick={() => setTotal5(total5 + 0) }>
                                                                                                                                <span className="text-container">
                                                                                                                                        <span className="text">{each}</span>
                                                                                                                                </span>
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
                                        </div>
                                ))}
                        </div>

                        <div className='QApage_submit_button_div'>
                                <button className='QApage_submit_button'>SUBMIT</button>
                        </div>
                </div>
        )
}