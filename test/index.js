import { useRef } from "react";
import ReactDOM from "react-dom";
import { NoOperate, MultiUser } from "../src/index"; //"user-status-modal";
const UserStatusModalExample = () => {
    const noOperateRef = useRef(null);
    return (
        <MultiUser
            ref={noOperateRef}
            lang="cn"
            showModal={true}
            noOperateTime="100" // 静置时间
            modalShowEvent={()=>{ // 弹窗回调
                console.log(1)
            }}
            modalCloseEvent={()=>{ // 点击弹窗确定回调
                console.log(2)
            }}
            // childrenDom={
            //     <div>
            //         <p>dsada</p>
            //         <p>dsada</p>
            //         <button onClick={()=>{
            //             noOperateRef?.current?.closeModal();
            //         }}>hahah</button>
            //     </div>
            // }
        />
    )
}

ReactDOM.render(<UserStatusModalExample />, document.getElementById("app"));
