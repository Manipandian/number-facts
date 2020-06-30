import React from 'react';
import './Card.css';


const Card = ({datas}) => {
    return (
        <div className="ma2">
            {
                datas.map( (data, index) => {
                    return (
                        <article class="tc dib br3 ma2 grow shadow-5" id="card" key={index}>
                            <h1 id="stckyhead" class="f3 white mv0 pv2 ph3">{data.type.toUpperCase()} of {data.number}</h1>
                            <div class="pa3 bt">
                                <p class="f4 mv0">
                                {data.text}
                                </p>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    )
}

export default Card
