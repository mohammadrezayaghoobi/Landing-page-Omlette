import './FirstList.css'

function FirstList() {
    return (
        <div className="List1-back">
            <h3 className="list1-title">Preparation time</h3>
            <ul className="list1-ul">
                <li className="list1-item"><span className="list1-item__bold">Total:</span> Approximately 10 minutes</li>
                <li className="list1-item"><span className="list1-item__bold">Preparation:</span> 5 minutes</li>
                <li className="list1-item"><span className="list1-item__bold">Cooking:</span> 5 minutes</li>
            </ul>
        </div>
    )
}

export default FirstList
