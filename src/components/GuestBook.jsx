import { useEffect, useState } from "react"

export const GuestBook = ({ Google_Form_ID, Google_Form_Name }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const dataFetch = async () => {
            await fetch(`https://opensheet.elk.sh/${Google_Form_ID}/${Google_Form_Name}`).then((res) => res.json()).then((data) => {
                setData(data);
            });
        }
        await dataFetch();
    };

    function getDate(timeStamp){
        const date = Date.parse(timeStamp);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        return formattedDate;
    }

    function buildEntries(){
        let result = [];
        if(data == []) return;
        data.forEach((item) => {
            result.push(<div>
               <h4 className="guestbook-timestamp">{getDate(item.Timestamp)}</h4> 
               <h5 className="guestbook-name">{item.Name}</h5>
               <h6 className="guestbook-message">{item.Guestbook_Entry}</h6> 
            </div>)
        });
        return result;
    }

    return (
        <>
        {buildEntries()}
        </>
    )
}