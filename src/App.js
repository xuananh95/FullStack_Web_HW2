import { useState } from "react";
import Input from "./components/Input";
import UserInfo from "./components/UserInfo";
function App() {
    const [data, setData] = useState(null);
    // console.log(data);
    return (
        <div className="App">
            <Input setData={setData} />
            {data ? (
                <UserInfo data={data} />
            ) : (
                "Không tìm thấy user bạn yêu cầu!"
            )}
        </div>
    );
}

export default App;
