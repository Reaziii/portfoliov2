import React from 'react'
import './Experience.scss'
const Experience = () => {
    const cirtifications = [
        {
            name : 'ICPC DHAKA REGIONAL, 2019',
            details : 'ACM ICPC DHAKA REGIONAL 2019 HOSTED BY SEU',
            date : 'November 2019'
        },
        {
            name : 'MIST NCPC, 2020',
            details : 'MIST IUPC 2020 HOSTED BY MIST',
            date : 'February 2020',
        },
        {
            name : 'Problem Solving (Intermediate) Certificate',
            details : 'HackerRank',
            date : 'Jan 2021'
        },
        {
            name : 'Problem Solving (Basic) Certificate',
            details : 'HackerRank',
            date : 'Dec 2020'
        }
    ]
    return (
        <div className="Experience">
            <h1>{`Certifications & achievements`}</h1>
            <table className="table">
                {
                    cirtifications.map((item,key)=>(
                        <tr className="td" key={key}>
                            <td className="tr t1">{item.name}</td>
                            <td className="tr t2">{item.details}</td>
                            <td className="tr t3">{item.date}</td>
                        </tr>
                    ))
                }
            </table>

        </div>
    )
}

export default Experience
