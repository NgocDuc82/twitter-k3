import Detail from "../../components/detail/Detail";

import Right from "../../components/home/right/Right";
import Status from "../../components/home/status/status";

const DetailPage = () => {
    return (
        <div className="home">
            <div className="content" >
                <div to="DetailPage" className="home-wrap-tweets">
                    <Detail />
                </div>
            </div>
            <div className="right">
                <Right/>
            </div>
        </div>
    )
}

export default DetailPage;
