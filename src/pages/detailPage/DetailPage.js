import Detail from "../../components/detail/Detail";
import Right from "../../components/home/right/Right";

const DetailPage = () => {
    return (
        <div className="home">
            <div className="content" >
                <div className="home-wrap-tweets">
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
