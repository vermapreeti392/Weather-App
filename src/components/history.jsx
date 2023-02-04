const History = ({historydata})=>{
    return(
        <>
        <h2> History</h2>
            {
                <ul>
                    {historydata.map(
                    (items,  index)=>{
                        return(
                            <div>
                                <li key={`${index}+ ${items}`}>{items}</li>
                            </div>
                        )
                    }
                    )
                }
                </ul>
            }
        </>
    )
}
export default History