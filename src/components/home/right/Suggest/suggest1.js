
import styles from './UserFollow.module.css';
import {BsFillPatchCheckFill} from 'react-icons/bs';
import Button from '../Button';
import UnFollowModel from '../UnFollowModel';
import { useState } from 'react';
import { useMemo } from 'react';

// tao 3 trang thai cua nut 
const FOLLOWING_STATUS = {
    none: 0,
    following: 1,
    unfollowing: 2
}

function UserFollow(params) {
    
    const [followingStatus, setFollowingStatus] = useState(FOLLOWING_STATUS.none)
    const [isTriggerUnFollow, setIsTriggerUnFollow] = useState(false)
    const handleChangeFollowingStatus = (status) => {
        setFollowingStatus(status)
        if(status === FOLLOWING_STATUS.following && followingStatus === FOLLOWING_STATUS.following) {
            setIsTriggerUnFollow(true)
            return
        }
        console.log({unfl: FOLLOWING_STATUS.unfollowing});
        if(status === FOLLOWING_STATUS.unfollowing) {
            setIsTriggerUnFollow(false)
        }
    }

    const isShowUnfollowModal = useMemo(() => followingStatus === FOLLOWING_STATUS.following && isTriggerUnFollow,[isTriggerUnFollow, followingStatus])

    return (
        <div className={styles.wrapper}>
           <div className={styles.content} >
                <img src='https://pbs.twimg.com/profile_images/1380530524779859970/TfwVAbyX_400x400.jpg' alt={'avrtar'} className={styles.avatar}/>
                <div className={styles.info}>
                    <h1 className={styles.user_name}>ENHYPEN <span className={styles.auth_icon}><BsFillPatchCheckFill/></span></h1>
                    <h1 className={styles.user_id}>@Username</h1>
                </div>
                <div onClick={() => handleChangeFollowingStatus(FOLLOWING_STATUS.following)} className={styles.button}>
                    <Button>
                        Follow      
                    </Button>
                </div>
           </div>
           <UnFollowModel show={isShowUnfollowModal} onHidden={() => handleChangeFollowingStatus(FOLLOWING_STATUS.unfollowing)}/>
        </div>
    )   
}

export default UserFollow;