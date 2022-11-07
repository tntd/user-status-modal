import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import { Modal, Button } from "antd";
import userStatusLang from "../sources/lang";

export default forwardRef((props,ref) => {
    const { modalCloseEvent = void 0, dispatch, showModal, lang="cn", childrenDom=null } = props;
    const hasShowModalProperty = props.hasOwnProperty("showModal");
    const defaultVisible = hasShowModalProperty ? showModal : true
    const [visible, setVisible] = useState(defaultVisible);

    useImperativeHandle(ref, () => ({
        closeModal:()=>{
            setVisible(false);
        }
    }))

    useEffect(() => {
        if(showModal){
            setVisible(true);
        }
    }, [showModal])


    const goToLogin = () => {
        setVisible(false);
        if(modalCloseEvent && typeof modalCloseEvent === "function"){
            modalCloseEvent();
        }else if(dispatch){
            dispatch({
                type: "login/goLogin"
            });
        }else {
            window.location.href ="/user/login";
        }
    }
    return (
        <Modal
            className="user-operate-modal"
            visible={visible}
            closable={false}
            footer={null}
            width={450}
        >
            <div className="u-pic u-multiple"></div>
            {
                !!childrenDom && childrenDom
            }
            {
                !childrenDom &&
                <>
                     <p>
                        {/* 当前帐号在其他设备上登录 */}
                        {userStatusLang.userStatusModal("otherLoginContent",lang)}
                    </p>
                    <p>
                        {/* 点击确定重新登陆 */}
                        {userStatusLang.userStatusModal("warnMsg",lang)}
                    </p>
                    <div className="btn">
                        <Button
                            type="primary"
                            onClick={goToLogin}
                        >
                            {/* 确定 */}
                            {userStatusLang.userStatusModal("submit",lang)}
                        </Button>
                    </div>
                </>
            }
        </Modal>
    );
})
